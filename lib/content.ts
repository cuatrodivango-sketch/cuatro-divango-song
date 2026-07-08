/**
 * CONTENIDO CENTRAL DE LA LANDING — CUATRO DIVANGO
 * Todos los textos del mockup aprobado viven aquí.
 * Cambiar copy = editar este archivo, nunca los componentes.
 *
 * NOTA LEGAL (registrada en Fase 1): los nombres propios de la sección
 * "Casos reales" deben contar con autorización de uso de imagen antes
 * del lanzamiento público. Se cambian aquí en 10 segundos si hace falta.
 */

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  titleLine1: "Las mejores",
  titleLine2: "historias merecen",
  titleAccent: "su propia canción.",
  sub1: "Tu historia hecha canción.",
  sub2: "Hay regalos que se olvidan.",
  sub3: "Una canción no.",
  ctaPrimary: "Crear mi canción",
  ctaSecondary: "Ver ejemplos",
  proofTitle: "+300 canciones creadas",
  proofSub: "Historias que se convirtieron en música.",
  image: "/images/hero.svg",
  imageAlt:
    "Ilustración de un futbolista cantando con una explosión de pintura roja y azul y notas musicales",
};

export const occasionsSection = {
  title: "Crea una canción para cada momento",
  items: [
    {
      emoji: "⚽",
      title: "Futbolista o aficionado",
      text: "Dedica una canción a tu ídolo o a tu pasión por el fútbol.",
    },
    {
      emoji: "❤️",
      title: "Pareja",
      text: "Convierte tu historia de amor en una canción inolvidable.",
    },
    {
      emoji: "👶",
      title: "Hijo / hija",
      text: "El regalo más especial para tu bebé o para verlo crecer.",
    },
    {
      emoji: "👫",
      title: "Mamá o papá",
      text: "Agradece a quienes siempre han estado contigo.",
    },
    {
      emoji: "🎂",
      title: "Cumpleaños",
      text: "Haz de su día algo único con una canción hecha para ellos.",
    },
    {
      emoji: "💍",
      title: "Aniversario",
      text: "Celebra un año más de historias con una canción única.",
    },
  ],
};

export const examplesSection = {
  title: "Ya hemos creado canciones para historias reales",
  items: [
    {
      name: "Alan Pulido",
      caption: "Canción inspirada en su historia",
      image: "/images/ejemplo-delantero.svg",
      audioSrc: "", // pendiente: /audio/alan-pulido.mp3
    },
    {
      name: "Hormiga González",
      caption: "Canción inspirada en su historia",
      image: "/images/ejemplo-capitan.svg",
      audioSrc: "",
    },
    {
      name: "Alexis Vega",
      caption: "Canción inspirada en su historia",
      image: "/images/ejemplo-aficionado.svg",
      audioSrc: "",
    },
    {
      name: "Para mi hijo",
      caption: "Una canción de amor que lo acompañará siempre",
      image: "/images/ejemplo-hijo.svg",
      audioSrc: "",
    },
    {
      name: "Para mi novia",
      caption: "Nuestra historia hecha canción",
      image: "/images/ejemplo-novia.svg",
      audioSrc: "",
    },
    {
      name: "Cumpleaños",
      caption: "Un cumpleaños inolvidable",
      image: "/images/ejemplo-cumple.svg",
      audioSrc: "",
    },
  ],
};

export const howSection = {
  title: "Así de fácil",
  steps: [
    {
      icon: "chat",
      title: "Nos cuentas tu historia.",
      text: "Completa el formulario con los detalles y lo que quieres transmitir.",
    },
    {
      icon: "note",
      title: "Creamos tu canción personalizada.",
      text: "Escribimos, componemos y producimos una canción única para ti.",
    },
    {
      icon: "headphones",
      title: "La recibes en 48–72 horas.",
      text: "Te enviamos tu canción lista para escuchar, compartir y emocionar.",
    },
  ],
};

export const formSection = {
  heading: ["Cuéntanos tu historia", "y la convertiremos", "en una canción."],
  bullets: [
    "100% personalizada",
    "Hecha con IA y producción profesional",
    "Entrega en 48–72 horas",
    "Formato de audio de alta calidad",
  ],
  recipients: [
    "Futbolista o aficionado",
    "Pareja",
    "Hijo / hija",
    "Mamá o papá",
    "Amigo / amiga",
    "Otra persona especial",
  ],
  styles: [
    "Balada romántica",
    "Corrido / regional",
    "Pop",
    "Rock",
    "Cumbia",
    "Himno / cántico de estadio",
  ],
};

export const finalCta = {
  title: ["Convierte una historia", "en una canción inolvidable."],
  button: "Crear mi canción →",
  image: "/images/estudio.svg",
  imageAlt: "Micrófono de estudio de grabación con luz roja",
};

export const footer = {
  tagline: "Tu historia hecha canción.",
  copyright: "© 2026 Cuatro Divango. Todos los derechos reservados.",
  navTitle: "Navegación",
  navLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Ejemplos", href: "#ejemplos" },
  ],
  moreLinks: [
    { label: "Testimonios", href: "#testimonios" },
    { label: "FAQ", href: "#faq" },
  ],
  followTitle: "Síguenos",
  socials: [
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  ],
};
