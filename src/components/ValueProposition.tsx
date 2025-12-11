const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Comunidad Activa",
    description: "Conecta con más de 150 inmobiliarias de toda España. Comparte experiencias, resuelve dudas y crece junto a profesionales como tú.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Formación Continua",
    description: "Accede a formaciones exclusivas, webinars y recursos actualizados para estar siempre a la vanguardia del sector inmobiliario.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Resultados Reales",
    description: "Estrategias probadas que funcionan. Nuestros miembros incrementan su facturación y optimizan sus procesos desde el primer mes.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Soporte Personalizado",
    description: "Consultoría adaptada a tu negocio. Te ayudamos a identificar oportunidades y superar los retos específicos de tu inmobiliaria.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#101820] mb-4">
            ¿Por qué unirte a Growing?
          </h2>
          <p className="text-lg text-gray-600">
            No somos solo una consultoría. Somos tu socio estratégico para
            transformar y escalar tu negocio inmobiliario.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-[#00abc8] hover:to-[#00758d] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#00abc8]/10 group-hover:bg-white/20 flex items-center justify-center text-[#00abc8] group-hover:text-white mb-4 transition-all">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#101820] group-hover:text-white mb-2 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
