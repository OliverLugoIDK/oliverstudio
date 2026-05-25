import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Sobre Oliver",
  description: "Perfil profesional de Oliver Lugo: diseñador gráfico, director creativo y creador de sistemas visuales para marcas comerciales."
};

const principles = [
  "No hago diseños genéricos.",
  "No trabajo sin brief.",
  "No prometo resultados falsos.",
  "Diseño con impacto visual y criterio comercial.",
  "La percepción de valor también se diseña."
];

export default function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-red-radial" />
        <div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-white/10 bg-carbon shadow-redSoft">
  <img
    src="/images/oliver-profile.svg"
    alt="Oliver Lugo - Director creativo personal"
    className="h-full w-full object-cover"
  />
</div>
          <div>
            <SectionHeader eyebrow="Sobre mí" title="Diseñador gráfico, director creativo y constructor de impacto visual." description="Empecé a diseñar a través de juegos a mis 10 años. Ese inicio convirtió lo visual en una forma de pensar: crear mundos, ordenar información y hacer que algo se sienta más fuerte desde la primera mirada." />
            <div className="prose-soft mt-8 grid gap-4">
              <p>Con más de 5 años en el mercado, he trabajado con marcas, comercios, tiendas, software y sistemas. Mi enfoque está en la percepción: que una marca se vea más profesional, más clara y más preparada para competir.</p>
              <p>No diseño para llenar espacios. Diseño para comunicar valor. Cada decisión visual debe tener una razón: jerarquía, confianza, diferenciación, deseo o claridad comercial.</p>
            </div>
            <div className="mt-8 grid gap-3">
              {principles.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <CheckCircle2 className="h-5 w-5 text-redImpact" />
                  <p className="text-sm font-semibold text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
