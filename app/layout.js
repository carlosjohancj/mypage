import "./globals.css";
import Nav from "./components/Navigation";
import Head from "next/head";
import localFont from "next/font/local";
import {Logo} from './components/logo.jsx'
const gfont = localFont({ src: "./assets/upheavtt.ttf" });
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>Miisaac C.A.</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
   
      </Head>
      <body className={`${gfont.className} h-full w-full`}>
        <Logo />
        <Nav />
        <main className="mx-10 bg-slate-400 mt-40">
        {children}
        </main>
      </body>
    </html>
  );
}
