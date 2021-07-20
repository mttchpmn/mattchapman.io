import Image from "next/image";
import Link from "next/link";
import Icon from "./icon";

type CardProps = {
  title: string;
  description: string;
  category: string;
  img: string;
  href: string;
  cta: string;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="w-full h-full p-4">
      <div className="bg-white border-2 border-gray-200 rounded-lg border-opacity-60">
        {/* Card media */}
        <div className="relative h-40 rounded-lg sm:h-64 lg:h-52">
          <Image src={props.img} layout="fill" objectFit="cover" />
        </div>

        {/* Card content */}
        <div className="flex flex-col justify-between h-64 p-6 md:h-64">
          <div>
            <p className="text-sm text-gray-400">{props.category}</p>
            <div className="py-2">
              <h3 className="text-lg text-black">{props.title}</h3>
            </div>
            <div className="text-gray-700">{props.description}</div>
          </div>
          <Link href={props.href}>
            <a>
              <div className="flex text-purple-500 hover:text-purple-700">
                <p>{props.cta}</p>
                <Icon name="bxs-right-arrow-alt" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
