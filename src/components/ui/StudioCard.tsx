import { cn } from "@/lib/utils";

export function StudioCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-redSoft backdrop-blur-xl", className)}>
      {children}
    </div>
  );
}
