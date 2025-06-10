export default function Banner() {
  return (
    <section className="relative w-full">
      <img
        src="/public/banner-padre-cicero.jpg"
        alt="Banner"
        className="w-full h-auto object-cover"
      />

      <div className="absolute top-1/3 left-100 transform -translate-y-1/2 bg-opacity-50 px-6 py-4 rounded-lg">
        <img
          src="/public/unifamec-logo.webp"
          alt="Logo"
          className="h-16 w-auto mb-4"
        />

        <h2 className="text-white text-3xl font-bold leading-snug">
          Semana de
          <span className="block text-yellow-400 text-3xl">TEA, TOD, TDAH</span>
        </h2>

        <a
          href="/comprar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-yellow-400 text-black font-semibold py-2 px-4 rounded shadow-lg shadow-yellow-500/50 hover:bg-yellow-500 transition"
        >
          Clique e garanta seu ingresso
        </a>
      </div>
    </section>
  );
}
