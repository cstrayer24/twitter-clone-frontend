import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import Link from "next/link";

import LogoCorner from "./icons/corner-logo";
import EX from "./icons/ex";
import GoogleBtn from "./buttons/google-button";
import AppleBtn from "./buttons/apple-button";
import GoogleBtnCustom from "./buttons/google-button-custom";
import AppleBtnCustom from "./buttons/apple-button-custom";
import EmailAndPwd from "./email&&password";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [up, setUp] = useState(true);
  const [mailVerified, setMailVerified] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const req = await fetch("/api/verifyEmail", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await req.json();
    if (req.ok) {
      setMailVerified(true);
    }
  };
  return (
    <>
      {up && !mailVerified && (
        <div className="z-30 bg-white/40 h-screen w-full fixed top-0 left-0  m-0 grid place-items-center ">
          <div className=" bg-black text-white rounded-lg h-[40rem] w-[35rem] ">
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
            <span className=" text-3xl font-bold text-center mb-56 ">
              {" "}
              <h1 className=" mb-9">Sign in to Twitter</h1>
            </span>
            <span className=" text-center ">
              <GoogleBtnCustom className={` h-12 text-center`} />
              <AppleBtnCustom
                className={` h-12 text-center w-[12.5rem] mb-8`}
              />
            </span>
            <div className=" mb-5 ">
              <hr className=" bg-slate-500 h-[1px] w-[15rem] border-hidden relative left-[10rem]" />
              <span className=" relative left-[16.5rem] bottom-4">or</span>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className=" mb-6">
                <input
                  type="text"
                  placeholder="Sign in with phone or email"
                  className=" bg-black h-14 w-72 ml-32 placeholder:text-xl focus:placeholder:text-blue-400 focus:placeholder:text-sm focus:placeholder:translate-y-[-15px] placeholder:visible border border-white/30"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className=" grid place-items-center mb-5">
                <button className=" bg-white text-black rounded-full  w-[19rem] py-1 font-bold mb-7">
                  Next
                </button>
                <button className=" bg-black text-white rounded-full  w-[19rem] py-1 font-bold border border-slate-500">
                  Forgot password?
                </button>
              </div>
            </form>
            <div className=" text-center text-slate-500">
              Don't have an account?{" "}
              <Link href={"/signin"} className=" text-blue-400">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
      {up && mailVerified && <EmailAndPwd email={email} />}
    </>
  );
}

export default Signin;
