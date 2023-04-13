import { FC, useState } from "react";

import LogoCorner from "./icons/corner-logo";
import NavItem from "./nav-item";
import HomeIcon from "./icons/homeIcon";
import HashTag from "./icons/hashTagIcon";
import Bell from "./icons/bellIcon";
import Envelope from "./icons/Envolope";
import Bookmark from "./icons/Bookmark";
import Blue from "./icons/twitterBlueIcon";
import Profile from "./icons/Profile";
import More from "./icons/more";
import userComponent from "../types/homeComponent";
import Dots from "./icons/dots";
import LogoutPanel from "./logoutPanel";
import Image from "next/image";
const VerticalNav: FC<userComponent> = (props) => {
  const [logout, showLogout] = useState(false);
  return (
    <div className=" ml-10 col-span-1">
      <LogoCorner width={30} height={30} className=" mb-6" />
      <div>
        <NavItem path="" text="Home">
          <HomeIcon className=" h-7 w-7" />
        </NavItem>
        <NavItem path="#" text="Explore">
          <HashTag className="h-7 w-7" />
        </NavItem>
        <NavItem path="#" text="Notifications">
          <Bell className=" w-7 h-7" />
        </NavItem>
        <NavItem path="#" text="Messages">
          <Envelope className=" h-7 w-7" />
        </NavItem>
        <NavItem path="#" text="Bookmarks">
          <Bookmark className="w-7 h-7" />
        </NavItem>
        <NavItem path="#" text="Twitter Blue">
          <Blue className="h-7 w-7" />
        </NavItem>
        <NavItem path="#" text="profile">
          <Profile className=" h-7 w-7" />
        </NavItem>
        <NavItem path="#" text="more">
          <More className=" w-7 h-7" />
        </NavItem>
      </div>
      <button className=" text-white bg-blue-400 px-20 py-5 rounded-full font-bold  mb-[8rem]  text-xl">
        Tweet
      </button>
      {logout && <LogoutPanel userName={props.userName} />}
      <div
        className=" text-white flex hover:bg-white/25 rounded-full w-[15em] pl-3 absolute mt-0 cursor-pointer "
        onClick={() => showLogout(!logout)}
      >
        <div className=" mr-14 ml-8">
          <Image
            src={props.pfp}
            alt="pfp"
            width={20}
            height={20}
            className=" relative right-[2.1rem] top-[2rem]"
          />
          <h1 className=" mb-1 font-bold">{props.userName}</h1>

          <span className=" text-white/25">@{props.userName}</span>
        </div>
        <Dots className=" self-center" />
      </div>
    </div>
  );
};

export default VerticalNav;
