import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { StructuredText } from "react-datocms";
import { BlogPost, getBlogPosts } from "../lib/datocms";
import Image from "next/image";
import Container from "../components/container";
import PostContent from "../components/post-content";

const BlogHeader = ({ title, src }) => {
  return (
    <div className="w-full bg-gray-500 h-96">
      <div className="absolute left-0 w-screen h-96">
        <div className="relative w-full h-full">
          <Image src={src} layout="fill" objectFit="cover" />
        </div>
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
