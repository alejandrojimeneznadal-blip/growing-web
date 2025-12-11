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
      <section id="contacto" className="py-32 bg-[#fafafa]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-500"
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
          <h3 className="text-2xl font-bold text-[#101820] mb-4">
            Gracias por contactarnos
          </h3>
          <p className="text-gray-500">
            Hemos recibido tu solicitud. Un miembro de nuestro equipo se pondrá
            en contacto contigo en las próximas 24 horas.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <p className="text-[#00abc8] text-sm font-medium uppercase tracking-wider mb-4">
              Contacto
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#101820] leading-tight mb-6">
              ¿Listo para hacer crecer tu inmobiliaria?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-12">
              Déjanos tus datos y un miembro de nuestro equipo se pondrá en
              contacto contigo para explicarte cómo podemos ayudarte.
            </p>

            <div className="space-y-6">
              {[
                { title: "Respuesta rápida", subtitle: "Te contactamos en menos de 24h" },
                { title: "Sin compromiso", subtitle: "Consulta gratuita inicial" },
                { title: "Atención personalizada", subtitle: "Adaptada a tu inmobiliaria" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#00abc8] rounded-full" />
                  <div>
                    <div className="font-medium text-[#101820]">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-[#00abc8] focus:bg-white transition-all text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-[#00abc8] focus:bg-white transition-all text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-[#00abc8] focus:bg-white transition-all text-sm"
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tu inmobiliaria
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-[#00abc8] focus:bg-white transition-all text-sm"
                    placeholder="Nombre de tu agencia"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-[#00abc8] focus:bg-white transition-all resize-none text-sm"
                  placeholder="Cuéntanos sobre tu inmobiliaria y tus objetivos..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#101820] hover:bg-[#00abc8] disabled:bg-gray-300 text-white px-8 py-4 rounded-full font-medium transition-colors"
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
                    Enviando...
                  </span>
                ) : (
                  "Solicitar información"
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Al enviar este formulario, aceptas nuestra{" "}
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
