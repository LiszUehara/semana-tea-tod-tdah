import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    "Posso comprar ingressos fora do site oficial do Congresso Caririense de Saude Integral?",
    "Como vou receber meu ingresso?",
    "É possível parcelar o valor do ingresso?",
    "Posso comprar mais de um ingresso?",
    "Existe meia entrada para estudantes?",
    "Quais são as formas de pagamento?",
    "Não encontrou resposta para a sua dúvida?",
  ];

  const answers = [
    "Não. Os ingressos só estão disponíveis no site oficial. Compras por terceiros não são autorizadas.",
    "Você receberá seu ingresso por e-mail após a confirmação do pagamento.",
    "Sim! O pagamento pode ser parcelado no cartão de crédito.",
    "Sim, você pode comprar quantos ingressos quiser no mesmo pedido.",
    "Sim, estudantes têm direito à meia entrada mediante comprovação.",
    "Aceitamos cartão de crédito, PIX e boleto bancário.",
    "Entre em contato conosco pelo WhatsApp +55 (88) 9 99913-9972",
  ];

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{ backgroundImage: "url('/images/bg-site_07.jpg')" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-10 rounded-2xl border border-white/30 backdrop-blur-md bg-white/10 shadow-2xl">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 text-center drop-shadow-xl">
          F.A.Q
        </h2>
        <p className="text-lg text-white/80 mb-10 text-center">
          Perguntas Frequentes
        </p>

        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-lg overflow-hidden backdrop-blur-md bg-white/10"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full px-4 py-3 font-medium text-left text-white hover:bg-white/20 transition-all duration-300"
              >
                {question}
                <span className="ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-white/90 bg-white/5 backdrop-blur-sm border-t border-white/20 transition-all duration-300">
                  {answers[index]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
