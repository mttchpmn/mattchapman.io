type TitleProps = {
  variant: number;
  text: string;
};

const Title: React.FC<TitleProps> = ({ variant, text }) => {
  if (variant < 1 || variant > 4)
    console.error(`Title variant: ${variant} not valid`);

  switch (variant) {
    case 1:
      return <h1 className="mb-3 text-4xl font-bold text-black">{text}</h1>;
    case 2:
      return <h2 className="mb-2 text-3xl font-semibold text-black">{text}</h2>;
    case 3:
      return <h3 className="mb-1 text-2xl font-medium text-black">{text}</h3>;
    case 4:
      return <h4 className="text-xl text-gray-700">{text}</h4>;

    default:
      return null;
  }
};

export default Title;
