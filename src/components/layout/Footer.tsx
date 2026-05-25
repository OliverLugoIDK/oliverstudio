import Link from "next/link";
import { navItems } from "@/data/nav";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon py-12">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_.9fr_.9fr]">
        <div>
          <div>
  <img
    src="/logo/logo-placeholder.svg"
    alt="Oliver Lugo Studio"
    className="h-14 w-auto object-contain"
  />
  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
    {siteConfig.location}
  </p>
</div>
          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">{siteConfig.positioning}</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-zinc-500">Navegación</p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-400 hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-zinc-500">Legal / Contacto</p>
          <div className="grid gap-3 text-sm text-zinc-400">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            <a href={`https://instagram.com/${siteConfig.instagram.replace("@", "")}`} target="_blank" rel="noreferrer" className="hover:text-white">{siteConfig.instagram}</a>
            <Link href="/terminos" className="hover:text-white">Términos de servicio</Link>
            <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-white/10 pt-6 text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.copyright}
      </div>
    </footer>
  );
}
