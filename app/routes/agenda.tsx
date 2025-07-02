import Header from "../header/header";
import Footer from "../footer/footer";

export default function AgendaPage() {
  return (
    <>
      <Header />
      <main
        className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4"
        style={{
          backgroundImage: "url('/banners-fundo-CCSI_04.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Card 1 */}
        <div className="text-card-foreground shadow-sm max-w-[500px] p-5 w-full flex flex-col items-start justify-center bg-transparent border gap-4 border-[#ffd5b1] rounded-lg mb-8">
          <span className="w-full text-orange-50 bg-orange-800 text-sm px-4 py-2 rounded-lg">
            Trilha: <b>Palco Principal</b>
          </span>
          <div className="flex gap-3 justify-between items-start w-full">
            <span className="text-orange-200 text-sm">09:40</span>
            <h1 className="text-orange-50 mt-0 pt-0 w-full text-wrap whitespace-normal text-base break-words">
              Desenvolvimento com IA para negócios
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-orange-300 text-slate-950 font-thin rounded-lg ml-1">
                Keynote
              </div>
            </h1>
          </div>
          <div className="flex gap-2 w-full justify-start flex-wrap">
            <div data-orientation="horizontal" role="separator" className="w-full h-[0.3px] mb-4 bg-[#ffd5b1] rounded-xl"></div>
          </div>
          <div className="flex-cols p-2 w-full">
            <div className="flex items-center gap-2">
              <span className="relative shrink-0 overflow-hidden w-10 h-10 rounded-full flex justify-center border border-gray-50 bg-white">
                <img
                  className="aspect-square h-full w-full object-cover"
                  alt="Leonardo Leitão"
                  src="https://frontendday.descompliqueapps.com.br/2024/wp-content/uploads/2024/06/1-240x300.png"
                />
              </span>
              <div className="flex flex-col">
                <p className="font-semibold text-sm text-white">Leonardo Leitão</p>
                <span className="text-xs text-[#A9A9A9]">
                  Fundador <span> | Cod3r</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="text-card-foreground shadow-sm max-w-[500px] p-5 w-full flex flex-col items-start justify-center bg-transparent border gap-4 border-[#ffd5b1] rounded-lg">
          <span className="w-full text-orange-50 bg-orange-800 text-sm px-4 py-2 rounded-lg">
            Trilha: <b>Palco Conexão</b>
          </span>
          <div className="flex gap-3 justify-between items-start w-full">
            <span className="text-orange-200 text-sm">10:40</span>
            <h1 className="text-orange-50 mt-0 pt-0 w-full text-wrap whitespace-normal text-base break-words">
              React Native: Do JS à Performance Nativa - Dominando Turbo Modules no Android
            </h1>
          </div>
          <div className="flex gap-2 w-full justify-start flex-wrap">
            <div data-orientation="horizontal" role="separator" className="w-full h-[0.3px] mb-4 bg-[#ffd5b1] rounded-xl"></div>
            <div className="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white text-[#161616] font-thin rounded-lg">
              Mobile
            </div>
            <div className="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white text-[#161616] font-thin rounded-lg">
              React Native
            </div>
          </div>
          <div className="flex-cols p-2 w-full">
            <div className="flex items-center gap-2">
              <span className="relative shrink-0 overflow-hidden w-10 h-10 rounded-full flex justify-center border border-gray-50 bg-white">
                <img
                  className="aspect-square h-full w-full object-cover"
                  alt="Antony Lemos"
                  src="https://frontendday.descompliqueapps.com.br/2024/wp-content/uploads/2025/06/IMG_7864-Antony-Lemos-300x277.jpg"
                />
              </span>
              <div className="flex flex-col">
                <p className="font-semibold text-sm text-white">Antony Lemos</p>
                <span className="text-xs text-[#A9A9A9]">
                  Especialista Front-End <span> | Magalu - Luiza Labs</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}