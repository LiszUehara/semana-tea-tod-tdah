export default function Kit() {
  const ingressos = [
    {
      title: "PASSAPORTE LOTE 0",
      preco: "200,00",
      parcelas: "12x 20,00",
    },
    {
      title: "PASSAPORTE MEIA LOTE 0",
      preco: "100,00",
      parcelas: "12x 10,00",
    },
    {
      title: "PASSAPORTE INGRESSO CNP",
      preco: "0,00",
      parcelas: null,
    },
    {
      title: "INGRESSO SOMENTE PALESTRAS LOTE 0",
      preco: "100,00",
      parcelas: "12x 10,00",
    },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{ backgroundImage: "url('/images/bg-site_03.jpg')" }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white drop-shadow-lg tracking-wide font-arsenica">
        CONFIRA AS OPÇÕES
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
        {ingressos.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between w-full sm:w-[45%] md:w-[22%] rounded-2xl p-6 border border-white/30 bg-white/10 backdrop-blur-xl shadow-xl text-center transition-transform hover:scale-105"
          >
            <img
              src="LogoSimbolo.png"
              alt="Ingresso"
              className="w-20 h-20 mx-auto mb-4 drop-shadow-lg"
            />

            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
              {item.title}
            </h3>
            <p className="text-sm text-white/80 mb-1">🎟️ Acesso a dois dias de evento</p>
            <p className="text-sm text-white/80 mb-1">🎁 Welcome kit</p>
            <p className="text-sm text-white/80 mb-1">📜 Certificado de participação</p>

            <p className="text-2xl text-yellow-300 font-bold mt-4">{item.preco}</p>
            {item.parcelas && (
              <p className="text-sm text-yellow-200 mb-3">{item.parcelas}</p>
            )}

            <a
              href="https://wa.me/5588994377675"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-yellow-700 shadow-md hover:shadow-lg transition-all"
            >
              Adquira já
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
