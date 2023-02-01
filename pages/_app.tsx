import type { AppProps } from "next/app";

import "../styles/global.css";
import "../styles/transitions.css";

export default function App({ Component, pageProps, se }: AppProps) {
  return <Component {...pageProps} />;
}
