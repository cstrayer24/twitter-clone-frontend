import React, { useState } from "react";
import { ReactDOM } from "react";
import Glass from "../icons/glass";
import Settings from "../icons/settings";
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
    <div className=" border-solid border-b-2  border-slate-700 relative">
      <form action="#">
        <div className=" absolute left-0 flex items-center h-full "></div>
        <Glass className=" w-6 ml-3 bg-slate-700 absolute top-1" id="icon" />
        <input
          type="text"
          name=""
          id="search"
          className=" w-3/4 pl-10 h-11 bg-slate-700 rounded-full focus-visible:border-blue-400  "
          placeholder="Search Twitter"
          onFocus={focusHandle}
        />
        <Settings className=" self-center justify-self-end" />
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
