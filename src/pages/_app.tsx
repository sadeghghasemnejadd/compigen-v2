import "@/styles/sass/main.scss";
import type { AppProps } from "next/app";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Compigen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="header">
        <div className="bg-primary-dont-move"></div>
        <Navbar />
      </header>
      <main className="main">
        <Component {...pageProps} />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
