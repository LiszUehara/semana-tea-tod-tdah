import React, { useEffect, useState } from "react";

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
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisiblePeople = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(people[(startIndex + i) % people.length]);
    }
    return visible;
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % people.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + people.length) % people.length);
  };

  const visiblePeople = getVisiblePeople();

  return (
    <div className="w-full min-h-screen bg-blue-800 flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-4xl font-bold text-white mb-8">Palestrantes</h1>

      <div className="relative flex items-center">
        {/* Botão Esquerda */}
        <button
          onClick={prevSlide}
          className="text-white text-4xl absolute left-[-50px]  transition"
        >
          &#8592;
        </button>

        <div className="flex gap-8">
          {visiblePeople.map((person, idx) => (
            <div
              key={idx}
              className="relative rounded-full overflow-hidden w-80 h-80 shadow-xl border-4 border-white"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-1 border border-white rounded-full text-lg font-semibold bg-black/50">
                {person.name}
              </div>
            </div>
          ))}
        </div>

        {/* Botão Direita */}
        <button
          onClick={nextSlide}
          className="text-white text-4xl absolute right-[-50px] hover:scale-110 transition"
        >
          &#8594;
        </button>
      </div>

      {/* Botão Abaixo */}
      <button className="mt-12 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full text-xl transition">
        Click e garanta seu ingresso
      </button>
    </div>
  );
}
