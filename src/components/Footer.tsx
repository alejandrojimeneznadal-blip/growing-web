"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/growinginmobiliario",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/growinginmobiliario",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@growinginmobiliario",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isEquipoPage = pathname === "/equipo";

  return (
    <footer className="bg-[#0a2540]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/Logo_02a.svg"
                alt="Growing Inmobiliario"
                width={140}
                height={28}
                className="h-7 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
              La comunidad que impulsa a las inmobiliarias a escalar.
              Más de 150 agencias de toda España confían en nosotros.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Empresa
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Método", href: "#servicios" },
                  { label: "Garantía", href: "#garantia" },
                  { label: "Testimonios", href: "#testimonios" },
                  { label: "Blog", href: "/blog" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Aviso legal", href: "/aviso-legal" },
                  { label: "Privacidad", href: "/privacidad" },
                  { label: "Cookies", href: "/cookies" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Contacto
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:Soporte@growinginmobiliario.com"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Soporte@growinginmobiliario.com
                  </a>
                </li>
                <li>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-[#00abc8] hover:text-white text-sm font-medium transition-colors"
                  >
                    Agendar llamada
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Growing Inmobiliario. Todos los derechos reservados.
            </p>
            <p className="text-white/40 text-sm">
              Hecho con pasi{isEquipoPage ? (
                <Link href="/roulette" className="hover:text-white/60 transition-colors cursor-pointer">ó</Link>
              ) : (
                "ó"
              )}n en España
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
