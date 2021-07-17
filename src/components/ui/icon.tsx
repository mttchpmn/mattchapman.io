type IconProps = {
  name: string;
  variant?: "xs" | "sm" | "md" | "lg";
};

const Icon: React.FC<IconProps> = (props) => {
  const size = props.variant ? props.variant : "sm";
  const cls = `bx bx-${size} ${props.name}`;

  return <i className={cls} />;
};

export default Icon;
