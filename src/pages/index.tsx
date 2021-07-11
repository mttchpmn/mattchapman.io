import { GetStaticProps } from "next";

import {
  getAboutContent,
  getBannerContent,
  getContactContent,
} from "../lib/datocms";

import Banner from "../components/banner-image";
import Bio from "../components/bio";
import Contact from "../components/contact";
import LatestPosts from "../components/latest-posts";
import Layout from "../components/layout";
import Social from "../components/social";

export default function Home({ bannerContent, bioContent, contactContent }) {
  return (
    <Layout>
      <Banner content={bannerContent} />
      <Bio content={bioContent} />
      <LatestPosts />
      <Contact content={contactContent} />
      <Social />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const bannerContent = await getBannerContent();
  const bioContent = await getAboutContent();
  const contactContent = await getContactContent();

  return {
    props: {
      bannerContent,
      bioContent,
      contactContent,
    },
  };
};
