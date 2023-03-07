import { FC } from "react";
import button from "../../types/button";
import AppleIcon from "../icons/AppleIcon";

const AppleBtnCustom: FC<button> = (props) => {
  return (
    <div>
      <button
        className={` bg-slate-50  p-2 rounded-full my-2 text-black ${props.className}`}
      >
        <AppleIcon />
        log in with apple
      </button>
    </div>
  );
};

export default AppleBtnCustom;
