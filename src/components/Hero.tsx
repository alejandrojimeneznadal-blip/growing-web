"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Hexagon functions - same as MapSection
const ISO_SCALE_Y = 0.25; // More compressed top face
const HEX_SIZE = 80; // Large size for hero

function getHexagonPoints(cx: number, cy: number, size: number): string {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const x = cx + size * Math.cos(angle);
    const y = cy + size * Math.sin(angle) * ISO_SCALE_Y;
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}

function getHexagonVertices(cx: number, cy: number, size: number): { x: number; y: number }[] {
  const vertices = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    vertices.push({
      x: cx + size * Math.cos(angle),
      y: cy + size * Math.sin(angle) * ISO_SCALE_Y,
    });
  }
  return vertices;
}

function getHexagonSideFace(cx: number, cy: number, size: number, depth: number, sideIndex: number): string {
  const vertices = getHexagonVertices(cx, cy, size);
  const i1 = sideIndex;
  const i2 = (sideIndex + 1) % 6;
  const top1 = vertices[i1];
  const top2 = vertices[i2];
  const bot1 = { x: top1.x, y: top1.y + depth };
  const bot2 = { x: top2.x, y: top2.y + depth };
  return `${top1.x},${top1.y} ${top2.x},${top2.y} ${bot2.x},${bot2.y} ${bot1.x},${bot1.y}`;
}

function GrowthBars() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 3D bars - smaller on left, bigger on right
  const bars = [
    { x: 12, height: 60, width: 22 },
    { x: 50, height: 90, width: 22 },
    { x: 88, height: 120, width: 22 },
    { x: 126, height: 150, width: 22 },
  ];
  const depth = 12;
  const baseY = 150;

  // Calculate ball positions (center of each bar top)
  const ballPositions = bars.map((bar) => ({
    x: bar.x + bar.width / 2 + depth / 2,
    y: baseY - bar.height - depth * 0.5 - 5,
  }));

  if (!mounted) {
    return (
      <svg
        viewBox="-10 -30 180 220"
        className="w-52 h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    );
  }

  return (
    <svg
      viewBox="-10 -30 180 220"
      className="w-52 h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          @keyframes jumpX {
            0%, 10% { transform: translateX(${ballPositions[0].x}px); }
            16%, 26% { transform: translateX(${ballPositions[1].x}px); }
            32%, 42% { transform: translateX(${ballPositions[2].x}px); }
            48%, 100% { transform: translateX(${ballPositions[3].x}px); }
          }
          @keyframes jumpY {
            0%, 10% { transform: translateY(${ballPositions[0].y}px); }
            13% { transform: translateY(${ballPositions[0].y - 30}px); }
            16% { transform: translateY(${ballPositions[1].y}px); }
            17.5% { transform: translateY(${ballPositions[1].y + 0.8}px); }
            19% { transform: translateY(${ballPositions[1].y - 0.4}px); }
            20%, 26% { transform: translateY(${ballPositions[1].y}px); }
            29% { transform: translateY(${ballPositions[1].y - 30}px); }
            32% { transform: translateY(${ballPositions[2].y}px); }
            33.5% { transform: translateY(${ballPositions[2].y + 0.8}px); }
            35% { transform: translateY(${ballPositions[2].y - 0.4}px); }
            36%, 42% { transform: translateY(${ballPositions[2].y}px); }
            45% { transform: translateY(${ballPositions[2].y - 30}px); }
            48% { transform: translateY(${ballPositions[3].y}px); }
            49.5% { transform: translateY(${ballPositions[3].y + 0.8}px); }
            51% { transform: translateY(${ballPositions[3].y - 0.4}px); }
            52%, 100% { transform: translateY(${ballPositions[3].y}px); }
          }
          @keyframes fadeInOut {
            0% { opacity: 0; }
            8% { opacity: 1; }
            92% { opacity: 1; }
            100% { opacity: 0; }
          }
          @keyframes colorBar0 {
            0%, 1% { fill: #dce4e9; }
            2% { fill: #00abc8; }
            9% { fill: #00abc8; }
            12%, 100% { fill: #dce4e9; }
          }
          @keyframes colorBar1 {
            0%, 17% { fill: #dce4e9; }
            18% { fill: #00abc8; }
            25% { fill: #00abc8; }
            28%, 100% { fill: #dce4e9; }
          }
          @keyframes colorBar2 {
            0%, 33% { fill: #dce4e9; }
            34% { fill: #00abc8; }
            41% { fill: #00abc8; }
            44%, 100% { fill: #dce4e9; }
          }
          @keyframes colorBar3 {
            0%, 49% { fill: #dce4e9; }
            50% { fill: #00abc8; }
            90% { fill: #00abc8; }
            95%, 100% { fill: #dce4e9; }
          }
          @keyframes colorBarTop0 {
            0%, 1% { fill: #c4ccd4; }
            2% { fill: #00abc8; }
            9% { fill: #00abc8; }
            12%, 100% { fill: #c4ccd4; }
          }
          @keyframes colorBarTop1 {
            0%, 17% { fill: #c4ccd4; }
            18% { fill: #00abc8; }
            25% { fill: #00abc8; }
            28%, 100% { fill: #c4ccd4; }
          }
          @keyframes colorBarTop2 {
            0%, 33% { fill: #c4ccd4; }
            34% { fill: #00abc8; }
            41% { fill: #00abc8; }
            44%, 100% { fill: #c4ccd4; }
          }
          @keyframes colorBarTop3 {
            0%, 49% { fill: #c4ccd4; }
            50% { fill: #00abc8; }
            90% { fill: #00abc8; }
            95%, 100% { fill: #c4ccd4; }
          }
          @keyframes colorBarRight0 {
            0%, 1% { fill: #bcc4cc; }
            2% { fill: #008fa8; }
            9% { fill: #008fa8; }
            12%, 100% { fill: #bcc4cc; }
          }
          @keyframes colorBarRight1 {
            0%, 17% { fill: #bcc4cc; }
            18% { fill: #008fa8; }
            25% { fill: #008fa8; }
            28%, 100% { fill: #bcc4cc; }
          }
          @keyframes colorBarRight2 {
            0%, 33% { fill: #bcc4cc; }
            34% { fill: #008fa8; }
            41% { fill: #008fa8; }
            44%, 100% { fill: #bcc4cc; }
          }
          @keyframes colorBarRight3 {
            0%, 49% { fill: #bcc4cc; }
            50% { fill: #008fa8; }
            90% { fill: #008fa8; }
            95%, 100% { fill: #bcc4cc; }
          }
          @keyframes squash0 {
            0%, 100% { transform: scaleY(1) translateY(0); }
          }
          @keyframes squash1 {
            0%, 17% { transform: scaleY(1) translateY(0); }
            17.5% { transform: scaleY(0.992) translateY(0.8px); }
            19% { transform: scaleY(1.004) translateY(-0.4px); }
            20%, 100% { transform: scaleY(1) translateY(0); }
          }
          @keyframes squash2 {
            0%, 33% { transform: scaleY(1) translateY(0); }
            33.5% { transform: scaleY(0.992) translateY(0.8px); }
            35% { transform: scaleY(1.004) translateY(-0.4px); }
            36%, 100% { transform: scaleY(1) translateY(0); }
          }
          @keyframes squash3 {
            0%, 49% { transform: scaleY(1) translateY(0); }
            49.5% { transform: scaleY(0.992) translateY(0.8px); }
            51% { transform: scaleY(1.004) translateY(-0.4px); }
            52%, 100% { transform: scaleY(1) translateY(0); }
          }
          .bar-group-0 { transform-origin: bottom center; animation: squash0 10s ease infinite; }
          .bar-group-1 { transform-origin: bottom center; animation: squash1 10s ease infinite; }
          .bar-group-2 { transform-origin: bottom center; animation: squash2 10s ease infinite; }
          .bar-group-3 { transform-origin: bottom center; animation: squash3 10s ease infinite; }
          .bar-front-0 { animation: colorBar0 10s ease-in-out infinite; }
          .bar-front-1 { animation: colorBar1 10s ease-in-out infinite; }
          .bar-front-2 { animation: colorBar2 10s ease-in-out infinite; }
          .bar-front-3 { animation: colorBar3 10s ease-in-out infinite; }
          .bar-top-0 { animation: colorBarTop0 10s ease-in-out infinite; }
          .bar-top-1 { animation: colorBarTop1 10s ease-in-out infinite; }
          .bar-top-2 { animation: colorBarTop2 10s ease-in-out infinite; }
          .bar-top-3 { animation: colorBarTop3 10s ease-in-out infinite; }
          .bar-right-0 { animation: colorBarRight0 10s ease-in-out infinite; }
          .bar-right-1 { animation: colorBarRight1 10s ease-in-out infinite; }
          .bar-right-2 { animation: colorBarRight2 10s ease-in-out infinite; }
          .bar-right-3 { animation: colorBarRight3 10s ease-in-out infinite; }
          .bouncing-ball-container {
            animation: fadeInOut 10s ease infinite;
          }
          .bouncing-ball-wrapper {
            animation: jumpX 10s linear infinite;
          }
          .bouncing-ball {
            animation: jumpY 10s ease-in-out infinite;
          }
        `}
      </style>

      {bars.map((bar, i) => {
        const topY = baseY - bar.height;

        return (
          <g key={i} className={`bar-group-${i}`}>
            {/* Front face */}
            <rect
              className={`bar-front-${i}`}
              x={bar.x}
              y={topY}
              width={bar.width}
              height={bar.height}
              opacity={0.95}
            />
            {/* Top face (3D effect) */}
            <polygon
              className={`bar-top-${i}`}
              points={`
                ${bar.x},${topY}
                ${bar.x + depth},${topY - depth * 0.5}
                ${bar.x + bar.width + depth},${topY - depth * 0.5}
                ${bar.x + bar.width},${topY}
              `}
              opacity={0.85}
            />
            {/* Right face (3D effect) */}
            <polygon
              className={`bar-right-${i}`}
              points={`
                ${bar.x + bar.width},${topY}
                ${bar.x + bar.width + depth},${topY - depth * 0.5}
                ${bar.x + bar.width + depth},${baseY - depth * 0.5}
                ${bar.x + bar.width},${baseY}
              `}
              opacity={0.9}
            />
          </g>
        );
      })}

      {/* Bouncing ball */}
      <g className="bouncing-ball-container">
        <g className="bouncing-ball-wrapper">
          <circle
            className="bouncing-ball"
            r="8"
            fill="#0a2540"
          />
        </g>
      </g>

    </svg>
  );
}

function Badge() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-20" />;
  }

  return (
    <div className="absolute -top-6 right-3 z-30">
      <style jsx>{`
        @keyframes badgeAppear {
          0%, 50% { opacity: 0; transform: translateY(-10px) rotate(-20deg); }
          55% { opacity: 1; transform: translateY(2px) rotate(5deg); }
          60% { opacity: 1; transform: translateY(0) rotate(0deg); }
          90% { opacity: 1; transform: translateY(0) rotate(0deg); }
          95%, 100% { opacity: 0; transform: translateY(-10px) rotate(-20deg); }
        }
        .badge {
          animation: badgeAppear 10s ease infinite;
        }
      `}</style>
      <svg
        viewBox="0 0 40 40"
        className="badge w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Star */}
        <polygon
          points="20,4 23.5,13.5 33.5,13.5 25.5,20 28.5,30 20,24 11.5,30 14.5,20 6.5,13.5 16.5,13.5"
          fill="#00abc8"
        />
      </svg>
    </div>
  );
}

function HeroHexagon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cx = 100;
  const cy = 60;
  const size = HEX_SIZE;
  const depth = 40;

  const topColor = "#e8eef2";
  const side0Color = "#d0d8e0";
  const side1Color = "#c8d0d8";
  const side2Color = "#b8c0c8";

  if (!mounted) {
    return (
      <svg
        viewBox="0 0 200 180"
        className="w-[420px] h-[378px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 200 180"
      className="w-[420px] h-[378px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Side faces (0, 1, 2 - top-facing sides) */}
      <polygon points={getHexagonSideFace(cx, cy, size, depth, 0)} fill={side0Color} />
      <polygon points={getHexagonSideFace(cx, cy, size, depth, 1)} fill={side1Color} />
      <polygon points={getHexagonSideFace(cx, cy, size, depth, 2)} fill={side2Color} />
      {/* Top face */}
      <polygon points={getHexagonPoints(cx, cy, size)} fill={topColor} />
    </svg>
  );
}

function NetworkBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Grid of fine lines
  const horizontalLines = Array.from({ length: 8 }, (_, i) => (i + 1) * 12);
  const verticalLines = Array.from({ length: 12 }, (_, i) => (i + 1) * 8);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            @keyframes fadeIn {
              0%, 100% { opacity: 0.06; }
              50% { opacity: 0.12; }
            }
            .grid-line {
              stroke: #00abc8;
              stroke-width: 0.08;
              opacity: 0.06;
              animation: fadeIn 8s ease-in-out infinite;
            }
          `}
        </style>

        {/* Horizontal lines */}
        {horizontalLines.map((y, i) => (
          <line
            key={`h-${i}`}
            className="grid-line"
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

        {/* Vertical lines */}
        {verticalLines.map((x, i) => (
          <line
            key={`v-${i}`}
            className="grid-line"
            x1={x}
            y1="0"
            x2={x}
            y2="100"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white pt-10 relative">
      <NetworkBackground />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text content */}
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#0a2540] leading-[1.1] tracking-tight">
              <span className="font-serif italic">Hacemos fácil</span>
              <br />
              <span className="font-sans font-bold text-[#00abc8]">escalar tu</span>
              <br />
              <span className="font-sans font-bold text-[#00abc8]">inmobiliaria</span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-500 leading-relaxed max-w-lg font-light">
              Ayudamos a escalar su facturación captando más propiedades, con menos coste operativo y menos tiempo del fundador, gracias a sistemas probados de captación, cierre y delegación.
            </p>

            <div className="mt-10">
              <Link href="/agenda-web" className="btn btn-primary hero-btn relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Comprueba si cualificas
                  <svg className="w-4 h-4 arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="hero-btn-shine" />
              </Link>
              <style jsx>{`
                .hero-btn-shine {
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 60%;
                  height: 100%;
                  background: linear-gradient(
                    120deg,
                    transparent,
                    rgba(255, 255, 255, 0.15),
                    rgba(255, 255, 255, 0.3),
                    rgba(255, 255, 255, 0.15),
                    transparent
                  );
                  animation: shine 3s ease-in-out infinite;
                }
                @keyframes shine {
                  0% {
                    left: -100%;
                  }
                  50%, 100% {
                    left: 150%;
                  }
                }
              `}</style>
            </div>
          </div>

          {/* Right - Hexagon visual */}
          <div className="hidden lg:flex items-center justify-center pl-12 pt-56 relative">
            <div className="z-0">
              <HeroHexagon />
            </div>
            <div className="absolute top-[9.5rem] left-1/2 -translate-x-[40%] z-20 overflow-visible">
              <GrowthBars />
              <Badge />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
