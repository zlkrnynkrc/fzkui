import React from "react";
import { cn } from "../../lib/utils";
import { LayoutProps } from "./types";

interface AppBarProps extends LayoutProps {
  title?: React.ReactNode;
  leading?: React.ReactNode; // Content for the left side (e.g., back button)
  actions?: React.ReactNode; // Content for the right side (e.g., action icons)
}

const AppBar: React.FC<AppBarProps> = ({
  children,
  title,
  leading,
  actions,
  className,
  width,
  height,
  borderStyle,
  borderRadius,
}) => {
  const classes = cn(
    "fixed top-0 left-0 right-0 z-50 bg-background border-b border-border p-4 shadow-sm flex items-center justify-between h-16", // Added h-16 for fixed height
    width,
    height,
    borderStyle,
    borderRadius,
    className
  );
  return (
    <header className={classes}>
      <div className="flex items-center gap-2">
        {leading}
        {title && <h2 className="text-xl font-semibold">{title}</h2>}
      </div>
      {children} {/* For custom content in the middle */}
      <div className="flex items-center gap-2">{actions}</div>
    </header>
  );
};

export { AppBar };
