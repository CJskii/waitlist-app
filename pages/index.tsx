import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main/Main";

const Home: NextPage = () => {
  return (
    <div className="bg-base-300 min-h-[100vh] flex justify-center items-center">
      <Head>
        <title>Waitlist Mintly</title>
        <meta content="Mintly waitlist app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="flex flex-col justify-center items-center gap-4 py-8 px-4 min-w-[70vw] w-full min-h-full">
        <Main />
      </main>
    </div>
  );
};

export default Home;
