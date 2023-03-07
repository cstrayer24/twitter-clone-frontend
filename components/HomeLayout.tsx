import { FC } from "react";


import VerticalNav from "./vertical-nav";
import HomeRight from "./homeRight";
type props = {
  children: JSX.Element;
  user: string;
};
const Home: FC = (props: props) => (
  <div className=" grid grid-cols-4 bg-black h-screen w-screen">
    <VerticalNav user={props.user} />
    <div className=" col-span-2">{props.children}</div>
    <HomeRight />
  </div>
);

export default Home;
