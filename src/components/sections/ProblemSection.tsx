import { AlertTriangle, BadgeDollarSign, EyeOff, LayoutDashboard, Shuffle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const problems = [
  { icon: EyeOff, title: "Tu marca parece más pequeña de lo que es", text: "La percepción visual puede bajar el valor de una oferta aunque el producto sea bueno." },
  { icon: Shuffle, title: "Cada pieza se ve de una marca distinta", text: "Sin sistema visual, tu comunicación se vuelve inconsistente y difícil de recordar." },
  { icon: LayoutDashboard, title: "Tus redes no transmiten autoridad", text: "Un perfil desordenado hace que el cliente dude antes de escribir o comprar." },
  { icon: BadgeDollarSign, title: "Tus promociones no se sienten valiosas", text: "El diseño debe hacer que la oferta se entienda rápido y se perciba mejor." },
  { icon: AlertTriangle, title: "Trabajas sin brief ni dirección", text: "El diseño se vuelve decoración cuando no existe objetivo, jerarquía ni estrategia." }
];

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Diagnóstico"
          title="El problema no siempre es vender más. Muchas veces es que tu marca todavía no comunica valor."
          description="El diseño profesional no tapa debilidades. Ordena la percepción, mejora la confianza y hace que el mensaje sea más claro."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-5">
                <Icon className="h-6 w-6 text-redImpact" />
                <h3 className="mt-5 display text-lg font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
