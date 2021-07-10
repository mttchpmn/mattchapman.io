import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Banner from "../components/banner-image";
import Bio from "../components/bio";
import Contact from "../components/contact";
import Content from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";
import LatestPosts from "../components/latest-posts";
import Layout from "../components/layout";
import Modal from "../components/modal";
import Social from "../components/social";
import { useState } from "react";

export default function Home({ allPostsData }) {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <Layout>
      <Modal visible={modalOpen} setVisible={setModalOpen}>
        Yo yo yo my dawg
      </Modal>
      <Banner />
      <button
        onClick={() => setModalOpen(true)}
        className="px-6 py-2 bg-indigo-500"
      >
        Open Modal
      </button>
    </Layout>
  );
}
