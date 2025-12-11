import Link from "next/link";

const testimonials = [
  {
    name: "María García",
    role: "CEO",
    company: "Inmobiliaria García & Asociados",
    location: "Madrid",
    quote: "Desde que nos unimos a Growing, hemos incrementado nuestra facturación un 40%. La comunidad y el soporte son excepcionales.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Director",
    company: "Fincas Rodríguez",
    location: "Barcelona",
    quote: "El networking con otras inmobiliarias ha sido clave para cerrar operaciones que antes eran imposibles. Growing te abre puertas.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Fundadora",
    company: "Hogares Premium",
    location: "Valencia",
    quote: "La formación que recibimos es de primer nivel. Hemos profesionalizado completamente nuestro equipo comercial.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with Trustpilot */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* Trustpilot logo placeholder */}
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-[#00b67a]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-700 font-semibold">4.9/5</span>
              <span className="text-gray-500">en Trustpilot</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#101820] mb-4">
            Lo que dicen nuestros miembros
          </h2>
          <p className="text-lg text-gray-600">
            Más de 150 inmobiliarias confían en Growing. Esto es lo que opinan
            sobre nuestra comunidad.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-[#00abc8]/20 absolute top-6 right-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#00b67a]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00abc8] to-[#00758d] flex items-center justify-center text-white font-semibold">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-[#101820]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  <div className="text-xs text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot CTA */}
        <div className="text-center">
          <Link
            href="https://www.trustpilot.com/review/growinginmobiliario.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#00abc8] hover:text-[#00758d] font-medium transition-colors"
          >
            Ver todas las reseñas en Trustpilot
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
