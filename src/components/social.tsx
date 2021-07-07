const SocialBox = ({ title, description, icon, url }) => {
  return (
    <div className="py-12 text-center bg-white group hover:bg-gray-100 rounded-xl">
      <a href={url} target="_blank">
        <div className="p-2 group-hover:text-indigo-700">
          {/* <box-icon type="logo" size="md" name={icon} animation="burst-hover" /> */}
          <i className={`bx bxl-${icon} bx-md`} />
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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <SocialBox
            title="GitHub"
            url="https://github.com/mttchpmn"
            icon="github"
            description="Code and stuff"
          />
          <SocialBox
            title="LinkedIn"
            url="https://linkedin.com/in/mttchpmn"
            icon="linkedin-square"
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
