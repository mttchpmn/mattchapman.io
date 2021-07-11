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
    <div className="h-full px-8 pt-24 bg-white">
      <div className="min-w-full prose prose-lg">
        <StructuredText data={content} renderBlock={handleBlockRender} />
      </div>
    </div>
  );
};

export default PostContent;
