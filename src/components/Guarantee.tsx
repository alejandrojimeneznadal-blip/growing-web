"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Guarantee() {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section id="garantia" className="section-padding bg-gradient-to-br from-[#f6f9fc] to-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00abc8]/10 text-[#00abc8] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GARANTÍA TOTAL
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#0a2540] leading-tight mb-6">
              <span className="font-serif font-medium italic">20 propiedades</span>
              <br />
              <span ref={titleRef} className="relative inline-block font-bold text-[#00abc8]">
                en 180 días
                <span
                  className={`absolute bottom-1 left-0 h-3 bg-[#00abc8]/20 -z-10 transition-all duration-700 ease-out ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                />
              </span>
            </h2>

            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              Si implementas nuestro sistema y no consigues captar al menos 20 propiedades
              en exclusiva en los primeros 6 meses, <strong className="text-[#0a2540]">te devolvemos el 100% de tu inversión</strong>.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Sin letra pequeña",
                "Sin condiciones ocultas",
                "Sin excusas",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#00abc8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-[#0a2540] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contacto"
              className="btn btn-primary"
            >
              Ver si cualificas
              <svg className="w-5 h-5 arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right - Visual: 3D Shield */}
          <div className="relative flex items-center justify-center" style={{ perspective: '800px' }}>
            {/* Shadow on ground - static, outside the animated container */}
            <div
              className="absolute bottom-[-60px] w-[220px] lg:w-[260px] h-[70px] rounded-[50%]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)',
                filter: 'blur(15px)',
                animation: 'shadowPulse 4s ease-in-out infinite'
              }}
            />

            {/* Shield container with 3D transform and levitation */}
            <div
              className="relative w-[280px] lg:w-[320px] shield-levitate"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Deep shadow layer */}
              <svg
                viewBox="0 0 200 240"
                className="absolute w-full h-auto"
                style={{ transform: 'translateZ(-70px)', filter: 'blur(30px)', opacity: 0.5 }}
                fill="none"
              >
                <path
                  d="M100 10 L180 40 L180 120 C180 170 140 210 100 230 C60 210 20 170 20 120 L20 40 Z"
                  fill="#00abc8"
                />
              </svg>

              {/* Back depth layers - más grueso */}
              {[60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5].map((z, i) => (
                <svg
                  key={z}
                  viewBox="0 0 200 240"
                  className="absolute w-full h-auto"
                  style={{ transform: `translateZ(-${z}px)` }}
                  fill="none"
                >
                  <path
                    d="M100 10 L180 40 L180 120 C180 170 140 210 100 230 C60 210 20 170 20 120 L20 40 Z"
                    fill={i < 6 ? '#020810' : '#061829'}
                  />
                </svg>
              ))}

              {/* Right edge highlight */}
              <svg
                viewBox="0 0 200 240"
                className="absolute w-full h-auto"
                style={{ transform: 'translateZ(-2px)' }}
                fill="none"
              >
                <path
                  d="M180 40 L180 120 C180 170 140 210 100 230"
                  fill="none"
                  stroke="#00abc8"
                  strokeWidth="4"
                  opacity="0.3"
                />
              </svg>

              {/* Main shield face */}
              <svg
                viewBox="0 0 200 240"
                className="relative w-full h-auto overflow-visible"
                style={{ transform: 'translateZ(0px)' }}
                fill="none"
              >
                <defs>
                  {/* Gradient for 3D effect */}
                  <linearGradient id="shieldGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a4a6e" />
                    <stop offset="30%" stopColor="#0f3052" />
                    <stop offset="70%" stopColor="#0a2540" />
                    <stop offset="100%" stopColor="#051525" />
                  </linearGradient>
                  {/* Strong highlight */}
                  <linearGradient id="highlight3D" x1="0%" y1="0%" x2="60%" y2="60%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.25" />
                    <stop offset="40%" stopColor="white" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  {/* Edge glow */}
                  <filter id="edgeGlow">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00abc8" floodOpacity="0.5"/>
                  </filter>
                  {/* Shine gradient */}
                  <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="40%" stopColor="white" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="60%" stopColor="white" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  {/* Clip path for shield shape */}
                  <clipPath id="shieldClip">
                    <path d="M100 10 L180 40 L180 120 C180 170 140 210 100 230 C60 210 20 170 20 120 L20 40 Z" />
                  </clipPath>
                </defs>

                {/* Shield background */}
                <path
                  d="M100 10 L180 40 L180 120 C180 170 140 210 100 230 C60 210 20 170 20 120 L20 40 Z"
                  fill="url(#shieldGradient3D)"
                />

                {/* Highlight overlay */}
                <path
                  d="M100 10 L180 40 L180 120 C180 170 140 210 100 230 C60 210 20 170 20 120 L20 40 Z"
                  fill="url(#highlight3D)"
                />

                {/* Shine effect - diagonal from top-left to bottom-right */}
                <g clipPath="url(#shieldClip)">
                  <rect
                    className="shield-shine"
                    fill="url(#shineGradient)"
                    x="50"
                    y="-100"
                    width="100"
                    height="500"
                  />
                </g>

                {/* Glowing border */}
                <path
                  d="M100 10 L180 40 L180 120 C180 170 140 210 100 230 C60 210 20 170 20 120 L20 40 Z"
                  fill="none"
                  stroke="#00abc8"
                  strokeWidth="3"
                  filter="url(#edgeGlow)"
                />

                {/* Inner decorative line */}
                <path
                  d="M100 30 L158 52 L158 116 C158 154 130 184 100 200 C70 184 42 154 42 116 L42 52 Z"
                  fill="none"
                  stroke="#00abc8"
                  strokeWidth="1.5"
                  opacity="0.2"
                />
              </svg>

              {/* Content over shield - incrustado */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center -mt-6"
                style={{
                  transform: 'translateZ(2px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Main number - efecto incrustado blanco */}
                <div
                  className="text-6xl lg:text-7xl font-bold leading-none text-white"
                  style={{
                    textShadow: '0 -2px 4px rgba(0,0,0,0.8), 0 2px 2px rgba(255,255,255,0.1), inset 0 0 0 rgba(0,0,0,0.5)'
                  }}
                >
                  180
                </div>
                <div
                  className="text-sm mb-4 text-white/70"
                  style={{
                    textShadow: '0 -1px 2px rgba(0,0,0,0.6), 0 1px 1px rgba(255,255,255,0.1)'
                  }}
                >
                  días de garantía
                </div>

                {/* Divider - tres puntos */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00abc8]" style={{ boxShadow: '0 0 6px #00abc8' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00abc8]" style={{ boxShadow: '0 0 6px #00abc8' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00abc8]" style={{ boxShadow: '0 0 6px #00abc8' }} />
                </div>

                {/* Secondary info - incrustado blanco */}
                <div
                  className="text-3xl lg:text-4xl font-bold text-white"
                  style={{
                    textShadow: '0 -2px 4px rgba(0,0,0,0.7), 0 2px 2px rgba(255,255,255,0.1)'
                  }}
                >
                  20+
                </div>
                <div
                  className="text-sm text-white/50"
                  style={{
                    textShadow: '0 -1px 2px rgba(0,0,0,0.6), 0 1px 1px rgba(255,255,255,0.1)'
                  }}
                >
                  propiedades
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
