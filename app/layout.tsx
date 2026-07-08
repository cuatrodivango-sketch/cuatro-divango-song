import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cuatro Divango — Tu historia hecha canción",
  description:
    "Canciones 100% personalizadas para futbolistas, aficionados, parejas, hijos, mamá, papá, cumpleaños y aniversarios. Nos cuentas tu historia y la recibes hecha canción en 48–72 horas. Hay regalos que se olvidan. Una canción no.",
  keywords: [
    "canciones personalizadas",
    "regalo canción",
    "canción para futbolista",
    "canción de cumpleaños",
    "canción de aniversario",
    "Cuatro Divango",
  ],
  openGraph: {
    title: "Cuatro Divango — Tu historia hecha canción",
    description:
      "Las mejores historias merecen su propia canción. Personalizada y entregada en 48–72 horas.",
    type: "website",
    locale: "es_MX",
    siteName: "Cuatro Divango",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101C3A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        style={{
          ["--font-sans" as string]:
            "'Inter', 'SF Pro Display', -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
