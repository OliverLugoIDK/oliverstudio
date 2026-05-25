import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/nav";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
  const whatsapp = getWhatsAppUrl(siteConfig.whatsapp, siteConfig.defaultWhatsappMessage);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-obsidian/78 backdrop-blur-2xl">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="Inicio Oliver Lugo Studio">
  <img
    src="/logo/logo-placeholder.svg"
    alt="Oliver Lugo Studio"
    className="h-16 w-auto object-contain"
  />
</Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-zinc-400 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <Button href={whatsapp} className="gap-2">
            Solicitar consulta <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
