"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FunnelPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);

  // Load GoHighLevel script
  useEffect(() => {
    if (currentStep === 2) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.type = "text/javascript";
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [currentStep]);

  const goToStep2 = () => {
    setIsTransitioning(true);
    setShowContent(false);

    setTimeout(() => {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "instant" });

      setTimeout(() => {
        setShowContent(true);
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  const goToStep1 = () => {
    setIsTransitioning(true);
    setShowContent(false);

    setTimeout(() => {
      setCurrentStep(1);
      window.scrollTo({ top: 0, behavior: "instant" });

      setTimeout(() => {
        setShowContent(true);
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0a2540] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 px-4 py-8 sm:py-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <Image
              src="/Logo_02a.svg"
              alt="Growing Inmobiliario"
              width={180}
              height={36}
              className="h-9 w-auto brightness-0 invert mx-auto"
            />
          </Link>
        </div>

        {/* Step 1: Video */}
        {currentStep === 1 && (
          <div
            className={`max-w-4xl mx-auto transition-all duration-400 ease-out ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-white/60 text-sm tracking-wider uppercase mb-4">
                AGENTES Y AGENCIAS INMOBILIARIAS
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                Estas A Un Paso de Aprender Como Puedes Llenar tu Cartera Con{" "}
                <span className="text-[#00abc8]">+20 Captaciones En Exclusiva</span>{" "}
                Cada Mes En Los Siguientes 180 Dias
              </h1>
              <div className="w-24 h-1 bg-[#00abc8] mx-auto mb-6" />
              <p className="text-white/80 text-lg">
                <span className="font-semibold">Paso 1 de 2:</span> Mira el video
              </p>
            </div>

            {/* Video Container */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl mb-8">
              <div className="aspect-video">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/or820ctg3q?seo=false&videoFoam=true"
                  title="VSL Growing Inmobiliario"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={goToStep2}
                disabled={isTransitioning}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#00abc8] hover:bg-[#00c4e4] text-white font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-[#00abc8]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Agendar Mi Llamada Gratuita
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p className="text-white/40 text-sm mt-4">
                Sin compromiso. 100% gratuito.
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Calendar */}
        {currentStep === 2 && (
          <div
            className={`max-w-5xl mx-auto transition-all duration-400 ease-out ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-lg mb-2">
                <span className="text-red-500 font-bold">IMPORTANTE:</span>{" "}
                <span className="text-white">ESTO</span>{" "}
                <span className="text-red-500 font-bold">NO</span>{" "}
                <span className="text-white">ES UNA FORMACION ES UN SERVICIO HECHO</span>{" "}
                <span className="text-red-500 font-bold">CONTIGO</span>
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                <span className="font-semibold">Paso 2 de 2:</span> Agenda tu llamada de crecimiento gratuita
              </h1>
            </div>

            {/* Calendar Container */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/EoChDaOdg3XKEkE2MK1k"
                style={{ width: "100%", height: "700px", border: "none" }}
                scrolling="no"
                id="ghl-calendar"
              />
            </div>

            {/* Back button */}
            <div className="text-center mt-8">
              <button
                onClick={goToStep1}
                disabled={isTransitioning}
                className="text-white/60 hover:text-white transition-colors flex items-center gap-2 mx-auto disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver al video
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-white/30 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Growing Inmobiliario. Todos los derechos reservados.
          </p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Link href="/privacidad" className="hover:text-white/50 transition-colors">
              Privacidad
            </Link>
            <Link href="/aviso-legal" className="hover:text-white/50 transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .duration-400 {
          transition-duration: 400ms;
        }
      `}</style>
    </div>
  );
}
