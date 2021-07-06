import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Banner from "../components/banner-image";
import Content from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Matt Chapman</title>
      </Head>
      <Header />
      <Content>
        <Banner />
      </Content>
      <Footer />
    </>
  );
}
