import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SelectedProjects() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Portafolio"
            title="Proyectos con dirección visual, intención comercial y mejor percepción de marca."
            description="Casos preparados para mostrar el proceso: problema visual, solución aplicada y resultado de comunicación. Reemplaza los covers por tus piezas reales cuando las tengas listas."
          />
          <Link href="/portafolio" className="inline-flex items-center gap-2 text-sm font-bold text-redImpact hover:text-white">
            Ver todos <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <Link key={project.slug} href={`/portafolio/${project.slug}`} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 transition hover:border-redImpact/60 hover:bg-redImpact/[0.04]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-carbon">
                <Image src={project.cover} alt={project.client} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-4">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-redImpact">{project.category}</p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="display text-2xl font-black text-white">{project.client}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{project.summary}</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white group-hover:bg-redImpact">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
