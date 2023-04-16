import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="theme-yellow">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.svg" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Welcome to my personal portfolio website, showcasing my web design and development skills and expertise skills and expertise skills and expertise. With extensive experience in React development, I can provide you with unique and innovative solutions for your web projects. Look at my portfolio for examples of my work, and contact me to discuss how I can bring your ideas to life using the power of React."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, nodejs, Git ,Redux, Bootstrap"
        />
        <meta name="author" content="Sadegh Ghasemnejad" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
