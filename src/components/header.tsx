import Link from "next/link";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 text-xl font-semibold text-gray-900 title-font md:mb-0">
          Matt Chapman
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">About</a>
          </Link>
          <Link href="/#contact">
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </Link>
          <Link href="/blog">
            <a className="mr-5 hover:text-gray-900">Blog</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
