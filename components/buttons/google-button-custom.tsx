import button from "../../types/button";

import React, { FC } from "react";

import GoogleIcon from "../icons/google-icon";
const GoogleBtnCustom: FC<button> = (props) => {
  return (
    <div className="">
      <button
        className={` bg-slate-50 p-2 rounded-full my-2 text-black ${props.className}`}
        onClick={props.onClick}
      >
        <GoogleIcon className=" inline" />
        Log in with Google
      </button>
    </div>
  );
};

export default GoogleBtnCustom;
