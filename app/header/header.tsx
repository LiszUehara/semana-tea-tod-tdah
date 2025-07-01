import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (hash: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/#" + hash);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isGlass = scrolled || location.pathname !== "/";

  return (
    <section
      className={`${
        location.pathname === "/" ? "fixed top-0 left-0" : ""
      } w-full z-50 flex items-center justify-between px-4 py-2 text-white mx-auto transition-all duration-300
        ${isGlass ? "bg-[#5F4235]/60 backdrop-blur-md border-b border-[#FCCD9A]" : "bg-transparent"}
      `}
    >
      <div>
        <button className="btn btn-primary p-2">
          {isGlass && (
            <img
              src="/LogoSimbolo.png"
              alt="Logo do CCSI 2025"
              className="h-10 w-auto" // altura menor aqui
            />
          )}
        </button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => handleAnchor("banner")}
          className="text-sm font-semibold text-white px-3 py-2 hover:bg-yellow-900 rounded"
        >
          Home
        </button>
        <button
          onClick={() => handleAnchor("aboutus")}
          className="text-sm font-semibold text-white px-3 py-2 hover:bg-yellow-900 rounded"
        >
          Sobre
        </button>
        <button
          onClick={() => handleAnchor("speakers")}
          className="text-sm font-semibold text-white px-3 py-2 hover:bg-yellow-900 rounded"
        >
          Palestrantes
        </button>
        <button
          onClick={() => handleAnchor("faq")}
          className="text-sm font-semibold text-white px-3 py-2 hover:bg-yellow-900 rounded"
        >
          FAQ
        </button>
        <button className="btn px-4 py-2 text-sm hover:bg-yellow-900 bg-yellow-800 shadow-lg shadow-stone-500/50 rounded">
          Ingressos
        </button>
      </div>
    </section>
  );
}
