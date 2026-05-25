export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  timeframe: string;
  href: string;
  deliverables: string[];
  idealFor: string[];
  clientNeeds: string[];
  revisions: string;
};

export const services: Service[] = [
  {
    slug: "diseno-puntual",
    eyebrow: "Pieza individual",
    title: "Diseño puntual",
    description:
      "Flyers, posts, stories, banners o piezas comerciales diseñadas con jerarquía, intención y acabado profesional.",
    price: "Desde $25",
    timeframe: "1 a 3 días hábiles",
    href: "/servicios#diseno-puntual",
    deliverables: ["1 pieza principal", "Adaptación básica si aplica", "Archivo final para publicar", "Optimización para redes"],
    idealFor: ["Promociones", "Eventos", "Lanzamientos rápidos", "Negocios con necesidad puntual"],
    clientNeeds: ["Texto final", "Logo", "Fotos o referencias", "Formato requerido"],
    revisions: "1 ronda de ajustes"
  },
  {
    slug: "presencia-visual-inicial",
    eyebrow: "Base visual",
    title: "Presencia visual inicial",
    description:
      "Orden visual para marcas que ya existen, pero necesitan verse más consistentes, claras y profesionales en digital.",
    price: "Desde $120",
    timeframe: "5 a 8 días hábiles",
    href: "/servicios#presencia-visual-inicial",
    deliverables: ["Diagnóstico visual", "Dirección estética base", "6 a 9 piezas para redes", "Recomendaciones para Instagram", "Mini guía de estilo"],
    idealFor: ["Emprendedores", "Tiendas", "Marcas personales", "Negocios que publican sin línea visual"],
    clientNeeds: ["Acceso a referencias", "Logo actual", "Oferta principal", "Objetivos de comunicación"],
    revisions: "2 rondas de ajustes"
  },
  {
    slug: "branding-esencial",
    eyebrow: "Identidad",
    title: "Branding esencial",
    description:
      "Identidad visual clara para marcas nuevas o negocios que necesitan una imagen más seria, coherente y aplicable.",
    price: "Desde $250",
    timeframe: "10 a 15 días hábiles",
    href: "/servicios/branding",
    deliverables: ["Logo principal", "Variantes de logo", "Paleta de color", "Tipografías", "Brandboard", "Aplicaciones básicas"],
    idealFor: ["Marcas nuevas", "Negocios en crecimiento", "Proyectos que necesitan identidad sólida"],
    clientNeeds: ["Brief completo", "Nombre definido", "Referencias", "Público objetivo"],
    revisions: "2 rondas de ajustes"
  },
  {
    slug: "marca-profesional",
    eyebrow: "Sistema visual",
    title: "Marca profesional",
    description:
      "Sistema visual completo para negocios que necesitan presencia consistente en redes, piezas comerciales y comunicación general.",
    price: "Desde $500",
    timeframe: "15 a 25 días hábiles",
    href: "/servicios/branding#marca-profesional",
    deliverables: ["Identidad visual", "Manual básico de marca", "Dirección de arte", "Mockups", "Piezas para redes", "Aplicaciones comerciales"],
    idealFor: ["Restaurantes", "Tiendas", "Empresas", "Marcas personales con proyección"],
    clientNeeds: ["Brief", "Información del negocio", "Referencias", "Material existente"],
    revisions: "3 rondas de ajustes"
  },
  {
    slug: "sistema-visual-mensual",
    eyebrow: "Continuidad",
    title: "Sistema visual mensual",
    description:
      "Acompañamiento gráfico para marcas que necesitan publicar, promocionar y mantener una línea visual constante cada mes.",
    price: "Desde $180/mes",
    timeframe: "Mensual",
    href: "/servicios/redes-sociales",
    deliverables: ["Diseños para redes", "Flyers", "Adaptaciones", "Soporte creativo", "Dirección visual continua"],
    idealFor: ["Tiendas activas", "Restaurantes", "Iglesias", "Eventos", "Marcas con contenido frecuente"],
    clientNeeds: ["Calendario comercial", "Promociones", "Fotos", "Textos o ideas base"],
    revisions: "Según plan mensual"
  },
  {
    slug: "consultoria-visual",
    eyebrow: "Diagnóstico",
    title: "Consultoría visual",
    description:
      "Auditoría para detectar por qué una marca se ve débil, desordenada o poco profesional y definir una ruta de mejora.",
    price: "Desde $45",
    timeframe: "Sesión de 60 a 90 min",
    href: "/servicios/consultoria",
    deliverables: ["Revisión de marca", "Mapa de problemas", "Recomendaciones", "Prioridades de mejora", "Ruta de acción"],
    idealFor: ["Marcas confundidas", "Negocios antes de invertir", "Emprendedores que quieren criterio"],
    clientNeeds: ["Instagram o web", "Material visual actual", "Objetivo del negocio", "Dudas principales"],
    revisions: "No aplica; es sesión estratégica"
  }
];

export const serviceGroups = [
  "Branding e identidad visual",
  "Logo profesional",
  "Manual de marca",
  "Diseño para redes sociales",
  "Flyers publicitarios",
  "Diseño para eventos",
  "Diseño para restaurantes",
  "Diseño para discotecas y bares",
  "Diseño para tiendas online",
  "Diseño de campañas",
  "Diseño de empaques",
  "Diseño editorial",
  "Diseño para impresión",
  "Consultoría visual",
  "Dirección de arte",
  "Contenido visual con IA",
  "Plantillas para redes",
  "Manejo visual mensual"
];
