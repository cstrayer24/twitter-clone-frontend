import React from "react";
import { Cookies } from "react-cookie";
function signout(props) {
  async function clickHandle() {
    await fetch("api/logout", {
      method: "DELETE",
    });
  }
  return (
    <div>
      <button onClick={clickHandle}>click me</button>
    </div>
  );
}

export default signout;
