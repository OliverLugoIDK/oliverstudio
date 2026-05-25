import { BookOpen, Code2, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const resources = [
  { icon: Sparkles, title: "Prompts visuales", text: "Recursos para dirección de arte, imágenes con IA y referencias creativas. Próximamente." },
  { icon: BookOpen, title: "Cursos", text: "Formación práctica sobre diseño, impacto visual, branding y procesos creativos. Próximamente." },
  { icon: Code2, title: "Sistemas y herramientas", text: "Ideas, flujos y recursos para ordenar procesos creativos y comerciales." }
];

export function ResourcesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Próximamente"
          title="Prompts, cursos y recursos para diseñadores y marcas que quieren pensar mejor lo visual."
          description="La web no solo funcionará como portafolio. También tendrá una zona de recursos para mostrar conocimiento, criterio y procesos."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div key={resource.title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
                <Icon className="h-8 w-8 text-redImpact" />
                <h3 className="mt-5 display text-2xl font-black">{resource.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{resource.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
