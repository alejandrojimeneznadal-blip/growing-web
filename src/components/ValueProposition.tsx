import Link from "next/link";

export default function ValueProposition() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Big statement */}
        <div className="max-w-5xl">
          <p className="text-sm font-medium tracking-wider text-gray-400 mb-6">
            POR QUÉ GROWING
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101820] leading-tight">
            No somos una consultoría más.
            <br />
            <span className="text-gray-300">Somos tu partner estratégico.</span>
          </h2>
        </div>

        {/* Three pillars */}
        <div className="mt-24 grid md:grid-cols-3 gap-12 md:gap-8">
          {[
            {
              title: "Comunidad",
              description: "Red exclusiva de +150 inmobiliarias. Comparte, aprende y crece con los mejores profesionales del sector.",
            },
            {
              title: "Formación",
              description: "Programas diseñados para equipos que quieren resultados. Metodología práctica y 100% aplicable.",
            },
            {
              title: "Consultoría",
              description: "Análisis personalizado de tu negocio. Identificamos oportunidades y diseñamos estrategias ganadoras.",
            },
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="h-px bg-gray-200 group-hover:bg-[#00abc8] transition-colors mb-8" />
              <h3 className="text-2xl font-bold text-[#101820] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Link
            href="#contacto"
            className="bg-[#101820] text-white px-8 py-4 text-sm font-medium tracking-wider hover:bg-[#00abc8] transition-colors"
          >
            QUIERO SABER MÁS
          </Link>
          <span className="text-sm text-gray-400">
            Primera consulta sin compromiso
          </span>
        </div>
      </div>
    </section>
  );
}
