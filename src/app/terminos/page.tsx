import type { Metadata } from "next";

export const metadata: Metadata = { title: "Términos de servicio", description: "Términos básicos de servicio de Oliver Lugo Studio." };

export default function TerminosPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">Legal</p>
        <h1 className="mt-5 display text-5xl font-black">Términos básicos de servicio</h1>
        <div className="prose-soft mt-8 grid gap-5">
          <p>Todo proyecto inicia con brief, alcance definido y anticipo. No se agenda ni se empieza trabajo sin confirmación del pago inicial.</p>
          <p>Los precios publicados son referenciales “desde” y pueden variar según urgencia, cantidad de piezas, complejidad, revisiones, formatos, entregables editables y derechos de uso.</p>
          <p>Cada proyecto incluye rondas de revisión específicas. Cambios fuera del alcance inicial, modificaciones excesivas o nuevas direcciones creativas se cotizan aparte.</p>
          <p>Los archivos editables solo se entregan cuando están incluidos en el acuerdo. Las piezas finales se entregan en formatos listos para uso digital o impresión según corresponda.</p>
          <p>El portafolio y las piezas mostradas están protegidas. Las marcas, nombres y logos pertenecen a sus respectivos propietarios.</p>
        </div>
      </div>
    </section>
  );
}
