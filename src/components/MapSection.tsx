"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface WaveEffect {
  id: number;
  x: number;
  y: number;
  startTime: number;
}

let waveIdCounter = 0;

export default function MapSection() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [waves, setWaves] = useState<WaveEffect[]>([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [highlightVisible, setHighlightVisible] = useState(false);
  const [heartbeatTime, setHeartbeatTime] = useState(0);
  const animationRef = useRef<number | null>(null);
  const heartbeatRef = useRef<number | null>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Mount only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Heartbeat animation loop
  useEffect(() => {
    if (!mounted) return;

    const animate = () => {
      setHeartbeatTime(Date.now());
      heartbeatRef.current = requestAnimationFrame(animate);
    };

    heartbeatRef.current = requestAnimationFrame(animate);

    return () => {
      if (heartbeatRef.current) {
        cancelAnimationFrame(heartbeatRef.current);
      }
    };
  }, [mounted]);

  // Intersection observer for highlight animation
  useEffect(() => {
    if (!textRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setHighlightVisible(true);
          }, 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(textRef.current);

    return () => observer.disconnect();
  }, [mounted]);

  // Animation loop for wave effects
  useEffect(() => {
    if (waves.length === 0) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const animate = () => {
      const now = Date.now();
      setCurrentTime(now);

      // Remove waves older than 3 seconds
      setWaves(prev => prev.filter(w => now - w.startTime < 3000));

      animationRef.current = requestAnimationFrame(animate);
    };

    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [waves.length > 0]);

  const handleClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    const newWave: WaveEffect = {
      id: waveIdCounter++,
      x: svgP.x,
      y: svgP.y,
      startTime: Date.now()
    };
    setWaves(prev => [...prev, newWave]);
  }, []);

  if (!mounted) {
    return (
      <section className="py-20 lg:py-32 bg-white overflow-visible min-h-[500px] lg:min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative min-h-[400px] lg:min-h-[500px]">
            <div className="relative z-10 max-w-md select-none ml-12 lg:ml-24 mt-24 lg:mt-36">
              <div className="relative inline-block">
                <span className="absolute bottom-[15%] left-0 right-0 h-[45%] bg-gray-300/50 -z-10 rounded-sm scale-x-0 origin-left" />
                <p className="font-serif italic text-6xl sm:text-7xl lg:text-8xl font-bold text-[#00abc8] leading-none tracking-tight">
                  +150
                </p>
              </div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-none mt-2">
                inmobiliarias
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mt-3 font-light">
                ya escalan con nosotros
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-white overflow-visible min-h-[500px] lg:min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative min-h-[400px] lg:min-h-[500px]">
          {/* Left - Text */}
          <div ref={textRef} className="relative z-10 max-w-md select-none ml-12 lg:ml-24 mt-24 lg:mt-36">
            <div className="relative inline-block">
              <span
                className={`absolute bottom-[15%] left-0 right-0 h-[45%] bg-gray-300/50 -z-10 rounded-sm transition-transform duration-500 ease-out origin-left ${
                  highlightVisible ? "scale-x-100" : "scale-x-0"
                }`}
              />
              <p className="font-serif italic text-6xl sm:text-7xl lg:text-8xl font-bold text-[#00abc8] leading-none tracking-tight">
                +150
              </p>
            </div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-none mt-2">
              inmobiliarias
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mt-3 font-light">
              ya escalan con nosotros
            </p>
          </div>

          {/* Right - Spain Map with hexagons - positioned absolutely to overlap */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-10 w-[600px] lg:w-[750px]">
            <svg
              viewBox="0 -30 1000 760"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onMouseMove={(e) => {
                const svg = e.currentTarget;
                const pt = svg.createSVGPoint();
                pt.x = e.clientX;
                pt.y = e.clientY;
                const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
                setMousePos({ x: svgP.x, y: svgP.y });
              }}
              onMouseLeave={() => setMousePos(null)}
              onClick={handleClick}
            >
              {/* First pass: Only top-facing side faces (0, 1, 2) sorted by visual Y */}
              {[...spainHexagons]
                .sort((a, b) => {
                  const aVisualRow = a.row + (a.col % 2 === 1 ? 0.5 : 0);
                  const bVisualRow = b.row + (b.col % 2 === 1 ? 0.5 : 0);
                  return aVisualRow - bVisualRow;
                })
                .map((hex) => {
                  const size = HEX_SIZE * 0.9;

                  // Calculate distance-based lift from hover
                  let lift = 0;
                  let intensity = 0;
                  if (mousePos) {
                    const dx = hex.x - mousePos.x;
                    const dy = hex.y - mousePos.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 80;
                    if (distance < maxDistance) {
                      intensity = 1 - distance / maxDistance;
                      lift = intensity * 10;
                    }
                  }

                  // Calculate wave effect from all active waves
                  let waveLift = 0;
                  for (const wave of waves) {
                    const dx = hex.x - wave.x;
                    const dy = hex.y - wave.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const elapsed = (currentTime - wave.startTime) / 1000;
                    const waveSpeed = 300; // pixels per second
                    const waveRadius = elapsed * waveSpeed;
                    const waveWidth = 60; // width of the wave band

                    // Only affect hexagons behind the wave front (single wave)
                    const distFromWave = distance - waveRadius;
                    if (distFromWave > -waveWidth && distFromWave < 0) {
                      const waveIntensity = 1 + distFromWave / waveWidth;
                      // Smooth up motion, decay over time
                      const decay = Math.max(0, 1 - elapsed / 2.5);
                      waveLift += waveIntensity * 8 * decay;
                    }
                  }

                  // Radial pulse - circular waves expanding from center (soft)
                  const pulseTime = heartbeatTime / 1000;

                  // Center of Spain (approximately Madrid)
                  const centerX = 480;
                  const centerY = 380;
                  const dx = hex.x - centerX;
                  const dy = hex.y - centerY;
                  const distFromCenter = Math.sqrt(dx * dx + dy * dy);

                  // Slower, wider rings
                  const ringSpeed = 60;
                  const ringSpacing = 200;
                  const phase = (distFromCenter - pulseTime * ringSpeed) / ringSpacing;
                  const ringWave = Math.sin(phase * Math.PI * 2) * 2.5;

                  const radialLift = Math.max(0, ringWave + 1.5);

                  // Add base height from concentration points
                  const totalLift = lift + waveLift + hex.baseHeight + radialLift;
                  const depth = 10 + totalLift;
                  const yOffset = -totalLift;

                  // Color based on height - from light gray to darker teal
                  const heightRatio = Math.min(hex.baseHeight / 20, 1);

                  const baseSide0 = lerpColor("#d0d8e0", "#007080", heightRatio * 0.7);
                  const baseSide1 = lerpColor("#c8d0d8", "#006070", heightRatio * 0.7);
                  const baseSide2 = lerpColor("#b8c0c8", "#005060", heightRatio * 0.7);

                  // Only top-facing sides (0 = right, 1 = top-right, 2 = top-left)
                  const sideColors: { [key: number]: string } = intensity > 0
                    ? {
                        0: lerpColor(baseSide0, "#7dd4e0", intensity),
                        1: lerpColor(baseSide1, "#6cc8d4", intensity),
                        2: lerpColor(baseSide2, "#5bbcc8", intensity),
                      }
                    : { 0: baseSide0, 1: baseSide1, 2: baseSide2 };

                  return (
                    <g key={`sides-${hex.index}`}>
                      {[0, 1, 2].map((sideIdx) => (
                        <polygon
                          key={`side-${sideIdx}`}
                          points={getHexagonSideFace(hex.x, hex.y + yOffset, size, depth, sideIdx)}
                          fill={sideColors[sideIdx]}
                          stroke={sideColors[sideIdx]}
                          strokeWidth={0.5}
                        />
                      ))}
                    </g>
                  );
                })}

              {/* Second pass: ALL top faces sorted by visual Y (rendered on top to cover internal sides) */}
              {[...spainHexagons]
                .sort((a, b) => {
                  const aVisualRow = a.row + (a.col % 2 === 1 ? 0.5 : 0);
                  const bVisualRow = b.row + (b.col % 2 === 1 ? 0.5 : 0);
                  return aVisualRow - bVisualRow;
                })
                .map((hex) => {
                  const size = HEX_SIZE * 0.9;

                  // Calculate distance-based lift from hover
                  let lift = 0;
                  let intensity = 0;
                  if (mousePos) {
                    const dx = hex.x - mousePos.x;
                    const dy = hex.y - mousePos.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 80;
                    if (distance < maxDistance) {
                      intensity = 1 - distance / maxDistance;
                      lift = intensity * 10;
                    }
                  }

                  // Calculate wave effect from all active waves
                  let waveLift = 0;
                  for (const wave of waves) {
                    const dx = hex.x - wave.x;
                    const dy = hex.y - wave.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const elapsed = (currentTime - wave.startTime) / 1000;
                    const waveSpeed = 300;
                    const waveRadius = elapsed * waveSpeed;
                    const waveWidth = 60;

                    // Only affect hexagons behind the wave front (single wave)
                    const distFromWave = distance - waveRadius;
                    if (distFromWave > -waveWidth && distFromWave < 0) {
                      const waveIntensity = 1 + distFromWave / waveWidth;
                      const decay = Math.max(0, 1 - elapsed / 2.5);
                      waveLift += waveIntensity * 8 * decay;
                    }
                  }

                  // Radial pulse - circular waves expanding from center (soft)
                  const pulseTime = heartbeatTime / 1000;

                  const centerX = 480;
                  const centerY = 380;
                  const dx = hex.x - centerX;
                  const dy = hex.y - centerY;
                  const distFromCenter = Math.sqrt(dx * dx + dy * dy);

                  const ringSpeed = 60;
                  const ringSpacing = 200;
                  const phase = (distFromCenter - pulseTime * ringSpeed) / ringSpacing;
                  const ringWave = Math.sin(phase * Math.PI * 2) * 2.5;

                  const radialLift = Math.max(0, ringWave + 1.5);

                  // Add base height from concentration points
                  const totalLift = lift + waveLift + hex.baseHeight + radialLift;
                  const yOffset = -totalLift;

                  // Color based on height - from light gray to darker teal
                  const heightRatio = Math.min(hex.baseHeight / 20, 1);
                  const baseTopColor = lerpColor("#e8eef2", "#0088a0", heightRatio * 0.7);

                  const topColor = intensity > 0 ? lerpColor(baseTopColor, "#70c8d8", intensity) : baseTopColor;

                  return (
                    <polygon
                      key={`top-${hex.index}`}
                      points={getHexagonPoints(hex.x, hex.y + yOffset, size)}
                      fill={topColor}
                      stroke={topColor}
                      strokeWidth={0.5}
                      className="cursor-pointer"
                    />
                  );
                })}
            </svg>

            {/* Canarias - positioned bottom left of the main map */}
            <div className="absolute bottom-0 -left-48 lg:-left-60 w-[280px] lg:w-[350px]">
              <svg
                viewBox="0 0 500 180"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Canarias side faces */}
                {[...canariasHexagons]
                  .sort((a, b) => {
                    const aVisualRow = a.row + (a.col % 2 === 1 ? 0.5 : 0);
                    const bVisualRow = b.row + (b.col % 2 === 1 ? 0.5 : 0);
                    return aVisualRow - bVisualRow;
                  })
                  .map((hex) => {
                    const size = HEX_SIZE * 0.9;
                    const baseHeight = hex.baseHeight;
                    const depth = 10 + baseHeight;
                    const yOffset = -baseHeight;

                    // Color based on height
                    const heightRatio = Math.min(baseHeight / 20, 1);
                    const baseSide0 = lerpColor("#d0d8e0", "#007080", heightRatio * 0.7);
                    const baseSide1 = lerpColor("#c8d0d8", "#006070", heightRatio * 0.7);
                    const baseSide2 = lerpColor("#b8c0c8", "#005060", heightRatio * 0.7);
                    const sideColors = { 0: baseSide0, 1: baseSide1, 2: baseSide2 };

                    return (
                      <g key={`canarias-sides-${hex.index}`}>
                        {[0, 1, 2].map((sideIdx) => (
                          <polygon
                            key={`side-${sideIdx}`}
                            points={getHexagonSideFace(hex.x, hex.y + yOffset, size, depth, sideIdx)}
                            fill={sideColors[sideIdx as keyof typeof sideColors]}
                            stroke={sideColors[sideIdx as keyof typeof sideColors]}
                            strokeWidth={0.5}
                          />
                        ))}
                      </g>
                    );
                  })}

                {/* Canarias top faces */}
                {[...canariasHexagons]
                  .sort((a, b) => {
                    const aVisualRow = a.row + (a.col % 2 === 1 ? 0.5 : 0);
                    const bVisualRow = b.row + (b.col % 2 === 1 ? 0.5 : 0);
                    return aVisualRow - bVisualRow;
                  })
                  .map((hex) => {
                    const size = HEX_SIZE * 0.9;
                    const baseHeight = hex.baseHeight;
                    const yOffset = -baseHeight;

                    // Color based on height
                    const heightRatio = Math.min(baseHeight / 20, 1);
                    const topColor = lerpColor("#e8eef2", "#0088a0", heightRatio * 0.7);

                    return (
                      <polygon
                        key={`canarias-top-${hex.index}`}
                        points={getHexagonPoints(hex.x, hex.y + yOffset, size)}
                        fill={topColor}
                        stroke={topColor}
                        strokeWidth={0.5}
                      />
                    );
                  })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Linear interpolation between two hex colors
function lerpColor(color1: string, color2: string, t: number): string {
  const c1 = parseInt(color1.slice(1), 16);
  const c2 = parseInt(color2.slice(1), 16);

  const r1 = (c1 >> 16) & 255;
  const g1 = (c1 >> 8) & 255;
  const b1 = c1 & 255;

  const r2 = (c2 >> 16) & 255;
  const g2 = (c2 >> 8) & 255;
  const b2 = c2 & 255;

  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

// Isometric projection parameters
const ISO_SCALE_Y = 0.85; // Vertical compression for isometric view (less tilted)

// Hexagon size - flat-top orientation
const HEX_SIZE = 16;

// For flat-top hexagons:
// width = size * 2
// height = size * sqrt(3)
const HEX_WIDTH = HEX_SIZE * 2;
const HEX_HEIGHT = HEX_SIZE * Math.sqrt(3);

// Spacing for honeycomb pattern (flat-top)
// Horizontal: 3/4 of width (hexagons overlap by 1/4)
// Vertical: full height
const HORIZ_SPACING = HEX_WIDTH * 0.75;
const VERT_SPACING = HEX_HEIGHT;

// Generate hexagon points (flat-top orientation with isometric compression)
function getHexagonPoints(cx: number, cy: number, size: number): string {
  const points = [];
  for (let i = 0; i < 6; i++) {
    // Flat-top: start at 0 degrees
    const angle = (Math.PI / 3) * i;
    const x = cx + size * Math.cos(angle);
    const y = cy + size * Math.sin(angle) * ISO_SCALE_Y;
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}

// Generate hexagon points with Y offset (for bottom face)
function getHexagonPointsOffset(cx: number, cy: number, size: number, offsetY: number): string {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const x = cx + size * Math.cos(angle);
    const y = cy + size * Math.sin(angle) * ISO_SCALE_Y + offsetY;
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}

// Get hexagon vertices as array (with isometric compression)
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

// Generate a single side face of the 3D hexagon prism
function getHexagonSideFace(cx: number, cy: number, size: number, depth: number, sideIndex: number): string {
  const vertices = getHexagonVertices(cx, cy, size);
  const i1 = sideIndex;
  const i2 = (sideIndex + 1) % 6;

  // Top edge vertices
  const top1 = vertices[i1];
  const top2 = vertices[i2];
  // Bottom edge vertices (offset by depth in Y direction)
  const bot1 = { x: top1.x, y: top1.y + depth };
  const bot2 = { x: top2.x, y: top2.y + depth };

  return `${top1.x},${top1.y} ${top2.x},${top2.y} ${bot2.x},${bot2.y} ${bot1.x},${bot1.y}`;
}

// Grid to pixel conversion with isometric projection
function gridToPixel(col: number, row: number): { x: number; y: number } {
  // First calculate flat honeycomb position
  const flatX = col * HORIZ_SPACING;
  const flatY = row * VERT_SPACING + (col % 2 === 1 ? VERT_SPACING / 2 : 0);

  // Apply isometric transformation
  const isoX = flatX + 50;
  const isoY = flatY * ISO_SCALE_Y + 20;

  return { x: isoX, y: isoY };
}

// Concentration points with normalized height values
// Format: [col, row, height] - height is normalized (max ~20)
const concentrationPoints: [number, number, number][] = [
  // Madrid area - main hub
  [17, 14, 20],
  // Barcelona area
  [30, 5, 18],
  // Málaga area
  [15, 23, 16],
  // Valencia area
  [27, 14, 16],
  // Bilbao/País Vasco area
  [14, 2, 12],
  // Sevilla area
  [10, 21, 10],
  // Zaragoza area
  [24, 9, 10],
  // Cádiz area
  [9, 24, 10],
  // Burgos area
  [14, 5, 8],
  // San Sebastián area
  [18, 2, 6],
  // Toledo area
  [15, 12, 6],
  // Alicante area
  [27, 18, 6],
  // A Coruña area
  [2, 3, 5],
  // Galicia interior
  [4, 5, 5],
  // Andorra/Pirineos
  [28, 3, 5],
  // Granada area
  [18, 22, 5],
  // Cataluña norte
  [32, 5, 6],
  // Logroño area
  [19, 5, 5],
];

// Calculate base height for a hexagon based on proximity to concentration points
// Uses stepped heights for a more blocky terrain look
function getBaseHeight(col: number, row: number): number {
  let maxHeight = 0;
  const radius = 4; // Smaller radius for more defined peaks

  for (const [cx, cr, height] of concentrationPoints) {
    const dx = col - cx;
    const dy = row - cr;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < radius) {
      // Stepped falloff - creates plateau effect
      let stepHeight = 0;
      if (distance < 1) {
        stepHeight = height; // Full height at center
      } else if (distance < 2) {
        stepHeight = height * 0.7; // 70% height
      } else if (distance < 3) {
        stepHeight = height * 0.4; // 40% height
      } else {
        stepHeight = height * 0.15; // 15% height at edges
      }
      maxHeight = Math.max(maxHeight, stepHeight);
    }
  }

  return maxHeight;
}

// Spain map - coordinates extracted from reference image
const spainGrid: [number, number][] = [
  // Fila 0
  [3, 0], [5, 0],
  // Fila 1
  [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [13, 1], [17, 1],
  // Fila 2
  [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [14, 2], [15, 2], [16, 2], [17, 2], [18, 2], [19, 2], [20, 2], [21, 2], [22, 2], [23, 2],
  // Fila 3
  [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3], [20, 3], [21, 3], [22, 3], [23, 3], [24, 3], [25, 3],
  // Fila 4
  [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4], [13, 4], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4], [19, 4], [20, 4], [21, 4], [22, 4], [23, 4], [24, 4], [25, 4], [26, 4], [27, 4], [28, 4], [29, 4], [30, 4], [31, 4], [32, 4], [33, 4],
  // Fila 5
  [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [12, 5], [13, 5], [14, 5], [15, 5], [16, 5], [17, 5], [18, 5], [19, 5], [20, 5], [21, 5], [22, 5], [23, 5], [24, 5], [25, 5], [26, 5], [27, 5], [28, 5], [29, 5], [30, 5], [31, 5], [32, 5], [33, 5],
  // Fila 6
  [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [11, 6], [12, 6], [13, 6], [14, 6], [15, 6], [16, 6], [17, 6], [18, 6], [19, 6], [20, 6], [21, 6], [22, 6], [23, 6], [24, 6], [25, 6], [26, 6], [27, 6], [28, 6], [29, 6], [30, 6], [31, 6], [32, 6], [33, 6],
  // Fila 7
  [4, 7], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7], [13, 7], [14, 7], [15, 7], [16, 7], [17, 7], [18, 7], [19, 7], [20, 7], [21, 7], [22, 7], [23, 7], [24, 7], [25, 7], [26, 7], [27, 7], [28, 7], [29, 7], [30, 7], [31, 7], [32, 7], [33, 7],
  // Fila 8
  [8, 8], [9, 8], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 8], [26, 8], [27, 8], [28, 8], [29, 8], [30, 8], [31, 8], [32, 8], [33, 8],
  // Fila 9
  [7, 9], [8, 9], [9, 9], [10, 9], [11, 9], [12, 9], [13, 9], [14, 9], [15, 9], [16, 9], [17, 9], [18, 9], [19, 9], [20, 9], [21, 9], [22, 9], [23, 9], [24, 9], [25, 9], [26, 9], [27, 9], [28, 9], [29, 9], [30, 9], [31, 9], [32, 9], [33, 9],
  // Fila 10
  [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10], [16, 10], [17, 10], [18, 10], [19, 10], [20, 10], [21, 10], [22, 10], [23, 10], [24, 10], [25, 10], [26, 10], [27, 10], [28, 10], [29, 10], [30, 10],
  // Fila 11
  [7, 11], [8, 11], [9, 11], [10, 11], [11, 11], [12, 11], [13, 11], [14, 11], [15, 11], [16, 11], [17, 11], [18, 11], [19, 11], [20, 11], [21, 11], [22, 11], [23, 11], [24, 11], [25, 11], [26, 11], [27, 11], [28, 11], [29, 11], [30, 11],
  // Fila 12
  [7, 12], [8, 12], [9, 12], [10, 12], [11, 12], [12, 12], [13, 12], [14, 12], [15, 12], [16, 12], [17, 12], [18, 12], [19, 12], [20, 12], [21, 12], [22, 12], [23, 12], [24, 12], [25, 12], [26, 12], [27, 12], [28, 12], [29, 12],
  // Fila 13
  [6, 13], [7, 13], [8, 13], [9, 13], [10, 13], [11, 13], [12, 13], [13, 13], [14, 13], [15, 13], [16, 13], [17, 13], [18, 13], [19, 13], [20, 13], [21, 13], [22, 13], [23, 13], [24, 13], [25, 13], [26, 13], [27, 13], [28, 13],
  // Fila 14
  [6, 14], [7, 14], [8, 14], [9, 14], [10, 14], [11, 14], [12, 14], [13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14], [20, 14], [21, 14], [22, 14], [23, 14], [24, 14], [25, 14], [26, 14], [27, 14], [28, 14],
  // Fila 15
  [5, 15], [6, 15], [7, 15], [8, 15], [9, 15], [10, 15], [11, 15], [12, 15], [13, 15], [14, 15], [15, 15], [16, 15], [17, 15], [18, 15], [19, 15], [20, 15], [21, 15], [22, 15], [23, 15], [24, 15], [25, 15], [26, 15], [27, 15],
  // Fila 16
  [5, 16], [6, 16], [7, 16], [8, 16], [9, 16], [10, 16], [11, 16], [12, 16], [13, 16], [14, 16], [15, 16], [16, 16], [17, 16], [18, 16], [19, 16], [20, 16], [21, 16], [22, 16], [23, 16], [24, 16], [25, 16], [26, 16], [27, 16],
  // Fila 17
  [5, 17], [6, 17], [7, 17], [8, 17], [9, 17], [10, 17], [11, 17], [12, 17], [13, 17], [14, 17], [15, 17], [16, 17], [17, 17], [18, 17], [19, 17], [20, 17], [21, 17], [22, 17], [23, 17], [24, 17], [25, 17], [26, 17], [27, 17],
  // Fila 18
  [5, 18], [6, 18], [7, 18], [8, 18], [9, 18], [10, 18], [11, 18], [12, 18], [13, 18], [14, 18], [15, 18], [16, 18], [17, 18], [18, 18], [19, 18], [20, 18], [21, 18], [22, 18], [23, 18], [24, 18], [25, 18], [26, 18], [27, 18], [28, 18],
  // Fila 19
  [5, 19], [6, 19], [7, 19], [8, 19], [9, 19], [10, 19], [11, 19], [12, 19], [13, 19], [14, 19], [15, 19], [16, 19], [17, 19], [18, 19], [19, 19], [20, 19], [21, 19], [22, 19], [23, 19], [24, 19], [25, 19], [26, 19], [27, 19], [28, 19],
  // Fila 20
  [5, 20], [6, 20], [7, 20], [8, 20], [9, 20], [10, 20], [11, 20], [12, 20], [13, 20], [14, 20], [15, 20], [16, 20], [17, 20], [18, 20], [19, 20], [20, 20], [21, 20], [22, 20], [23, 20], [24, 20], [25, 20], [26, 20],
  // Fila 21
  [5, 21], [6, 21], [7, 21], [8, 21], [9, 21], [10, 21], [11, 21], [12, 21], [13, 21], [14, 21], [15, 21], [16, 21], [17, 21], [18, 21], [19, 21], [20, 21], [21, 21], [22, 21], [23, 21], [24, 21], [25, 21], [26, 21],
  // Fila 22
  [4, 22], [5, 22], [6, 22], [7, 22], [8, 22], [9, 22], [10, 22], [11, 22], [12, 22], [13, 22], [14, 22], [15, 22], [16, 22], [17, 22], [18, 22], [19, 22], [20, 22], [21, 22], [22, 22], [23, 22], [24, 22], [25, 22], [26, 22],
  // Fila 23
  [4, 23], [5, 23], [6, 23], [7, 23], [8, 23], [9, 23], [10, 23], [11, 23], [12, 23], [13, 23], [14, 23], [15, 23], [16, 23], [17, 23], [18, 23], [19, 23], [20, 23], [21, 23], [22, 23], [23, 23], [24, 23],
  // Fila 24
  [6, 24], [7, 24], [8, 24], [9, 24], [10, 24], [11, 24], [12, 24], [13, 24], [14, 24], [15, 24], [16, 24], [17, 24], [18, 24], [19, 24], [20, 24], [21, 24], [22, 24],
  // Fila 25
  [7, 25], [8, 25], [9, 25], [10, 25], [11, 25], [12, 25], [13, 25], [14, 25], [15, 25], [16, 25], [17, 25], [18, 25], [19, 25], [20, 25], [21, 25], [22, 25],
  // Fila 26
  [8, 26], [9, 26], [10, 26], [11, 26], [12, 26], [13, 26], [14, 26],
  // Fila 27
  [8, 27], [9, 27], [10, 27],
  // Fila 28
  [10, 28],

  // === BALEARES ===
  // Mallorca
  [34, 5], [35, 5], [36, 5], [37, 5],
  [34, 6], [35, 6], [36, 6], [37, 6],
  [34, 7], [35, 7], [36, 7],
  [34, 8], [35, 8], [36, 8],
  [34, 9],
  // Menorca/Ibiza
  [37, 14], [38, 14], [39, 14],
  [36, 15], [37, 15], [38, 15],
  [38, 16],

];

// Convert grid coordinates to hexagon data with row, col, index, and base height for sorting
const spainHexagons = spainGrid.map(([col, row], index) => {
  const pos = gridToPixel(col, row);
  const baseHeight = getBaseHeight(col, row);
  return { x: pos.x, y: pos.y, col, row, index, baseHeight };
});

// Canarias grid - separate from main Spain grid (simplified - 3 islands)
const canariasGrid: [number, number][] = [
  // Tenerife (oeste)
  [0, 2], [1, 2],
  [0, 3], [1, 3],
  // Gran Canaria (centro)
  [4, 2], [4, 3], [5, 3],
  // Lanzarote/Fuerteventura (este)
  [7, 2], [8, 2],
];

// Canarias concentration points (lower values for subtler blue)
const canariasConcentrationPoints: [number, number, number][] = [
  // Tenerife
  [1, 2, 6],
  // Gran Canaria
  [5, 3, 5],
  // Lanzarote
  [8, 2, 3],
];

// Calculate base height for Canarias hexagons
function getCanariasBaseHeight(col: number, row: number): number {
  let maxHeight = 0;
  const radius = 3;

  for (const [cx, cr, height] of canariasConcentrationPoints) {
    const dx = col - cx;
    const dy = row - cr;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < radius) {
      let stepHeight = 0;
      if (distance < 1) {
        stepHeight = height;
      } else if (distance < 2) {
        stepHeight = height * 0.6;
      } else {
        stepHeight = height * 0.3;
      }
      maxHeight = Math.max(maxHeight, stepHeight);
    }
  }

  return maxHeight;
}

// Convert Canarias grid to hexagon data
const canariasHexagons = canariasGrid.map(([col, row], index) => {
  const pos = gridToPixel(col, row);
  const baseHeight = getCanariasBaseHeight(col, row);
  return { x: pos.x, y: pos.y, col, row, index, baseHeight };
});

