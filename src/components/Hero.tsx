"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text content */}
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#0a2540] leading-[1.1] tracking-tight whitespace-nowrap">
              <span className="font-serif italic">Hacemos fácil</span>
              <br />
              <span className="font-sans font-bold text-[#00abc8]">escalar tu inmobiliaria</span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-500 leading-relaxed max-w-lg">
              El sistema probado que te ayudará a captar más exclusivas, cerrar más
              operaciones y construir una inmobiliaria que funcione sin ti.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="#contacto" className="btn btn-primary">
                Comprueba si cualificas
                <svg className="w-4 h-4 arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#servicios" className="btn btn-outline">
                Ver cómo funciona
              </Link>
            </div>
          </div>

          {/* Right - Placeholder for visual element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
              {/* Aquí puedes poner una imagen, ilustración o elemento visual */}
              Visual element
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
