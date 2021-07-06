const SocialBox = ({ title, description, icon, url }) => {
  return (
    <div className="flex flex-col w-1/5 py-12 text-center bg-white group hover:bg-gray-100 rounded-xl">
      <a href={url} target="_blank">
        <div className="p-2">
          <i className={`fab fa-${icon} fa-2x group-hover:text-indigo-700`} />
        </div>
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="w-5/6 mx-auto">{description}</p>
      </a>
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
            url="https://github.com/mttchpmn"
            icon="github"
            description="Code and stuff"
          />
          <SocialBox
            title="LinkedIn"
            url="https://linkedin.com/in/mttchpmn"
            icon="linkedin"
            description="All about the synergy"
          />
          <SocialBox
            title="Youtube"
            url="https://www.youtube.com/channel/UCX46k4AHB9zabdB0zkwHMyw"
            icon="youtube"
            description="Lot's of country music"
          />
          <SocialBox
            title="Instagram"
            url="https://instagram.com/mttchpmn"
            icon="instagram"
            description="Climbing adventures"
          />
        </div>
      </div>
    </section>
  );
};

export default Social;
