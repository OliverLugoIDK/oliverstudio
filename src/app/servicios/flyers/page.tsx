import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Flyers y campañas visuales", description: "Flyers, posts promocionales, banners y piezas comerciales de alto impacto para ofertas, eventos y lanzamientos." };

export default function FlyersPage() {
  const service = services.find((s) => s.slug === "diseno-puntual")!;
  return (
    <><section className="py-20 sm:py-28"><div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
      <SectionHeader eyebrow="Flyers" title="Piezas promocionales que se entienden rápido y se ven con más valor." description="Un flyer no es llenar una imagen de información. Es ordenar atención, jerarquía y oferta para que el cliente capte lo importante." />
      <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"><p className="text-sm font-bold text-redImpact">{service.price}</p><h2 className="mt-3 display text-3xl font-black">{service.title}</h2><p className="mt-4 text-sm leading-7 text-zinc-400">{service.description}</p><ul className="mt-6 grid gap-3">{service.deliverables.map((item) => <li key={item} className="flex gap-2 text-sm text-zinc-300"><CheckCircle2 className="h-4 w-4 text-redImpact" />{item}</li>)}</ul></article>
    </div></section><CTASection /></>
  );
}
