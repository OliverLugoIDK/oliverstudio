import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Consultoría visual", description: "Auditoría visual para detectar problemas de percepción, branding, redes y comunicación gráfica." };

export default function ConsultoriaPage() {
  const service = services.find((s) => s.slug === "consultoria-visual")!;
  return (
    <><section className="py-20 sm:py-28"><div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
      <SectionHeader eyebrow="Consultoría visual" title="Antes de diseñar más, hay que saber qué está fallando." description="Una sesión para revisar tu marca, detectar debilidades visuales y definir una ruta concreta de mejora." />
      <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"><p className="text-sm font-bold text-redImpact">{service.price}</p><h2 className="mt-3 display text-3xl font-black">{service.title}</h2><p className="mt-4 text-sm leading-7 text-zinc-400">{service.description}</p><ul className="mt-6 grid gap-3">{service.deliverables.map((item) => <li key={item} className="flex gap-2 text-sm text-zinc-300"><CheckCircle2 className="h-4 w-4 text-redImpact" />{item}</li>)}</ul></article>
    </div></section><CTASection /></>
  );
}
