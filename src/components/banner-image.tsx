import Image from "next/image";
import { BannerContent } from "../lib/datocms";

const Banner = ({ content }: { content: BannerContent }) => {
  console.log({ content });
  return (
    <section>
      <div className="relative w-full h-48 md:h-96">
        <Image
          src={content.url}
          placeholder="blur"
          blurDataURL={content.blurUpThumb}
          alt="Picture of Lake Wakatipu, New Zealand"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Banner;
