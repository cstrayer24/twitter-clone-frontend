import { FC } from "react";
import { useRouter } from "next/router";

import BubbleTail from "./icons/bubbleTail";

interface props {
  userName: String;
}
const LogoutPanel: FC<props> = ({ userName }) => {
  const router = useRouter();
  async function logout() {
    const req = await fetch("/api/logout", { method: "DELETE" });

    if (req.ok) {
      router.push("/");
    }
  }
  return (
    <div className=" ">
      <div className=" bottom-[7.5rem]  text-white rounded-md bg-black z-40 absolute border-solid border-2 border-slate-500 font-semibold  pt-4 w-[14rem]">
        <div className=" border-t border-slate-500 cursor-pointer hover:bg-slate-400 py-3">
          Add existing account
        </div>
        <div
          className=" hover:bg-slate-400 py-3 cursor-pointer"
          onClick={logout}
        >
          logout of @{userName}
        </div>
        <BubbleTail className=" h-4 w-4 rotate-[180deg]   relative top-3 left-[8rem]" />
      </div>
    </div>
  );
};

export default LogoutPanel;
