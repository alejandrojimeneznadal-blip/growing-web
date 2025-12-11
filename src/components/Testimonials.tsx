"use client";

import Link from "next/link";

const testimonials = [
  {
    quote: "Desde que nos unimos a Growing, hemos incrementado nuestra facturación un 40%. La comunidad y el soporte son excepcionales.",
    name: "María García",
    role: "CEO, Inmobiliaria García",
    location: "Madrid",
    result: "+40% facturación",
  },
  {
    quote: "El networking con otras inmobiliarias ha sido clave para cerrar operaciones que antes eran imposibles.",
    name: "Carlos Rodríguez",
    role: "Director, Fincas Rodríguez",
    location: "Barcelona",
    result: "+25 operaciones",
  },
  {
    quote: "La formación que recibimos es de primer nivel. Hemos profesionalizado completamente nuestro equipo comercial.",
    name: "Ana Martínez",
    role: "Fundadora, Hogares Premium",
    location: "Valencia",
    result: "3x conversión",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00abc8] rounded-full filter blur-[200px] opacity-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#667eea] rounded-full filter blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
              Testimonios
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight italic">
              Lo que dicen nuestros miembros
            </h2>
          </div>

          {/* Trustpilot badge */}
          <Link
            href="https://www.trustpilot.com/review/growinginmobiliario.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-colors group"
          >
            <div className="flex flex-col">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className={`w-5 h-5 ${i <= 4 ? "text-[#00b67a]" : "text-[#00b67a]/50"}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/60">
                <span className="text-white font-semibold">4.7</span> / 5 en Trustpilot
              </span>
            </div>
            <svg className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Result badge */}
              <div className="inline-flex items-center gap-2 bg-[#00abc8]/20 text-[#00abc8] px-3 py-1 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                {testimonial.result}
              </div>

              {/* Quote */}
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00abc8] to-[#667eea] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/50">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "+150", label: "Inmobiliarias activas" },
              { value: "+40", label: "Negocios Rent-to-Rent" },
              { value: "100%", label: "Cobertura nacional" },
              { value: "+5", label: "Años de trayectoria" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
