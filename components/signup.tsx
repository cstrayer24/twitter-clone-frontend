import React, { createContext, useState } from "react";
import { FormEvent } from "react";
export let ctx = createContext(false);
const SignupPage = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let [up, setUp] = useState(true);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resp = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    setUp(!up);
    console.log(up);
  };
  function handleClick(t) {
    console.log(t);
  }
  return (
    <>
      {up && (
        <div className=" z-30 bg-white/40 h-screen w-full fixed top-0 left-0  m-0 grid place-items-center">
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="flex gap-10 flex-col w-[400px] m-auto pt-10"
            >
              <div>
                <label className="block">email</label>
                <input
                  className="border border-gray-300  bg-black"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block">password</label>
                <input
                  className="border border-gray-300 bg-black"
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
      )}
    </>
  );
};

export default SignupPage;
