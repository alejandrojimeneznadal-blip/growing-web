"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ==================== BLACKJACK TYPES & CONSTANTS ====================

type Suit = "hearts" | "diamonds" | "clubs" | "spades";
type CardValue = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";

interface Card {
  suit: Suit;
  value: CardValue;
  hidden?: boolean;
}

const SUITS: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
const VALUES: CardValue[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const SUIT_SYMBOLS: Record<Suit, string> = {
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
  spades: "♠",
};

const SUIT_COLORS: Record<Suit, string> = {
  hearts: "text-red-500",
  diamonds: "text-red-500",
  clubs: "text-gray-900",
  spades: "text-gray-900",
};

function createDeck(): Card[] {
  const deck: Card[] = [];
  for (const suit of SUITS) {
    for (const value of VALUES) {
      deck.push({ suit, value });
    }
  }
  return deck;
}

function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getCardValue(card: Card): number {
  if (card.value === "A") return 11;
  if (["K", "Q", "J"].includes(card.value)) return 10;
  return parseInt(card.value);
}

function calculateHandValue(hand: Card[]): number {
  let value = 0;
  let aces = 0;

  for (const card of hand) {
    if (card.hidden) continue;
    value += getCardValue(card);
    if (card.value === "A") aces++;
  }

  while (value > 21 && aces > 0) {
    value -= 10;
    aces--;
  }

  return value;
}

function isBlackjack(hand: Card[]): boolean {
  return hand.length === 2 && calculateHandValue(hand) === 21;
}

// ==================== ROULETTE CONSTANTS ====================

const WHEEL_NUMBERS = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
  5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
];

const RED_NUMBERS = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

const CRUPIERS = [
  { name: "Juanca", image: "/crupier-juanca.png" },
  { name: "Marcel", image: "/crupier-marcel.png" },
  { name: "Pol", image: "/crupier-pol.png" },
];

const WELCOME_MESSAGES = [
  "Bienvenido al casino Growing!",
  "Hagan sus apuestas, por favor.",
  "La suerte te espera...",
  "Que empiece el juego!",
];

const WIN_MESSAGES = [
  "Felicidades! Gran jugada!",
  "Eso es! Menudo golpe!",
  "La suerte está de tu lado!",
  "Increíble! Sigue así!",
  "Wow! Qué tirada!",
];

const LOSE_MESSAGES = [
  "Casi! La próxima será.",
  "Uy, por poco!",
  "No pasa nada, vuelve a intentarlo.",
  "La ruleta es caprichosa...",
  "Mala suerte, pero no te rindas!",
];

const SPINNING_MESSAGES = [
  "No va más!",
  "La bola está en juego...",
  "Crucen los dedos...",
  "Vamos a ver dónde cae...",
];

function getNumberColor(num: number): "blue" | "black" | "green" {
  if (num === 0) return "green";
  return RED_NUMBERS.includes(num) ? "blue" : "black";
}

type BetType =
  | { type: "number"; value: number }
  | { type: "color"; value: "red" | "black" }
  | { type: "parity"; value: "odd" | "even" }
  | { type: "half"; value: "1-18" | "19-36" }
  | { type: "dozen"; value: 1 | 2 | 3 }
  | { type: "column"; value: 1 | 2 | 3 };

interface Bet {
  bet: BetType;
  amount: number;
}

function checkWin(bet: BetType, result: number): number {
  switch (bet.type) {
    case "number":
      return bet.value === result ? 35 : 0;
    case "color":
      if (result === 0) return 0;
      return getNumberColor(result) === bet.value ? 1 : 0;
    case "parity":
      if (result === 0) return 0;
      const isOdd = result % 2 === 1;
      return (bet.value === "odd" && isOdd) || (bet.value === "even" && !isOdd) ? 1 : 0;
    case "half":
      if (result === 0) return 0;
      return (bet.value === "1-18" && result <= 18) || (bet.value === "19-36" && result > 18) ? 1 : 0;
    case "dozen":
      if (result === 0) return 0;
      return Math.ceil(result / 12) === bet.value ? 2 : 0;
    case "column":
      if (result === 0) return 0;
      const col = result % 3 === 0 ? 3 : result % 3;
      return col === bet.value ? 2 : 0;
    default:
      return 0;
  }
}

function Roulette3D({ spinning, rotation, ballAngle }: { spinning: boolean; rotation: number; ballAngle: number }) {
  // Generate the conic gradient string for segments
  const segmentGradient = WHEEL_NUMBERS.map((num, i) => {
    const color = getNumberColor(num);
    const bgColor = color === "green" ? "#00843D" : color === "blue" ? "#00abc8" : "#1a1a1a";
    const startAngle = (360 / 37) * i;
    const endAngle = (360 / 37) * (i + 1) - 0.5; // Small gap for separator
    return `${bgColor} ${startAngle}deg, ${bgColor} ${endAngle}deg, #B8860B ${endAngle}deg, #B8860B ${endAngle + 0.5}deg`;
  }).join(", ");

  return (
    <div className="relative">
      {/* Main wheel container with 3D perspective */}
      <div
        className="relative"
        style={{
          width: "300px",
          height: "300px",
          perspective: "600px"
        }}
      >
        {/* Tilted wheel wrapper */}
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: "rotateX(55deg)",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Wooden outer rim */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #8B4513, #A0522D, #CD853F, #8B4513, #654321, #8B4513, #A0522D, #CD853F, #8B4513)",
              boxShadow: `
                0 15px 0 -2px #6B4423,
                0 30px 0 -4px #5D3A1A,
                0 45px 0 -6px #4A2E15,
                inset 0 0 40px rgba(0,0,0,0.5),
                0 0 30px rgba(0,0,0,0.4)
              `
            }}
          />

          {/* Chrome ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: "10px",
              background: "linear-gradient(135deg, #e0e0e0 0%, #a0a0a0 25%, #d0d0d0 50%, #808080 75%, #c0c0c0 100%)",
              boxShadow: "inset 0 3px 8px rgba(255,255,255,0.6), inset 0 -3px 8px rgba(0,0,0,0.4)"
            }}
          />

          {/* Ball track */}
          <div
            className="absolute rounded-full"
            style={{
              inset: "18px",
              background: "radial-gradient(circle at 50% 30%, #2a2a2a 0%, #1a1a1a 50%, #0f0f0f 100%)",
              boxShadow: "inset 0 8px 25px rgba(0,0,0,0.9)"
            }}
          />

          {/* Spinning number wheel */}
          <div
            className="absolute rounded-full overflow-hidden"
            style={{
              inset: "40px",
              transform: `rotate(${rotation}deg)`,
              transition: spinning ? "transform 5s cubic-bezier(0.15, 0.6, 0.2, 1)" : "none",
              background: `conic-gradient(from 0deg, ${segmentGradient})`,
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.4)"
            }}
          >
            {/* Numbers overlay */}
            {WHEEL_NUMBERS.map((num, i) => {
              // Segment center angle in CSS degrees (0 = top, clockwise)
              const cssAngle = (360 / 37) * i + (360 / 37 / 2);
              const radius = 42; // percentage from center
              // Convert CSS angle to screen coordinates
              // CSS: 0=top, 90=right; Screen: sin for x, -cos for y
              const rad = cssAngle * (Math.PI / 180);
              const x = 50 + radius * Math.sin(rad);
              const y = 50 - radius * Math.cos(rad);

              return (
                <span
                  key={num}
                  className="absolute text-white font-bold"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${cssAngle + 180}deg)`,
                    fontSize: "9px",
                    textShadow: "0 1px 2px rgba(0,0,0,0.9)"
                  }}
                >
                  {num}
                </span>
              );
            })}

            {/* Center gold ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "35%",
                background: "conic-gradient(from 0deg, #B8860B, #FFD700, #DAA520, #B8860B, #FFD700, #DAA520)",
                boxShadow: "inset 0 2px 6px rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.5)"
              }}
            />
          </div>

          {/* Center turret - bottom */}
          <div
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "50%",
              width: "50px",
              height: "50px",
              marginLeft: "-25px",
              marginTop: "-25px",
              background: "radial-gradient(circle at 35% 35%, #FFD700 0%, #DAA520 50%, #B8860B 100%)",
              boxShadow: "0 8px 0 -1px #996515, 0 16px 0 -2px #7A5210, 0 0 15px rgba(255,215,0,0.4)"
            }}
          />

          {/* Center turret - middle */}
          <div
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "50%",
              width: "35px",
              height: "35px",
              marginLeft: "-17.5px",
              marginTop: "-17.5px",
              background: "radial-gradient(circle at 30% 30%, #FFF8DC 0%, #FFD700 40%, #DAA520 100%)",
              boxShadow: "0 6px 0 -1px #B8860B, 0 12px 0 -2px #996515"
            }}
          />

          {/* Center turret - top */}
          <div
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "50%",
              width: "18px",
              height: "18px",
              marginLeft: "-9px",
              marginTop: "-9px",
              background: "radial-gradient(circle at 30% 30%, #FFFACD 0%, #FFD700 50%, #DAA520 100%)",
              boxShadow: "0 0 8px rgba(255,215,0,0.5)"
            }}
          />

          {/* Ball */}
          <div
            className="absolute"
            style={{
              inset: "22px",
              transform: `rotate(${-ballAngle}deg)`,
              transition: spinning ? "transform 5s cubic-bezier(0.15, 0.6, 0.2, 1)" : "none"
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: "12px",
                height: "12px",
                top: "3px",
                left: "50%",
                marginLeft: "-6px",
                background: "radial-gradient(circle at 35% 35%, #fff 0%, #e8e8e8 30%, #b0b0b0 70%, #808080 100%)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.6), inset 0 1px 3px rgba(255,255,255,0.9)"
              }}
            />
          </div>

          {/* Diamond deflectors */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div
              key={angle}
              className="absolute"
              style={{ inset: "16px", transform: `rotate(${angle}deg)` }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-2px",
                  left: "50%",
                  marginLeft: "-5px",
                  width: "10px",
                  height: "10px",
                  background: "linear-gradient(135deg, #FFD700 0%, #FFF8DC 50%, #B8860B 100%)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pointer arrow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10"
        style={{ top: "-8px" }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "22px solid #FFD700",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
          }}
        />
      </div>
    </div>
  );
}

function BettingTable({ onBet, bets, disabled }: { onBet: (bet: BetType) => void; bets: Bet[]; disabled: boolean }) {
  const getBetAmount = (betType: BetType): number => {
    return bets
      .filter(b => JSON.stringify(b.bet) === JSON.stringify(betType))
      .reduce((sum, b) => sum + b.amount, 0);
  };

  const NumberCell = ({ num }: { num: number }) => {
    const color = getNumberColor(num);
    const amount = getBetAmount({ type: "number", value: num });
    return (
      <button
        onClick={() => onBet({ type: "number", value: num })}
        disabled={disabled}
        className={`relative h-12 font-bold text-white text-sm rounded-lg disabled:cursor-not-allowed ${
          color === "blue" ? "bg-gradient-to-b from-[#00c4e4] to-[#008fa8] shadow-[0_4px_12px_rgba(0,171,200,0.3)]" :
          color === "black" ? "bg-gradient-to-b from-gray-700 to-gray-900 shadow-[0_4px_12px_rgba(0,0,0,0.3)]" :
          "bg-gradient-to-b from-emerald-500 to-emerald-700 shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
        }`}
      >
        {num}
        {amount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
            {amount}
          </span>
        )}
      </button>
    );
  };

  const OutsideBet = ({ label, bet, className = "" }: { label: string; bet: BetType; className?: string }) => {
    const amount = getBetAmount(bet);
    return (
      <button
        onClick={() => onBet(bet)}
        disabled={disabled}
        className={`relative h-10 bg-gradient-to-b from-white/10 to-white/5 text-white text-xs font-semibold rounded-lg disabled:cursor-not-allowed backdrop-blur border border-white/10 ${className}`}
      >
        {label}
        {amount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
            {amount}
          </span>
        )}
      </button>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-5 rounded-2xl shadow-2xl min-w-[540px] backdrop-blur-xl border border-white/10">
      <div className="grid grid-cols-[50px_1fr] gap-1.5 mb-1.5">
        <NumberCell num={0} />
        <div />
      </div>

      <div className="grid grid-cols-[50px_repeat(12,1fr)] gap-1.5">
        <div className="col-span-1 row-span-3" />
        {[...Array(12)].map((_, col) => (
          <div key={col} className="contents">
            {[3, 2, 1].map(row => {
              const num = col * 3 + row;
              return <NumberCell key={num} num={num} />;
            })}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[50px_repeat(3,1fr)] gap-1.5 mt-1.5">
        <div />
        <OutsideBet label="2:1" bet={{ type: "column", value: 1 }} />
        <OutsideBet label="2:1" bet={{ type: "column", value: 2 }} />
        <OutsideBet label="2:1" bet={{ type: "column", value: 3 }} />
      </div>

      <div className="grid grid-cols-[50px_repeat(3,1fr)] gap-1.5 mt-2">
        <div />
        <OutsideBet label="1-12" bet={{ type: "dozen", value: 1 }} />
        <OutsideBet label="13-24" bet={{ type: "dozen", value: 2 }} />
        <OutsideBet label="25-36" bet={{ type: "dozen", value: 3 }} />
      </div>

      <div className="grid grid-cols-[50px_repeat(6,1fr)] gap-1.5 mt-1.5">
        <div />
        <OutsideBet label="1-18" bet={{ type: "half", value: "1-18" }} />
        <OutsideBet label="PAR" bet={{ type: "parity", value: "even" }} />
        <OutsideBet label="AZUL" bet={{ type: "color", value: "red" }} className="!bg-gradient-to-b !from-[#00c4e4] !to-[#008fa8] !border-[#00abc8]/30" />
        <OutsideBet label="NEGRO" bet={{ type: "color", value: "black" }} className="!bg-gradient-to-b !from-gray-700 !to-gray-900 !border-gray-600/30" />
        <OutsideBet label="IMPAR" bet={{ type: "parity", value: "odd" }} />
        <OutsideBet label="19-36" bet={{ type: "half", value: "19-36" }} />
      </div>
    </div>
  );
}

function ChipSelector({ selectedChip, onSelect, balance }: { selectedChip: number; onSelect: (v: number) => void; balance: number }) {
  const chips = [1, 5, 10, 25, 100];

  return (
    <div className="flex gap-2 justify-center">
      {chips.map(value => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          disabled={balance < value}
          className={`w-12 h-12 rounded-full font-bold text-xs transition-all ${
            selectedChip === value ? "ring-4 ring-yellow-400 scale-110" : "hover:scale-105"
          } ${balance < value ? "opacity-40" : ""} ${
            value === 1 ? "bg-gradient-to-b from-white to-gray-300 text-gray-800" :
            value === 5 ? "bg-gradient-to-b from-red-400 to-red-600 text-white" :
            value === 10 ? "bg-gradient-to-b from-blue-400 to-blue-600 text-white" :
            value === 25 ? "bg-gradient-to-b from-green-400 to-green-600 text-white" :
            "bg-gradient-to-b from-gray-800 to-black text-yellow-400 border-2 border-yellow-500"
          }`}
          style={{ boxShadow: "inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.3)" }}
        >
          ${value}
        </button>
      ))}
    </div>
  );
}

function RouletteGame() {
  const [balance, setBalance] = useState(1000);
  const [bets, setBets] = useState<Bet[]>([]);
  const [selectedChip, setSelectedChip] = useState(10);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [lastWin, setLastWin] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [ballAngle, setBallAngle] = useState(0);
  const [crupier] = useState(() => CRUPIERS[Math.floor(Math.random() * CRUPIERS.length)]);
  const [crupierMessage, setCrupierMessage] = useState(() =>
    WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)]
  );
  const [motivationModal, setMotivationModal] = useState<0 | 1 | 2>(0);
  const [crupierRevealed, setCrupierRevealed] = useState(false);

  const totalBet = bets.reduce((sum, b) => sum + b.amount, 0);

  const placeBet = (bet: BetType) => {
    if (spinning || balance < selectedChip) return;
    setBalance(b => b - selectedChip);
    setBets(prev => [...prev, { bet, amount: selectedChip }]);
  };

  const clearBets = () => {
    if (spinning) return;
    setBalance(b => b + totalBet);
    setBets([]);
    setResult(null);
    setLastWin(null);
  };

  const spin = () => {
    if (spinning || bets.length === 0) return;

    setSpinning(true);
    setResult(null);
    setLastWin(null);
    setCrupierMessage(SPINNING_MESSAGES[Math.floor(Math.random() * SPINNING_MESSAGES.length)]);

    const winningNumber = Math.floor(Math.random() * 37);
    const numberIndex = WHEEL_NUMBERS.indexOf(winningNumber);
    const segmentAngle = 360 / 37;

    // Center of winning segment in the unrotated wheel (0 = top, clockwise)
    const segmentCenter = (numberIndex + 0.5) * segmentAngle;

    // Random visual position where both ball and segment will stop (for visual variety)
    const stopPosition = Math.random() * 360;

    // Wheel rotation: winning segment should end up at stopPosition
    // After rotating R degrees, segment at segmentCenter ends at (segmentCenter + R) mod 360
    // We want (segmentCenter + R) mod 360 = stopPosition
    // So R = stopPosition - segmentCenter
    const wheelTargetMod = (stopPosition - segmentCenter + 360) % 360;

    // Calculate cumulative wheel rotation from current position
    const currentWheelMod = ((rotation % 360) + 360) % 360;
    let wheelExtra = wheelTargetMod - currentWheelMod;
    if (wheelExtra <= 0) wheelExtra += 360;

    const fullSpins = 5 + Math.floor(Math.random() * 3);
    const newRotation = rotation + fullSpins * 360 + wheelExtra;

    // Ball should end at stopPosition (same as winning segment)
    // Ball visual position = (360 - ballAngle) mod 360
    // We want (360 - ballAngle) mod 360 = stopPosition
    // So ballAngle mod 360 = (360 - stopPosition) mod 360
    const ballTargetMod = (360 - stopPosition + 360) % 360;

    const currentBallMod = ((ballAngle % 360) + 360) % 360;
    let ballExtra = ballTargetMod - currentBallMod;
    if (ballExtra <= 0) ballExtra += 360;

    const ballFullSpins = 8 + Math.floor(Math.random() * 3);
    const newBallAngle = ballAngle + ballFullSpins * 360 + ballExtra;

    setRotation(newRotation);
    setBallAngle(newBallAngle);

    setTimeout(() => {
      setResult(winningNumber);

      let totalWin = 0;
      bets.forEach(({ bet, amount }) => {
        const multiplier = checkWin(bet, winningNumber);
        totalWin += amount * multiplier + (multiplier > 0 ? amount : 0);
      });

      setLastWin(totalWin);
      setBalance(b => b + totalWin);
      setBets([]);
      setSpinning(false);

      // Update crupier message based on result
      if (totalWin > 0) {
        setCrupierMessage(WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)]);
      } else {
        setCrupierMessage(LOSE_MESSAGES[Math.floor(Math.random() * LOSE_MESSAGES.length)]);
      }
    }, 5500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0a2e] via-[#16213e] to-[#0f0f1a] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-none">
            Growing
          </h1>
          <h2 className="text-4xl lg:text-5xl text-white/80 mt-1" style={{ fontFamily: 'Times New Roman, Times, serif', fontStyle: 'italic' }}>
            Roulette
          </h2>
        </div>

        <div className="grid lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
          {/* Left side - Betting table */}
          <div className="pt-8">
            <BettingTable onBet={placeBet} bets={bets} disabled={spinning} />
            <p className="mt-3 text-white/40 text-xs text-center">
              Número: 35:1 | Docena/Columna: 2:1 | Rojo/Negro/Par/Impar: 1:1
            </p>

            <div className="flex gap-3 mt-4 justify-center">
              <button
                onClick={clearBets}
                disabled={spinning || bets.length === 0}
                className="px-6 py-3 bg-gradient-to-b from-red-500 to-red-700 disabled:opacity-40 text-white font-bold rounded-lg"
              >
                Limpiar
              </button>
              <button
                onClick={spin}
                disabled={spinning || bets.length === 0}
                className="px-10 py-3 bg-gradient-to-b from-green-500 to-green-700 disabled:opacity-40 text-white font-bold rounded-lg text-lg"
              >
                {spinning ? "..." : "GIRAR"}
              </button>
            </div>
          </div>

          {/* Center - Roulette wheel and controls */}
          <div className="flex flex-col items-center gap-4 lg:pl-32">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-black/40 backdrop-blur px-6 py-3 rounded-xl border border-white/10">
                <span className="text-white/60 text-xs">Balance</span>
                <p className="text-2xl font-bold text-yellow-400">${balance}</p>
              </div>
              {totalBet > 0 && (
                <div className="bg-black/40 backdrop-blur px-6 py-3 rounded-xl border border-white/10">
                  <span className="text-white/60 text-xs">Apuesta</span>
                  <p className="text-2xl font-bold text-white">${totalBet}</p>
                </div>
              )}
            </div>

            <Roulette3D spinning={spinning} rotation={rotation} ballAngle={ballAngle} />

            <div className="h-20 flex items-center justify-center">
              {result !== null && (
                <div className="flex items-center gap-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full text-xl font-bold text-white ${
                      getNumberColor(result) === "blue" ? "bg-[#00abc8]" :
                      getNumberColor(result) === "black" ? "bg-gray-900" : "bg-green-600"
                    }`}
                    style={{ boxShadow: `0 0 20px ${getNumberColor(result) === "blue" ? "rgba(0,171,200,0.5)" : getNumberColor(result) === "green" ? "rgba(22,163,74,0.5)" : "rgba(0,0,0,0.5)"}` }}
                  >
                    {result}
                  </div>
                  {lastWin !== null && lastWin > 0 ? (
                    <p className="text-xl font-bold text-green-400">+${lastWin}</p>
                  ) : (
                    <p className="text-sm text-red-400">Sin premio</p>
                  )}
                </div>
              )}
            </div>

            <div>
              <p className="text-white/60 text-xs mb-2 text-center">Selecciona ficha</p>
              <ChipSelector selectedChip={selectedChip} onSelect={setSelectedChip} balance={balance} />
            </div>
          </div>

          {/* Right side - Crupier */}
          <div className="hidden lg:flex flex-col items-center -mt-16 relative -ml-4">
            {crupierRevealed && (
              <div className="text-center mb-4">
                <p className="text-[#00abc8] text-sm font-semibold uppercase tracking-wider">Crupier</p>
                <p className="text-white text-2xl font-bold">{crupier.name}</p>
              </div>
            )}
            <div className="relative w-[450px] h-[550px]">
              <Image
                src={crupier.image}
                alt={`Crupier ${crupier.name}`}
                fill
                className={`object-contain object-bottom -scale-x-100 transition-all duration-700 ${!crupierRevealed ? "blur-xl" : "blur-0"}`}
              />
              {/* Botón revelar crupier */}
              {!crupierRevealed && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setCrupierRevealed(true)}
                    className="px-8 py-4 bg-gradient-to-r from-[#00abc8] to-[#0a2540] text-white text-lg font-bold rounded-xl shadow-2xl border-2 border-white/20"
                  >
                    Revelar Crupier
                  </button>
                </div>
              )}
              {/* Mensaje del crupier superpuesto */}
              {crupierRevealed && (
                <div className="absolute bottom-32 left-1/2 -translate-x-1/2 max-w-[220px] text-center">
                  <div className="bg-black/60 backdrop-blur px-4 py-3 rounded-xl border border-white/10">
                    <p className="text-white/90 text-sm italic">&ldquo;{crupierMessage}&rdquo;</p>
                  </div>
                </div>
              )}
            </div>
            {crupierRevealed && (
              <button
                onClick={() => setMotivationModal(1)}
                className="mt-4 px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold rounded-xl shadow-lg animate-pulse"
              >
                ¿Estás to acabado? Clicka
              </button>
            )}
          </div>

          {/* Modal de motivación */}
          {motivationModal > 0 && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
              <div className="relative max-w-2xl mx-4">
                <button
                  onClick={() => setMotivationModal(0)}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl hover:bg-gray-200 transition-colors z-10"
                >
                  ×
                </button>
                <Image
                  src={motivationModal === 1 ? "/motivacion-2.jpg" : "/motivacion-1.jpg"}
                  alt="Motivación"
                  width={600}
                  height={600}
                  className="rounded-xl"
                />
                {motivationModal === 1 && (
                  <button
                    onClick={() => setMotivationModal(2)}
                    className="mt-4 w-full px-6 py-3 bg-[#00abc8] text-white font-bold rounded-xl"
                  >
                    Definitivamente eres un reventao. Clicka aquí
                  </button>
                )}
                {motivationModal === 2 && (
                  <button
                    onClick={() => setMotivationModal(0)}
                    className="mt-4 w-full px-6 py-3 bg-green-600 text-white font-bold rounded-xl"
                  >
                    Volver a intentarlo
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RoulettePage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "contraseña") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a2540] flex items-center justify-center px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="•••••••••"
            className={`w-full px-4 py-3 rounded-lg bg-white/10 border-2 text-white placeholder-white/30 outline-none text-center ${
              error ? "border-red-500 animate-shake" : "border-white/20 focus:border-white/40"
            }`}
            autoFocus
          />
        </form>
        <style jsx>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-8px); }
            75% { transform: translateX(8px); }
          }
          .animate-shake { animation: shake 0.3s ease-in-out; }
        `}</style>
      </div>
    );
  }

  return <CasinoGames />;
}

// ==================== BLACKJACK GAME ====================

function PlayingCard({ card, index = 0 }: { card: Card; index?: number }) {
  if (card.hidden) {
    return (
      <div
        className="relative w-20 h-28 rounded-lg shadow-xl transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #1a365d 100%)",
          transform: `translateX(${index * -40}px)`,
        }}
      >
        <div className="absolute inset-2 rounded border-2 border-white/20 flex items-center justify-center">
          <div className="text-4xl text-white/30">?</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-20 h-28 bg-white rounded-lg shadow-xl transition-all duration-300"
      style={{ transform: `translateX(${index * -40}px)` }}
    >
      <div className="absolute inset-1 flex flex-col justify-between p-1">
        <div className={`text-left ${SUIT_COLORS[card.suit]}`}>
          <div className="text-lg font-bold leading-none">{card.value}</div>
          <div className="text-lg leading-none">{SUIT_SYMBOLS[card.suit]}</div>
        </div>
        <div className={`text-5xl text-center ${SUIT_COLORS[card.suit]}`}>
          {SUIT_SYMBOLS[card.suit]}
        </div>
        <div className={`text-right rotate-180 ${SUIT_COLORS[card.suit]}`}>
          <div className="text-lg font-bold leading-none">{card.value}</div>
          <div className="text-lg leading-none">{SUIT_SYMBOLS[card.suit]}</div>
        </div>
      </div>
    </div>
  );
}

function BlackjackChipSelector({ selectedChip, onSelect, balance }: { selectedChip: number; onSelect: (v: number) => void; balance: number }) {
  const chips = [5, 10, 25, 50, 100];

  return (
    <div className="flex gap-2 justify-center">
      {chips.map(value => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          disabled={balance < value}
          className={`w-11 h-11 rounded-full font-bold text-xs transition-all ${
            selectedChip === value ? "ring-4 ring-yellow-400 scale-110" : "hover:scale-105"
          } ${balance < value ? "opacity-40" : ""} ${
            value === 5 ? "bg-gradient-to-b from-red-400 to-red-600 text-white" :
            value === 10 ? "bg-gradient-to-b from-blue-400 to-blue-600 text-white" :
            value === 25 ? "bg-gradient-to-b from-green-400 to-green-600 text-white" :
            value === 50 ? "bg-gradient-to-b from-purple-400 to-purple-600 text-white" :
            "bg-gradient-to-b from-gray-800 to-black text-yellow-400 border-2 border-yellow-500"
          }`}
          style={{ boxShadow: "inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.3)" }}
        >
          ${value}
        </button>
      ))}
    </div>
  );
}

type BlackjackGameState = "betting" | "playing" | "dealerTurn" | "finished";

function BlackjackGame() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(0);
  const [selectedChip, setSelectedChip] = useState(10);
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [gameState, setGameState] = useState<BlackjackGameState>("betting");
  const [message, setMessage] = useState("Haz tu apuesta para empezar");
  const [lastWin, setLastWin] = useState<number | null>(null);

  const playerValue = calculateHandValue(playerHand);
  const dealerValue = calculateHandValue(dealerHand);

  const addToBet = () => {
    if (balance >= selectedChip) {
      setBet(b => b + selectedChip);
      setBalance(b => b - selectedChip);
    }
  };

  const clearBet = () => {
    setBalance(b => b + bet);
    setBet(0);
  };

  const deal = () => {
    if (bet === 0) return;

    const newDeck = shuffleDeck(createDeck());
    const pHand = [newDeck[0], newDeck[2]];
    const dHand = [newDeck[1], { ...newDeck[3], hidden: true }];

    setDeck(newDeck.slice(4));
    setPlayerHand(pHand);
    setDealerHand(dHand);
    setGameState("playing");
    setMessage("Tu turno");
    setLastWin(null);

    // Check for player blackjack
    if (isBlackjack(pHand)) {
      setTimeout(() => {
        const revealedDealerHand = dHand.map(c => ({ ...c, hidden: false }));
        setDealerHand(revealedDealerHand);

        if (isBlackjack(revealedDealerHand)) {
          setMessage("¡Empate! Ambos tienen Blackjack");
          setBalance(b => b + bet);
          setLastWin(0);
        } else {
          const winAmount = Math.floor(bet * 2.5);
          setMessage("¡BLACKJACK! ¡Ganaste!");
          setBalance(b => b + winAmount);
          setLastWin(winAmount - bet);
        }
        setGameState("finished");
      }, 500);
    }
  };

  const hit = () => {
    if (gameState !== "playing" || deck.length === 0) return;

    const newCard = deck[0];
    const newHand = [...playerHand, newCard];
    setPlayerHand(newHand);
    setDeck(deck.slice(1));

    const newValue = calculateHandValue(newHand);
    if (newValue > 21) {
      setMessage("¡Te pasaste! El crupier gana");
      setGameState("finished");
      setLastWin(-bet);
    }
  };

  const stand = () => {
    if (gameState !== "playing") return;

    setGameState("dealerTurn");
    setMessage("Turno del crupier...");

    // Reveal dealer's hidden card
    const revealedHand = dealerHand.map(c => ({ ...c, hidden: false }));
    setDealerHand(revealedHand);

    // Dealer draws
    let currentDeck = [...deck];
    let currentHand: Card[] = revealedHand.map(c => ({ ...c }));

    const drawCards = () => {
      const dealerVal = calculateHandValue(currentHand);

      if (dealerVal < 17 && currentDeck.length > 0) {
        currentHand = [...currentHand, { ...currentDeck[0], hidden: false }];
        currentDeck = currentDeck.slice(1);
        setDealerHand([...currentHand]);
        setDeck([...currentDeck]);
        setTimeout(drawCards, 700);
      } else {
        // Determine winner
        const finalDealerValue = calculateHandValue(currentHand);
        const finalPlayerValue = calculateHandValue(playerHand);

        setTimeout(() => {
          if (finalDealerValue > 21) {
            setMessage("¡El crupier se pasó! ¡Ganaste!");
            setBalance(b => b + bet * 2);
            setLastWin(bet);
          } else if (finalPlayerValue > finalDealerValue) {
            setMessage("¡Ganaste!");
            setBalance(b => b + bet * 2);
            setLastWin(bet);
          } else if (finalPlayerValue < finalDealerValue) {
            setMessage("El crupier gana");
            setLastWin(-bet);
          } else {
            setMessage("Empate");
            setBalance(b => b + bet);
            setLastWin(0);
          }
          setGameState("finished");
        }, 300);
      }
    };

    setTimeout(drawCards, 700);
  };

  const doubleDown = () => {
    if (gameState !== "playing" || playerHand.length !== 2 || balance < bet) return;

    setBalance(b => b - bet);
    setBet(b => b * 2);

    const newCard = deck[0];
    const newHand = [...playerHand, newCard];
    setPlayerHand(newHand);
    setDeck(deck.slice(1));

    const newValue = calculateHandValue(newHand);
    if (newValue > 21) {
      setMessage("¡Te pasaste! El crupier gana");
      setGameState("finished");
      setLastWin(-bet * 2);
    } else {
      // Auto-stand after double
      setTimeout(() => {
        setGameState("dealerTurn");
        setMessage("Turno del crupier...");

        const revealedHand = dealerHand.map(c => ({ ...c, hidden: false }));
        setDealerHand(revealedHand);

        let currentDeck = deck.slice(1);
        let currentHand: Card[] = revealedHand.map(c => ({ ...c }));

        const drawCards = () => {
          const dealerVal = calculateHandValue(currentHand);

          if (dealerVal < 17 && currentDeck.length > 0) {
            currentHand = [...currentHand, { ...currentDeck[0], hidden: false }];
            currentDeck = currentDeck.slice(1);
            setDealerHand([...currentHand]);
            setDeck([...currentDeck]);
            setTimeout(drawCards, 700);
          } else {
            const finalDealerValue = calculateHandValue(currentHand);
            const finalPlayerValue = calculateHandValue(newHand);
            const totalBet = bet * 2;

            setTimeout(() => {
              if (finalDealerValue > 21) {
                setMessage("¡El crupier se pasó! ¡Ganaste!");
                setBalance(b => b + totalBet * 2);
                setLastWin(totalBet);
              } else if (finalPlayerValue > finalDealerValue) {
                setMessage("¡Ganaste!");
                setBalance(b => b + totalBet * 2);
                setLastWin(totalBet);
              } else if (finalPlayerValue < finalDealerValue) {
                setMessage("El crupier gana");
                setLastWin(-totalBet);
              } else {
                setMessage("Empate");
                setBalance(b => b + totalBet);
                setLastWin(0);
              }
              setGameState("finished");
            }, 300);
          }
        };

        setTimeout(drawCards, 700);
      }, 500);
    }
  };

  const newGame = () => {
    setPlayerHand([]);
    setDealerHand([]);
    setBet(0);
    setGameState("betting");
    setMessage("Haz tu apuesta para empezar");
    setLastWin(null);
  };

  return (
    <div className="bg-gradient-to-b from-[#0f3d0f] via-[#1a5a1a] to-[#0f3d0f] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-none">
            Growing
          </h1>
          <h2 className="text-3xl lg:text-4xl text-white/80 mt-1" style={{ fontFamily: 'Times New Roman, Times, serif', fontStyle: 'italic' }}>
            Blackjack
          </h2>
        </div>

        {/* Balance and Bet */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="bg-black/40 backdrop-blur px-6 py-3 rounded-xl border border-white/10">
            <span className="text-white/60 text-xs">Balance</span>
            <p className="text-2xl font-bold text-yellow-400">${balance}</p>
          </div>
          {bet > 0 && (
            <div className="bg-black/40 backdrop-blur px-6 py-3 rounded-xl border border-white/10">
              <span className="text-white/60 text-xs">Apuesta</span>
              <p className="text-2xl font-bold text-white">${bet}</p>
            </div>
          )}
        </div>

        {/* Game Table */}
        <div className="bg-gradient-to-b from-green-800/50 to-green-900/50 rounded-3xl p-8 border-8 border-amber-900/80 shadow-2xl">
          {/* Dealer Section */}
          <div className="text-center mb-8">
            <p className="text-white/60 text-sm mb-2">Crupier {gameState !== "betting" && `(${dealerHand.some(c => c.hidden) ? "?" : dealerValue})`}</p>
            <div className="flex justify-center min-h-[112px]">
              {dealerHand.length > 0 ? (
                <div className="flex" style={{ marginLeft: `${(dealerHand.length - 1) * 20}px` }}>
                  {dealerHand.map((card, i) => (
                    <PlayingCard key={i} card={card} index={i} />
                  ))}
                </div>
              ) : (
                <div className="w-20 h-28 border-2 border-dashed border-white/20 rounded-lg" />
              )}
            </div>
          </div>

          {/* Message */}
          <div className="text-center my-6">
            <p className={`text-xl font-bold ${
              lastWin !== null && lastWin > 0 ? "text-green-400" :
              lastWin !== null && lastWin < 0 ? "text-red-400" :
              "text-white"
            }`}>
              {message}
              {lastWin !== null && lastWin !== 0 && (
                <span className="ml-2">
                  ({lastWin > 0 ? "+" : ""}{lastWin}$)
                </span>
              )}
            </p>
          </div>

          {/* Player Section */}
          <div className="text-center">
            <div className="flex justify-center min-h-[112px] mb-2">
              {playerHand.length > 0 ? (
                <div className="flex" style={{ marginLeft: `${(playerHand.length - 1) * 20}px` }}>
                  {playerHand.map((card, i) => (
                    <PlayingCard key={i} card={card} index={i} />
                  ))}
                </div>
              ) : (
                <div className="w-20 h-28 border-2 border-dashed border-white/20 rounded-lg" />
              )}
            </div>
            <p className="text-white/60 text-sm">Tu mano {gameState !== "betting" && `(${playerValue})`}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6">
          {gameState === "betting" && (
            <div className="space-y-4">
              <BlackjackChipSelector selectedChip={selectedChip} onSelect={setSelectedChip} balance={balance} />
              <div className="flex justify-center gap-3">
                <button
                  onClick={addToBet}
                  disabled={balance < selectedChip}
                  className="px-6 py-3 bg-gradient-to-b from-yellow-500 to-yellow-700 disabled:opacity-40 text-black font-bold rounded-lg"
                >
                  Apostar ${selectedChip}
                </button>
                {bet > 0 && (
                  <>
                    <button
                      onClick={clearBet}
                      className="px-6 py-3 bg-gradient-to-b from-red-500 to-red-700 text-white font-bold rounded-lg"
                    >
                      Limpiar
                    </button>
                    <button
                      onClick={deal}
                      className="px-8 py-3 bg-gradient-to-b from-green-500 to-green-700 text-white font-bold rounded-lg text-lg"
                    >
                      REPARTIR
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {gameState === "playing" && (
            <div className="flex justify-center gap-3">
              <button
                onClick={hit}
                className="px-8 py-3 bg-gradient-to-b from-blue-500 to-blue-700 text-white font-bold rounded-lg"
              >
                PEDIR
              </button>
              <button
                onClick={stand}
                className="px-8 py-3 bg-gradient-to-b from-orange-500 to-orange-700 text-white font-bold rounded-lg"
              >
                PLANTARSE
              </button>
              {playerHand.length === 2 && balance >= bet && (
                <button
                  onClick={doubleDown}
                  className="px-8 py-3 bg-gradient-to-b from-purple-500 to-purple-700 text-white font-bold rounded-lg"
                >
                  DOBLAR
                </button>
              )}
            </div>
          )}

          {gameState === "dealerTurn" && (
            <div className="flex justify-center">
              <div className="px-8 py-3 bg-black/40 text-white/60 font-bold rounded-lg">
                Esperando al crupier...
              </div>
            </div>
          )}

          {gameState === "finished" && (
            <div className="flex justify-center">
              <button
                onClick={newGame}
                className="px-10 py-3 bg-gradient-to-b from-[#00abc8] to-[#008fa8] text-white font-bold rounded-lg text-lg"
              >
                NUEVA PARTIDA
              </button>
            </div>
          )}
        </div>

        {/* Rules */}
        <p className="mt-6 text-white/40 text-xs text-center">
          Blackjack paga 3:2 | El crupier pide con 16 y se planta con 17 | Doblar solo con 2 cartas
        </p>
      </div>
    </div>
  );
}

// ==================== FULL CASINO PAGE ====================

function CasinoGames() {
  return (
    <div>
      <RouletteGame />
      <BlackjackGame />
    </div>
  );
}
