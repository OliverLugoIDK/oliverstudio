import type { Metadata } from "next";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = { title: "Contacto", description: "Contacto de Oliver Lugo Studio para proyectos de diseño gráfico, branding y dirección visual." };

export default function ContactoPage() {
  const whatsapp = getWhatsAppUrl(siteConfig.whatsapp, siteConfig.defaultWhatsappMessage);
  const cards = [
    { icon: MessageCircle, title: "WhatsApp", text: siteConfig.whatsapp, href: whatsapp, cta: "Escribir ahora" },
    { icon: Mail, title: "Correo", text: siteConfig.email, href: `mailto:${siteConfig.email}`, cta: "Enviar email" },
    { icon: Instagram, title: "Instagram", text: siteConfig.instagram, href: `https://instagram.com/${siteConfig.instagram.replace("@", "")}`, cta: "Ver perfil" }
  ];
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-red-radial" />
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">Contacto</p>
          <h1 className="mt-5 display text-5xl font-black tracking-tight sm:text-7xl text-balance">Hablemos de la imagen visual de tu marca.</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">Envía tu brief, referencias y objetivo. Si todavía no tienes claro qué necesitas, empieza por una consulta visual.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center">
                <Icon className="mx-auto h-8 w-8 text-redImpact" />
                <h2 className="mt-5 display text-2xl font-black">{card.title}</h2>
                <p className="mt-3 text-sm text-zinc-400">{card.text}</p>
                <Button href={card.href} variant="secondary" className="mt-6 w-full">{card.cta}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
