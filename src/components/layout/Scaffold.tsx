import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { ScaffoldProps } from "./types";
import SafeArea from "./SafeArea";

const DEFAULT_BAR_HEIGHT_PX = 64;

const Scaffold: React.FC<ScaffoldProps> = ({
  appBar,
  body,
  floatingActionButton,
  bottomAppBar,
  className,
  appBarHeightPx,
  bottomAppBarHeightPx,
}) => {
  const mainRef = useRef<HTMLElement>(null);
  const [isAtScrollEnd, setIsAtScrollEnd] = useState(false);

  const currentAppBarHeight = appBar
    ? appBarHeightPx ?? DEFAULT_BAR_HEIGHT_PX
    : 0;
  const currentBottomAppBarHeight = bottomAppBar
    ? bottomAppBarHeightPx ?? DEFAULT_BAR_HEIGHT_PX
    : 0;

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = mainElement;
      const tolerance = 1;
      const isScrollable = scrollHeight > clientHeight;
      const atEnd = scrollTop + clientHeight >= scrollHeight - tolerance;

      setIsAtScrollEnd(isScrollable && atEnd);
    };

    mainElement.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      mainElement.removeEventListener("scroll", handleScroll);
    };
  }, [body, currentAppBarHeight, currentBottomAppBarHeight]);

  const classes = cn(
    "relative flex flex-col min-h-screen bg-background text-foreground",
    className
  );

  return (
    <div className={classes}>
      {appBar}
      <main
        ref={mainRef}
        className="flex-1 overflow-auto w-full"
        style={{
          paddingTop: `${currentAppBarHeight}px`,
          paddingBottom: `${currentBottomAppBarHeight}px`,
        }}
      >
        <SafeArea className="h-full w-full">{body}</SafeArea>
      </main>
      {floatingActionButton && (
        <div
          className={cn(
            "fixed right-8 z-40 transition-all duration-300 ease-in-out",
            isAtScrollEnd ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
          style={{
            bottom: `${currentBottomAppBarHeight + 32}px`,
          }}
        >
          {floatingActionButton}
        </div>
      )}
      {bottomAppBar}
    </div>
  );
};

export default Scaffold;
