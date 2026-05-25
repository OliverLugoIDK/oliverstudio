import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  ["01", "Brief y diagnóstico", "Se revisa qué necesita la marca, qué está fallando y qué objetivo debe cumplir el diseño."],
  ["02", "Dirección creativa", "Se define estética, tono visual, referencias, jerarquía y ruta de comunicación."],
  ["03", "Diseño y sistema", "Se construyen piezas, identidad o línea visual con criterio comercial y estructura."],
  ["04", "Revisión y ajustes", "Se aplican cambios dentro del alcance acordado para cerrar una entrega más precisa."],
  ["05", "Entrega profesional", "Recibes archivos organizados, formatos finales y recomendaciones de uso."],
  ["06", "Continuidad opcional", "La marca puede seguir con piezas mensuales, campañas, plantillas o dirección visual."],
];

export function MethodSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <SectionHeader
          eyebrow="Proceso"
          title="Un método simple: entender, dirigir, diseñar y entregar sin improvisación."
          description="No trabajo sin brief. Cada pieza necesita un objetivo, un mensaje principal y criterios visuales claros antes de diseñar."
        />
        <div className="grid gap-4">
          {steps.map(([number, title, text]) => (
            <div key={number} className="grid gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[80px_1fr]">
              <div className="display text-3xl font-black text-redImpact">{number}</div>
              <div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-redImpact" />
                  <h3 className="display text-xl font-black">{title}</h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
