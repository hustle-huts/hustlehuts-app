import "@/styles/globals.css";

import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

import Layout from "@/components/Layout";

const font = Poppins({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HustleHuts</title>
        <meta
          name="description"
          content="Finding co-working spaces is challenging, and expensive. HustleHuts aims to connect you with conducive working spaces in cafes during off-peak hours, so you don't have to worry about finding work spots outside!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <main className={font.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </RecoilRoot>
    </>
  );
}
