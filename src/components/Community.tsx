import Link from "next/link";

export default function Community() {
  return (
    <section id="comunidad" className="py-32 bg-[#101820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-[#00abc8] text-sm font-medium uppercase tracking-wider mb-4">
              Comunidad
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              +150 inmobiliarias creciendo juntas
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              La comunidad más activa del sector inmobiliario en España. Compartimos conocimiento, cerramos operaciones conjuntas y nos ayudamos a crecer.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Acceso a red de contactos de alto valor",
                "Intercambio de inmuebles entre agencias",
                "Colaboraciones y operaciones conjuntas",
                "Aprendizaje continuo de los mejores",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00abc8] rounded-full" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 bg-white text-[#101820] hover:bg-[#00abc8] hover:text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Unirme a la comunidad
            </Link>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "+150", label: "Inmobiliarias activas" },
              { value: "100%", label: "Cobertura nacional" },
              { value: "+5", label: "Años de trayectoria" },
              { value: "∞", label: "Oportunidades" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-white/10 text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-center text-gray-500 text-sm mb-6">
            Presentes en toda España
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Madrid", "Barcelona", "Valencia", "Sevilla", "Málaga", "Bilbao", "Alicante", "Murcia", "Zaragoza", "Palma"].map(
              (city) => (
                <span
                  key={city}
                  className="px-4 py-2 text-sm text-gray-400 border border-white/10 rounded-full"
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
