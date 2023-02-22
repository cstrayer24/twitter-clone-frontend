import { useContext, useState } from "react";
import { cookies } from "next/headers";
import React from "react";
import Tleft from "./Left";
import Tright from "./right";
import Center from "./mainTwitter/centralTwit";
import SignupPage from "./signup";
import { ctx } from "./signup";
import { getCookie } from "cookies-next";
import BottomBanner from "./bottom";
import Signin from "./login";
function TwitCln(): JSX.Element {
  const [up, changeUp] = useState(false);
  const [upL, changeUpl] = useState(false);

  return (
    <div className="grid grid-cols-4  h-screen text-white bg-black w-screen overflow-auto max-sm:grid-cols-1 max-sm:overflow-x-hidden">
      <Tleft />
      {up && <SignupPage />}
      {upL && <Signin />}
      <Center />
      <Tright
        onClick={() => {
          changeUp(!up);
        }}
      />

      <BottomBanner
        onClickSignUp={() => {
          changeUp(!up);
        }}
        onClickSignIn={() => {
          changeUpl(!upL);
        }}
      />
    </div>
  );
}

export default TwitCln;
