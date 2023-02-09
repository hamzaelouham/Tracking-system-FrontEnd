import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  // const [position, setPosition] = useState<any>(null);
  // const [online, setOnline] = useState(false);
  const Map = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Vehicle Tracking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Map />
      </Layout>
    </>
  );
};

export default Home;
