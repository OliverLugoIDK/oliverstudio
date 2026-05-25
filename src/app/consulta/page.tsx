import type { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Consulta de diseño",
  description: "Solicita una consulta de diseño para branding, redes, flyers, dirección visual o sistema visual mensual."
};

export default function ConsultaPage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-red-radial" />
      <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Consulta"
          title="Cuéntame qué necesita tu marca y definimos una ruta antes de cotizar."
          description="Este formulario evita perder tiempo. Mientras más claro sea el brief, más preciso será el presupuesto, el alcance y el tiempo de entrega."
        />
        <ConsultationForm />
      </div>
    </section>
  );
}
