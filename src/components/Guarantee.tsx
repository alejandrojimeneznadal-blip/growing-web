"use client";

import Link from "next/link";

export default function Guarantee() {
  return (
    <section id="garantia" className="section-padding bg-gradient-to-br from-[#f6f9fc] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#00abc8]/20 rounded-full" />
        <div className="absolute top-40 right-40 w-48 h-48 border border-[#00abc8]/10 rounded-full" />
        <div className="absolute top-60 right-60 w-32 h-32 border border-[#00abc8]/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00abc8]/10 text-[#00abc8] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GARANTÍA TOTAL
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0a2540] leading-tight italic mb-6">
              20 propiedades
              <br />
              <span className="text-gradient">en 180 días</span>
            </h2>

            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              Si implementas nuestro sistema y no consigues captar al menos 20 propiedades
              en exclusiva en los primeros 6 meses, <strong className="text-[#0a2540]">te devolvemos el 100% de tu inversión</strong>.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Sin letra pequeña",
                "Sin condiciones ocultas",
                "Sin excusas",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#00abc8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-[#0a2540] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contacto"
              className="btn btn-primary"
            >
              Ver si cualificas
              <svg className="w-5 h-5 arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-[#0a2540] rounded-3xl p-10 lg:p-14 text-center shadow-2xl">
              {/* Badge */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#00abc8] to-[#667eea] rounded-full mb-8 animate-pulse-glow">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <div className="text-7xl lg:text-8xl font-bold text-white mb-2">
                180
              </div>
              <div className="text-xl text-white/60 mb-6">
                días de garantía
              </div>

              <div className="border-t border-white/10 pt-6 mt-6">
                <div className="text-5xl lg:text-6xl font-bold text-[#00abc8] mb-2">
                  20+
                </div>
                <div className="text-white/60">
                  propiedades en exclusiva
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00abc8] rounded-2xl opacity-20 transform rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#667eea] rounded-xl opacity-20 transform -rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
