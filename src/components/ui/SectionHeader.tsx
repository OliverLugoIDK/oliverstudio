import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, align = "left", className }: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">{eyebrow}</p>}
      <h2 className="mt-4 display text-3xl font-black tracking-tight text-white sm:text-5xl text-balance">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">{description}</p>}
    </div>
  );
}
