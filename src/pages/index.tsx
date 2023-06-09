import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import Timer from '@/components/Timer/Timer'

export default function Home () {
  return (
    <>
      <Head>
        <title>Pomodoro App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Timer />
      </Layout>
    </>
  )
}
