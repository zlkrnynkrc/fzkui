import React from "react";
import { cn } from "../../lib/utils";
import { BoxProps } from "./types"; // Use BoxProps

const SafeArea: React.FC<BoxProps> = ({
  children,
  className,
  width,
  height,
  align,
  borderStyle,
  borderRadius,
}) => {
  const classes = cn(
    "pt-[var(--sab-top)] pb-[var(--sab-bottom)] pl-[var(--sab-left)] pr-[var(--sab-right)]",
    width,
    height,
    align,
    borderStyle,
    borderRadius,
    className
  );
  return <div className={classes}>{children}</div>;
};

export { SafeArea };
