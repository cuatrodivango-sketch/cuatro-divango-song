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
  pricePrefix: "Desde",
  priceAmount: "$499 MXN",
  priceCaption: "Canción personalizada completa.",
  proofTitle: "+300 canciones creadas",
  proofSub: "Historias que se convirtieron en música.",
  image: "/images/hero.png",
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
      name: "Hormiga González",
      caption: "Canción inspirada en su historia.",
      image: "/images/caso-hormiga.jpg",
      audioSrc: "", // pendiente: conectar canción
    },
    {
      name: "Chivas",
      caption: "Canción dedicada a la pasión rojiblanca.",
      image: "/images/caso-chivas.png",
      audioSrc: "",
    },
    {
      name: "Alan Pulido",
      caption: "Canción inspirada en su historia.",
      image: "/images/caso-pulido.jpg",
      audioSrc: "",
    },
    {
      name: "Alexis Vega",
      caption: "Canción inspirada en su historia.",
      image: "/images/caso-vega.jpg",
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
  imagineTitle: "¿Cómo imaginas tu canción?",
  imaginePlaceholder:
    "Describe cómo te gustaría que se sintiera la canción, qué emociones quieres transmitir, si prefieres algo tranquilo, alegre, épico, romántico, nostálgico o cualquier otra idea que tengas.",
  voiceTitle: "¿Qué tipo de voz prefieres?",
  voiceOptions: ["Masculina", "Femenina", "Me es indiferente"],
  durationTitle: "¿Cuánto debería durar aproximadamente?",
  durationOptions: ["2 minutos", "3 minutos", "4 minutos", "No tengo preferencia"],
  namesTitle: "¿La canción debe mencionar nombres?",
  namesFollowUp: "¿Qué nombres deben aparecer?",
  surpriseTitle: "¿La canción será una sorpresa?",
  surpriseInfo:
    "No te preocupes, prepararemos la canción para que puedas sorprender a esa persona.",
  yesNo: ["Sí", "No"],
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

export const checkout = {
  title: "Revisa tu pedido",
  subtitle:
    "Ya tenemos toda la información para crear tu canción personalizada. Ahora solo falta realizar el pago para comenzar la producción.",
  totalTitle: "Total",
  totalAmount: "$499 MXN",
  totalNotes: ["Pago único.", "Sin mensualidades.", "Sin costos ocultos."],
  payButton: "Pagar con Mercado Pago",
  payUrl: "https://mpago.li/1eXt7hR",
  confirmTitle: "¿Ya realizaste el pago?",
  confirmText:
    "Cuando hayas terminado el pago, envíanos tu comprobante por WhatsApp para confirmar tu pedido y comenzar inmediatamente la producción.",
  whatsappButton: "Enviar comprobante por WhatsApp",
  whatsappUrl:
    "https://wa.me/523321917009?text=Hola%20Cuatro%20Divango%20%F0%9F%91%8B%0A%0AYa%20realic%C3%A9%20el%20pago%20de%20mi%20canci%C3%B3n%20personalizada.%0A%0AMi%20nombre%20es%3A%20%0A%0AAdjunto%20mi%20comprobante.%0A%0A%C2%A1Muchas%20gracias!",
};
