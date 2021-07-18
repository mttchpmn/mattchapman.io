import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
  maxWidth?: string;
  background?: string;
  foreground?: string;
};

const Content: React.FC<ContentProps> = (props) => {
  const width = props.maxWidth ? props.maxWidth : "max-w-6xl";

  return (
    <div className={props.background && props.background}>
      <div
        className={`${width} px-2 md:px-8 mx-auto ${
          props.foreground && props.foreground
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Content;
