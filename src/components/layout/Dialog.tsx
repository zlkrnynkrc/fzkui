import React from "react";
import { cn } from "../../lib/utils";
import { DialogProps } from "./types";

const Dialog: React.FC<DialogProps> = ({
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
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
        open ? "animate-in fade-in-0" : "animate-out fade-out-0"
      )}
      onClick={() => onOpenChange(false)} // Close on overlay click
    >
      <div
        className={cn(
          "relative z-50 w-full max-w-lg gap-4 border bg-card p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
          open
            ? "animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]"
            : "animate-out fade-out-0 zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]",
          className
        )}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside dialog content
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          {title && (
            <h2 className="text-lg font-semibold leading-none tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="py-4">{content}</div>
        {footer && (
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialog;
