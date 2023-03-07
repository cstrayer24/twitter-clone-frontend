import { ReactNode } from "react";
import VerticalNav from "./vertical-nav";
import HomeRight from "./homeRight";

interface HomeProps {
  user: string;
}

const Home = ({ user, children }: { user: string; children?: ReactNode }) => (
  <div className=" grid grid-cols-4 bg-black h-screen w-screen">
    <VerticalNav user={user} />
    <div className=" col-span-2">{children}</div>
    <HomeRight />
  </div>
);

export default Home;
