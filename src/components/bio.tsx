import Link from "next/link";
import Image from "next/image";

import { AboutContent } from "../lib/datocms";
import Button from "./ui/button";
import Title from "./ui/title";
import Text from "./ui/text";

export default function Bio({ content }: { content: AboutContent }) {
  return (
    <section className="text-gray-600 body-font bg-grey-500">
      <div className="flex flex-col items-center max-w-6xl px-5 py-16 mx-auto md:py-24 md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <Title variant={1} text={content.tagline} />
          <div className="mb-8">
            <Text content={content.description} />
          </div>
          <div className="flex justify-center w-full md:justify-start">
            <Link href="#contact">
              <Button text="Get in touch" />
            </Link>
          </div>
        </div>
        <div className="relative w-11/12 h-64 lg:max-w-lg lg:w-full md:w-1/2">
          <Image src={content.url} layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
}
