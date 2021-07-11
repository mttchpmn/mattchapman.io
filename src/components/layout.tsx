import Head from "next/head";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Matt Chapman</title>
        <meta name="description">
          Matt Chapman is a software engineer, commercial pilot, musician, and
          adventurer, from the mountainous wilds of New Zealand.
        </meta>
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
