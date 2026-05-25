import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Cursos", description: "Cursos de diseño, branding, impacto visual e inteligencia artificial de Oliver Lugo Studio. Próximamente." };

export default function CursosPage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-red-radial" />
      <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">Próximamente</p>
          <h1 className="mt-5 display text-5xl font-black tracking-tight sm:text-7xl text-balance">Cursos para entender diseño como impacto visual, no como decoración.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">La prioridad actual de la web es vender servicios y mostrar portafolio. Esta sección queda preparada para futuras formaciones.</p>
          <Button href="/servicios" className="mt-8">Ver servicios actuales</Button>
        </div>
        <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-8 shadow-redSoft">
          <BookOpen className="h-10 w-10 text-redImpact" />
          <h2 className="mt-8 display text-3xl font-black">Formación en construcción</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400">Esta área puede alojar cursos de branding, diseño para redes, composición, flyers, dirección visual y uso profesional de IA.</p>
        </div>
      </div>
    </section>
  );
}
