"use client";

export default function BlueBand() {
  return (
    <section className="bg-[#0a2540] py-5 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-track">
          <span className="text-white text-2xl lg:text-3xl font-bold whitespace-nowrap">Si no captas tú, captará tu competencia</span>
          <span className="text-white mx-6 text-2xl font-bold">·</span>
          <span className="text-white text-2xl lg:text-3xl italic font-light whitespace-nowrap">Eres la única opción, o la alternativa</span>
          <span className="text-white mx-6 text-2xl font-bold">·</span>
          <span className="text-white text-2xl lg:text-3xl font-bold whitespace-nowrap">Si no captas tú, captará tu competencia</span>
          <span className="text-white mx-6 text-2xl font-bold">·</span>
          <span className="text-white text-2xl lg:text-3xl italic font-light whitespace-nowrap">Eres la única opción, o la alternativa</span>
          <span className="text-white mx-6 text-2xl font-bold">·</span>
          <span className="text-white text-2xl lg:text-3xl font-bold whitespace-nowrap">Si no captas tú, captará tu competencia</span>
          <span className="text-white mx-6 text-2xl font-bold">·</span>
          <span className="text-white text-2xl lg:text-3xl italic font-light whitespace-nowrap">Eres la única opción, o la alternativa</span>
          <span className="text-white mx-6 text-2xl font-bold">·</span>
          <span className="text-white text-2xl lg:text-3xl font-bold whitespace-nowrap">Si no captas tú, captará tu competencia</span>
          <span className="text-white mx-6 text-2xl font-bold">·</span>
          <span className="text-white text-2xl lg:text-3xl italic font-light whitespace-nowrap">Eres la única opción, o la alternativa</span>
          <span className="text-white mx-6 text-2xl font-bold">·</span>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        .marquee-track {
          display: inline-flex;
          animation: scroll 25s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
