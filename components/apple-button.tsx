import AppleIcon from "./AppleIcon";

function AppleBtn(): JSX.Element {
  return (
    <div>
      <button className=" bg-slate-50 w-full p-2 rounded-full my-2 text-black">
        <AppleIcon />
        log in with apple
      </button>
    </div>
  );
}

export default AppleBtn;
