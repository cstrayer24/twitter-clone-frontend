import { FC } from "react";

interface Props {
  headText: String;
  trendingThing: String;
  bottomText?: String;
}

const WhCell: FC<Props> = (props) => {
  return (
    <div className=" w-full  mb-5 hover:bg-slate-200/50 rounded-md cursor-pointer">
      <div className=" flex w-full text-slate-600">
        <span className=" mr-[14rem]">{props.headText}</span>
        <button className=" justify-self-end">...</button>
      </div>
      <span className=" font-bold">{props.trendingThing}</span>
      <br />
      <span className=" text-slate-600">{props.bottomText}</span>
    </div>
  );
};

export default WhCell;
