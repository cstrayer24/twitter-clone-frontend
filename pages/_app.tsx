import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/global.css";
import "../styles/transitions.css";
import "../styles/hometransitons.css";
export default function App({ Component, pageProps, session }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
