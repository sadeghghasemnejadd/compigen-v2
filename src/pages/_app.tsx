import "@/styles/sass/main.scss";
import type { AppProps } from "next/app";
import Navbar from "@/components/layout/navbar/navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
