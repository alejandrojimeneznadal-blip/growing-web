import type { Metadata } from "next";
import { Alexandria, Playfair_Display } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <body className={`${alexandria.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
