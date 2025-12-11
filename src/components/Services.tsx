import Link from "next/link";

const services = [
  {
    title: "Consultoría Estratégica",
    description: "Analizamos tu negocio, identificamos oportunidades y diseñamos un plan de acción para multiplicar resultados.",
    features: ["Diagnóstico completo", "Plan personalizado", "Seguimiento mensual", "KPIs claros"],
  },
  {
    title: "Formación y Mentoring",
    description: "Programas prácticos para equipos inmobiliarios que buscan profesionalizarse y escalar.",
    features: ["Workshops presenciales", "Contenido online 24/7", "Mentoring grupal", "Certificaciones"],
  },
  {
    title: "Networking Premium",
    description: "Eventos exclusivos para conectar con los mejores profesionales del sector.",
    features: ["Eventos mensuales", "Masterminds", "Viajes de networking", "Comunidad privada"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-[#00abc8] text-sm font-medium uppercase tracking-wider mb-4">
            Servicios
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#101820] leading-tight">
            Soluciones para cada etapa de tu crecimiento
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl border border-gray-100 hover:border-[#00abc8] transition-colors">
                <h3 className="text-xl font-semibold text-[#101820] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-500 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="w-1 h-1 bg-[#00abc8] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#101820] hover:text-[#00abc8] font-medium transition-colors"
          >
            Solicitar información
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
