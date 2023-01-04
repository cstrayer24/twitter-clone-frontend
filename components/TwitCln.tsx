import { useState } from "react";
import React from "react";
import Tleft from "./Left";
import Tright from "./right";
import Center from "./mainTwitter/centralTwit";

function TwitCln() {
  return (
    <div className="grid grid-cols-4 h-screen text-white bg-black">
      <Tleft name="Bob" />
      <Center />
      <Tright />
    </div>
  );
}

export default TwitCln;
