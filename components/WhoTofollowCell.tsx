import { FC } from "react";
interface props {
  username: String;
  handle: String;
  onClick: () => any;
}
const WhoTF: FC<props> = ({ username, handle, onClick }) => {
  return (
    <div className=" w-full  ">
      <span>
        <h1 className=" text-white font-bold">{username}</h1>
      </span>
      <div className=" w-full flex justify-between">
        <span className=" text-slate-600 text-sm ">@{handle}</span>
        <button
          className=" bg-white text-black font-extrabold rounded-lg mr-10 w-16"
          onClick={onClick}
        >
          Follow
        </button>
      </div>
    </div>
  );
};
export default WhoTF;
