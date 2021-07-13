import Image from "next/image";
import { StructuredText } from "react-datocms";

const LargeImage = ({ title, url, caption }) => {
  return (
    <div className="py-10">
      <div className="w-full h-96 lg:h-750">
        <div className="absolute w-5/6 transform -translate-x-1/2 xl:w-2/3 left-1/2 h-96 lg:h-750">
          <div className="relative w-full h-96 lg:h-750">
            <Image src={url} layout="fill" objectFit="cover" />
          </div>
          <div className="text-sm text-center">{caption}</div>
        </div>
      </div>
    </div>
  );
};

const SmallImage = ({ title, url, caption }) => (
  <div className="w-full">
    <div className="relative w-full h-96">
      <Image src={url} layout="fill" objectFit="cover" />
    </div>
    <div className="text-sm text-center">{caption}</div>
  </div>
);

const ImageBlock = ({ title, url, caption, lrg }) => {
  return lrg ? (
    <LargeImage title={title} url={url} caption={caption} />
  ) : (
    <SmallImage title={title} url={url} caption={caption} />
  );
};

const Meta = ({ tag, date }) => {
  return (
    <div className="py-8">
      <div className="flex justify-end">
        <p className="pr-2 text-right">{date}</p>
        <i className="bx bx-sm bx-calendar" />
      </div>
      <a href="#">
        <div className="flex justify-end pt-2">
          <p className="pr-2 text-right">{tag}</p>
          <i className="bx bx-sm bx-purchase-tag" />
        </div>
      </a>
    </div>
  );
};

const PostContent = ({ content }) => {
  const handleBlockRender = ({ record }) => {
    switch (record.__typename) {
      case "ImageBlockRecord":
        return (
          <ImageBlock
            title={record.title}
            url={record.image.url}
            caption={record.caption}
            lrg={true}
          />
        );
      default:
        return <p>default</p>;
    }
  };

  return (
    <div className="">
      <Meta tag="Adventure" date="July 2021" />
      <div className="min-w-full pt-12 pb-48 prose prose-lg">
        <StructuredText data={content} renderBlock={handleBlockRender} />
      </div>
    </div>
  );
};

export default PostContent;
