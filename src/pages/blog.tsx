import Content from "../components/content";
import Layout from "../components/layout";
import Card from "../components/ui/card";
import { getBlogPosts } from "../lib/datocms";

const Blog = ({ posts }) => {
  return (
    <Layout>
      <Content>
        <h1 className="text-2xl text-center">All Blog Posts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Card
              title={p.title}
              description={p.description}
              category={p.category}
              href={`/posts/${p.slug}`}
              cta="Read post"
              img={p.headerImage}
            />
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
