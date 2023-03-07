import exp from "constants";
import { FC } from "react";

interface propTypes {
  children?: JSX.Element;
  path: string;
  text: string;
}

const NavItem: FC<propTypes> = (props) => {
  return (
    <div>
      <div className="  text-white inline-flex hover:bg-white/25 rounded-full text-2xl mb-5">
        <div className=" mr-2 self-center">{props.children}</div>
        <a href={props.path} className=" inline">
          {props.text}
        </a>
      </div>
    </div>
  );
};
export default NavItem;
