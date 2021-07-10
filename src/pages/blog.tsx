import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { StructuredText } from "react-datocms";
import { BlogPost, getBlogPosts } from "../lib/datocms";
import Image from "next/image";

const ImageBlock = ({ title, url, caption }) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="relative w-full h-96">
        <Image src={url} layout="fill" objectFit="cover" />
      </div>
      <p>{caption}</p>
    </>
  );
};

export default function Home({ blogPost }) {
  const handleBlockRender = ({ record }) => {
    switch (record.__typename) {
      case "ImageBlockRecord":
        return (
          <ImageBlock
            title={record.title}
            url={record.image.url}
            caption={record.caption}
          />
        );
      default:
        return <p>default</p>;
    }
  };

  return (
    <Layout>
      <div className="container max-w-2xl mx-auto">
        <h2>{blogPost.title}</h2>
        <StructuredText
          data={blogPost.content as any}
          renderBlock={handleBlockRender}
        />
      </div>
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
