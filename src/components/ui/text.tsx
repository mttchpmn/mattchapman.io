type TextProps = {
  content: string;
  color?: string;
};

const Text: React.FC<TextProps> = ({ content, color }) => {
  const textColor = color ?? "text-gray-700";
  const cls = `leading-relaxed ${textColor}`;

  return <p className={cls}>{content}</p>;
};

export default Text;
