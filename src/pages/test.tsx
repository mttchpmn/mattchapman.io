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
          <div>Title Page</div>
          <Button text="Show Modal" onClick={() => setVisible(true)} />
          <Modal title="Information" visible={visible} setVisible={setVisible}>
            {" "}
            yo yo yo
          </Modal>
        </div>
      </Content>
    </Layout>
  );
};
