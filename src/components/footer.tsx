const Footer = () => {
  return (
    <footer className="text-gray-600 bg-white body-font">
      <div className="container flex flex-col items-center px-2 py-6 mx-auto sm:flex-row">
        <a className="flex items-center justify-center text-xl font-medium text-gray-900 title-font md:justify-start">
          Matt Chapman
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
