"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const phrases = [
  "Capta más",
  "Gestiona mejor",
  "Escala tu inmobiliaria",
  "Cierra más exclusivas",
  "Lidera tu mercado",
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a2540] flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 flex flex-col justify-center px-16 xl:px-24">
          <Link href="/" className="mb-12">
            <Image
              src="/Logo_02a.svg"
              alt="Growing Inmobiliario"
              width={180}
              height={36}
              className="h-9 w-auto brightness-0 invert"
            />
          </Link>
          <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
            Bienvenido de nuevo
          </h1>
          <p className="text-2xl xl:text-3xl text-white/70">
            {displayText}
            <span className="inline-block w-[3px] h-[1em] bg-[#00abc8] ml-1 align-middle animate-blink" />
          </p>
        </div>
        <style jsx>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
        `}</style>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/">
              <Image
                src="/Logo_02a.svg"
                alt="Growing Inmobiliario"
                width={160}
                height={32}
                className="h-8 w-auto brightness-0 invert mx-auto"
              />
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Iniciar Sesion
              </h2>
              <p className="text-white/50 text-sm">
                Introduce tus credenciales para acceder
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 outline-none focus:border-[#00abc8] focus:ring-1 focus:ring-[#00abc8] transition-all"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-2">
                  Contrasena
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 outline-none focus:border-[#00abc8] focus:ring-1 focus:ring-[#00abc8] transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#00abc8] focus:ring-[#00abc8] focus:ring-offset-0"
                  />
                  <span className="text-white/50">Recordarme</span>
                </label>
                <Link
                  href="/recuperar-contrasena"
                  className="text-[#00abc8] hover:text-white transition-colors"
                >
                  Olvidaste tu contrasena?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-[#00abc8] hover:bg-[#00c4e4] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <>
                    Iniciar Sesion
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-white/50 text-sm">
                No tienes cuenta?{" "}
                <Link
                  href="/#contacto"
                  className="text-[#00abc8] hover:text-white transition-colors font-medium"
                >
                  Contacta con nosotros
                </Link>
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-white/30 text-xs">
            Al iniciar sesion, aceptas nuestros{" "}
            <Link href="/aviso-legal" className="underline hover:text-white/50">
              Terminos
            </Link>{" "}
            y{" "}
            <Link href="/privacidad" className="underline hover:text-white/50">
              Politica de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
