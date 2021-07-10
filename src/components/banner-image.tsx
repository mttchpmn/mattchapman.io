import Image from "next/image";
import { BannerContent } from "../lib/datocms";

const Banner = ({ content }: { content: BannerContent }) => {
  return (
    <section>
      <div className="relative w-full h-48 bg-gray-500 md:h-96">
        <Image
          src={content.url}
          alt="Picture of Lake Wakatipu, New Zealand"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Banner;
