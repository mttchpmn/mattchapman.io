import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
  maxWidth?: string;
};

const Content: React.FC<ContentProps> = ({ children, maxWidth }) => {
  const width = maxWidth ? maxWidth : "max-w-6xl";

  return (
    <div className={``}>
      <div className={`${width} px-2 md:px-8 mx-auto`}>{children}</div>
    </div>
  );
};

export default Content;
