import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { CTASection } from "@/components/sections/CTASection";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return { title: "Proyecto" };
  return {
    title: project.client,
    description: project.summary
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-red-radial" />
        <div className="container-page">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">{project.category}</p>
          <h1 className="mt-5 display text-5xl font-black tracking-tight sm:text-7xl text-balance">{project.client}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{project.summary}</p>
          <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-[2.3rem] border border-white/10 bg-carbon shadow-redSoft">
            <Image src={project.cover} alt={project.client} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">Tipo</p>
            <p className="mt-3 display text-2xl font-black">{project.type}</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">Enfoque</p>
            <p className="mt-3 display text-2xl font-black">{project.accent}</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">Servicios</p>
            <p className="mt-3 display text-2xl font-black">{project.services.length} áreas</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">Problema</p>
            <h2 className="mt-4 display text-4xl font-black">Qué necesitaba mejorar</h2>
            <p className="mt-5 text-base leading-8 text-zinc-400">{project.problem}</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">Solución aplicada</p>
            <ul className="mt-6 grid gap-4">
              {project.solution.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-zinc-300">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-redImpact" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-carbon p-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">Resultado visual</p>
            <p className="mt-5 text-lg leading-9 text-zinc-300">{project.result}</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500">Servicios usados</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.services.map((service) => (
                <span key={service} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-zinc-300">{service}</span>
              ))}
            </div>
            <p className="mt-6 text-xs leading-6 text-zinc-500">{project.notes}</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
