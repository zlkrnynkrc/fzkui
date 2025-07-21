import React from "react";
import { cn } from "../../lib/utils";
import { GridViewProps, GridColumns, Width } from "./types";

const GridView: React.FC<GridViewProps> = ({
  children,
  gap,
  columns = GridColumns["2"],
  className,
  width = Width.Full,
  height,
  borderStyle,
  borderRadius,
}) => {
  const classes = cn(
    "grid",
    columns,
    gap,
    width,
    height,
    borderStyle,
    borderRadius,
    className
  );

  return <div className={classes}>{children}</div>;
};

export { GridView };
