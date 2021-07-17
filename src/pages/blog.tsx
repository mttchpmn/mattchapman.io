import Image from "next/image";
import Link from "next/link";
import Content from "../components/content";
import Layout from "../components/layout";
import { BlogPost, getBlogPosts } from "../lib/datocms";

const PostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="w-full h-full p-4">
      <div className="bg-white border-2 border-gray-200 rounded-lg border-opacity-60">
        {/* Card media */}
        <div className="relative h-40 bg-blue-500 rounded-lg sm:h-64 lg:h-52">
          <Image src={post.headerImage} layout="fill" objectFit="cover" />
        </div>

        {/* Card content */}
        <div className="flex flex-col justify-between h-64 p-6 md:h-64">
          <div>
            <p className="text-sm text-gray-400">{post.category}</p>
            <div className="py-2">
              <h3 className="text-lg text-black">{post.title}</h3>
            </div>
            <div className="text-gray-700">{post.description}</div>
          </div>
          <Link href={`/posts/${post.slug}`}>
            <a>
              <div className="flex text-purple-500 hover:text-purple-700">
                <p>Read post</p>
                <i className="bx bxs-right-arrow-alt bx-sm"></i>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <Layout>
      <Content>
        <h1 className="text-2xl text-center">All Blog Posts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard post={p} />
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = await getBlogPosts();

  return { props: { posts } };
};

export default Blog;
