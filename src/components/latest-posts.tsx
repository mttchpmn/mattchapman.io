const PostPreview = ({ post }) => {
  const { title, category, snippet, imageUrl } = post;

  return (
    <div className="max-w-6xl p-4 md:w-1/3">
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
        <img
          className="object-cover object-center w-full lg:h-48 md:h-36"
          src={imageUrl}
          alt="blog"
        />
        <div className="p-6 bg-white">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
            {category}
          </h2>
          <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
            {title}
          </h1>
          <p className="mb-3 leading-relaxed">{snippet}</p>
          <div className="flex flex-wrap items-center ">
            <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
              Read Post
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const LatestPosts = () => {
  const post = {
    title: "My blog post",
    category: "Tech",
    snippet: "The quick brown fox jumped over the lazy dog",
    imageUrl:
      "https://images.unsplash.com/photo-1625442634318-04e28fd12782?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  };

  const posts = [post, post, post, post];

  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        <h3 className="pb-2 text-3xl text-center text-black text-semibold">
          Latest Posts
        </h3>
        <div className="flex flex-wrap ">
          {posts.slice(0, 3).map((p) => (
            <PostPreview post={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
