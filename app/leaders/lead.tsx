export default function Lead() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[url('/images/bg-site_04.jpg')] bg-cover bg-center px-4 py-10 text-center">
      <div className="w-full max-w-xs md:max-w-md bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-xl gap-6">
        <img
          src="/CCSI2025.png"
          alt="Logo Congresso"
          className="w-full h-auto object-contain"
        />

        <a
          href="https://wa.me/55889999139972"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold py-3 rounded-md transition-all duration-300"
        >
          Seja um patrocinador
        </a>
      </div>
    </section>
  );
}
