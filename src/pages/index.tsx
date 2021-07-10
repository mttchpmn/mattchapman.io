import { GetStaticProps } from "next";

import { getAboutContent, getContactContent } from "../lib/datocms";

import Banner from "../components/banner-image";
import Bio from "../components/bio";
import Contact from "../components/contact";
import LatestPosts from "../components/latest-posts";
import Layout from "../components/layout";
import Social from "../components/social";

export default function Home({ bioContent, contactContent }) {
  return (
    <Layout>
      <Banner />
      <Bio content={bioContent} />
      <LatestPosts />
      <Contact content={contactContent} />
      <Social />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const bioContent = await getAboutContent();
  const contactContent = await getContactContent();

  return {
    props: {
      bioContent,
      contactContent,
    },
  };
};
