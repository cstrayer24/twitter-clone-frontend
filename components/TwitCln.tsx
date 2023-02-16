import { useContext, useState } from "react";
import { cookies } from "next/headers";
import React from "react";
import Tleft from "./Left";
import Tright from "./right";
import Center from "./mainTwitter/centralTwit";
import SignupPage from "./signup";
import { ctx } from "./signup";
import { getCookie } from "cookies-next";
function TwitCln(): JSX.Element {
  const [up, changeUp] = useState(false);

  return (
    <div className="grid grid-cols-4 h-screen text-white bg-black w-screen overflow-auto">
      <Tleft />
      {up && <SignupPage />}
      <Center />
      <Tright
        onClick={() => {
          changeUp(!up);
        }}
      />
    </div>
  );
}

export default TwitCln;
