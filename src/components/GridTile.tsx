import React from "react";
import { cn } from "../lib/utils";
import { LayoutProps } from "./layout/types";
import Expanded from "./layout/Expanded";
import { Card, CardContent, CardFooter, CardHeader } from "./Card";

interface GridTileProps extends LayoutProps {
  leading?: React.ReactNode;
  body: React.ReactNode;
  trailing?: React.ReactNode;
  onClick?: () => void;
}

const GridTile: React.FC<GridTileProps> = ({
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
    <Card
      width={width} // Pass width to Card
      height={height} // Pass height to Card
      borderStyle={borderStyle} // Pass borderStyle to Card
      borderRadius={borderRadius} // Pass borderRadius to Card
      className={cn(
        "flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow",
        className
      )}
      onClick={onClick}
    >
      {leading && <CardHeader className="p-0">{leading}</CardHeader>}
      <CardContent className="p-4 flex-grow flex flex-col">
        <Expanded>{body}</Expanded>
      </CardContent>
      {trailing && <CardFooter className="p-4 pt-0">{trailing}</CardFooter>}
    </Card>
  );
};

export default GridTile;
