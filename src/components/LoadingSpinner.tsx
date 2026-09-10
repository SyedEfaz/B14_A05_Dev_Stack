export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-brand" />
      <p className="text-sm text-muted-foreground">Loading technologies…</p>
    </div>
  );
}
