import type { Route } from "./+types/home";
import Header from "../header/header";
import Footer from "~/footer/footer";
import { useLocation, useParams } from "react-router";
import { people } from "~/carrossel/carousel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Semana " },
    { name: "description", content: "Semana de TDAH" },
  ];
}

export default function Participante() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const person = people.find((p) => p.id === Number(id));

  return (
    <>
      <Header />
      <main
        className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#F2E6D8] via-[#FCCD9A] to-[#5F4235] py-12 px-4"
        style={{
          backgroundImage: "url('/banners-fundo-CCSI_04.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white/40 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center max-w-4xl w-full p-8 gap-8 border border-white/30 backdrop-blur-xl backdrop-saturate-150">
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src={person?.image}
              alt={person?.name}
              className="w-56 h-56 rounded-full object-cover border-4 border-[#5F4235] shadow-lg mb-4"
            />
            <span className="text-[#5F4235] font-semibold text-lg mt-2 bg-[#FCCD9A] px-4 py-1 rounded-full shadow">
              Palestrante
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#5F4235] mb-4 drop-shadow">
              {person?.name}
            </h2>
            <div
              className="text-lg md:text-xl text-[#3d2a20] leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{
                __html: person?.description ?? "<p>Sem descrição</p>",
              }}
            />
            <div className="mt-8 flex gap-4">
              <a
                href="/"
                className="px-6 py-2 rounded-full bg-[#5F4235] text-[#FCCD9A] font-bold shadow hover:bg-[#7a5947] transition"
              >
                Voltar para Home
              </a>
              {/* 
              <button
                className="px-6 py-2 rounded-full bg-[#FCCD9A] text-[#5F4235] font-bold shadow hover:bg-[#ffe2b8] transition"
                disabled
              >
                Contato em breve
              </button>
              */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
