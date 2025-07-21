import React from "react";
import { cn } from "../lib/utils";
import { LayoutProps } from "./layout/types";
import Expanded from "./layout/Expanded";

interface ListTileProps extends LayoutProps {
  leading?: React.ReactNode;
  body: React.ReactNode;
  trailing?: React.ReactNode;
  onClick?: () => void;
}

const ListTile: React.FC<ListTileProps> = ({
  leading,
  body,
  trailing,
  onClick,
  className,
  width,
  height,
  borderStyle,
  borderRadius,
}) => {
  return (
    <div
      className={cn(
        "flex items-center p-4 gap-4 border-b border-border cursor-pointer hover:bg-muted transition-colors",
        width,
        height,
        borderStyle,
        borderRadius,
        className
      )}
      onClick={onClick}
    >
      {leading && <div className="flex-shrink-0">{leading}</div>}
      <Expanded className="min-w-0">{body}</Expanded>
      {trailing && <div className="flex-shrink-0">{trailing}</div>}
    </div>
  );
};

export default ListTile;
