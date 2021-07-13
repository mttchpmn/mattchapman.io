import Image from "next/image";
import { StructuredText } from "react-datocms";

const ImageBlock = ({ title, url, caption }) => {
  return (
    <div className="w-full bg-gray-500">
      <h3>{title}</h3>
      <div className="relative w-full h-96">
        <Image src={url} layout="fill" objectFit="cover" />
      </div>
      <p>{caption}</p>
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
          />
        );
      default:
        return <p>default</p>;
    }
  };

  return (
    <div className="">
      <div className="py-8">
        <p className="text-right">June 2021</p>
        <p className="text-right">Adventure</p>
      </div>
      <div className="min-w-full pt-12 pb-48 prose prose-lg">
        <StructuredText data={content} renderBlock={handleBlockRender} />
      </div>
    </div>
  );
};

export default PostContent;
