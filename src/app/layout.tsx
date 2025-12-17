import type { Metadata } from "next";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Growing Inmobiliario | La comunidad que impulsa a las inmobiliarias",
  description: "Somos la comunidad de más de 150 inmobiliarias de toda España. Consultoría, formación y networking para hacer crecer tu negocio inmobiliario.",
  keywords: ["inmobiliarias", "consultoría inmobiliaria", "comunidad inmobiliaria", "formación inmobiliaria", "España"],
  icons: {
    icon: "/Logo_03b.svg",
    apple: "/Logo_03b.svg",
  },
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
        <Chatbot />
      </body>
    </html>
  );
}
