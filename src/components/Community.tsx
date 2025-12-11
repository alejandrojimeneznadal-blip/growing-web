import Link from "next/link";

export default function Community() {
  return (
    <section id="comunidad" className="py-32 bg-[#101820]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <p className="text-sm font-medium tracking-wider text-gray-500 mb-6">
            COMUNIDAD
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight italic">
            +150 inmobiliarias
            <br />
            <span className="text-[#00abc8]">creciendo juntas</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Description */}
          <div>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              La comunidad más activa del sector inmobiliario en España.
              Compartimos conocimiento, cerramos operaciones conjuntas y nos ayudamos a crecer.
            </p>

            <div className="space-y-6 mb-12">
              {[
                "Acceso a red de contactos de alto valor",
                "Intercambio de inmuebles entre agencias",
                "Colaboraciones y operaciones conjuntas",
                "Aprendizaje continuo de los mejores",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#00abc8] rounded-full flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contacto"
              className="inline-block bg-white text-[#101820] px-8 py-4 text-sm font-medium tracking-wider hover:bg-[#00abc8] hover:text-white transition-colors"
            >
              UNIRME A LA COMUNIDAD
            </Link>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-px bg-white/10">
            {[
              { value: "+150", label: "Inmobiliarias activas" },
              { value: "100%", label: "Cobertura nacional" },
              { value: "+5", label: "Años de trayectoria" },
              { value: "40%", label: "Incremento medio" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#101820] p-8 lg:p-12"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 tracking-wider">
                  {stat.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4">
            {["Madrid", "Barcelona", "Valencia", "Sevilla", "Málaga", "Bilbao", "Alicante", "Murcia", "Zaragoza", "Palma"].map(
              (city) => (
                <span
                  key={city}
                  className="text-sm text-gray-500 hover:text-white transition-colors cursor-default"
                >
                  {city}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
