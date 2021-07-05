import { GetStaticProps } from "next";
import { request } from "../lib/datocms";
import { getPostById } from "../queries/get-post";

export default function Bio({ tagline, description, url }) {
  return (
    <section className="text-gray-600 body-font bg-grey-500">
      {/* This is the conatiner div */}
      <div className="container flex flex-col items-center max-w-6xl px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            {tagline}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              Drop me a line
            </button>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={url}
          />
        </div>
      </div>
    </section>
  );
}

const postQuery = `{
	allPosts {
		title
		body
	}
}`;

export const getStaticProps: GetStaticProps = async () => {
  var posts = await request({ query: postQuery });
  var post = await getPostById("45036888");

  return {
    props: { posts, post },
  };
};
