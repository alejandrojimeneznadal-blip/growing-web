"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with backend or email service
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="section-padding bg-gradient-to-br from-[#0a2540] to-[#0f3052] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00abc8] rounded-full filter blur-[200px] opacity-20" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#00abc8] to-[#667eea] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Solicitud recibida
          </h3>
          <p className="text-xl text-white/60">
            Revisaremos tu aplicación y te contactaremos en las próximas 24-48
            horas para agendar una llamada de descubrimiento.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-[#0a2540] to-[#0f3052] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00abc8] rounded-full filter blur-[200px] opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#667eea] rounded-full filter blur-[200px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
              Da el siguiente paso
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight italic mb-6">
              ¿Listo para escalar tu inmobiliaria?
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              Completa el formulario y descubre si cualificas para trabajar con
              nosotros. Sin compromiso.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {[
                {
                  title: "Llamada de descubrimiento",
                  description: "30 minutos para entender tu negocio y objetivos",
                },
                {
                  title: "Plan personalizado",
                  description: "Estrategia adaptada a tu situación actual",
                },
                {
                  title: "Sin compromiso",
                  description: "Decide si somos el partner adecuado para ti",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#00abc8]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#00abc8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-white/50">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white p-8 lg:p-10 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0a2540] mb-2">
                Comprueba si cualificas
              </h3>
              <p className="text-gray-500">
                Solo trabajamos con inmobiliarias comprometidas con su crecimiento.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#0a2540] mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#00abc8] focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#0a2540] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#00abc8] focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#0a2540] mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#00abc8] focus:border-transparent transition-all"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[#0a2540] mb-2"
                >
                  Nombre de tu inmobiliaria
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#00abc8] focus:border-transparent transition-all"
                  placeholder="Tu agencia inmobiliaria"
                />
              </div>

              <div>
                <label
                  htmlFor="employees"
                  className="block text-sm font-medium text-[#0a2540] mb-2"
                >
                  Tamaño de tu equipo
                </label>
                <select
                  id="employees"
                  name="employees"
                  required
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#00abc8] focus:border-transparent transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="solo">Solo yo</option>
                  <option value="2-5">2-5 personas</option>
                  <option value="6-10">6-10 personas</option>
                  <option value="11+">Más de 10 personas</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0a2540] hover:bg-[#00abc8] disabled:bg-gray-300 text-white py-4 font-medium transition-colors flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Comprobar si cualifico
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center pt-2">
                Al enviar, aceptas nuestra{" "}
                <a href="/privacidad" className="text-[#00abc8] hover:underline">
                  política de privacidad
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
