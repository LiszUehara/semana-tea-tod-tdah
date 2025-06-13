import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const people = [
  { name: "Jane Doe", image: "/jane.jpeg" },
  { name: "John Smith", image: "/john.jpeg" },
  { name: "Alice Johnson", image: "/alice.jpeg" },
  { name: "Bob Brown", image: "/bob.jpeg" },
  { name: "Caio Silva", image: "/caio.jpeg" },
  { name: "Lucas Silva", image: "/lucas.jpeg" },
  { name: "Paulo Souza", image: "/paulo.jpeg" },
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
    }, 1000);
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
    <div className="w-full h-screen bg-blue-800 flex flex-col items-center justify-center relative overflow-hidden px-4 border-amber-400 border-2">
    
      <h2 className="text-yellow-400 text-4xl font-bold mb-8">Palestrantes</h2>

      {/* Botão Anterior */}
      <button
        onClick={prev}
        className="absolute left-[15px] top-1/2 -translate-y-1/2 text-white z-10 hover:scale-110 transition duration-500"
        aria-label="Anterior"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Cards */}
      <div className="flex gap-[15px] transition-transform duration-500 ease-in-out">
        {visiblePeople.map((person, idx) => (
          <div
            key={`${person.name}-${idx}`}
            className="relative w-64 h-64 overflow-hidden shadow-lg transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-900 to-transparent"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover rounded-md bg-gradient-to-r from-blue-900 to-transparent"
            />
            <div className="absolute w-full h-full bottom-0 left-0 right-0 transform text-white text-lg font-semibold bg-gradient-to-t from-blue-900 to-transparent rounded-md border border-yellow-300 shadow-xl/10">
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold">
              {person.name}
            </div>
          </div>
        ))}
      </div>

      
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
