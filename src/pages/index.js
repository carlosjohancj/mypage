import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <>
  <Head>
  <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Carlos Montilva</title>

  </Head>
    <main
      className={``}
    >
      <Navbar/>
    </main>
    </>
  )
}
