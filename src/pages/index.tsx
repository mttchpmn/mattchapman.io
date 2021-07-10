import { GetStaticProps } from "next";

import { getAboutContent } from "../lib/datocms";

import Banner from "../components/banner-image";
import Bio from "../components/bio";
import Contact from "../components/contact";
import LatestPosts from "../components/latest-posts";
import Layout from "../components/layout";
import Social from "../components/social";

export default function Home({ bioContent }) {
  return (
    <Layout>
      <Banner />
      <Bio content={bioContent} />
      <LatestPosts />
      <Contact />
      <Social />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const bioContent = await getAboutContent();

  return {
    props: {
      bioContent,
    },
  };
};
