"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const storyParts = [
  {
    number: "01",
    title: "Estudiante → Freelancer",
    year: "2022",
    content: `Nos conocimos en 2022. Pol tenía 20. Juanca, 18.

Dos jóvenes con algo que no se enseña en la universidad: inconformismo real. No estábamos hechos para el camino típico de oficina, carrera y jefe. No porque despreciáramos el trabajo, sino porque intuíamos algo más: una forma más directa, más ágil y más libre de construir una vida.

Sin contactos. Sin títulos. Solo con acceso a internet. Buscamos habilidades que tuvieran demanda real en el mercado. Nos formamos de forma autodidacta en Meta Ads, y nos enfocamos en un sector que nos llamaba la atención: el inmobiliario.

Conseguimos nuestros primeros clientes ayudándoles a captar propiedades con publicidad online. Y en cuestión de meses, estábamos generando entre 3.000 y 4.000 € al mes, trabajando desde casa, antes de cumplir los 21.`,
  },
  {
    number: "02",
    title: "Freelancer → Agencia de marketing",
    year: "2022-2023",
    content: `Vimos potencial. Y decidimos tomárnoslo en serio. Escalar. Construir equipo. Tener estructura.

Pasamos de ser solo nosotros dos, a un equipo de 8 personas. Gestionábamos más de 15 cuentas activas a la vez. Facturábamos más de 10.000 € al mes.

Todo gracias a un sistema muy simple: ayudábamos a agencias inmobiliarias a captar propiedades de forma digital. Sabíamos ejecutar, sabíamos vender, y nuestros clientes lo notaban. Éramos rápidos, resolutivos y entregábamos resultados.`,
  },
  {
    number: "03",
    title: "Cierre de agencia de marketing",
    year: "2023",
    content: `Todo iba viento en popa… hasta que no. Escalamos hasta tener más de 20 clientes y 25.000 € de facturación mensual. Pero no todos tenían resultados.

Al principio lo atribuimos a que "no todos aplicaban bien el sistema". Pero con el tiempo nos dimos cuenta de una verdad incómoda: El marketing no soluciona un modelo roto. No basta con enviar leads.

No sirve llenar una agenda si el comercial no sabe cerrar, si el proceso no filtra bien, o si la oferta es la misma que la de todos.

Ahí tomamos una decisión que pocos tomarían: paramos todo. Cerramos la agencia. Y dijimos la verdad. Porque preferimos perder dinero antes que engañarnos. Preferimos reconstruir desde la raíz antes que sostener algo que no genera impacto real.`,
  },
  {
    number: "04",
    title: "Vuelta a empezar",
    year: "2023",
    content: `En vez de seguir vendiendo lo que ya sabíamos que tenía límites, hicimos lo más difícil: empezar otra vez.

Invirtiendo más de 30.000 € en formaciones, tanto americanas como españolas. Pero no solo teoría. Nos metimos dentro de inmobiliarias reales, de esas que ya facturan. Trabajamos codo a codo con agentes, gerentes y coordinadores.

Estudiamos todo: desde cómo se genera confianza con el propietario, hasta cómo se estructura el equipo comercial. Porque entendimos que si queríamos ayudar a agencias de verdad, teníamos que conocer la trinchera. Y no desde la pantalla. Sino desde dentro.`,
  },
  {
    number: "05",
    title: "Pesadilla en la Inmobiliaria",
    year: "2023-2024",
    content: `Con todo lo aprendido, decidimos poner a prueba nuestro sistema con nuestros mejores clientes. Creamos un formato radical: viajábamos 1 semana a sus oficinas y trabajábamos con ellos, en directo, como si fuéramos parte del equipo.

No observábamos desde fuera. Entrábamos al barro. Auditábamos llamadas, mejorábamos presentaciones, reestructurábamos su propuesta de valor.

Así nació Pesadilla en la Inmobiliaria, una serie documental donde grabamos todo el proceso. Uno de esos clientes fue Alberto Franco, un veterano del sector con más de 20 años de experiencia, 8 franquicias abiertas y millones de euros facturados. Y con él, sucedió algo que lo cambió todo.`,
  },
  {
    number: "06",
    title: "Entramos al barro → Atrio Mallorca",
    year: "2024",
    content: `Al ver cómo trabajábamos, Alberto nos propuso algo inesperado: montar juntos una nueva inmobiliaria desde cero. En Mallorca.

Aceptamos de inmediato. No por ego. Sino por responsabilidad. Porque si de verdad creemos en lo que hacemos, lo lógico es demostrarlo. No desde fuera, sino viviendo el día a día.

Así nació Atrio Mallorca. Una agencia inmobiliaria creada desde cero, con el objetivo de escalar a 1M€/año de facturación aplicando exactamente el sistema que enseñamos. Todo documentado. Todo real. No para presumir. Sino para inspirar. Para liderar con el ejemplo. Para dejar claro que no somos otro gurú de marketing: somos operadores del negocio inmobiliario.`,
  },
  {
    number: "07",
    title: "Growing Inmobiliario",
    year: "2024-Hoy",
    content: `Después de aplicar el sistema con nosotros mismos, y validarlo con decenas de agencias en toda España, supimos que era hora de llevarlo al siguiente nivel.

Así nació Growing Inmobiliario: un programa de transformación de 12 meses, pensado para agencias inmobiliarias que ya funcionan… pero quieren más. Más exclusivas. Más rentabilidad. Más claridad operativa. Y sobre todo, más libertad.

Auditamos tu negocio como si fuera el nuestro. Rediseñamos tu captación, tu oferta, tu comercial, tu equipo, tus procesos y tu mentalidad. Esto no es una formación. No es un curso. Es una intervención real, práctica y personalizada que transforma tu inmobiliaria desde dentro.

Y no trabajamos con cualquiera. Solo con agencias que ya están en movimiento y tienen potencial real para escalar. Porque hay algo que nos obsesiona: convertir buenas inmobiliarias en referentes imparables del sector.`,
  },
];

function StoryPart({
  part,
  index,
  isVisible
}: {
  part: typeof storyParts[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-6 lg:gap-10">
        <div className="flex flex-col items-center">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-lg">
            {part.number}
          </div>
          {index < storyParts.length - 1 && (
            <div className="w-0.5 h-full min-h-[100px] bg-gradient-to-b from-[#0a2540] to-gray-200 mt-4" />
          )}
        </div>

        <div className="flex-1 pb-12 lg:pb-16">
          <div className="mb-2">
            <span className="text-sm text-[#00abc8] font-semibold">{part.year}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a2540] mb-4">
            {part.title}
          </h3>
          <div className="text-gray-500 leading-relaxed whitespace-pre-line">
            {part.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NuestraHistoriaPage() {
  const [missionVisible, setMissionVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const missionRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const missionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setMissionVisible(true), 200);
        missionObserver.disconnect();
      }
    }, observerOptions);

    const storyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setStoryVisible(true), 200);
        storyObserver.disconnect();
      }
    }, observerOptions);

    if (missionRef.current) missionObserver.observe(missionRef.current);
    if (storyRef.current) storyObserver.observe(storyRef.current);

    return () => {
      missionObserver.disconnect();
      storyObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-white relative overflow-hidden">
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

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
              Sobre Growing Inmobiliario™
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-[#0a2540] mb-6">
              Nuestra Historia
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Llevamos años en el barro del sector inmobiliario. Y no como observadores. Sino como protagonistas.
            </p>
          </div>
        </section>

        {/* Misión */}
        <section ref={missionRef} className="py-20 bg-[#0a2540]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div
              className={`transition-all duration-700 ${
                missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-6 uppercase">
                Nuestra Misión
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white leading-relaxed mb-8">
                Hacer que escalar tu inmobiliaria sea simple.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                &ldquo;Simple&rdquo; significa que una inmobiliaria pueda captar el volumen de exclusivas que buscas de forma predecible y con menos equipo. Sin depender de la suerte, sin estar pegado al teléfono todo el día y sin vivir apagando fuegos de tu equipo.
              </p>
            </div>
          </div>
        </section>

        {/* Historia - Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
                El camino
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#0a2540]">
                Cómo llegamos hasta aquí
              </h2>
            </div>

            <div ref={storyRef}>
              {storyParts.map((part, index) => (
                <StoryPart
                  key={part.number}
                  part={part}
                  index={index}
                  isVisible={storyVisible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#f6f9fc]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-[#0a2540] mb-6">
              ¿Y si tú también lo sientes así?
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Estamos preparados para ayudarte a convertir tu inmobiliaria en un referente imparable del sector.
            </p>
            <Link
              href="/agenda-web"
              className="btn btn-primary"
            >
              Comprueba si cualificas
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
