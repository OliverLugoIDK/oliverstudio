export type Project = {
  slug: string;
  client: string;
  category: string;
  type: string;
  cover: string;
  accent: string;
  summary: string;
  problem: string;
  solution: string[];
  result: string;
  services: string[];
  notes: string;
};

export const projects: Project[] = [
  {
    slug: "daca-sport",
    client: "Daca Sport C.A.",
    category: "Tienda deportiva",
    type: "Branding, redes y visión comercial",
    cover: "/projects/daca-sport.png",
    accent: "Retail deportivo",
    summary: "Dirección visual para una tienda deportiva con enfoque comercial, presencia digital y piezas de venta.",
    problem: "La marca necesitaba mayor claridad visual, mejor presentación comercial y una línea más consistente para comunicar productos y promociones.",
    solution: ["Definición de enfoque visual para tienda deportiva.", "Diseño de piezas para redes y comunicación promocional.", "Criterios de jerarquía para productos, ofertas y publicaciones.", "Ajustes de percepción para que la marca se vea más ordenada y confiable."],
    result: "Una presencia visual más clara, comercial y preparada para publicar productos, promociones y contenido de marca con mejor consistencia.",
    services: ["Dirección visual", "Diseño para redes", "Piezas comerciales", "Branding aplicado"],
    notes: "Reemplazar este cover por imágenes reales del proyecto cuando estén disponibles."
  },
  {
    slug: "rican2-sport",
    client: "Rican2 Sport C.A.",
    category: "Tienda deportiva",
    type: "Identidad aplicada y diseño comercial",
    cover: "/projects/rican2-sport.png",
    accent: "Marca deportiva",
    summary: "Sistema visual para comunicar una tienda deportiva con más fuerza, orden y enfoque de producto.",
    problem: "La comunicación visual necesitaba una estructura más atractiva para productos, promociones y presencia en redes.",
    solution: ["Construcción de lenguaje gráfico deportivo.", "Diseño de piezas promocionales con jerarquía clara.", "Uso de composiciones dinámicas para destacar productos.", "Adaptación visual para canales digitales."],
    result: "Una línea gráfica más potente y enfocada en venta, sin perder claridad ni profesionalismo.",
    services: ["Diseño comercial", "Redes sociales", "Flyers", "Dirección de arte"],
    notes: "Caso preparado para incorporar fotos, flyers y capturas reales."
  },
  {
    slug: "la-cabra-store",
    client: "La Cabra Store",
    category: "Tienda / Retail",
    type: "Branding aplicado y contenido visual",
    cover: "/projects/la-cabra-store.png",
    accent: "Retail con carácter",
    summary: "Diseño visual para una tienda con personalidad más marcada, piezas comerciales y presencia en redes.",
    problem: "La marca necesitaba diferenciarse visualmente y comunicar mejor su oferta en piezas digitales.",
    solution: ["Definición de una estética más reconocible.", "Diseño de piezas para publicaciones y promociones.", "Estructura visual para destacar productos.", "Criterios de composición, color y jerarquía."],
    result: "Una imagen más consistente y con mayor carácter comercial para competir visualmente en redes.",
    services: ["Branding aplicado", "Diseño para redes", "Flyers", "Sistema visual"],
    notes: "Proyecto listo para sustituir con mockups y piezas reales."
  },
  {
    slug: "novaro",
    client: "NOVARO C.A.",
    category: "Comercio especializado",
    type: "Identidad comercial y piezas de producto",
    cover: "/projects/novaro.png",
    accent: "Comercio premium",
    summary: "Dirección visual para una marca comercial que necesita transmitir confianza, catálogo y percepción de valor.",
    problem: "La marca requería una imagen más cuidada para productos, publicaciones y comunicación comercial.",
    solution: ["Orden visual para publicaciones de producto.", "Criterios de diseño para catálogo y piezas comerciales.", "Mejora de percepción mediante composición y presentación.", "Adaptaciones para redes y venta digital."],
    result: "Una base visual más profesional para presentar productos con mayor claridad y confianza.",
    services: ["Diseño de producto", "Catálogo visual", "Redes sociales", "Dirección visual"],
    notes: "Reemplazar con fotografías, mockups o publicaciones reales del proyecto."
  },
  {
    slug: "nexus-os",
    client: "Nexus OS",
    category: "Software / Sistema",
    type: "Identidad digital y comunicación visual",
    cover: "/projects/nexus-os.png",
    accent: "Software y sistemas",
    summary: "Sistema visual para un proyecto tecnológico con enfoque en claridad, estructura y percepción profesional.",
    problem: "El proyecto necesitaba verse más confiable, técnico y ordenado sin perder impacto visual.",
    solution: ["Dirección visual para interfaz y comunicación.", "Criterios gráficos para presentar módulos, sistema y beneficios.", "Diseño de piezas explicativas y visuales de producto.", "Estética oscura, tecnológica y profesional."],
    result: "Una imagen más sólida para comunicar un sistema digital con mayor autoridad visual.",
    services: ["Identidad digital", "UI visual", "Presentación comercial", "Dirección de arte"],
    notes: "Caso preparado para capturas, mockups y pantallas reales."
  }
];
