import React from "react";
import Tright from "./right";
import Nav from "./mainTwitter/nav";
import Tleft from "./Left";
import CenterLayout from "./mainTwitter/layoutCenter";
import Head from "next/head";
import { Router, useRouter } from "next/router";

function Layout(props) {
  const router = useRouter();
  {
    return (
      <div className="bg-black grid grid-cols-4 h-screen text-white">
        <Head>
          <title>{router.pathname.replace("/", "")}</title>
        </Head>
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
