import { useState } from "react";
import Content from "../components/content";
import Layout from "../components/layout";
import Button from "../components/ui/button";
import Modal from "../components/ui/modal";

export default () => {
  const [visible, setVisible] = useState(true);
  return (
    <Layout>
      <Content>
        <div className="h-screen text-center">
          <h1 className="mb-3 text-4xl font-bold text-black">Heading 1</h1>
          <h2 className="mb-2 text-3xl font-semibold text-black">Heading 2</h2>
          <h3 className="mb-1 text-2xl font-medium text-black">Heading 3</h3>
          <h4 className="text-xl text-gray-700">Heading 4</h4>
          <p className="text-gray-700 text-md">Paragraph</p>
        </div>
      </Content>
    </Layout>
  );
};
