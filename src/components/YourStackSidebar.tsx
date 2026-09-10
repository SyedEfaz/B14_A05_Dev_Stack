import { StackItemCard } from "./StackItemCard";
import type { Technology } from "@/types/tech";

type YourStackSidebarProps = {
  selectedStack: Technology[];
  onRemove: (tech: Technology) => void;
  onRemoveAll: () => void;
};

export function YourStackSidebar({ selectedStack, onRemove, onRemoveAll }: YourStackSidebarProps) {
  const count = selectedStack.length;

  return (
    <aside className="sticky top-24 rounded-xl border border-border bg-card p-5">
      <h2 className="text-lg font-bold text-foreground">Your Stack</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {count === 0
          ? "No technologies selected yet."
          : `${count} Technolog${count === 1 ? "y" : "ies"} Selected`}
      </p>

      {count === 0 ? (
        <div className="mt-5 rounded-lg border border-dashed border-border px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <ul className="mt-5 space-y-3">
            {selectedStack.map((tech) => (
              <StackItemCard key={tech.id} tech={tech} onRemove={onRemove} />
            ))}
          </ul>
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-destructive/40 py-2.5 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/5"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
