import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-redImpact/70 focus:ring-offset-2 focus:ring-offset-obsidian",
    variant === "primary" && "bg-redImpact text-white shadow-redGlow hover:bg-white hover:text-obsidian",
    variant === "secondary" && "border border-white/12 bg-white/[0.04] text-white hover:border-redImpact/60 hover:bg-redImpact/10",
    variant === "ghost" && "text-zinc-300 hover:text-white",
    className
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type={type} className={classes}>{children}</button>;
}
