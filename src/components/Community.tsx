import Link from "next/link";

const stats = [
  { number: "+150", label: "Inmobiliarias" },
  { number: "100%", label: "Península" },
  { number: "+5", label: "Años de experiencia" },
  { number: "24/7", label: "Soporte" },
];

export default function Community() {
  return (
    <section id="comunidad" className="py-24 bg-[#101820] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00758d]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00abc8]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-[#00abc8] font-semibold text-sm uppercase tracking-wider">
              Nuestra Comunidad
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">
              Más de 150 inmobiliarias ya forman parte de Growing
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Desde pequeñas agencias hasta grandes redes inmobiliarias, todos
              encuentran en Growing el impulso que necesitan. Somos la comunidad
              más activa del sector inmobiliario en España.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Acceso a una red de contactos de alto valor",
                "Intercambio de inmuebles entre agencias",
                "Colaboraciones y operaciones conjuntas",
                "Aprendizaje de los mejores del sector",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-[#00abc8]/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#00abc8]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#00abc8] hover:bg-[#00758d] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Únete ahora
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#00abc8] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder - could add actual map of Spain with pins */}
        <div className="mt-20 text-center">
          <p className="text-white/60 text-sm mb-6">
            Inmobiliarias de toda España confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Madrid", "Barcelona", "Valencia", "Sevilla", "Málaga", "Bilbao", "Alicante", "Murcia"].map(
              (city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm"
                >
                  {city}
                </span>
              )
            )}
            <span className="px-4 py-2 bg-[#00abc8]/20 border border-[#00abc8]/30 rounded-full text-[#00abc8] text-sm">
              + muchas más
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
