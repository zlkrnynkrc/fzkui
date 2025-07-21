import React, { createContext, useState, useEffect, useCallback } from "react";
import { cn } from "../lib/utils";

interface Toast {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive" | "success" | "info";
  duration?: number; // in milliseconds
  open: boolean;
}

export interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id" | "open">) => string;
  dismissToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
); // Export ToastContext

const TOAST_REMOVE_DELAY = 300; // Time for fade-out animation
const DEFAULT_TOAST_DURATION = 5000; // Default display duration

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastTimeouts = React.useRef<
    Map<string, ReturnType<typeof setTimeout>>
  >(new Map());

  const addToast = useCallback((newToast: Omit<Toast, "id" | "open">) => {
    const id = Math.random().toString(36).substring(2, 9); // Simple ID generation
    const toastToAdd: Toast = {
      ...newToast,
      id,
      open: true,
      duration: newToast.duration ?? DEFAULT_TOAST_DURATION,
    };
    setToasts((prev) => [...prev, toastToAdd]);
    return id;
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, open: false } : t))
    );
    // Schedule removal after animation
    if (toastTimeouts.current.has(id)) {
      clearTimeout(toastTimeouts.current.get(id)!);
    }
    const timeout = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      toastTimeouts.current.delete(id);
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.current.set(id, timeout);
  }, []);

  useEffect(() => {
    toasts.forEach((toast) => {
      if (
        toast.open &&
        toast.duration !== Infinity &&
        !toastTimeouts.current.has(toast.id)
      ) {
        const timeout = setTimeout(() => {
          dismissToast(toast.id);
        }, toast.duration);
        toastTimeouts.current.set(toast.id, timeout);
      }
    });
  }, [toasts, dismissToast]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
      <div className="fixed top-0 right-0 z-[9999] p-4 space-y-2 w-full max-w-xs pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all duration-300",
              toast.open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full", // Simple slide/fade animation
              toast.variant === "destructive" &&
                "border-destructive bg-destructive text-destructive-foreground",
              toast.variant === "success" &&
                "border-green-500 bg-green-500 text-white",
              toast.variant === "info" &&
                "border-blue-500 bg-blue-500 text-white",
              toast.variant === "default" && "bg-background text-foreground"
            )}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <div className="grid gap-1">
              {toast.title && (
                <div className="text-sm font-semibold">{toast.title}</div>
              )}
              {toast.description && (
                <div className="text-sm opacity-90">{toast.description}</div>
              )}
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 pointer-events-auto"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
