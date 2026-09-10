import { TechCard } from "./TechCard";
import type { Technology } from "@/types/tech";

type TechGridProps = {
  technologies: Technology[];
  selectedStack: Technology[];
  onAdd: (tech: Technology) => void;
};

export function TechGrid({ technologies, selectedStack, onAdd }: TechGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isSelected={selectedStack.some((item) => item.id === tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
