import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StudioCard } from "@/components/ui/StudioCard";

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-carbon" />
      <div className="container-page">
        <SectionHeader
          eyebrow="Servicios"
          title="No vendo piezas sueltas sin criterio. Diseño sistemas visuales que sostienen una marca."
          description="Puedes empezar con una pieza puntual, una consultoría o una identidad completa. El precio final depende del alcance real del proyecto."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StudioCard key={service.slug} className="group flex min-h-[310px] flex-col transition hover:border-redImpact/60">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-redImpact">{service.eyebrow}</p>
              <h3 className="mt-4 display text-2xl font-black">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">{service.description}</p>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                <div>
                  <p className="text-xs text-zinc-500">Precio referencial</p>
                  <p className="display text-2xl font-black text-white">{service.price}</p>
                </div>
                <Link href={service.href} className="grid h-11 w-11 place-items-center rounded-full bg-white text-obsidian transition group-hover:bg-redImpact group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </StudioCard>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-zinc-500">
          Los precios son “desde”. El presupuesto final se define después del brief, materiales disponibles, cantidad de piezas, revisiones, urgencia y derechos de uso.
        </p>
      </div>
    </section>
  );
}
