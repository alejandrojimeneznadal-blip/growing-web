"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Fundadores - 2 personas
const founders = [
  {
    name: "Nombre Apellido",
    role: "CEO & Fundador",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Nombre Apellido",
    role: "Co-Fundador",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
];

// Equipo - 9 personas (3 filas de 3)
const teamMembers = [
  {
    name: "Nombre Apellido",
    role: "Director de Operaciones",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Nombre Apellido",
    role: "Director Comercial",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Nombre Apellido",
    role: "Director de Marketing",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Nombre Apellido",
    role: "Head of Growth",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Nombre Apellido",
    role: "Customer Success Manager",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Nombre Apellido",
    role: "Coach Inmobiliario",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Nombre Apellido",
    role: "Coach Inmobiliario",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Nombre Apellido",
    role: "Especialista en Captación",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Nombre Apellido",
    role: "Community Manager",
    image: "/team/placeholder.jpg",
    linkedin: "https://linkedin.com/in/",
  },
];

function TeamCard({ member, index, isVisible }: { member: typeof founders[0], index: number, isVisible: boolean }) {
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden card-shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="aspect-[4/5] relative bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] to-[#00abc8] opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-24 h-24 text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#0a2540] mb-1">
          {member.name}
        </h3>
        <p className="text-[#00abc8] text-sm font-medium mb-4">
          {member.role}
        </p>

        {/* LinkedIn */}
        <Link
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0077b5] transition-colors text-sm"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </Link>
      </div>
    </div>
  );
}

export default function EquipoPage() {
  const [foundersVisible, setFoundersVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const foundersRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const foundersObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setFoundersVisible(true), 200);
        foundersObserver.disconnect();
      }
    }, observerOptions);

    const teamObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setTeamVisible(true), 200);
        teamObserver.disconnect();
      }
    }, observerOptions);

    if (foundersRef.current) foundersObserver.observe(foundersRef.current);
    if (teamRef.current) teamObserver.observe(teamRef.current);

    return () => {
      foundersObserver.disconnect();
      teamObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero with grid pattern */}
        <section className="pt-32 pb-20 bg-white relative overflow-hidden">
          {/* Grid pattern background with fade edges */}
          <div
            className="absolute inset-0"
            style={{
              maskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 70%)'
            }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="hero-grid-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(10, 37, 64, 0.08)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif italic text-[#0a2540]">
              El talento que forma Growing
            </h1>
          </div>
        </section>

        {/* Founders & Team */}
        <section className="py-20 bg-white relative overflow-hidden">

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Grid con líneas discontinuas */}
            <div className="relative max-w-5xl mx-auto">
              {/* Fundadores - 2 centrados */}
              <div ref={foundersRef} className="relative pb-8">
                <div className="flex justify-center gap-8">
                  {founders.map((member, index) => (
                    <div key={index} className="w-full max-w-[280px]">
                      <TeamCard member={member} index={index} isVisible={foundersVisible} />
                    </div>
                  ))}
                </div>
                {/* Línea vertical central entre fundadores */}
                <div
                  className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-0.5 pointer-events-none"
                  style={{
                    top: '-60px',
                    bottom: '-1px',
                    background: 'repeating-linear-gradient(to bottom, rgb(209, 213, 219) 0px, rgb(209, 213, 219) 6px, transparent 6px, transparent 12px)',
                    maskImage: 'linear-gradient(to bottom, transparent, black 20%, black)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black)'
                  }}
                />
                {/* Línea horizontal bajo fundadores */}
                <div
                  className="absolute bottom-0 h-0.5 pointer-events-none"
                  style={{
                    left: '-60px',
                    right: '-60px',
                    background: 'repeating-linear-gradient(to right, rgb(209, 213, 219) 0px, rgb(209, 213, 219) 6px, transparent 6px, transparent 12px)',
                    maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)'
                  }}
                />
              </div>

              {/* Equipo - 3 filas */}
              <div ref={teamRef} className="relative">
                {/* Líneas verticales del equipo */}
                <div
                  className="hidden lg:block absolute w-0.5 pointer-events-none"
                  style={{
                    left: 'calc((100% - 64px) / 3 + 16px)',
                    top: '-1px',
                    bottom: '-60px',
                    background: 'repeating-linear-gradient(to bottom, rgb(209, 213, 219) 0px, rgb(209, 213, 219) 6px, transparent 6px, transparent 12px)',
                    maskImage: 'linear-gradient(to bottom, black, black 92%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black, black 92%, transparent)'
                  }}
                />
                <div
                  className="hidden lg:block absolute w-0.5 pointer-events-none"
                  style={{
                    left: 'calc((100% - 64px) / 3 * 2 + 48px)',
                    top: '-1px',
                    bottom: '-60px',
                    background: 'repeating-linear-gradient(to bottom, rgb(209, 213, 219) 0px, rgb(209, 213, 219) 6px, transparent 6px, transparent 12px)',
                    maskImage: 'linear-gradient(to bottom, black, black 92%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black, black 92%, transparent)'
                  }}
                />

                {/* Primera fila */}
                <div className="grid lg:grid-cols-3 gap-8 py-8 relative">
                  {teamMembers.slice(0, 3).map((member, index) => (
                    <div key={index}>
                      <TeamCard member={member} index={index} isVisible={teamVisible} />
                    </div>
                  ))}
                  {/* Línea horizontal */}
                  <div
                    className="absolute bottom-0 h-0.5 pointer-events-none"
                    style={{
                      left: '-60px',
                      right: '-60px',
                      background: 'repeating-linear-gradient(to right, rgb(209, 213, 219) 0px, rgb(209, 213, 219) 6px, transparent 6px, transparent 12px)',
                      maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)'
                    }}
                  />
                </div>

                {/* Segunda fila */}
                <div className="grid lg:grid-cols-3 gap-8 py-8 relative">
                  {teamMembers.slice(3, 6).map((member, index) => (
                    <div key={index + 3}>
                      <TeamCard member={member} index={index} isVisible={teamVisible} />
                    </div>
                  ))}
                  {/* Línea horizontal */}
                  <div
                    className="absolute bottom-0 h-0.5 pointer-events-none"
                    style={{
                      left: '-60px',
                      right: '-60px',
                      background: 'repeating-linear-gradient(to right, rgb(209, 213, 219) 0px, rgb(209, 213, 219) 6px, transparent 6px, transparent 12px)',
                      maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)'
                    }}
                  />
                </div>

                {/* Tercera fila */}
                <div className="grid lg:grid-cols-3 gap-8 pt-8">
                  {teamMembers.slice(6, 9).map((member, index) => (
                    <div key={index + 6}>
                      <TeamCard member={member} index={index} isVisible={teamVisible} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#f6f9fc]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-[#0a2540] mb-6">
              ¿Quieres unirte al equipo?
            </h2>
            <p className="text-gray-500 mb-8">
              Siempre estamos buscando talento apasionado por el sector inmobiliario.
            </p>
            <Link
              href="mailto:soporte@growinginmobiliario.com"
              className="btn btn-primary"
            >
              Contactar con nosotros
              <svg className="w-5 h-5 arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
