import Image from "next/image";
import Content from "../../components/content";
import Layout from "../../components/layout";
import PostContent from "../../components/post-content";
import {
  BlogPost,
  getAllPostSlugs,
  getBlogPostBySlug,
} from "../../lib/datocms";
import {GetServerSideProps, GetStaticPaths, GetStaticProps} from "next";

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

const Post = ({ blogPost }: { blogPost: BlogPost }) => {
  return (
    <Layout>
      <BlogHeader
        lrg={blogPost.isLargeHeader}
        title={blogPost.title}
        src={blogPost.headerImage}
      />
      <Content maxWidth="max-w-4xl">
        <PostContent content={blogPost.content} />
      </Content>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPost = await getBlogPostBySlug(params.slug as string);

  return { props: { blogPost }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostSlugs();

  return { paths, fallback: false };
};

export default Post;
