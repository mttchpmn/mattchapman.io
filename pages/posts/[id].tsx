import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

import utilStyles from "../../styles/utils.module.css";

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

export default function Post({ postData }: { postData: PostData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug as string);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};
