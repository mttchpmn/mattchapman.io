import { GetStaticProps } from "next";

import {
  getAboutContent,
  getBannerContent,
  getBlogPosts,
  getContactContent,
} from "../lib/datocms";

import Banner from "../components/banner-image";
import Bio from "../components/bio";
import Contact from "../components/contact";
import LatestPosts from "../components/latest-posts";
import Layout from "../components/layout";
import Social from "../components/social";
import Content from "../components/content";

export default function Home({
  bannerContent,
  bioContent,
  postsContent,
  contactContent,
}) {
  return (
    <Layout>
      <Banner content={bannerContent} />
      <Content background="bg-gray-100">
        <Bio content={bioContent} />
        <LatestPosts content={postsContent} />
      </Content>
      <Contact content={contactContent} />
      <Content background="bg-gray-100">
        <Social />
      </Content>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const bannerContent = await getBannerContent();
  const bioContent = await getAboutContent();
  const postsContent = await getBlogPosts();
  const contactContent = await getContactContent();

  return {
    props: {
      bannerContent,
      bioContent,
      postsContent,
      contactContent,
    },
  };
};
