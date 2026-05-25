import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services, serviceGroups } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Servicios de diseño gráfico",
  description: "Servicios de branding, diseño para redes, flyers, campañas, consultoría visual y dirección creativa de Oliver Lugo Studio."
};

export default function ServiciosPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-red-radial" />
        <div className="container-page">
          <SectionHeader
            eyebrow="Servicios"
            title="Diseño gráfico para marcas que quieren verse más profesionales, no más genéricas."
            description="Elige una pieza puntual, una identidad completa o una ruta mensual. Los precios son referenciales y el alcance final se define por brief."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} id={service.slug} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-redImpact">{service.eyebrow}</p>
                <h2 className="mt-4 display text-2xl font-black">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{service.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div>
                    <p className="text-xs text-zinc-500">Precio</p>
                    <p className="display text-xl font-black">{service.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Tiempo</p>
                    <p className="text-sm font-bold text-zinc-300">{service.timeframe}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-zinc-500">Incluye</p>
                  <ul className="grid gap-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-zinc-300"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-redImpact" /> {item}</li>
                    ))}
                  </ul>
                </div>
                <Button href={service.href} variant="secondary" className="mt-7 w-full gap-2">Ver detalle <ArrowUpRight className="h-4 w-4" /></Button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="container-page rounded-[2rem] border border-white/10 bg-carbon p-8 sm:p-10">
          <SectionHeader
            eyebrow="Capacidades"
            title="Servicios que pueden combinarse según la necesidad real de la marca."
            description="No todos los proyectos necesitan lo mismo. Una tienda puede necesitar flyers y redes; una marca nueva puede necesitar identidad; un sistema puede necesitar dirección visual y presentación comercial."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {serviceGroups.map((service) => (
              <span key={service} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-300">{service}</span>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
