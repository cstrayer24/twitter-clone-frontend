import { useState } from "react";
import { Router, useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";

import React from "react";
import Tright from "./right";
import Nav from "./mainTwitter/nav";
import Tleft from "./Left";
import CenterLayout from "./mainTwitter/layoutCenter";
import BottomBanner from "./bottom";
import SignupPage from "./signup";
import signin from "../pages/signin";
import Signin from "./login";

import { isLoggedIn } from "../lib/usersHelper";

function Layout(props) {
  isLoggedIn();

  const router = useRouter();
  const [up, changeUp] = useState(false);
  const [upL, changeUpl] = useState(false);
  const [bannerUp, setBanner] = useState(false);
  useEffect(() => {
    if (isLoggedIn()) {
      setBanner(true);
      console.log("test");
    }
  }, [isLoggedIn()]);
  {
    return (
      <div className="bg-black grid grid-cols-4 h-screen text-white overflow-auto max-sm:grid-cols-1 max-sm:overflow-x-hidden">
        <Head>
          <title>{router.pathname.replace("/", "")}</title>
        </Head>
        <Tleft />

        {up && <SignupPage />}
        {upL && <Signin />}
        <CenterLayout>
          <Nav />
          {props.children}
        </CenterLayout>
        <Tright
          onClick={() => {
            changeUp(!up);
          }}
        />
        {!bannerUp && (
          <BottomBanner
            onClickSignUp={() => {
              changeUp(!up);
            }}
            onClickSignIn={() => {
              changeUpl(!upL);
            }}
          />
        )}
      </div>
    );
  }
}
export default Layout;
