import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const people = [
  { name: "Jane Doe", image: "/public/jane.jpeg" },
  { name: "John Smith", image: "/public/john.jpeg" },
  { name: "Alice Johnson", image: "/public/alice.jpeg" },
  { name: "Bob Brown", image: "/public/bob.jpeg" },
  { name: "Caio Silva", image: "/public/caio.jpeg" },
  { name: "Lucas Silva", image: "/public/lucas.jpeg" },
  { name: "Paulo Souza", image: "/public/paulo.jpeg" },
];

export default function CarouselCircular() {
  const visibleCount = 3;
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + people.length) % people.length);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % people.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000); // tempo natural e fluido
    return () => clearInterval(interval);
  }, []);

  const getVisiblePeople = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(people[(startIndex + i) % people.length]);
    }
    return visible;
  };

  const visiblePeople = getVisiblePeople();

  return (
    <div className="w-full h-screen bg-blue-800 flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Título */}
      <h2 className="text-yellow-400 text-4xl font-bold mb-8">Palestrantes</h2>

      {/* Botão Anterior */}
      <button
        onClick={prev}
        className="absolute left-[15px] top-1/2 -translate-y-1/2 text-white z-10 hover:scale-110 transition"
        aria-label="Anterior"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Cards */}
      <div className="flex gap-[15px] transition-transform duration-500 ease-in-out">
        {visiblePeople.map((person, idx) => (
          <div
            key={`${person.name}-${idx}`}
            className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg transition-all duration-500 ease-in-out"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold">
              {person.name}
            </div>
          </div>
        ))}
      </div>

      {/* Botão Próximo */}
      <button
        onClick={next}
        className="absolute right-[15px] top-1/2 -translate-y-1/2 text-white z-10 hover:scale-110 transition"
        aria-label="Próximo"
      >
        <ChevronRight size={36} />
      </button>

      {/* Indicadores */}
      <div className="flex gap-2 mt-6">
        {people.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full border-2 ${
              i === startIndex ? "border-yellow-400" : "border-gray-500"
            }`}
          />
        ))}
      </div>

      <button className="mt-12 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full text-xl transition">
        Clique e garanta seu ingresso
      </button>
    </div>
  );
}
