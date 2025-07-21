import React from "react";
import { cn } from "../lib/utils";
import { LayoutProps, BadgeType } from "./layout/types"; // Import BadgeType

interface BadgeProps extends LayoutProps {
  variant?: BadgeType; // Use BadgeType enum
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = BadgeType.Default,
  width,
  height,
  borderStyle,
  borderRadius,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variantClasses = {
    [BadgeType.Default]:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    [BadgeType.Secondary]:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    [BadgeType.Destructive]:
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    [BadgeType.Outline]: "text-foreground",
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        width,
        height,
        borderStyle,
        borderRadius,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Badge };
