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

export default Social;
