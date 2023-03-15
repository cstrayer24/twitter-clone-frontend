import { FC } from "react";

import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import EX from "./icons/ex";
import LogoCorner from "./icons/corner-logo";
type eAndPProps = {
  email: string;
};
function EmailAndPwd(props: eAndPProps) {
  const [email, setEmail] = useState(props.email);
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
          <div className=" bg-black text-white rounded-lg h-[40rem] w-[35rem] text-center">
            <span className=" flex h-10 mt-9 mb-9">
              <div className=" ml-5 ">
                <button className=" h-5" onClick={() => setUp(!up)}>
                  <EX className=" bg-black" />
                </button>
              </div>
              <LogoCorner
                width={30}
                height={30}
                className=" justify-center  ml-52"
              />
            </span>
            <h1 className=" font-bold text-3xl mr-10 block">
              Enter your password
            </h1>
            <form
              action=""
              method="POST"
              onSubmit={handleSubmit}
              className="flex gap-10 flex-col w-[400px] m-auto pt-10"
            >
              {/* <label htmlFor="email" className=" block">
                email
              </label> */}
              <span className=" relative top-16 text-gray-500 right-40 ">
                Email
              </span>
              <input
                type="email"
                name="email"
                id="1"
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-gray-800  rounded-md h-[4rem] text-gray-500"
                value={props.email}
                disabled
              />
              {/* <label htmlFor="pass" className=" block"> */}
              {/* Password */}
              {/* </label> */}
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
