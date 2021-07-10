import { GetStaticProps } from "next";
import Link from "next/link";

import { AboutContent } from "../lib/datocms";

export default function Bio({ content }: { content: AboutContent }) {
  // TODO - Move these out of here
  // const url =
  //   "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  const { tagline, description, url } = content;

  return (
    <section className="text-gray-600 body-font bg-grey-500">
      <div className="flex flex-col items-center max-w-6xl px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            {tagline}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center w-full md:justify-start">
            <Link href="#contact">
              <button className="inline-flex px-6 py-2 text-white bg-gray-500 border-0 rounded text-md md:text-lg focus:outline-none hover:bg-gray-600">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="Picture of Matt Chapman"
            src={url}
          />
        </div>
      </div>
    </section>
  );
}

// export default Bio;
