import Head from "next/head";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 text-xl font-semibold text-gray-900 title-font md:mb-0">
          Matt Chapman
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900" href="#contact">
            Contact
          </a>
          <a className="mr-5 hover:text-gray-900">Blog</a>
        </nav>
      </div>
    </header>
  );
};

const Content = ({ children }) => (
  <div className="container max-w-sm min-w-full min-h-screen bg-gray-100 md:max-w-6xl">
    <div className="bg-gradient-to-t from-blue-50 to-gray-100">{children}</div>
  </div>
);

const Bio = () => {
  const tagline = "Kia Ora, I'm Matt.";
  const description =
    "I'm a software engineer, commercial pilot and adventurer from the mountainous lands of New Zealand. I like to share stories from my	adventures in cyberspace, music, and wild nature.";
  const url =
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  return (
    <section className="text-gray-600 body-font bg-grey-500">
      <div className="flex flex-col items-center max-w-6xl px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            {tagline}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center w-full md:justify-start">
            <button className="inline-flex px-6 py-2 text-white bg-gray-500 border-0 rounded text-md md:text-lg focus:outline-none hover:bg-gray-600">
              Get in touch
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
};

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

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="relative text-gray-600 bg-white body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Get in touch
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-1/2">
              Need an engineer? Have a question? Want to debate who'd win in a
              fight between Gandalf and Dumbledore? I'd love to hear from you.
            </p>
          </div>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="flex px-8 py-2 mx-auto text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-white body-font">
      <div className="container flex flex-col items-center px-2 py-6 mx-auto sm:flex-row">
        <a className="flex items-center justify-center text-xl font-medium text-gray-900 title-font md:justify-start">
          Matt Chapman
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0"></p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

const Banner = () => {
  const url =
    "https://images.unsplash.com/photo-1556878516-61356c874f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80";

  return (
    <section>
      <div className="overflow-hidden h-50 bg-gradient-to-b">
        <img
          className="object-cover object-center w-full h-48 md:h-96"
          src={url}
        />
      </div>
    </section>
  );
};

const SocialBox = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col w-1/5 py-12 text-center bg-white hover:bg-gray-100 rounded-xl">
      <div className="p-2">
        <i className={`fab fa-${icon} fa-2x`} />
      </div>
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="w-5/6 mx-auto">{description}</p>
    </div>
  );
};

const Social = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        <h3 className="pb-6 text-3xl text-center text-black text-semibold">
          Follow me on social
        </h3>
        <div className="flex flex-wrap justify-center space-x-5">
          <SocialBox
            title="GitHub"
            icon="github"
            description="Code and stuff"
          />
          <SocialBox
            title="LinkedIn"
            icon="linkedin"
            description="All about the synergy"
          />
          <SocialBox
            title="Youtube"
            icon="youtube"
            description="Lot's of country music"
          />
          <SocialBox
            title="Instagram"
            icon="instagram"
            description="Climbing adventures"
          />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="debug-screens">
      <Head>
        <script
          src="https://kit.fontawesome.com/75363efdbb.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header />
      <Banner />
      <Content>
        <Bio />
        <LatestPosts />
        <Contact />
        <Social />
      </Content>
      <Footer />
    </div>
  );
}
