import React from "react";

function BottomBanner(props) {
  return (
    <div className=" max-sm:bg-black w-screen  h-20 bg-blue-400 m-0 fixed  z-50 top-[90%] grid overflow-hidden max-sm:place-items-center">
      <span className=" place-self-center grid grid-flow-row  grid-rows-2  w-fit max-sm:hidden">
        <h1 className=" inline font-bold text-2xl">
          Don’t miss what’s happening
        </h1>
        <h4 className=" inline">People on Twitter are the first to know.</h4>
      </span>

      <span className=" grid justify-self-end grid-flow-col self-center relative bottom-9 right-[10rem] justify-center max-sm:bottom-1 max-sm:right-5">
        <button
          className="inline mr-4 p-1 rounded-full font-extrabold border-solid border-[1px] px-3 max-sm:px-10 max-sm:text-blue-400 "
          onClick={props.onClickSignIn}
        >
          Log in
        </button>
        <button
          className="inline mr-4 p-1 rounded-full font-extrabold border-solid border-[1px] px-3 bg-white text-black max-sm:px-10 max-sm:bg-blue-400 max-sm:text-white max-sm:border-hidden"
          onClick={props.onClickSignUp}
        >
          Sign Up
        </button>
      </span>
    </div>
  );
}
export default BottomBanner;
