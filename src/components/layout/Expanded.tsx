import React from "react";
import { cn } from "../../lib/utils";
import { BoxProps } from "./types";

interface ExpandedProps extends BoxProps {
  flexGrow?: number;
}

const Expanded: React.FC<ExpandedProps> = ({
  children,
  flexGrow = 1,
  className,
  width,
  height,
  align,
  borderStyle,
  borderRadius,
}) => {
  const classes = cn(
    `flex-grow-[${flexGrow}]`,
    width,
    height,
    align,
    borderStyle,
    borderRadius,
    className
  );
  return <div className={classes}>{children}</div>;
};

export default Expanded;
