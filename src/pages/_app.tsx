import "@/styles/sass/main.scss";
import type { AppProps } from "next/app";
import Navbar from "@/components/layout/navbar/Navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="header">
        <div className="bg-primary-dont-move"></div>
        <Navbar />
      </header>
      <main className="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}
