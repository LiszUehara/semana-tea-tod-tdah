export default function Local() {
  return (
    <section
      id="local"
      className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-screen px-4 py-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg-site_05.png')" }}
    >
      {/* Mapa do Google e Informações lado a lado */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8">
        {/* Mapa */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full aspect-square max-w-md">
            <iframe
              title="Mapa do Local do Evento"
              src="https://www.google.com/maps?q=Centro+de+Convenções+do+Cariri,+Av.+Padre+Cícero,+4400+-+Muriti,+Crato+-+CE,+Brasil&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="drop-shadow-xl w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Informações */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-center text-center space-y-3">
          <h1 className="text-3xl font-bold text-white drop-shadow">
            CENTRO DE CONVENÇÕES DO CARIRI
          </h1>
          <p className="text-base text-white/90">
            Av. Padre Cícero, 4400 - Muriti, Crato
          </p>
        </div>
      </div>
    </section>
  );
}
