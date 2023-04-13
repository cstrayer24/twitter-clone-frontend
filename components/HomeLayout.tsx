import { ReactNode } from "react";
import VerticalNav from "./vertical-nav";
import HomeRight from "./homeRight";

interface HomeProps {
  user: string;
}

const Home = ({
  user,
  children,
  pfp,
}: {
  user: string;
  children?: ReactNode;
  pfp: string;
}) => (
  <div className=" grid grid-cols-4 bg-black h-screen w-screen">
    <VerticalNav userName={user} pfp={pfp} />
    <div className=" col-span-2">{children}</div>
    <HomeRight />
  </div>
);

export default Home;
