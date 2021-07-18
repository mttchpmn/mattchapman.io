import { useState } from "react";
import { ContactContent } from "../lib/datocms";
import Modal from "./ui/modal";
import Button from "./ui/button";
import Title from "./ui/title";

const Contact = ({ content }: { content: ContactContent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Error");
  const [modalText, setModalText] = useState("");

  const handleFormSubmit = async () => {
    console.log("Submitting form...");

    // TODO - email validation

    const payload = { name, email, message };

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.successful) {
      setModalTitle("Success");
      clearFormFields();
    }

    showModal(data.message);
  };

  const clearFormFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const showModal = (text: string) => {
    setModalText(text);
    setModalOpen(true);
  };

  return (
    <div>
      <Modal title={modalTitle} visible={modalOpen} setVisible={setModalOpen}>
        <p>{modalText}</p>
      </Modal>
      <section
        id="contact"
        className="relative text-gray-200 bg-gray-700 body-font"
      >
        <div className="container px-5 py-24 mx-auto text-white">
          <div className="flex flex-col w-full mb-12 text-center">
            <Title variant={2} text={content.title} color="text-white" />
            <p className="mx-auto text-base leading-relaxed lg:w-1/2">
              {content.description}
            </p>
          </div>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label htmlFor="name" className="text-sm leading-7">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label htmlFor="email" className="text-sm leading-7">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label htmlFor="message" className="text-sm leading-7">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2 text-center">
                <Button text="Send Message" onClick={handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
