"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-[#00abc8] flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-8 h-8 text-white"
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
          <h3 className="text-3xl font-bold text-[#101820] mb-4">
            Gracias por contactarnos
          </h3>
          <p className="text-gray-500 text-lg">
            Hemos recibido tu solicitud. Un miembro de nuestro equipo se pondrá
            en contacto contigo en las próximas 24 horas.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-medium tracking-wider text-gray-400 mb-6">
            CONTACTO
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101820] leading-tight">
            ¿Listo para hacer crecer tu inmobiliaria?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <p className="text-xl text-gray-500 leading-relaxed mb-12">
              Déjanos tus datos y un miembro de nuestro equipo se pondrá en
              contacto contigo para explicarte cómo podemos ayudarte.
            </p>

            <div className="space-y-8">
              {[
                { title: "Respuesta rápida", subtitle: "Te contactamos en menos de 24h" },
                { title: "Sin compromiso", subtitle: "Consulta gratuita inicial" },
                { title: "Atención personalizada", subtitle: "Adaptada a tu inmobiliaria" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-[#00abc8] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-[#101820] mb-1">{item.title}</div>
                    <div className="text-gray-400">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium tracking-wider text-gray-400 mb-3"
                  >
                    NOMBRE COMPLETO
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:ring-0 focus:border-[#101820] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium tracking-wider text-gray-400 mb-3"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:ring-0 focus:border-[#101820] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium tracking-wider text-gray-400 mb-3"
                  >
                    TELÉFONO
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:ring-0 focus:border-[#101820] transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-medium tracking-wider text-gray-400 mb-3"
                  >
                    TU INMOBILIARIA
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:ring-0 focus:border-[#101820] transition-colors"
                    placeholder="Nombre de tu agencia"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium tracking-wider text-gray-400 mb-3"
                >
                  MENSAJE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:ring-0 focus:border-[#101820] transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu inmobiliaria y tus objetivos..."
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#101820] hover:bg-[#00abc8] disabled:bg-gray-300 text-white px-12 py-4 text-sm font-medium tracking-wider transition-colors"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
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
                      ENVIANDO...
                    </span>
                  ) : (
                    "ENVIAR MENSAJE"
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-400 pt-4">
                Al enviar este formulario, aceptas nuestra{" "}
                <a href="/privacidad" className="text-[#101820] hover:text-[#00abc8] transition-colors">
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
