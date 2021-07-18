import { BlogPost } from "../lib/datocms";
import Card from "./ui/card";
import Title from "./ui/title";

const LatestPosts = ({ content }: { content: BlogPost[] }) => {
  const posts = content.slice(0, 3);

  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        <div className="text-center">
          <Title variant={2} text="Latest Posts" />
        </div>
        <div className="grid grid-cols-3">
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
      </div>
    </section>
  );
};

export default LatestPosts;
