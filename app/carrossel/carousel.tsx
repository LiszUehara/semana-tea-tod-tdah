import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const people = [
  {
    id: 1,
    name: "Jane Doe",
    image: "/jane.jpeg",
    description: `<p>Jane Doe é uma renomada pesquisadora...</p>`,
  },
  {
    id: 2,
    name: "John Smith",
    image: "/john.jpeg",
    description: `<p>John Smith é psicólogo clínico...</p>`,
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: "/alice.jpeg",
    description: `<p>Alice Johnson é pedagoga e mestre...</p>`,
  },
  {
    id: 4,
    name: "Bob Brown",
    image: "/bob.jpeg",
    description: `<p>Bob Brown é terapeuta ocupacional...</p>`,
  },
  {
    id: 5,
    name: "Caio Silva",
    image: "/caio.jpeg",
    description: `<p>Caio Silva é médico psiquiatra...</p>`,
  },
  {
    id: 6,
    name: "Lucas Silva",
    image: "/lucas.jpeg",
    description: `<p>Lucas Silva é neuropsicólogo...</p>`,
  },
  {
    id: 7,
    name: "Paulo Souza",
    image: "/paulo.jpeg",
    description: `<p>Paulo Souza é educador físico...</p>`,
  },
];

export default function CarouselCircular() {
  const visibleCount = 5;
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    setStartIndex((prev) => (prev + 1) % people.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
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
    <div
      id="speakers"
      className="w-full min-h-screen bg-[#F5D1A5] bg-[url('/images/bg-site_02.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start py-16 px-4"
    >
      <h2 className="text-orange-500 text-4xl font-bold mb-12 font-arsenica text-center">
        PALESTRANTES
      </h2>

      {/* Carousel */}
      <div className="flex flex-row justify-center gap-6 w-full max-w-7xl overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-800 scrollbar-track-transparent pb-4">
        {visiblePeople.map((person, idx) => (
          <div
            key={`${person.name}-${idx}`}
            className="relative w-64 h-96 overflow-hidden shadow-lg transition-all duration-500 ease-in-out rounded-xl group border border-yellow-800"
          >
            {/* Imagem */}
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Camada glass que desaparece no hover */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-0 rounded-xl" />

            {/* Informações e botão */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-yellow-900 to-transparent p-4 text-center">
              <div className="text-white font-semibold text-lg mb-2">
                {person.name}
              </div>
              <button
                onClick={() => navigate(`/participante/${person.id}`)}
                className="mt-2 px-4 py-2 text-sm font-bold rounded-full bg-yellow-700 hover:bg-yellow-800 text-white transition opacity-0 group-hover:opacity-100"
              >
                Ver detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      
  
    </div>
  );
}
