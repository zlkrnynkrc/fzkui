import React from "react";
import { cn } from "../../lib/utils";
import { LayoutProps } from "./types";

interface ChipProps extends LayoutProps {
  variant?: "default" | "secondary" | "outline" | "destructive"; // Similar to Badge variants
  onClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({
  children,
  variant = "default",
  className,
  onClick,
}) => {
  const classes = cn(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80":
        variant === "default",
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80":
        variant === "secondary",
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
        variant === "outline",
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80":
        variant === "destructive",
    },
    className
  );
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Chip;
