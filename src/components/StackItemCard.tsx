import { X } from "lucide-react";
import type { Technology } from "@/types/tech";

type StackItemCardProps = {
  tech: Technology;
  onRemove: (tech: Technology) => void;
};

export function StackItemCard({ tech, onRemove }: StackItemCardProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-border p-3">
      <img src={tech.icon} alt={`${tech.name} logo`} className="h-7 w-7" loading="lazy" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">{tech.name}</p>
        <p className="truncate text-[11px] text-muted-foreground">{tech.category}</p>
      </div>
      <button
        onClick={() => onRemove(tech)}
        aria-label={`Remove ${tech.name}`}
        className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
      >
        <X size={16} />
      </button>
    </li>
  );
}
