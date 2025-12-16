"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simular envío - reemplazar con tu endpoint real
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-20 bg-[#0a2540]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-white mb-4">
          Newsletter
        </h3>
        <p className="text-white/60 mb-8">
          Únete a +2,000 inmobiliarias que reciben consejos exclusivos para escalar su negocio.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#00abc8] focus:ring-1 focus:ring-[#00abc8] transition-colors"
            required
            disabled={status === "loading" || status === "success"}
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-6 py-3.5 bg-[#00abc8] hover:bg-[#00abc8]/90 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "loading" ? (
              "Enviando..."
            ) : status === "success" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Suscrito
              </span>
            ) : (
              "Suscribirme"
            )}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-[#00abc8] text-sm">
            ¡Gracias! Revisa tu bandeja de entrada.
          </p>
        )}

        <p className="mt-6 text-white/40 text-xs">
          Sin spam. Cancela cuando quieras.
        </p>
      </div>
    </section>
  );
}
