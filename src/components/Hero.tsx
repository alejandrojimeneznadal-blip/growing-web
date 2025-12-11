import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#00abc8]/5 border border-[#00abc8]/20 px-4 py-2 rounded-full text-[#00758d] text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-[#00abc8] rounded-full" />
            +150 inmobiliarias en España
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#101820] leading-[1.1] tracking-tight mb-8">
            Hacemos crecer
            <br />
            <span className="text-[#00abc8]">inmobiliarias</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Consultoría, formación y la comunidad más activa del sector inmobiliario en España.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contacto"
              className="bg-[#101820] hover:bg-[#00758d] text-white px-8 py-4 rounded-full font-medium text-lg transition-all"
            >
              Empezar ahora
            </Link>
            <Link
              href="#servicios"
              className="text-[#101820] hover:text-[#00758d] px-8 py-4 rounded-full font-medium text-lg transition-all border border-gray-200 hover:border-[#00758d]"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 pt-12 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "+150", label: "Inmobiliarias" },
              { value: "+5", label: "Años experiencia" },
              { value: "100%", label: "España" },
              { value: "4.9★", label: "Trustpilot" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#101820] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
