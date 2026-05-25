import { ArrowUpRight, CheckCircle2, Layers3, MousePointer2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/StatusPill";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/utils";

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-[520px] lg:mx-0">
      <div className="absolute -inset-8 rounded-[3rem] bg-redImpact/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/12 bg-[#08080a] p-4 shadow-redSoft">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="relative rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-redImpact">Sistema visual</p>
              <p className="mt-1 display text-xl font-black">Dirección de marca</p>
            </div>
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-redImpact text-white shadow-redGlow">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-redImpact/35 bg-black/35 p-5">
              <div className="mb-4 h-2 w-28 rounded-full bg-redImpact" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="display text-2xl font-black">BRANDING</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">Logo · paleta · sistema · aplicaciones</p>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <span className="h-8 w-8 rounded-lg bg-redImpact" />
                  <span className="h-8 w-8 rounded-lg bg-redDeep" />
                  <span className="h-8 w-8 rounded-lg bg-zinc-800" />
                  <span className="h-8 w-8 rounded-lg bg-white" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
                <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-redImpact">
                  <Layers3 className="h-4 w-4" /> Flyers
                </div>
                <div className="space-y-2">
                  <span className="block h-3 rounded-full bg-zinc-700" />
                  <span className="block h-3 w-10/12 rounded-full bg-zinc-800" />
                  <span className="block h-3 w-8/12 rounded-full bg-zinc-800" />
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
                <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-redImpact">
                  <MousePointer2 className="h-4 w-4" /> Redes
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <span key={index} className={`aspect-square rounded-xl ${index === 1 ? "bg-redImpact" : "bg-zinc-800"}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">Consulta visual</p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <p className="display text-lg font-black">Mejora la percepción de tu marca</p>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-redImpact">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const whatsapp = getWhatsAppUrl(siteConfig.whatsapp, siteConfig.defaultWhatsappMessage);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-red-radial" />
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <StatusPill>{siteConfig.experience}</StatusPill>
          <h1 className="mt-7 display text-5xl font-black tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.6rem] lg:leading-[.93] text-balance">
            Diseño que hace que tu marca se vea imposible de ignorar.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            {siteConfig.positioning} Branding, flyers, redes, campañas y consultoría visual para negocios que quieren dejar de parecer improvisados.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsapp} className="gap-2">Solicitar consulta <ArrowUpRight className="h-4 w-4" /></Button>
            <Button href="/portafolio" variant="secondary">Ver portafolio</Button>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Marketing visual", "Director creativo", "Remoto LATAM"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm font-semibold text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-redImpact" /> {item}
              </div>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
