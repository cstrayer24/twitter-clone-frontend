import Image from "next/image";
import logo from "../public/images/logo-corner.png";
import Settings from "./settings";
function Tleft({ name }: { name: string }) {
  return (
    <div key={"wrapper"} className=" ml-20 col-span-1">
      <a href="#" /*target="_blank"*/ rel="noopener noreferrer" className="">
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
            className=" font-bold text-2xl  hover:bg-white/25 rounded-full px-5"
          >
            # Explore
          </a>
        </li>
        <li id="settings">
          <a
            href="#"
            className="  text-2xl font-medium hover:bg-white/25 rounded-full px-5"
          >
            <Settings />
            settings
          </a>
        </li>
        <li id="settings">
          <a
            href="#"
            className="  text-2xl font-medium hover:bg-white/25 rounded-full px-5"
          >
            {/* <Settings />
            {name} */}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tleft;
