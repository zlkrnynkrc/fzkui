import React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../Button";
import { LayoutProps } from "./types";

interface FabProps extends LayoutProps {
  onClick?: () => void;
}

const Fab: React.FC<FabProps> = ({
  children,
  onClick,
  className,
  width,
  height,
  borderStyle,
  borderRadius,
}) => {
  const classes = cn(
    "fixed bottom-8 right-8 z-40 rounded-full p-4 shadow-lg",
    width,
    height,
    borderStyle,
    borderRadius,
    className
  );
  return (
    <Button onClick={onClick} className={classes}>
      {children}
    </Button>
  );
};

export { Fab };
