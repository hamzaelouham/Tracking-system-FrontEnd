import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
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
        {/* <>
          <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

          <div className="grid lg:grid-cols-3 gap-5 mb-16">
            <div className="rounded bg-white h-40 shadow-sm"></div>
            <div className="rounded bg-white h-40 shadow-sm"></div>
            <div className="rounded bg-white h-40 shadow-sm"></div>
          </div>
          <div className="grid col-1 bg-white h-96 shadow-sm"></div>
        </> */}
      </Layout>
    </>
  );
};

export default Home;
