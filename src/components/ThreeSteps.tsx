"use client";

import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Comunicación",
    subtitle: "Aprende a comunicar tu valor",
    description:
      "Domina el arte de captar exclusivas. Te enseñamos las técnicas que usan las mejores inmobiliarias para que los propietarios quieran trabajar contigo.",
    features: [
      "Scripts de captación probados",
      "Técnicas de negociación",
      "Diferenciación real",
    ],
    color: "from-[#00abc8] to-[#0f3052]",
  },
  {
    number: "2",
    title: "Adquisición",
    subtitle: "Sistema de captación predecible",
    description:
      "Implementa un sistema que genera propietarios interesados de forma constante. Deja de depender del boca a boca y toma el control de tu pipeline.",
    features: [
      "Embudo de captación",
      "Marketing inmobiliario",
      "Automatizaciones",
    ],
    color: "from-[#667eea] to-[#00abc8]",
  },
  {
    number: "3",
    title: "Libertad",
    subtitle: "Construye un negocio escalable",
    description:
      "Crea procesos y equipo que funcionen sin ti. Disfruta de una inmobiliaria que genera resultados predecibles mientras recuperas tu tiempo.",
    features: [
      "Procesos y sistemas",
      "Gestión de equipos",
      "Escalabilidad real",
    ],
    color: "from-[#0a2540] to-[#667eea]",
  },
];

export default function ThreeSteps() {
  return (
    <section id="servicios" className="section-padding section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00abc8] rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#667eea] rounded-full filter blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
            El método
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight italic">
            3 pasos hacia una inmobiliaria rentable
          </h2>
          <p className="mt-6 text-xl text-white/60 leading-relaxed">
            Un sistema probado por más de 150 inmobiliarias que transforma tu negocio
            paso a paso.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Step number */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} mb-6`}>
                <span className="text-2xl font-bold text-white">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-[#00abc8] font-medium mb-4">
                {step.subtitle}
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {step.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70">
                    <svg className="w-5 h-5 text-[#00abc8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-[#00abc8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contacto"
            className="btn btn-secondary"
          >
            Quiero empezar ahora
            <svg className="w-5 h-5 arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
