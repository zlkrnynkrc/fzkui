import React from "react";
import { cn } from "../../lib/utils";
import { FlexLayoutProps, Width } from "./types";

const Col: React.FC<FlexLayoutProps> = ({
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
    "flex flex-col",
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

export default Col;
