import { X } from "lucide-react";

export type ToastMessage = {
  id: number;
  message: string;
  type: "success" | "warning" | "info";
};

const toneClass: Record<ToastMessage["type"], string> = {
  success: "border-success/40 text-success",
  warning: "border-warning/50 text-warning",
  info: "border-info/40 text-info",
};

export function Toast({ toast, onClose }: { toast: ToastMessage; onClose: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-[60] animate-in fade-in slide-in-from-bottom-4">
      <div
        role="status"
        className={`flex items-center gap-4 rounded-lg border bg-card px-4 py-3 shadow-lg ${toneClass[toast.type]}`}
      >
        <span className="text-sm font-medium">{toast.message}</span>
        <button onClick={onClose} aria-label="Dismiss notification" className="text-muted-foreground hover:text-foreground">
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
