import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/utils";

export function WhatsAppButton() {
  const href = getWhatsAppUrl(siteConfig.whatsapp, siteConfig.defaultWhatsappMessage);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-redImpact text-white shadow-redGlow transition hover:scale-105 hover:bg-white hover:text-obsidian"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
