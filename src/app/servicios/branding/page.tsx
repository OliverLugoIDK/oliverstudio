import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Branding e identidad visual", description: "Branding esencial y marca profesional para negocios que necesitan identidad visual clara, coherente y comercial." };

export default function BrandingPage() {
  const selected = services.filter((s) => ["branding-esencial", "marca-profesional"].includes(s.slug));
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader eyebrow="Branding" title="Identidad visual para marcas que necesitan verse más serias, coherentes y memorables." description="Un logo no sostiene una marca completa. Construimos un sistema visual con reglas, aplicaciones y criterio para que cada pieza comunique lo mismo." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {selected.map((service) => (
              <article key={service.slug} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
                <p className="text-sm font-bold text-redImpact">{service.price}</p>
                <h2 className="mt-3 display text-3xl font-black">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{service.description}</p>
                <ul className="mt-6 grid gap-3">
                  {service.deliverables.map((item) => <li key={item} className="flex gap-2 text-sm text-zinc-300"><CheckCircle2 className="h-4 w-4 text-redImpact" />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
