import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/StatusPill";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-carbon" />
      <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.3rem] border border-white/10 bg-[#09090b] p-6 shadow-redSoft">
          <div className="absolute inset-0 mesh-bg opacity-40" />
          <div className="relative flex h-full flex-col justify-between rounded-[1.6rem] border border-redImpact/25 bg-black/45 p-6">
            <div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-white/10 bg-carbon shadow-redSoft">
  <img
    src="/images/oliver-profile.svg"
    alt="Oliver Lugo - Director creativo personal"
    className="h-full w-full object-cover"
  />
</div>
              
            </div>
          </div>
        </div>
        <div>
          <StatusPill>Perfil</StatusPill>
          <h2 className="mt-5 display text-4xl font-black tracking-tight sm:text-6xl text-balance">Diseño desde los juegos, criterio desde el mercado.</h2>
          <div className="prose-soft mt-6 grid gap-4">
            <p>
              Soy Oliver Lugo, diseñador gráfico y director creativo. Empecé a diseñar desde los 10 años a través de juegos, creando identidades, gráficos y conceptos visuales antes de entender que eso podía convertirse en una profesión.
            </p>
            <p>
              Hoy trabajo con marcas comerciales, tiendas, proyectos de software, sistemas y negocios que necesitan verse más sólidos. Mi filosofía es directa: impacto visual con intención, no decoración genérica.
            </p>
            <p>
              No prometo resultados falsos. Trabajo con brief, criterio visual y foco en percepción: que la marca se vea más clara, más confiable y mejor preparada para vender.
            </p>
          </div>
          <Button href="/sobre-oliver" variant="secondary" className="mt-8 gap-2">Conocer enfoque <ArrowUpRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </section>
  );
}
