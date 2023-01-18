import React, { useState } from "react";
import { ReactDOM } from "react";
import Glass from "../icons/glass";
function Nav() {
  let [focus, changeFocus] = useState(false);
  console.log(focus);
  function focusHandle(): void {
    changeFocus((focus = true));
    console.log(focus);

    if (focus === true) {
      document.querySelector("#icon").className +=
        " border-y-solid border-y-blue-400 border-y-2";
      document.querySelector("#rounder").className +=
        " border-y-solid border-y-blue-400 border-y-2 border-l-solid border-l-blue-400 border-l-2";
    }
  }
  return (
    <div className=" border-solid border-b-2  border-slate-700 ">
      <form action="#">
        <span className=" ml-6 flex">
          <div
            className=" h-11 w-5 rounded-l-full bg-slate-700"
            id="rounder"
          ></div>
          <Glass
            className=" inline-flex w-4 h-11 self-center items-center border-l-6 bg-slate-700 "
            id="icon"
          />
          <input
            type="text"
            name=""
            id="search"
            className=" w-3/4 h-11 bg-slate-700   rounded-r-full focus-visible:border-blue-400  "
            placeholder="Search Twitter"
            onFocus={focusHandle}
          />
        </span>
      </form>
      <nav className=" mt-5">
        <ul className=" grid grid-cols-5">
          <li>
            {" "}
            <a href="">
              <span>For you</span>
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="">Trending</a>
          </li>

          <li>
            {" "}
            <a href="">
              {" "}
              <span>News</span>
            </a>
          </li>
          <li>
            {" "}
            <a href="">Sports</a>{" "}
          </li>
          <li>
            {" "}
            <a href=""> Entertainment</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
