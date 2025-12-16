import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Consultoría Estratégica",
    description: "Analizamos tu negocio, identificamos oportunidades y diseñamos un plan de acción para multiplicar resultados.",
    features: ["Diagnóstico completo", "Plan personalizado", "Seguimiento mensual", "KPIs claros"],
  },
  {
    number: "02",
    title: "Formación y Mentoring",
    description: "Programas prácticos para equipos inmobiliarios que buscan profesionalizarse y escalar.",
    features: ["Workshops presenciales", "Contenido online 24/7", "Mentoring grupal", "Certificaciones"],
  },
  {
    number: "03",
    title: "Networking Premium",
    description: "Eventos exclusivos para conectar con los mejores profesionales del sector.",
    features: ["Eventos mensuales", "Masterminds", "Viajes de networking", "Comunidad privada"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-16 lg:mb-20">
          <p className="text-sm font-medium tracking-wider text-gray-400 mb-4">
            LO QUE HACEMOS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-medium text-[#101820] leading-tight max-w-4xl italic">
            Soluciones para cada etapa de tu crecimiento
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 sm:p-8 lg:p-10 hover-lift cursor-pointer"
            >
              {/* Number */}
              <span className="text-5xl sm:text-7xl lg:text-8xl font-bold text-gray-100 group-hover:text-[#00abc8]/20 transition-colors">
                {service.number}
              </span>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-[#101820] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#00abc8] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-16 lg:mt-20 flex justify-center">
          <Link
            href="#contacto"
            className="bg-[#101820] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium tracking-wider hover:bg-[#00abc8] transition-colors text-center"
          >
            SOLICITAR INFORMACIÓN
          </Link>
        </div>
      </div>
    </section>
  );
}
