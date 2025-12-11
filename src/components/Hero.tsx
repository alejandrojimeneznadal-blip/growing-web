"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Main headline */}
        <div className="max-w-5xl">
          <p className="text-sm font-medium tracking-wider text-gray-400 mb-6">
            CONSULTORÍA INMOBILIARIA
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-[#101820] leading-[1.05] tracking-tight italic">
            A un paso de hacer
            <br />
            <span className="text-[#00abc8]">crecer tu negocio</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="mt-12 max-w-2xl">
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            Ayudamos a inmobiliarias a multiplicar sus resultados con estrategia,
            formación y una comunidad de más de 150 agencias en toda España.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center bg-[#101820] text-white px-8 py-4 text-sm font-medium tracking-wider hover:bg-[#00abc8] transition-colors"
          >
            AGENDAR REUNIÓN
          </Link>
          <Link
            href="#servicios"
            className="inline-flex items-center justify-center border-2 border-[#101820] text-[#101820] px-8 py-4 text-sm font-medium tracking-wider hover:bg-[#101820] hover:text-white transition-colors"
          >
            VER SERVICIOS
          </Link>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-t border-b border-gray-100 py-6 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              {[
                "CONSULTORÍA",
                "FORMACIÓN",
                "NETWORKING",
                "COMUNIDAD",
                "ESTRATEGIA",
                "CRECIMIENTO",
                "RESULTADOS",
              ].map((word, index) => (
                <span
                  key={index}
                  className="text-2xl sm:text-3xl font-bold text-gray-200 flex items-center gap-8"
                >
                  {word}
                  <span className="w-2 h-2 bg-[#00abc8] rounded-full" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {[
            { value: "+150", label: "Inmobiliarias" },
            { value: "+5", label: "Años experiencia" },
            { value: "100%", label: "Cobertura nacional" },
            { value: "4.9", label: "Trustpilot" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-4xl sm:text-5xl font-bold text-[#101820]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1 tracking-wider">
                {stat.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
