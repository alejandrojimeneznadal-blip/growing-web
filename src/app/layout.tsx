import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growing Inmobiliario | La comunidad que impulsa a las inmobiliarias",
  description: "Somos la comunidad de más de 150 inmobiliarias de toda España. Consultoría, formación y networking para hacer crecer tu negocio inmobiliario.",
  keywords: ["inmobiliarias", "consultoría inmobiliaria", "comunidad inmobiliaria", "formación inmobiliaria", "España"],
  openGraph: {
    title: "Growing Inmobiliario",
    description: "La comunidad que impulsa a las inmobiliarias",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
