import {
  GoogleLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";
import Links from "./extra-links";
import AppleBtn from "./buttons/apple-button";
import GoogleBtn from "./buttons/google-button";
import Link from "next/link";
import SignupPage from "./signup";
import { useState } from "react";
function Tright(): JSX.Element {
  const [up, setUp] = useState(false);
  function handleClick() {
    setUp(!up);
  }
  return (
    <div className="">
      <div className=" mt-4 border-slate-600  border-solid border-2 rounded-xl p-7 mb-8">
        <h1 className=" font-extrabold text-2xl h-10 align-text-top mb-2">
          New to twitter?
        </h1>
        <p className=" text-xs text-slate-500">
          Sign up now to get your own personalized timeline!
        </p>
        <span>
          <GoogleBtn />
        </span>
        <span>
          <AppleBtn />
        </span>
        {up && <SignupPage />}
        <button
          className=" bg-slate-50 text-black   rounded-full p-3 relative left-1  mb-1"
          style={{ width: "98%" }}
          onClick={handleClick}
        >
          sign up with phone or email
        </button>

        <div>
          <p className=" text-xs text-slate-500 " style={{ width: "55ch" }}>
            by signing up , you agree to the
            <a href="" className=" ml-1">
              <span className="  text-blue-500">Terms of Service </span>
            </a>
            and
            <br />
            <span>
              <a href="" className=" text-blue-500">
                Privacy Policy
              </a>
            </span>
            ,including
            <span>
              <a href="" className="text-blue-500 ml-1">
                Cookie use
              </a>
            </span>
          </p>
        </div>
      </div>
      <Links />
    </div>
  );
}

export default Tright;
