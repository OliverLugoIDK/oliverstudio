import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Prompts", description: "Prompts de diseño, dirección de arte e inteligencia artificial de Oliver Lugo Studio. Próximamente." };

export default function PromptsPage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-red-radial" />
      <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">Próximamente</p>
          <h1 className="mt-5 display text-5xl font-black tracking-tight sm:text-7xl text-balance">Prompts para diseñar con mejor dirección visual.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">Un espacio para compartir prompts, procesos y recursos para crear imágenes, piezas y conceptos con IA sin perder criterio de diseñador.</p>
          <Button href="/consulta" className="mt-8">Solicitar consulta</Button>
        </div>
        <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-8 shadow-redSoft">
          <Sparkles className="h-10 w-10 text-redImpact" />
          <h2 className="mt-8 display text-3xl font-black">Contenido en preparación</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400">Esta sección puede incluir prompts para fotografía de producto, flyers, branding, mockups, dirección de arte y contenido visual con IA.</p>
          <div className="mt-8 grid gap-3 text-sm text-zinc-300">
            <span className="rounded-2xl border border-white/10 bg-black/25 p-4">Prompts para GPT Image / Nano Banana Pro</span>
            <span className="rounded-2xl border border-white/10 bg-black/25 p-4">Guías de dirección visual</span>
            <span className="rounded-2xl border border-white/10 bg-black/25 p-4">Recursos para diseñadores y marcas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
