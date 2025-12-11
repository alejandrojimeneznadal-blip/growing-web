"use client";

import { useState } from "react";
import Link from "next/link";

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
    question: "¿Qué pasa si no consigo 20 propiedades en 180 días?",
    answer: "Si implementas nuestro sistema correctamente y no consigues captar al menos 20 propiedades en exclusiva en los primeros 6 meses, te devolvemos el 100% de tu inversión. Sin letra pequeña ni condiciones ocultas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#f6f9fc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header */}
          <div>
            <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
              Preguntas frecuentes
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0a2540] leading-tight italic mb-6">
              Resolvemos tus dudas
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              Si tienes alguna otra pregunta, no dudes en contactarnos.
              Estamos aquí para ayudarte.
            </p>
            <Link
              href="#contacto"
              className="btn btn-primary"
            >
              Hablar con el equipo
              <svg className="w-5 h-5 arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`card overflow-hidden transition-all ${
                  openIndex === index ? "card-shadow-lg" : "card-shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-start justify-between text-left"
                >
                  <span className="text-lg font-semibold text-[#0a2540] pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        openIndex === index
                          ? "bg-[#0a2540] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
