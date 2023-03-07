import { FC } from "react";
import Glass from "./icons/glass";
import Links from "./extra-links";

const HomeRight: FC = () => {
  return (
    <div>
      <div>
        <Glass className=" w-6 ml-3 bg-slate-700 absolute top-2  max-sm:top-12 max-sm:w-3 " />
        <input
          type="text"
          placeholder="Search Twitter"
          className=" w-3/4 pl-10 h-11 max-sm:h-10 max-sm:w-3/5 bg-slate-700 rounded-full focus-visible:border-blue-400"
        />
      </div>
      <div>
        <h1>What's happening</h1>
        
      </div>
      <div></div>
      <Links />
    </div>
  );
};
export default HomeRight;
