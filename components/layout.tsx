import React from "react";
import Tright from "./right";
import Nav from "./mainTwitter/nav";
import Tleft from "./Left";
import CenterLayout from "./mainTwitter/layoutCenter";

function Layout(props) {
  {
    return (
      <div className="bg-black grid grid-cols-4 h-screen text-white">
        <Tleft />

        <CenterLayout>
          <Nav />
          {props.children}
        </CenterLayout>
        <Tright />
      </div>
    );
  }
}
export default Layout;
