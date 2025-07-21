import React from "react";
import { cn } from "../../lib/utils";
import { BottomAppBarProps, Width } from "./types";
import { Row } from "./Row";

const BottomAppBar: React.FC<BottomAppBarProps> = ({
  children,
  actions,
  className,
  width = Width.Full,
  height,
  borderStyle,
  borderRadius,
}) => {
  const classes = cn(
    "fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4 shadow-sm flex items-center justify-between h-16",
    width,
    height,
    borderStyle,
    borderRadius,
    className
  );
  return (
    <footer className={classes}>
      {children}
      <Row gap="gap-2">{actions}</Row>
    </footer>
  );
};

export { BottomAppBar };
