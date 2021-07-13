const Content = ({ children, background = "", foreground = "" }) => {
  const bg = background ? "bg-" + background : "";
  const fg = foreground ? "bg-" + foreground : "";

  return (
    <div className={`w-full h-full ${bg}`}>
      <div className={`max-w-6xl px-8 mx-auto ${fg}`}>{children}</div>
    </div>
  );
};

export default Content;
