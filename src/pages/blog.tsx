import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { StructuredText } from "react-datocms";
import { BlogPost, getBlogPosts } from "../lib/datocms";
import Image from "next/image";
import Container from "../components/container";
import PostContent from "../components/post-content";
import Content from "../components/content";

const BlogHeader = ({ title, src, lrg }) => {
  const height = lrg ? "md:h-750" : "md:h-500";

  return (
    <div className={`w-full bg-gray-500 h-96 ${height}`}>
      <div className="relative w-full h-full">
        <Image src={src} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default function Post({ blogPost }: { blogPost: BlogPost }) {
  return (
    <Layout>
      <BlogHeader
        lrg={true}
        title={blogPost.title}
        src={blogPost.headerImage}
      />
      <Content maxWidth="4xl">
        <PostContent content={blogPost.content} />
      </Content>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogPost = await getBlogPosts();

  console.log(blogPost);

  return {
    props: {
      blogPost,
    },
  };
};
