import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import TwitCln from "../components/TwitCln";

export default function Home() {
  return (
    <div>
      <Head>
        <title>better twitter (no community)</title>
        <link rel="icon" href="/images/tab-icon.png" />
      </Head>
      <TwitCln />
    </div>
  );
}
