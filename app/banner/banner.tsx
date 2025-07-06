export default function Banner() {
  return (
    <section className="relative w-full h-screen" id="banner">
      <img
        src="/bannersite.png"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        
        <h1 className="text-4xl sm:text-6xl text-white font-bold text-center">
          
        </h1>
      </div>
    </section>
  );
}
