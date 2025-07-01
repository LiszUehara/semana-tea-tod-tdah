export default function Banner() {
  return (
    <section className="relative w-full" id="banner">
      <img
        src="/public/bannersite.png"
        alt="Banner"
        className="w-full h-160 object-cover"
      />

      <div className="absolute top-1/3 left-100 transform -translate-y-1/2 bg-opacity-50 px-6 py-4 rounded-lg">
      </div>
    </section>
  );
}
