import React from "react";

const Footer = () => {
  return (
    <footer
      id="teste"
      className="bg-[#5F4235] text-gray-300 text-sm border-t border-yellow-300 px-4 py-8 w-full"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
        
        {/* Texto */}
        <div className="flex-1">
          <p>
            Todos os direitos reservados © 2025 Congresso Caririense de Saude Integrada. 
          </p>
        </div>

        {/* Logo */}
        <div className="md:w-auto">
          <img
            src="/sigla_CCSI.png"
            alt="Logo Congresso"
            loading="lazy"
            className="w-36 h-auto object-contain mx-auto md:mx-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

