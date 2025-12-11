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
    <section id="testimonios" className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-wider text-gray-400 mb-6">
              TESTIMONIOS
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101820] leading-tight">
              Lo que dicen nuestros miembros
            </h2>
          </div>

          {/* Trustpilot */}
          <Link
            href="https://www.trustpilot.com/review/growinginmobiliario.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 group-hover:text-[#101820] transition-colors">
              4.9 en Trustpilot
            </span>
          </Link>
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 lg:p-10 hover-lift"
            >
              {/* Quote */}
              <p className="text-lg text-[#101820] leading-relaxed mb-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#101820] flex items-center justify-center text-white text-sm font-medium">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-medium text-[#101820]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
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
