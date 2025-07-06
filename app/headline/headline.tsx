import React from "react";

export default function HeadlineHorizontalLoop() {
  return (
    <div className="w-full min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] bg-stone-900 flex items-center overflow-hidden">
      <div className="flex animate-scrollLoop items-center whitespace-nowrap text-yellow-800 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
        {Array(20)
          .fill("DIA  26 E 27 DE SETEMBRO DE 2025")
          .map((text, index) => (
            <span key={index} className="mx-2 sm:mx-4 text-orange-400">
              {text}
            </span>
          ))}
      </div>

      <style>{`
        @keyframes scrollLoop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scrollLoop {
          animation: scrollLoop 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
