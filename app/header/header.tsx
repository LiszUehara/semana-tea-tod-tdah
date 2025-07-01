import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
const location = useLocation();
const navigate = useNavigate();
const handleAnchor = (hash: string) => {
    if (location.pathname === '/') {
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
//border-b-[#FCCD9A]
  //bg-[#5F4235] 
  return (
    <section
      className={`${location.pathname === '/' ? 'fixed top-0 left-0': ''} w-full z-50 flex items-center justify-between p-4 text-white mx-auto transition-colors duration-300 ${
        (scrolled || location.pathname !== '/') ? "border-b bg-[#5F4235]" : "bg-tranparent"
      }`}
    >
      <div>
        <button className="btn btn-primary p-4">
          {(scrolled || location.pathname !== '/') && <img src="/public/unifamec-logo.webp" alt="Logo" className="h-16 w-auto" />}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <button onClick={() => handleAnchor("banner")} className="text-lg font-semibold text-color-white p-4 hover:bg-yellow-900">Home</button>
        <button onClick={() => handleAnchor("aboutus")} className="text-lg font-semibold text-color-white p-4 hover:bg-yellow-900">Sobre</button>
        <button onClick={() => handleAnchor("speakers")} className="text-lg font-semibold text-color-white p-4 hover:bg-yellow-900">Palestrantes</button>
        <button onClick={() => handleAnchor("faq")} className="text-lg font-semibold text-color-white p-4 hover:bg-yellow-900">FAQ</button>
        <button className="btn p-3 hover:bg-yellow-900  bg-yellow-800 shadow-lg shadow-stone-500/50 rounded">Ingressos</button>
      </div>
    </section>
  );
}
