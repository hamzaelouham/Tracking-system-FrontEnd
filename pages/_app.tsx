import type { AppProps } from "next/app";
import { StateProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
