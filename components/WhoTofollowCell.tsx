import { FC } from "react";
interface props {
  username: String;
  handle: String;
}
const WhoTF: FC<props> = ({ username, handle }) => {
  return (
    <div className=" w-full  ">
      <span>
        <h1 className=" text-white font-bold">{username}</h1>
      </span>
      <span className=" text-slate-600 text-sm ">@{handle}</span>
      <button className=" bg-white text-black font-extrabold rounded-lg">
        Follow
      </button>
    </div>
  );
};
export default WhoTF;
