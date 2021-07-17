type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
}) => {
  const classnames = new Map();
  classnames.set("primary", "bg-gray-500 hover:bg-gray-700 text-white");
  classnames.set(
    "secondary",
    "border-2 border-gray-700 border-opacity-60 hover:bg-gray-200 bg-white text-gray-700"
  );

  if (!classnames.has(variant))
    console.error(`Button variant: '${variant}' not found.`);

  return (
    <div>
      <button
        onClick={onClick}
        className={`py-2 px-4 rounded` + " " + classnames.get(variant)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
