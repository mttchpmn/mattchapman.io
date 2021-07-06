import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import remark from "remark";
import html from "remark-html";

import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { getAllPosts } from "../../queries/get-all-posts";
import { getPostBySlug } from "../../queries/get-post";

import utilStyles from "../../styles/utils.module.css";

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

export default function Post({ postData }: { postData: PostData }) {
  console.log(postData);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {/* <Date dateString={postData.date} /> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostBySlug(params.slug as string);
  const processedContent = await remark().use(html).process(postData.body);
  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: { ...postData, contentHtml },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));

  return {
    paths,
    fallback: false,
  };
};
