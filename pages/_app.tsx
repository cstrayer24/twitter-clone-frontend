import type { AppProps } from "next/app";
// import { SessionProvider } from "next-auth/react";
import "../styles/global.css";
import "../styles/transitions.css";
import "../styles/hometransitons.css";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />{" "}
    </SessionProvider>
  );
}
