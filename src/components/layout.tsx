import Head from "next/head";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Matt Chapman</title>
        <script
          src="https://kit.fontawesome.com/75363efdbb.js"
          crossOrigin="anonymous"
        ></script>

        <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
