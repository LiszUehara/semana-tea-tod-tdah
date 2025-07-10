export default function Local() {
  return (
    <section
      id="local"
      className="flex flex-col items-center justify-center gap-8 min-h-screen px-4 py-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg-site_05.png')" }}
    >
      <h2 className="  text-2xl md:text-3xl font-bold text-white drop-shadow mb-6 text-center">
        Onde será realizado
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8">
        
        <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
          <div className="w-full aspect-square max-w-md">
            <iframe
              title="Mapa do Local do Evento"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.5340419517553!2d-39.42072892406259!3d-7.229367892754758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a132c70b38b1a1%3A0x8f8a1d5ea1755b1f!2sCentro%20de%20Conven%C3%A7%C3%B5es%20do%20Cariri!5e0!3m2!1spt-BR!2sbr!4v1720372400000!5m2!1spt-BR!2sbr"
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

        
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-center text-center space-y-3">
          <h1 className="text-3xl font-bold text-white drop-shadow">
            CENTRO DE CONVENÇÕES DO CARIRI
          </h1>
          <p className="text-base text-white/90">
            Av. Padre Cícero, 4400 - Muriti, Crato
          </p>
          <a
            href="https://www.google.com/maps/place/Centro+de+Convenções+do+Cariri/@-7.2293679,-39.4181542,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-5 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-all"
          >
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
