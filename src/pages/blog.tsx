import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Banner from "../components/banner-image";
import Bio from "../components/bio";
import Contact from "../components/contact";
import Content from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";
import LatestPosts from "../components/latest-posts";
import Layout from "../components/layout";
import Social from "../components/social";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
}
