import { Users } from "lucide-react";

export default function CNP() {
  return (
    <section
      style={{ backgroundImage: "url('/images/bg-site_05.png')" }}
      className="flex flex-col items-center justify-center px-4 py-12 bg-cover bg-center min-h-screen text-center md:text-left"
    >
      <div className="max-w-screen-xl w-full flex justify-center">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-400 mb-6 drop-shadow-md font-arsenica text-center md:text-left">
            Realização: Conselho Nacional de Professores
          </h1>

          <div className="text-base sm:text-lg md:text-xl text-[#3d2a20] px-4 py-6 rounded-2xl max-w-4xl leading-relaxed shadow-2xl font-raleway bg-white/30 border border-white/30 backdrop-blur-xl backdrop-saturate-150 mx-auto">
            <p className="mb-4">
              O{" "}
              <strong className="text-orange-400">
                Congresso Caririense de Saúde Integrada (CCSI)
              </strong>{" "}
              é uma iniciativa do{" "}
              <strong className="text-orange-400">
                Conselho Nacional de Professores (CNP)
              </strong>{" "}
              — órgão responsável pelo cadastro e regulamentação dos professores em
              todo o Brasil.
            </p>
            <p className="mb-4">
              O <strong className="text-orange-400">CNP</strong> tem como missão
              promover a valorização e o{" "}
              reconhecimento da classe
              docente, contribuindo para a{" "}
              qualificação dos
              profissionais da educação e para a garantia de uma{" "}
              educação de qualidade em todo o país.
            </p>
            <p className="mb-4">
              Ao realizar o <strong className="text-orange-400">CCSI</strong>, o
              Conselho reafirma seu compromisso com uma{" "}
              formação interdisciplinar, humana e alinhada às{" "}
              necessidades contemporâneas das nossas comunidades.
            </p>
            <p className="mb-7">
              <strong className="text-orange-400">Faça parte dessa rede!</strong>
              <br />
              Se você é{" "}
              professor ou atua na área
              da educação, cadastre-se
              no <strong className="text-orange-400">CNP</strong> e una-se a
              milhares de profissionais comprometidos com o{" "}
              futuro da educação no Brasil
              .
            </p>
            <div className="flex justify-center">
              <a
                href="https://cnp.org.br/cadastro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-orange-600 text-white font-bold shadow hover:bg-yellow-900 transition text-lg"
              >
                <span className="inline-flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Cadastre-se agora
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}