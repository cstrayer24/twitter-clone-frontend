import React from "react";
import { FormEvent } from "react";

const SignupPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <div className=" z-30 bg-white/40 h-screen w-screen">
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex gap-10 flex-col w-[400px] m-auto pt-10"
        >
          <div>
            <label className="block">email</label>
            <input
              className="border border-gray-300"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block">password</label>
            <input
              className="border border-gray-300"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="border border-gray-300" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
