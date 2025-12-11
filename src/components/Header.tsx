"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#servicios", label: "LO QUE HACEMOS" },
    { href: "#comunidad", label: "COMUNIDAD" },
    { href: "#testimonios", label: "TESTIMONIOS" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-horizontal-clean.svg"
              alt="Growing Inmobiliario"
              width={140}
              height={28}
              className="h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#101820] text-xs font-medium tracking-wider hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contacto"
              className="bg-[#101820] text-white px-6 py-3 text-xs font-medium tracking-wider hover:bg-[#00abc8] transition-colors"
            >
              AGENDAR REUNIÓN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6 text-[#101820]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#101820] text-xs font-medium tracking-wider py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                className="bg-[#101820] text-white px-6 py-4 text-xs font-medium tracking-wider text-center mt-4 hover:bg-[#00abc8] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AGENDAR REUNIÓN
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
