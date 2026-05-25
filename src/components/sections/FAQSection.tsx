import { faqs } from "@/data/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="FAQ"
          title="Preguntas frecuentes antes de contratar diseño."
          description="Estas respuestas filtran expectativas, alcance y forma de trabajo para evitar proyectos mal definidos."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 open:border-redImpact/50">
              <summary className="cursor-pointer list-none display text-lg font-black text-white">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
