import Icon from "./ui/icon";
import Title from "./ui/title";

const SocialBox = ({ title, description, icon, url }) => {
  return (
    <div className="py-6 text-center bg-white border-2 border-transparent border-opacity-60 hover:border-gray-200 group hover:bg-gray-50 rounded-xl">
      <a rel="noopener noreferrer" href={url} target="_blank">
        <div className="p-2 group-hover:text-indigo-700">
          <Icon name={`bxl-${icon}`} variant="md" />
        </div>
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="w-2/3 mx-auto">{description}</p>
      </a>
    </div>
  );
};

const Social = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="pt-6 text-center">
        <Title variant={2} text="Follow me on social" />
      </div>
      <div className="max-w-6xl px-5 pt-6 pb-12 mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
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
