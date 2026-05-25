"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/utils";

const inputClass = "w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-redImpact/70";

export function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    whatsapp: "",
    instagram: "",
    service: "Branding esencial",
    budget: "",
    message: ""
  });

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Hola Oliver, quiero una consulta de diseño.%0A%0ANombre: ${form.name}%0AMarca: ${form.brand}%0AWhatsApp: ${form.whatsapp}%0AInstagram/Web: ${form.instagram}%0AServicio: ${form.service}%0APresupuesto aprox: ${form.budget}%0AMensaje: ${form.message}`;
    window.open(getWhatsAppUrl(siteConfig.whatsapp, decodeURIComponent(message)), "_blank");
  }

  return (
    <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-redSoft backdrop-blur-xl sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-zinc-300">
          Nombre
          <input className={inputClass} placeholder="Tu nombre" value={form.name} onChange={(e) => update("name", e.target.value)} required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-zinc-300">
          Marca o negocio
          <input className={inputClass} placeholder="Nombre de la marca" value={form.brand} onChange={(e) => update("brand", e.target.value)} required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-zinc-300">
          WhatsApp
          <input className={inputClass} placeholder="Número de contacto" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-zinc-300">
          Instagram o web
          <input className={inputClass} placeholder="@usuario o enlace" value={form.instagram} onChange={(e) => update("instagram", e.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-zinc-300">
          Servicio
          <select className={inputClass} value={form.service} onChange={(e) => update("service", e.target.value)}>
            <option>Diseño puntual</option>
            <option>Presencia visual inicial</option>
            <option>Branding esencial</option>
            <option>Marca profesional</option>
            <option>Sistema visual mensual</option>
            <option>Consultoría visual</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-zinc-300">
          Presupuesto aproximado
          <input className={inputClass} placeholder="Ej: $250" value={form.budget} onChange={(e) => update("budget", e.target.value)} />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-zinc-300">
        Mensaje
        <textarea className={`${inputClass} min-h-36 resize-y`} placeholder="Cuéntame qué necesitas mejorar, qué vendes y para cuándo lo necesitas." value={form.message} onChange={(e) => update("message", e.target.value)} />
      </label>
      <p className="mt-4 text-xs leading-6 text-zinc-500">El formulario abre WhatsApp con el resumen. Para conectar backend real, usar Formspree, Resend, Supabase o API propia.</p>
      <Button type="submit" className="mt-6 w-full">Enviar consulta por WhatsApp</Button>
    </form>
  );
}
