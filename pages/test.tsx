import { GetStaticProps } from "next";
import { request } from "../lib/datocms";
import { getPostById } from "../queries/get-post";

export default function Test(props) {
  console.log(props);
  return (
    <div>
      HERE WE GOOOOO
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
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
