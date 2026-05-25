import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">404</p>
      <h1 className="mt-5 display text-5xl font-black">Página no encontrada</h1>
      <p className="mt-4 max-w-xl text-zinc-400">La página que buscas no existe o fue movida.</p>
      <Button href="/" className="mt-8">Volver al inicio</Button>
    </section>
  );
}
