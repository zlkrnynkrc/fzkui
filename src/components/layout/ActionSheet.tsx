import React from "react";
import { cn } from "../../lib/utils";
import { ActionSheetProps } from "./types";

const ActionSheet: React.FC<ActionSheetProps> = ({
  open,
  onOpenChange,
  title,
  description,
  content,
  footer,
  className,
}) => {
  if (!open) return null;

  // Basic keyboard accessibility: Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onOpenChange]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-end bg-black/50 backdrop-blur-sm",
        open ? "animate-in fade-in-0" : "animate-out fade-out-0"
      )}
      onClick={() => onOpenChange(false)} // Close on overlay click
    >
      <div
        className={cn(
          "relative z-50 flex h-auto w-full flex-col rounded-t-[10px] border-t bg-card p-4 shadow-lg transition-all ease-in-out duration-300",
          open ? "slide-in-from-bottom" : "slide-out-to-bottom",
          className
        )}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sheet content
      >
        <div className="mx-auto h-2 w-[100px] rounded-full bg-muted" />{" "}
        {/* Handle for dragging */}
        <div className="flex flex-col space-y-1.5 text-center sm:text-left mt-4">
          {title && (
            <h2 className="text-lg font-semibold leading-none tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="py-4 flex-1 overflow-auto">{content}</div>
        {footer && (
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionSheet;
