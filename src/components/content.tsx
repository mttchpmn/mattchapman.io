const Content = ({
  children,
  background = null,
  foreground = null,
  maxWidth = null,
}) => {
  const bg = background ? "bg-" + background : "";
  const fg = foreground ? "bg-" + foreground : "";
  const width = maxWidth ? "max-w-" + maxWidth : "max-w-6xl";

  return (
    <div className={`w-full h-full ${bg}`}>
      <div className={`${width} px-8 mx-auto ${fg}`}>{children}</div>
    </div>
  );
};

export default Content;
