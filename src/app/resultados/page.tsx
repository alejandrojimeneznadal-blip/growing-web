"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Métricas destacadas
const metrics = [
  { value: "+500", label: "Inmobiliarias formadas" },
  { value: "4.9", label: "Valoración en Trustpilot" },
  { value: "+40%", label: "Crecimiento medio de facturación" },
  { value: "12", label: "Países con alumnos" },
];

// Testimonios con video
const testimonials = [
  {
    name: "Kevin y Héctor",
    company: "KyH Grand Capital",
    monthlyIncome: "50.000€",
    annualIncome: "600.000€",
    timeframe: "3 meses",
    videoUrl: "https://youtu.be/ZmGJ_hWpZNo",
    videoId: "ZmGJ_hWpZNo",
  },
  {
    name: "Manuela Oviedo",
    company: "Puerto Inmobiliaria",
    monthlyIncome: "30.000€",
    annualIncome: "360.000€",
    timeframe: "5 meses",
    videoUrl: "https://youtu.be/K5khs-7NXPg",
    videoId: "K5khs-7NXPg",
  },
  {
    name: "Alazne Aguirre",
    company: "Merca Service Donosti",
    monthlyIncome: "24.500€",
    annualIncome: "294.000€",
    timeframe: "1 mes",
    videoUrl: "https://youtu.be/nB2I8S_M7tM",
    videoId: "nB2I8S_M7tM",
  },
  {
    name: "Adrian Velasco",
    company: "Dfincas Cerdanyola",
    monthlyIncome: "23.000€",
    annualIncome: "276.000€",
    timeframe: "2,5 meses",
    videoUrl: "https://youtu.be/cWLz0ZDkEwk",
    videoId: "cWLz0ZDkEwk",
  },
  {
    name: "Alejandro Fernandez",
    company: "Te Alquilamos Tu Casa",
    monthlyIncome: "12.000€",
    annualIncome: "144.000€",
    timeframe: "2 meses",
    videoUrl: "https://youtu.be/AzSI8DdtO-k",
    videoId: "AzSI8DdtO-k",
  },
  {
    name: "Sufian",
    company: "Vilahomeroom",
    monthlyIncome: "9.000€",
    annualIncome: "108.000€",
    timeframe: "3 meses",
    videoUrl: "https://youtu.be/cq4SSAT59m4",
    videoId: "cq4SSAT59m4",
  },
  {
    name: "Tony Nicolas",
    company: "Tony BNB",
    monthlyIncome: "9.000€",
    annualIncome: "108.000€",
    timeframe: "4 meses",
    videoUrl: "https://youtu.be/VLipNesrY8c",
    videoId: "VLipNesrY8c",
  },
  {
    name: "Alberto Serrano",
    company: "Amai Homes",
    monthlyIncome: "7.000€",
    annualIncome: "84.000€",
    timeframe: "6 meses",
    videoUrl: "https://youtu.be/EfRNcntG3Ts",
    videoId: "EfRNcntG3Ts",
  },
  {
    name: "Kevin y Hector",
    company: "Solgirona",
    monthlyIncome: "7.500€",
    annualIncome: "90.000€",
    timeframe: "1 mes",
    videoUrl: "https://youtu.be/hG7T_egYO1o",
    videoId: "hG7T_egYO1o",
  },
  {
    name: "Juan Carlos Lanchas",
    company: "Agente independiente",
    monthlyIncome: "$10,000",
    annualIncome: "$120,000",
    timeframe: "3 meses",
    videoUrl: "https://youtu.be/91mi-dK8wMU",
    videoId: "91mi-dK8wMU",
  },
  {
    name: "Miriam García",
    company: "Agente independiente",
    monthlyIncome: "$10,000",
    annualIncome: "$120,000",
    timeframe: "3 meses",
    videoUrl: "https://youtu.be/SAN_YPMXYSk",
    videoId: "SAN_YPMXYSk",
  },
];

function MetricCard({ metric, index, isVisible }: { metric: typeof metrics[0], index: number, isVisible: boolean }) {
  return (
    <div
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl sm:text-6xl font-serif italic text-[#00abc8] mb-2">
        {metric.value}
      </div>
      <div className="text-white/60 text-sm">
        {metric.label}
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, index, isVisible }: { testimonial: typeof testimonials[0], index: number, isVisible: boolean }) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden card-shadow-md transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Video Thumbnail */}
      <Link
        href={testimonial.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video bg-gray-900 group"
      >
        <Image
          src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
          alt={`Testimonio de ${testimonial.name}`}
          fill
          className="object-cover group-hover:opacity-80 transition-opacity"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-[#00abc8] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0a2540] mb-1">{testimonial.name}</h3>
        <p className="text-[#00abc8] font-medium text-sm mb-4">{testimonial.company}</p>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Nuevo ingreso mensual:</span>
            <span className="font-semibold text-[#0a2540]">{testimonial.monthlyIncome}</span>
          </div>
          <div className="flex justify-between">
            <span>Nuevo ingreso anual:</span>
            <span className="font-semibold text-[#0a2540]">{testimonial.annualIncome}</span>
          </div>
          <div className="flex justify-between">
            <span>Plazo:</span>
            <span className="font-semibold text-[#0a2540]">{testimonial.timeframe}</span>
          </div>
        </div>

        <Link
          href={testimonial.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#00abc8] hover:text-[#0095ad] font-medium text-sm mt-4 transition-colors"
        >
          Mira la entrevista aquí...
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function ResultadosPage() {
  const [metricsVisible, setMetricsVisible] = useState(false);
  const [casesVisible, setCasesVisible] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const metricsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setMetricsVisible(true), 200);
        metricsObserver.disconnect();
      }
    }, observerOptions);

    const casesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setCasesVisible(true), 200);
        casesObserver.disconnect();
      }
    }, observerOptions);

    const reviewsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setReviewsVisible(true), 200);
        reviewsObserver.disconnect();
      }
    }, observerOptions);

    if (metricsRef.current) metricsObserver.observe(metricsRef.current);
    if (casesRef.current) casesObserver.observe(casesRef.current);
    if (reviewsRef.current) reviewsObserver.observe(reviewsRef.current);

    return () => {
      metricsObserver.disconnect();
      casesObserver.disconnect();
      reviewsObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a2540] relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
              Resultados reales
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif italic text-white mb-6">
              Lo que hemos logrado juntos
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Descubre cómo cientos de inmobiliarias han transformado sus negocios con Growing
            </p>
          </div>
        </section>

        {/* Metrics */}
        <section ref={metricsRef} className="py-20 bg-[#0a2540] border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <MetricCard key={index} metric={metric} index={index} isVisible={metricsVisible} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials with Videos */}
        <section ref={casesRef} className="py-20 bg-[#f6f9fc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
                Casos de éxito
              </p>
              <h2 className="text-4xl sm:text-5xl font-serif italic text-[#0a2540]">
                Historias que inspiran
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} isVisible={casesVisible} />
              ))}
            </div>
          </div>
        </section>

        {/* Trustpilot Reviews */}
        <section ref={reviewsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div>
                <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
                  Testimonios
                </p>
                <h2 className="text-4xl sm:text-5xl font-serif italic text-[#0a2540]">
                  Lo que dicen en Trustpilot
                </h2>
              </div>

              {/* Trustpilot badge */}
              <Link
                href="https://www.trustpilot.com/review/aducion.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#f6f9fc] border border-gray-200 rounded-2xl px-6 py-4 hover:bg-gray-100 transition-colors group"
              >
                <div className="flex flex-col">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    Ver en Trustpilot
                  </span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

            {/* Review Images */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
              reviewsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200"
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

            {/* CTA */}
            <div className="flex justify-center mt-12">
              <Link
                href="https://www.trustpilot.com/review/aducion.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#00abc8] hover:bg-[#0095ad] text-white font-medium px-8 py-4 rounded-lg transition-colors"
              >
                Ver todas las reseñas en Trustpilot
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0a2540]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-6">
              ¿Listo para ser el próximo caso de éxito?
            </h2>
            <p className="text-white/60 mb-8">
              Únete a las más de 500 inmobiliarias que ya están creciendo con nosotros.
            </p>
            <Link
              href="/#contacto"
              className="btn btn-cyan"
            >
              Comprueba si cualificas
              <svg className="w-5 h-5 arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
