import React from "react";
import { cn } from "../../lib/utils";
import { BoxProps } from "./types"; // Use BoxProps

const Scroll: React.FC<BoxProps> = ({
  children,
  className,
  width,
  height,
  align,
  borderStyle,
  borderRadius,
}) => {
  const classes = cn(
    "overflow-auto w-full h-full", // Takes full width/height of parent and enables scrolling
    width,
    height,
    align,
    borderStyle,
    borderRadius,
    className
  );
  return <div className={classes}>{children}</div>;
};

export default Scroll;
