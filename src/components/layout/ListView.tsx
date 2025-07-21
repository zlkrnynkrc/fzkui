import React from "react";
import { cn } from "../../lib/utils";
import { ListViewProps, Width } from "./types";
import { Col } from "./Col";
import { Scroll } from "./Scroll";

const ListView: React.FC<ListViewProps> = ({
  children,
  gap,
  className,
  width = Width.Full,
  height,
  borderStyle,
  borderRadius,
}) => {
  return (
    <Scroll
      width={width}
      height={height}
      borderStyle={borderStyle}
      borderRadius={borderRadius}
      className={cn("flex-1", className)}
    >
      <Col gap={gap} width={Width.Full}>
        {children}
      </Col>
    </Scroll>
  );
};

export { ListView };
