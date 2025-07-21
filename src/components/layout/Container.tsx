import React from "react";
import { cn } from "../../lib/utils";
import { BoxProps } from "./types"; // Use BoxProps

const Container: React.FC<BoxProps> = ({
  children,
  className,
  width,
  height,
  align,
  borderStyle,
  borderRadius,
}) => {
  const classes = cn(
    "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", // Default container styling
    width,
    height,
    align,
    borderStyle,
    borderRadius,
    className
  );
  return <div className={classes}>{children}</div>;
};

export { Container };
