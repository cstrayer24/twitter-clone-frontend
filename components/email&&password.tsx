import { FC } from "react";

import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

function EmailAndPwd() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [up, setUp] = useState(true);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(post);
    const data = await post.json();
    console.log(data);

    if (post.status === 200) {
      setUp(!up);
      router.push(`/home/${data.id}`);
    }
  };
  return (
    <>
      {up && (
        <div className="z-30 bg-white/40 h-screen w-full fixed top-0 left-0  m-0 grid place-items-center">
          <div className=" bg-black text-white rounded-lg h-3/4 w-[50rem]">
            <div>
              <button></button>
            </div>
            <form
              action=""
              method="get"
              onSubmit={handleSubmit}
              className="flex gap-10 flex-col w-[400px] m-auto pt-10"
            >
              <label htmlFor="email" className=" block">
                email
              </label>
              <input
                type="email"
                name="email"
                id="1"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300  bg-black"
              />
              <label htmlFor="pass" className=" block">
                Password
              </label>
              <input
                type="password"
                name="pass"
                id="2"
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300  bg-black"
              />
              <button type="submit" className="border border-gray-300">
                submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default EmailAndPwd;
