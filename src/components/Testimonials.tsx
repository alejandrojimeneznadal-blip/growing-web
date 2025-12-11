import Link from "next/link";

const testimonials = [
  {
    quote: "Desde que nos unimos a Growing, hemos incrementado nuestra facturación un 40%. La comunidad y el soporte son excepcionales.",
    name: "María García",
    role: "CEO, Inmobiliaria García",
    location: "Madrid",
  },
  {
    quote: "El networking con otras inmobiliarias ha sido clave para cerrar operaciones que antes eran imposibles.",
    name: "Carlos Rodríguez",
    role: "Director, Fincas Rodríguez",
    location: "Barcelona",
  },
  {
    quote: "La formación que recibimos es de primer nivel. Hemos profesionalizado completamente nuestro equipo comercial.",
    name: "Ana Martínez",
    role: "Fundadora, Hogares Premium",
    location: "Valencia",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-[#00abc8] text-sm font-medium uppercase tracking-wider mb-4">
              Testimonios
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#101820] leading-tight">
              Lo que dicen nuestros miembros
            </h2>
          </div>

          {/* Trustpilot */}
          <Link
            href="https://www.trustpilot.com/review/growinginmobiliario.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">4.9 en Trustpilot</span>
          </Link>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-100"
            >
              <p className="text-gray-600 leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-500">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-medium text-[#101820] text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {testimonial.role} · {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
