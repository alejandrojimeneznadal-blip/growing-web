"use client";

const funnelSteps = [
  {
    stage: "Atracción",
    description: "Generamos tráfico cualificado de propietarios interesados en vender",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    stage: "Conversión",
    description: "Convertimos ese interés en reuniones de captación agendadas",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    stage: "Captación",
    description: "Cierras exclusivas con nuestros scripts y técnicas probadas",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    stage: "Venta",
    description: "Vendes más rápido con propiedades en exclusiva de calidad",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function System() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
            El sistema
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0a2540] leading-tight italic">
            El Embudo de Exclusivas
          </h2>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            Un sistema paso a paso que genera propietarios cualificados de forma
            predecible y los convierte en exclusivas.
          </p>
        </div>

        {/* Funnel visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00abc8] via-[#667eea] to-[#0a2540] hidden lg:block" />

          {/* Steps */}
          <div className="space-y-8 lg:space-y-0">
            {funnelSteps.map((step, index) => (
              <div
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"
                  }`}
                >
                  <div className={`card card-shadow-md p-8 ${index % 2 === 0 ? "" : ""}`}>
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00abc8] to-[#667eea] rounded-xl flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#00abc8] mb-1">
                          Paso {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-[#0a2540] mb-2">
                          {step.stage}
                        </h3>
                        <p className="text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-[#00abc8] shadow-lg items-center justify-center z-10">
                  <span className="w-2 h-2 bg-[#00abc8] rounded-full" />
                </div>

                {/* Spacer for grid alignment */}
                <div className={`hidden lg:block ${index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`} />
              </div>
            ))}
          </div>

          {/* Result card */}
          <div className="mt-12 lg:mt-16">
            <div className="bg-gradient-to-r from-[#0a2540] to-[#0f3052] rounded-2xl p-8 lg:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00abc8] rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Resultado: Crecimiento predecible
              </h3>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Un flujo constante de propiedades en exclusiva que te permite
                escalar tu inmobiliaria con previsibilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
