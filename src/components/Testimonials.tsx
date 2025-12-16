"use client";

import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#0a2540]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            href="https://www.trustpilot.com/review/aducion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-colors group"
          >
            <div className="flex flex-col">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/60">
                Ver en Trustpilot
              </span>
            </div>
            <svg className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        {/* Testimonial Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <Image
                src={`/testimonials/review-${num}.png`}
                alt={`Reseña de cliente ${num}`}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/resultados"
            className="inline-flex items-center gap-3 bg-[#00abc8] hover:bg-[#0095ad] text-white font-medium px-8 py-4 rounded-lg transition-colors"
          >
            Ver más resultados
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
