import { FC } from "react";

import Image, { StaticImageData } from "next/image";
import logo from "../../public/images/logo-corner.png";
interface propTypes {
  width: number;
  height: number;
  className?: string;
}
const LogoCorner: FC<propTypes> = (props) => {
  return (
    <div className={props.className}>
      <a href="">
        <Image
          height={props.height}
          width={props.width}
          alt={"twitter logo"}
          src={logo}
        ></Image>
      </a>
    </div>
  );
};

export default LogoCorner;
