import Button from "./button";

const Modal = ({ title, visible, setVisible, children }) => {
  return (
    <div
      className={`fixed inset-0 z-10 ${
        visible ? "visible" : "hidden"
      }  overflow-y-auto`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          aria-hidden="true"
        />

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="py-3 pl-5 bg-gray-500">
            <h1 className="text-lg text-white">{title}</h1>
          </div>
          <div className="p-8 bg-white">{children}</div>
          <hr />
          <div className="flex justify-end px-4 py-4 text-white">
            <Button text="Ok" onClick={() => setVisible(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
