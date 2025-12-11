"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Para qué tipo de inmobiliarias está pensado Growing?",
    answer: "Growing está diseñado para inmobiliarias que buscan profesionalizarse y escalar su negocio. Trabajamos con agencias de todos los tamaños, desde agentes independientes hasta redes con múltiples oficinas. Lo importante es tener mentalidad de crecimiento.",
  },
  {
    question: "¿Qué incluye la membresía de la comunidad?",
    answer: "La membresía incluye acceso a nuestra red de +150 inmobiliarias, eventos mensuales de networking, formación continua, intercambio de inmuebles entre agencias, masterminds grupales y soporte directo de nuestro equipo de consultores.",
  },
  {
    question: "¿Cómo funciona la consultoría estratégica?",
    answer: "Comenzamos con un diagnóstico completo de tu negocio. Analizamos tus procesos, equipo, captación y ventas. A partir de ahí, diseñamos un plan de acción personalizado con objetivos claros y KPIs medibles. Te acompañamos en la implementación con seguimiento mensual.",
  },
  {
    question: "¿Cuánto tiempo se tarda en ver resultados?",
    answer: "Los primeros resultados suelen verse en los primeros 3 meses. Nuestros miembros reportan un incremento medio del 40% en facturación durante el primer año. El networking y las operaciones compartidas pueden generar resultados desde el primer mes.",
  },
  {
    question: "¿Puedo probar antes de comprometerme?",
    answer: "Sí. Ofrecemos una primera reunión gratuita donde analizamos tu situación y te explicamos cómo podemos ayudarte. Sin compromiso ni presión. Queremos que tomes la mejor decisión para tu negocio.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header */}
          <div>
            <p className="text-sm font-medium tracking-wider text-gray-400 mb-4">
              DUDAS COMUNES
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101820] leading-tight">
              Preguntas frecuentes
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Si tienes alguna otra duda, no dudes en contactarnos. Estamos aquí para ayudarte.
            </p>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-start justify-between text-left group"
                >
                  <span className="flex items-start gap-4">
                    <span className="text-sm font-medium text-gray-300 mt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-medium text-[#101820] group-hover:text-[#00abc8] transition-colors">
                      {faq.question}
                    </span>
                  </span>
                  <span className="ml-4 flex-shrink-0 mt-1">
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 leading-relaxed pl-10">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
