import Image from "next/image";
import logo from "../public/images/logo-corner.png";
import Settings from "./icons/settings";
function Tleft() {
  return (
    <div key={"wrapper"} className=" ml-20 col-span-1 max-sm:hidden">
      <a href="#" rel="noopener noreferrer" className="">
        <Image
          alt="alt"
          src={logo}
          width="30"
          height={"30"}
          className="  mb-5 "
        />
      </a>
      <ul>
        <li id="explore" className="mb-3">
          <a
            href="#"
            id="hov"
            className=" font-bold text-2xl  hover:bg-white/25 rounded-full px-5 inline  "
          >
            # <span className=" inline  md:max-lg:hidden">Explore</span>
          </a>
        </li>
        <li id="settings">
          <a
            href="#"
            className="  text-2xl font-medium hover:bg-white/25 rounded-full px-5"
          >
            <Settings />
            <span className="inline  md:max-lg:hidden">settings</span>
          </a>
        </li>
        <li id="settings">
          <a
            href="#"
            className="  text-2xl font-medium hover:bg-white/25 rounded-full px-5"
          ></a>
        </li>
      </ul>
    </div>
  );
}

export default Tleft;
