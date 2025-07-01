import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

export const people = [
  {
    id: 1,
    name: "Jane Doe",
    image: "/jane.jpeg",
    description: `
      <p>Jane Doe é uma renomada pesquisadora na área de neurociências, com mais de 20 anos de experiência em estudos sobre desenvolvimento infantil. Ela já publicou diversos artigos em revistas internacionais e é referência em temas relacionados ao TDAH.</p>
      <p>Além de sua atuação acadêmica, Jane participa ativamente de projetos sociais que visam a inclusão de crianças com necessidades especiais. Sua paixão pelo ensino e pela ciência inspira profissionais e famílias em todo o país.</p>
    `,
  },
  {
    id: 2,
    name: "John Smith",
    image: "/john.jpeg",
    description: `
      <p>John Smith é psicólogo clínico especializado em transtornos do neurodesenvolvimento. Ele atua em consultório particular e também como palestrante em eventos nacionais e internacionais.</p>
      <p>Com uma abordagem humanizada, John busca sempre trazer informações práticas e atualizadas para pais, educadores e profissionais da saúde, promovendo o bem-estar e a inclusão de todos.</p>
    `,
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: "/alice.jpeg",
    description: `
      <p>Alice Johnson é pedagoga e mestre em educação especial. Sua trajetória é marcada pela dedicação ao ensino inclusivo e pela formação de professores para lidar com a diversidade em sala de aula.</p>
      <p>Ela acredita que a educação é o caminho para transformar vidas e luta diariamente para garantir que todos tenham acesso a um ensino de qualidade, independente de suas diferenças.</p>
    `,
  },
  {
    id: 4,
    name: "Bob Brown",
    image: "/bob.jpeg",
    description: `
      <p>Bob Brown é terapeuta ocupacional e trabalha há mais de 15 anos com crianças e adolescentes com TEA e TDAH. Seu trabalho é reconhecido pela criatividade e pelo carinho com que conduz cada atendimento.</p>
      <p>Bob também é autor de livros e materiais didáticos voltados para a inclusão, colaborando com escolas e famílias em todo o Brasil.</p>
    `,
  },
  {
    id: 5,
    name: "Caio Silva",
    image: "/caio.jpeg",
    description: `
      <p>Caio Silva é médico psiquiatra e professor universitário. Ele coordena pesquisas sobre intervenções precoces em transtornos do desenvolvimento e é referência em diagnóstico diferencial.</p>
      <p>Caio acredita na importância do trabalho multidisciplinar e atua em parceria com equipes de saúde, educação e assistência social para promover o melhor atendimento aos pacientes.</p>
    `,
  },
  {
    id: 6,
    name: "Lucas Silva",
    image: "/lucas.jpeg",
    description: `
      <p>Lucas Silva é neuropsicólogo e dedica sua carreira ao estudo das funções cognitivas em crianças e adolescentes. Ele realiza avaliações e orientações para escolas e famílias.</p>
      <p>Lucas também ministra cursos e workshops sobre neurodesenvolvimento, contribuindo para a formação de novos profissionais na área.</p>
    `,
  },
  {
    id: 7,
    name: "Paulo Souza",
    image: "/paulo.jpeg",
    description: `
      <p>Paulo Souza é educador físico e especialista em atividades adaptadas para pessoas com necessidades especiais. Ele desenvolve projetos que promovem a inclusão por meio do esporte.</p>
      <p>Seu trabalho já foi reconhecido por diversas instituições e ele segue motivando jovens a superarem desafios e acreditarem em seu potencial.</p>
    `,
  },
];

export default function CarouselCircular() {
  const visibleCount = 5;
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + people.length) % people.length);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % people.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 3000);
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
    <div id="speakers" className="w-full h-screen bg-[#F5D1A5] flex flex-col items-center justify-center relative overflow-hidden px-4 border-stone-400 border-2">
      <h2 className="text-black text-4xl font-bold mb-8">PALESTRANTES</h2>

      {/* Botão Anterior 
      <button
        onClick={prev}
        className="absolute left-[15px] top-1/2 -translate-y-1/2 text-white z-10 hover:scale-110 transition duration-500"
        aria-label="Anterior"
      >
        <ChevronLeft size={36} />
      </button>
      */}

      {/* Cards */}
      <div className="flex gap-[15px] transition-transform duration-500 ease-in-out">
        {visiblePeople.map((person, idx) => (
          <div
            key={`${person.name}-${idx}`}
            className="relative w-64 h-104 overflow-hidden shadow-lg transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-900 to-transparent rounded-md group hover:scale-120 hover:z-10"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover rounded-md bg-gradient-to-r from-yellow-900 to-transparent"
            />
            <div className="absolute w-full h-full bottom-0 left-0 right-0 transform text-white text-lg font-semibold bg-gradient-to-t from-yellow-900 to-transparent rounded-md border border-stone-900 shadow-xl/10" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold">
              {person.name}
            </div>
            <button className="absolute bottom-16 left-1/2 -translate-x-1/2 px-4 py-2 text-stone-50 font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 btn p-3 hover:bg-yellow-900  bg-yellow-700 shadow-lg shadow-stone-500/50" onClick={() => {
              navigate(`/participante/${person.id}`);
            }}>
              Ver detalhes
            </button>
          </div>
        ))}
      </div>

      {/* Botão Próximo 
      <button
        onClick={next}
        className="absolute right-[15px] top-1/2 -translate-y-1/2 text-white z-10 hover:scale-110 transition"
        aria-label="Próximo"
      >
        <ChevronRight size={36} />
      </button>
      */}

      {/* Indicadores */}
      <div className="flex gap-2 mt-6">
        {people.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full border-2 ${
              i === startIndex ? "border-stone-400" : "border-gray-500"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
