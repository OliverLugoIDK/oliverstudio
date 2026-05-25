import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/utils";

export function CTASection() {
  const whatsapp = getWhatsAppUrl(siteConfig.whatsapp, siteConfig.defaultWhatsappMessage);
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page overflow-hidden rounded-[2.4rem] border border-redImpact/30 bg-gradient-to-br from-redImpact/16 via-white/[0.035] to-black p-8 shadow-redSoft sm:p-12 lg:p-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">Consulta visual</p>
          <h2 className="mt-5 display text-4xl font-black tracking-tight sm:text-6xl text-balance">Tu marca ya tiene valor. Ahora necesita verse como tal.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Escríbeme con el nombre de tu marca, qué vendes y qué necesitas mejorar. Te indico la ruta más conveniente antes de cotizar.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={whatsapp} className="gap-2">Solicitar consulta <ArrowUpRight className="h-4 w-4" /></Button>
            <Button href="/consulta" variant="secondary">Llenar formulario</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
