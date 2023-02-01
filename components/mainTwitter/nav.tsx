import React, { useState } from "react";
import { useRouter } from "next/router";
import { ReactDOM } from "react";
import Glass from "../icons/glass";
import Settings from "../icons/settings";
import Link from "next/link";
function Nav() {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div className=" border-solid border-b-2  border-slate-700 relative">
      <form action="#">
        <div className=" absolute left-0 flex items-center h-full "></div>
        <Glass className=" w-6 ml-3 bg-slate-700 absolute top-2" id="icon" />
        <input
          type="text"
          name=""
          id="search"
          className=" w-3/4 pl-10 h-11 bg-slate-700 rounded-full focus-visible:border-blue-400  "
          placeholder="Search Twitter"
        />
        <Settings className=" self-center justify-self-end float-right mr-5 hover:bg-slate-500 rounded-full" />
      </form>
      <nav className=" mt-5">
        <ul className=" grid grid-cols-5 mx-4 text-slate-500">
          <li className="">
            {" "}
            <Link
              href={"/"}
              className={`block mb-2 p-3 hover:bg-slate-800  text-center ${
                router.pathname === "/" ? "border-b border-blue-300" : ""
              }`}
            >
              For you
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/trending"}
              className={`block mb-2 p-3 hover:bg-slate-800  text-center ${
                router.pathname === "/trending"
                  ? "border-b border-blue-300"
                  : ""
              }`}
            >
              Trending
            </Link>
          </li>

          <li>
            {" "}
            <Link
              href="/News"
              className={`block mb-2 p-3 hover:bg-slate-800  text-center ${
                router.pathname === "/News" ? "border-b border-blue-300" : ""
              }`}
            >
              News{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/Sports"}
              className={`block mb-2 p-3 hover:bg-slate-800  text-center ${
                router.pathname === "/Sports" ? "border-b border-blue-300" : ""
              }`}
            >
              Sports
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/Entertainment"}
              className={`block mb-2 p-3 hover:bg-slate-800  text-center ${
                router.pathname === "/Entertainment"
                  ? "border-b border-blue-300"
                  : ""
              }`}
            >
              Entertainment
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
