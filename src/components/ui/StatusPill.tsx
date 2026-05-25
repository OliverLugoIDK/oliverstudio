import { cn } from "@/lib/utils";

export function StatusPill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex rounded-full border border-redImpact/30 bg-redImpact/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-redImpact", className)}>
      {children}
    </span>
  );
}
