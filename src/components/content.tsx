const Content = ({
  children,
  background = null,
  foreground = null,
  maxWidth = null,
}) => {
  const bg = background ? "bg-" + background : "";
  const fg = foreground ? "bg-" + foreground : "";
  const width = maxWidth ? maxWidth : "max-w-6xl";

  return (
    <div className={`w-screen h-screen ${bg}`}>
      <div className={`${width} px-2 md:px-8 mx-auto ${fg}`}>{children}</div>
    </div>
  );
};

export default Content;
