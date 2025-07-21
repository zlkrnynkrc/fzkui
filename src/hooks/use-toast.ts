import { useContext } from "react";
import { ToastContext } from "../components/ToastProvider"; // Import ToastContext directly

export const useToast = () => {
  const context = useContext(ToastContext); // Use ToastContext here
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
