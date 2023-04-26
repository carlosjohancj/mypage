import Navbar from "@/components/Navbar";
import Head from "next/head";
import vicon from '@/assets/miisac2.png'
export default function Contact() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link src={vicon} rel="favicon" />
        <title>Contacto</title>
      </Head>
      <Navbar />
    </>
  );
}
