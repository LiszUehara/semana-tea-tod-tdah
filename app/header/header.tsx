import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react"; // ícones

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (hash: string) => {
    setMenuOpen(false);
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
    <header
      className={`${
        location.pathname === "/" ? "fixed top-0 left-0" : ""
      } w-full z-50 px-4 py-2 transition-all duration-300
        ${isGlass ? "bg-[#5F4235]/60 backdrop-blur-md border-b border-[#FCCD9A]" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* LOGO */}
        <button className="p-2">
          {isGlass && (
            <img
              src="/LogoSimbolo.png"
              alt="Logo do CCSI 2025"
              className="h-10 w-auto"
            />
          )}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          <button
            onClick={() => handleAnchor("banner")}
            className="text-sm font-semibold text-white px-3 py-2 hover:bg-orange-800 rounded"
          >
            HOME
          </button>
          <button
            onClick={() => handleAnchor("aboutus")}
            className="text-sm font-semibold text-white px-3 py-2 hover:bg-orange-800 rounded"
          >
            SOBRE
          </button>
          <button
            onClick={() => handleAnchor("speakers")}
            className="text-sm font-semibold text-white px-3 py-2 hover:bg-orange-800 rounded"
          >
            PALESTRANTES
          </button>
          <button
            onClick={() => handleAnchor("faq")}
            className="text-sm font-semibold text-white px-3 py-2  hover:bg-orange-800 rounded"
          >
            FAQ
          </button>
          <button className="px-4 py-2 text-sm text-white hover:bg-yellow-900 bg-yellow-800 shadow-lg shadow-stone-500/50 rounded">
            INGRESSOS
          </button>
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 flex flex-col gap-2 bg-[#5F4235]/80 backdrop-blur-sm rounded shadow-lg">
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
          <button className="px-4 py-2 text-sm hover:bg-yellow-900 bg-orange-600 shadow-lg rounded">
            Ingressos
          </button>
        </div>
      )}
    </header>
  );
}
