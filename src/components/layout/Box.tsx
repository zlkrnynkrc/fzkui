import React from "react";
import { cn } from "../../lib/utils";
import { BoxProps } from "./types";

const Box: React.FC<BoxProps> = ({
  children,
  width,
  height,
  align,
  borderStyle,
  borderRadius,
  className,
}) => {
  const classes = cn(
    width,
    height,
    align,
    borderStyle,
    borderRadius,
    className
  );

  return <div className={classes}>{children}</div>;
};

export { Box };
