const values = [
  {
    number: "01",
    title: "Comunidad",
    description: "Red exclusiva de inmobiliarias. Comparte, aprende y crece con profesionales de toda España.",
  },
  {
    number: "02",
    title: "Formación",
    description: "Programas diseñados para equipos que quieren resultados. Metodología práctica y aplicable.",
  },
  {
    number: "03",
    title: "Consultoría",
    description: "Análisis personalizado de tu negocio. Identificamos oportunidades y diseñamos estrategias.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Text */}
          <div className="lg:sticky lg:top-32">
            <p className="text-[#00abc8] text-sm font-medium uppercase tracking-wider mb-4">
              Por qué Growing
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#101820] leading-tight mb-6">
              Todo lo que tu inmobiliaria necesita para crecer
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              No somos una consultoría más. Somos tu partner estratégico con una comunidad activa que te respalda.
            </p>
          </div>

          {/* Right side - Cards */}
          <div className="space-y-6">
            {values.map((value) => (
              <div
                key={value.number}
                className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#00abc8]/30 hover:shadow-lg hover:shadow-[#00abc8]/5 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-bold text-gray-100 group-hover:text-[#00abc8]/20 transition-colors">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#101820] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {value.description}
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
