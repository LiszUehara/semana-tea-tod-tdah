export default function Local() {
  return (
    <section
      id="local"
      className="flex flex-col md:flex-row items-center justify-center gap-2 min-h-screen px-4 py-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg-site_01.jpg')" }}
    >
      {/* Imagem */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/local.webp"
          alt="Local do evento"
          className="w-64 h-64 object-contain drop-shadow-xl"
        />
      </div>

      {/* Informações */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-1">
        <h1 className="text-3xl font-bold text-white drop-shadow">
          CENTRO DE CONVENÇÕES DO CARIRI
        </h1>
        <p className="text-base text-white/90">
          Av. Padre Cícero, 4400 - Muriti, Crato
        </p>
        <a
          href="https://www.google.com/maps?q=Centro+de+Convenções+do+Cariri"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-5 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-all"
        >
          Como chegar
        </a>
      </div>
    </section>
  );
}
