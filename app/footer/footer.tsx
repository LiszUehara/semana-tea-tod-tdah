import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-900 text-sm border-t border-yellow-300 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1">
          <p className="mb-2">
            Copyright 2026 © Congresso De TEA TOD e TDAH. Todos os direitos reservados.
          </p>
          <p>
            Ao adquirir o seu ingresso, você concorda com todos os termos e condições presentes no{" "}
            <Link to="/termos" className="text-blue-600 hover:underline font-medium">
              Termo de Participação e Condições do Evento
            </Link>{" "}
            e declara-se ciente que o evento Congresso é registrado por meios audiovisuais (fotos, filmagens e
            relacionados) e autoriza a utilização e veiculação da sua imagem pela empresa UNIFAMEC - CNPJ:
            23.957.843/0001-86, bem como pelos patrocinadores, apoiadores e/ou parceiros comerciais do grupo para
            quaisquer finalidades, por prazo indeterminado e a título gratuito.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <img
            src="/public/unifamec-logo.webp"
            alt="Logo Congresso"
            className="w-36 h-auto object-contain mx-auto md:mx-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
