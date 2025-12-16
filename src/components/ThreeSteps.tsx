"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Comunicación",
    subtitle: "Aprende a comunicar tu valor",
    description:
      "Domina el arte de captar exclusivas. Te enseñamos las técnicas que usan las mejores inmobiliarias para que los propietarios quieran trabajar contigo.",
    features: [
      "Scripts de captación probados",
      "Técnicas de negociación",
      "Diferenciación real",
    ],
  },
  {
    number: "2",
    title: "Adquisición",
    subtitle: "Sistema de captación predecible",
    description:
      "Implementa un sistema que genera propietarios interesados de forma constante. Deja de depender del boca a boca y toma el control de tu pipeline.",
    features: [
      "Embudo de captación",
      "Marketing inmobiliario",
      "Automatizaciones",
    ],
  },
  {
    number: "3",
    title: "Libertad",
    subtitle: "Construye un negocio escalable",
    description:
      "Crea procesos y equipo que funcionen sin ti. Disfruta de una inmobiliaria que genera resultados predecibles mientras recuperas tu tiempo.",
    features: [
      "Procesos y sistemas",
      "Gestión de equipos",
      "Escalabilidad real",
    ],
  },
];

export default function ThreeSteps() {
  const [visibleSteps, setVisibleSteps] = useState([false, false, false]);
  const [boxPositions, setBoxPositions] = useState<Array<{top: number, height: number}>>([]);
  const [dimensions, setDimensions] = useState({ width: 800, height: 900 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const targetProgressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const updatePositions = () => {
      if (boardRef.current) {
        const newDimensions = {
          width: boardRef.current.clientWidth,
          height: boardRef.current.clientHeight,
        };
        setDimensions(newDimensions);

        const boardRect = boardRef.current.getBoundingClientRect();
        const newPositions = boxRefs.current.map((ref) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            return {
              top: rect.top - boardRect.top,
              height: rect.height,
            };
          }
          return { top: 0, height: 200 };
        });

        // Only update if positions actually changed
        if (JSON.stringify(newPositions) !== JSON.stringify(boxPositions)) {
          setBoxPositions(newPositions);
        }
      }
    };

    const handleScroll = () => {
      if (!boardRef.current) return;

      const rect = boardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrollStart = rect.top - viewportHeight * 0.7;
      const scrollEnd = rect.bottom - viewportHeight * 0.3;
      const scrollRange = scrollEnd - scrollStart;

      const currentScroll = -scrollStart;
      const progress = Math.min(Math.max(currentScroll / scrollRange, 0), 1);

      const newVisibleSteps = [
        progress > 0.05,
        progress > 0.25,
        progress > 0.55,
      ];
      setVisibleSteps(newVisibleSteps);
      targetProgressRef.current = progress;
    };

    // Smooth animation loop for scroll progress
    const animateProgress = () => {
      setScrollProgress(prev => {
        const diff = targetProgressRef.current - prev;
        // Smooth lerp - move 12% of the remaining distance each frame
        if (Math.abs(diff) < 0.001) return targetProgressRef.current;
        return prev + diff * 0.12;
      });
      animationFrameRef.current = requestAnimationFrame(animateProgress);
    };

    animationFrameRef.current = requestAnimationFrame(animateProgress);

    // Multiple updates to ensure positions are correct after all content loads
    const timers = [
      setTimeout(updatePositions, 50),
      setTimeout(updatePositions, 200),
      setTimeout(updatePositions, 500),
      setTimeout(updatePositions, 1000),
    ];

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updatePositions);
    handleScroll();

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updatePositions);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [boxPositions]);

  // Update path length when path changes
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [boxPositions, dimensions]);

  // Generate SVG path based on actual box positions with rounded corners
  const generatePath = () => {
    if (boxPositions.length < 3) {
      return "";
    }

    const centerX = dimensions.width / 2;
    const leftBoxRight = centerX - 80;
    const rightBoxLeft = centerX + 80;
    const padding = 15;
    const radius = 16; // Border radius for rounded corners
    const leftEdge = 50;
    const rightEdge = dimensions.width - 50;

    // Box 1 (left)
    const box1 = boxPositions[0];
    const box1Top = box1.top - padding;
    const box1Bottom = box1.top + box1.height + padding;
    const box1Mid = box1.top + box1.height / 2;

    // Box 2 (right)
    const box2 = boxPositions[1];
    const box2Top = box2.top - padding;
    const box2Bottom = box2.top + box2.height + padding;
    const box2Mid = box2.top + box2.height / 2;

    // Box 3 (left)
    const box3 = boxPositions[2];
    const box3Top = box3.top - padding;
    const box3Bottom = box3.top + box3.height + padding;
    const box3Mid = box3.top + box3.height / 2;

    return `
      M ${centerX} 0
      L ${centerX} ${box1Mid - 10}
      L ${leftBoxRight} ${box1Mid - 10}
      L ${leftBoxRight} ${box1Top + radius}
      Q ${leftBoxRight} ${box1Top} ${leftBoxRight - radius} ${box1Top}
      L ${leftEdge + radius} ${box1Top}
      Q ${leftEdge} ${box1Top} ${leftEdge} ${box1Top + radius}
      L ${leftEdge} ${box1Bottom - radius}
      Q ${leftEdge} ${box1Bottom} ${leftEdge + radius} ${box1Bottom}
      L ${leftBoxRight - radius} ${box1Bottom}
      Q ${leftBoxRight} ${box1Bottom} ${leftBoxRight} ${box1Bottom - radius}
      L ${leftBoxRight} ${box1Mid + 10}
      L ${centerX} ${box1Mid + 10}
      L ${centerX} ${box2Mid - 10}
      L ${rightBoxLeft} ${box2Mid - 10}
      L ${rightBoxLeft} ${box2Top + radius}
      Q ${rightBoxLeft} ${box2Top} ${rightBoxLeft + radius} ${box2Top}
      L ${rightEdge - radius} ${box2Top}
      Q ${rightEdge} ${box2Top} ${rightEdge} ${box2Top + radius}
      L ${rightEdge} ${box2Bottom - radius}
      Q ${rightEdge} ${box2Bottom} ${rightEdge - radius} ${box2Bottom}
      L ${rightBoxLeft + radius} ${box2Bottom}
      Q ${rightBoxLeft} ${box2Bottom} ${rightBoxLeft} ${box2Bottom - radius}
      L ${rightBoxLeft} ${box2Mid + 10}
      L ${centerX} ${box2Mid + 10}
      L ${centerX} ${box3Mid - 10}
      L ${leftBoxRight} ${box3Mid - 10}
      L ${leftBoxRight} ${box3Top + radius}
      Q ${leftBoxRight} ${box3Top} ${leftBoxRight - radius} ${box3Top}
      L ${leftEdge + radius} ${box3Top}
      Q ${leftEdge} ${box3Top} ${leftEdge} ${box3Top + radius}
      L ${leftEdge} ${box3Bottom - radius}
      Q ${leftEdge} ${box3Bottom} ${leftEdge + radius} ${box3Bottom}
      L ${leftBoxRight - radius} ${box3Bottom}
      Q ${leftBoxRight} ${box3Bottom} ${leftBoxRight} ${box3Bottom - radius}
      L ${leftBoxRight} ${box3Mid + 10}
      L ${centerX} ${box3Mid + 10}
      L ${centerX} ${dimensions.height}
    `;
  };

  return (
    <section id="servicios" className="section-padding section-dark relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
            El método
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight italic">
            3 pasos hacia una inmobiliaria rentable
          </h2>
        </div>

        {/* Board/Pizarra */}
        <div
          ref={boardRef}
          className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-12 overflow-hidden"
        >
          {/* Grid background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          {/* Single continuous path SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            style={{ overflow: 'visible' }}
          >
            {/* Background dashed path */}
            <path
              ref={pathRef}
              d={generatePath()}
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            {/* Animated fill path */}
            <path
              d={generatePath()}
              fill="none"
              stroke="#00abc8"
              strokeWidth="2"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength - (pathLength * scrollProgress)}
            />
          </svg>

          {/* Steps container */}
          <div className="relative z-10 pt-16 pb-12">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleSteps[index];
              const isLast = index === steps.length - 1;

              return (
                <div key={index} className="relative">
                  {/* Step row */}
                  <div className="flex items-stretch min-h-[220px]">
                    {/* Left content */}
                    <div className="w-1/2 pr-20 flex items-center justify-end">
                      {isLeft ? (
                        <div
                          ref={(el) => { boxRefs.current[index] = el; }}
                          className={`relative transition-all duration-1000 ease-out w-full ml-10 ${
                            isVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm"
                          } ${index === 0 ? "-translate-x-2" : index === 2 ? "-translate-x-2" : ""}`}
                        >
                          <div className="relative py-8 px-10">
                            <p className="text-white/70 leading-relaxed mb-5">
                              {step.description}
                            </p>
                            <ul className="space-y-3">
                              {step.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/80">
                                  <svg className="w-5 h-5 text-[#00abc8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`text-right transition-all duration-1000 ease-out ${
                            isVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm"
                          }`}
                        >
                          <div className="flex items-center justify-end gap-4 mb-2">
                            <span className="font-serif text-5xl lg:text-6xl font-bold text-white">{step.number}</span>
                            <span className="text-white/30 text-4xl lg:text-5xl font-light -translate-y-1">|</span>
                            <h3 className="font-serif text-4xl lg:text-5xl font-bold text-white italic">{step.title}</h3>
                          </div>
                          <p className="text-[#00abc8] font-medium text-lg">{step.subtitle}</p>
                        </div>
                      )}
                    </div>

                    {/* Right content */}
                    <div className="w-1/2 pl-20 flex items-center justify-start">
                      {isLeft ? (
                        <div
                          className={`text-left transition-all duration-1000 ease-out ${
                            isVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm"
                          }`}
                        >
                          <div className="flex items-center gap-4 mb-2">
                            <span className="font-serif text-5xl lg:text-6xl font-bold text-white">{step.number}</span>
                            <span className="text-white/30 text-4xl lg:text-5xl font-light -translate-y-1">|</span>
                            <h3 className="font-serif text-4xl lg:text-5xl font-bold text-white italic">{step.title}</h3>
                          </div>
                          <p className="text-[#00abc8] font-medium text-lg">{step.subtitle}</p>
                        </div>
                      ) : (
                        <div
                          ref={(el) => { boxRefs.current[index] = el; }}
                          className={`relative transition-all duration-1000 ease-out w-full mr-10 translate-x-2 ${
                            isVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm"
                          }`}
                        >
                          <div className="relative py-8 px-10">
                            <p className="text-white/70 leading-relaxed mb-5">
                              {step.description}
                            </p>
                            <ul className="space-y-3">
                              {step.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/80">
                                  <svg className="w-5 h-5 text-[#00abc8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer between steps */}
                  {!isLast && <div className="h-28" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contacto"
            className="btn btn-secondary"
          >
            Quiero empezar ahora
            <svg className="w-5 h-5 arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
