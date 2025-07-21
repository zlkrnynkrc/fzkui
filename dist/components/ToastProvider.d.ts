import { default as React } from 'react';

interface Toast {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    variant?: "default" | "destructive" | "success" | "info";
    duration?: number;
    open: boolean;
}
export interface ToastContextType {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, "id" | "open">) => string;
    dismissToast: (id: string) => void;
}
export declare const ToastContext: React.Context<ToastContextType | undefined>;
export declare const ToastProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};
