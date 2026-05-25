import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de privacidad", description: "Política de privacidad básica de Oliver Lugo Studio." };

export default function PrivacidadPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-redImpact">Privacidad</p>
        <h1 className="mt-5 display text-5xl font-black">Política de privacidad</h1>
        <div className="prose-soft mt-8 grid gap-5">
          <p>Los datos enviados mediante formulario o WhatsApp se usan únicamente para responder consultas, cotizar servicios y gestionar proyectos de diseño.</p>
          <p>No se venden datos personales a terceros. La información compartida por el cliente se mantiene como material de trabajo interno, salvo autorización para publicar el proyecto en portafolio.</p>
          <p>Los proyectos privados o confidenciales no se muestran públicamente sin autorización. En algunos casos se podrán usar versiones parciales, mockups o descripciones generales sin revelar información sensible.</p>
          <p>Para solicitar eliminación de datos o retirar autorización de publicación, escribe al correo de contacto indicado en la web.</p>
        </div>
      </div>
    </section>
  );
}
