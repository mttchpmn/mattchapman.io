import Head from "next/head";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Matt Chapman</title>
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
