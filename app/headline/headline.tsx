import React from "react";

export default function HeadlineHorizontalLoop() {
  return (
    <div className="w-full h-10 overflow-hidden relative bg-stone-900">
      <div className="absolute w-full h-full overflow-hidden">
        <div className="flex animate-scrollLoop justify-center items-center whitespace-nowrap text-yellow-800 font-bold text-[25px]">
          {Array(20).fill("Um evento especial").map((text, index) => (
            <span key={index} className="mx-4 text-orange-400">{text}</span>
          ))}
        </div>
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
