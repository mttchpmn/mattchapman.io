import Image from "next/image";
import { BannerContent } from "../lib/datocms";

const Banner = ({ content }: { content: BannerContent }) => {
  return (
    <section>
      <div className="">
        <img
          className="object-cover object-center w-full h-48 md:h-96"
          src={content.url}
        />
      </div>
    </section>
  );
};

export default Banner;
