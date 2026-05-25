import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio de Oliver Lugo Studio: proyectos de branding, redes, diseño comercial, tiendas, software y dirección visual."
};

export default function PortafolioPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-red-radial" />
        <div className="container-page">
          <SectionHeader
            eyebrow="Portafolio"
            title="Casos visuales preparados para mostrar criterio, proceso y dirección creativa."
            description="Estos casos están estructurados con la información disponible. Cuando tengas imágenes reales, solo reemplaza los covers y galerías dentro de /public/projects."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/portafolio/${project.slug}`} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 transition hover:border-redImpact/60 hover:bg-redImpact/[0.04]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-carbon">
                  <Image src={project.cover} alt={project.client} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-redImpact">{project.category}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="display text-3xl font-black text-white">{project.client}</h2>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{project.summary}</p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] group-hover:bg-redImpact">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
