import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { StructuredText } from "react-datocms";
import { BlogPost, getBlogPosts } from "../lib/datocms";
import Image from "next/image";
import Container from "../components/container";
import PostContent from "../components/post-content";

const BlogHeader = ({ title, src }) => {
  return (
    <div className="relative">
      <h1 className="absolute z-50 text-5xl font-extrabold text-center text-white uppercase transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {title}
      </h1>
      <div className="absolute z-40 w-full bg-black bg-opacity-30 h-96"></div>
      <div className="relative bg-red-500 h-96">
        <Image src={src} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default function Post({ blogPost }: { blogPost: BlogPost }) {
  return (
    <Layout>
      <Container>
        <BlogHeader title={blogPost.title} src={blogPost.headerImage} />
        <PostContent content={blogPost.content} />
      </Container>
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
