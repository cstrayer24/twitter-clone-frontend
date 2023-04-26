import { FC } from "react";

import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import EX from "./icons/ex";
import LogoCorner from "./icons/corner-logo";
import Link from "next/link";
import OpenEye from "./icons/openEye";
import ShutEye from "./icons/shutEye";
import { SignInResponse, signIn, useSession } from "next-auth/react";
import { Session } from "inspector";
type eAndPProps = {
  email: string;
};
function EmailAndPwd(props: eAndPProps) {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState("");
  const [up, setUp] = useState(true);
  const [focus, setFocus] = useState(false);
  const [pwdVis, setPwdVis] = useState("password");
  const [pwdVisHelp, setPwdVisHelp] = useState(false);
  const router = useRouter();
  const session = useSession();

  const showPwd = (e) => {
    setPwdVisHelp(!pwdVisHelp);
    if (pwdVisHelp) {
      setPwdVis("password");
    } else {
      setPwdVis("text");
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const post = await fetch("/api/signin", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // console.log(post);
    // const data = await post.json();
    // console.log(data);

    // if (post.status === 200) {
    //   setUp(!up);
    //   router.push(`/home/${data.id}`);
    // // }
    const res: SignInResponse = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    console.log(res);
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
              <div
                className={` border bg-black rounded-md h-[4rem] ${
                  !focus ? "border-gray-300" : " border-blue-400"
                }    `}
              >
                <span
                  className={` relative select-none ${
                    !focus
                      ? " top-2 text-gray-500 text-xl  "
                      : "top-1 text-blue-400"
                  }`}
                >
                  Password
                </span>
                <input
                  type={pwdVis}
                  name="pass"
                  id="2"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black text-white relative top-7 right-20 w-[19rem] focus:outline-none "
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                />
              </div>
              <button
                className=" relative bottom-20  left-[23rem]"
                onClick={showPwd}
                type="button"
              >
                {!pwdVisHelp ? (
                  <OpenEye className=" h-6 w-6 fixed" />
                ) : (
                  <ShutEye className="h-6 w-6 fixed" />
                )}
              </button>
              <Link
                href={`/`}
                className=" text-blue-400 relative bottom-20 right-28"
              >
                forgot your password?
              </Link>
              <button
                type="submit"
                className=" bg-white  text-black font-bold  rounded-full py-3 relative bottom-6 hover:bg-gray-300"
              >
                Login
              </button>

              <span className=" text-gray-500 relative bottom-16 right-[4rem]">
                Don't have an account?{" "}
                <Link href={"/"} className=" text-blue-400">
                  {" "}
                  Sign up
                </Link>
              </span>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default EmailAndPwd;
