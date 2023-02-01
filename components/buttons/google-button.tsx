import React from "react";

import GoogleIcon from "../icons/google-icon";
function GoogleBtn() {
  return (
    <div>
      <button
        className=" r bg-slate-50 w-full p-2 rounded-full my-2 text-black"
        formAction="/pages/signup.tsx"
      >
        <GoogleIcon className=" inline" />
        Log in with Google
      </button>
    </div>
  );
}

export default GoogleBtn;
