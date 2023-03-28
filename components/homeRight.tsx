import { FC } from "react";
import Glass from "./icons/glass";
import Links from "./extra-links";
import WhCell from "./Wh-cell";
import Link from "next/link";

const HomeRight: FC = () => {
  return (
    <div className=" overflow-scroll">
      <div>
        <Glass className=" w-6 ml-3 bg-slate-700 absolute top-2  max-sm:top-12 max-sm:w-3 " />
        <input
          type="text"
          placeholder="Search Twitter"
          className=" w-full pl-10 h-11 max-sm:h-10 max-sm:w-3/5 bg-slate-700 rounded-full focus-visible:border-blue-400 mb-5"
        />
      </div>
      <div className=" rounded-md w-full h-[38rem] bg-[rgb(22,24,28)] text-white">
        <span>
          <h1 className=" font-bold text-lg">What's happening</h1>
        </span>
        <WhCell
          headText={"trending * Ohio"}
          bottomText={"3,567K Tweets"}
          trendingThing={"hi"}
        />
        <WhCell
          headText={"trending * Ohio"}
          bottomText={"3,567K Tweets"}
          trendingThing={"hi"}
        />
        <WhCell
          headText={"trending * Ohio"}
          bottomText={"3,567K Tweets"}
          trendingThing={"hi"}
        />
        <WhCell
          headText={"trending * Ohio"}
          bottomText={"3,567K Tweets"}
          trendingThing={"hi"}
        />
        <WhCell
          headText={"trending * Ohio"}
          bottomText={"3,567K Tweets"}
          trendingThing={"hi"}
        />
        <WhCell
          headText={"trending * Ohio"}
          bottomText={"3,567K Tweets"}
          trendingThing={"hi"}
        />
        <Link href={"/"} className=" text-blue-400">
          Show more
        </Link>
      </div>
      <div></div>
      {/* <Links /> */}
    </div>
  );
};
export default HomeRight;
