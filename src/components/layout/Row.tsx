import React from "react";
import { cn } from "../../lib/utils";
import { FlexLayoutProps, Width } from "./types";

const Row: React.FC<FlexLayoutProps> = ({
  children,
  mainAxisAlignment,
  crossAxisAlignment,
  gap,
  className,
  width = Width.Full,
  height,
  borderStyle,
  borderRadius,
}) => {
  const classes = cn(
    "flex flex-row",
    mainAxisAlignment,
    crossAxisAlignment,
    gap,
    width,
    height,
    borderStyle,
    borderRadius,
    className
  );

  return <div className={classes}>{children}</div>;
};

export { Row };
