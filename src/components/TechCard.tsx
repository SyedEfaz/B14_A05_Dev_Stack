import { Star } from "lucide-react";
import type { Technology } from "@/types/tech";

const badgeTone: Record<string, string> = {
  Frontend: "bg-info/10 text-info",
  Backend: "bg-success/10 text-success",
  Database: "bg-brand/10 text-brand",
  Language: "bg-warning/10 text-warning",
  Styling: "bg-info/10 text-info",
  DevOps: "bg-success/10 text-success",
  Tools: "bg-brand/10 text-brand",
};

type TechCardProps = {
  tech: Technology;
  isSelected: boolean;
  onAdd: (tech: Technology) => void;
};

export function TechCard({ tech, isSelected, onAdd }: TechCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-lg">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={`${tech.name} logo`} className="h-8 w-8" loading="lazy" />
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
            badgeTone[tech.category] ?? "bg-muted text-muted-foreground"
          }`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-foreground">{tech.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tech.description}</p>

      <div className="mt-5 flex items-center justify-between gap-2 text-xs">
        <span className="rounded-md bg-muted px-2 py-1 font-medium text-foreground/80">
          {tech.category}
        </span>
        <span className="text-muted-foreground">{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-medium text-foreground">
          <Star size={13} className="fill-star text-star" />
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isSelected}
        className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          isSelected
            ? "cursor-not-allowed bg-muted text-muted-foreground"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}
