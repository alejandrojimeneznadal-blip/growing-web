"use client";

const painPoints = [
  {
    number: "01",
    title: "Estás atrapado en el día a día",
    description:
      "Trabajas más horas que nunca, pero sientes que no avanzas. Tu inmobiliaria depende 100% de ti y no puedes tomarte ni un día libre.",
  },
  {
    number: "02",
    title: "No consigues captar exclusivas",
    description:
      "Los propietarios no ven el valor de trabajar en exclusiva contigo. Acabas compitiendo en un mar de inmobiliarias por los mismos pisos.",
  },
  {
    number: "03",
    title: "Tu equipo no rinde como debería",
    description:
      "Formas a comerciales que se van, no sabes cómo motivarlos ni crear procesos que funcionen sin tu supervisión constante.",
  },
  {
    number: "04",
    title: "Ingresos impredecibles",
    description:
      "Un mes facturas bien y al siguiente no sabes qué pasará. No tienes un sistema predecible de captación y ventas.",
  },
];

export default function PainPoints() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
            El problema
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0a2540] leading-tight italic">
            ¿Te suena familiar?
          </h2>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            La mayoría de inmobiliarias se enfrentan a estos problemas.
            No estás solo, pero hay una solución.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="card card-shadow-md p-8 lg:p-10 group hover:card-shadow-lg"
            >
              <div className="flex items-start gap-6">
                <span className="text-6xl font-bold text-gray-100 group-hover:text-[#00abc8]/20 transition-colors">
                  {point.number}
                </span>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-3 group-hover:text-[#00abc8] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition text */}
        <div className="mt-20 text-center">
          <p className="text-2xl sm:text-3xl font-medium text-[#0a2540] max-w-3xl mx-auto leading-relaxed">
            No tiene por qué ser así.{" "}
            <span className="text-gradient">
              Existe un camino mejor.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
