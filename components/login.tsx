import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import LogoCorner from "./icons/corner-logo";
import EX from "./icons/ex";
import GoogleBtn from "./buttons/google-button";
import AppleBtn from "./buttons/apple-button";
import GoogleBtnCustom from "./buttons/google-button-custom";
import AppleBtnCustom from "./buttons/apple-button-custom";

function Signin() {
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
            <div className=" mb-5">
              <hr />
              <p className=" absolute bottom-[29.5rem] bg-black left-[60rem] ">
                or
              </p>
            </div>
            <input
              type="text"
              placeholder="Sign up with phone or email"
              className=" bg-black h-14 w-72 ml-32 placeholder:text-xl focus:placeholder:text-blue-400 focus:placeholder:text-sm focus:placeholder:translate-y-[-15px] placeholder:visible border border-white/30"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Signin;
