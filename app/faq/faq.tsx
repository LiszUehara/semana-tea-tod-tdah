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
    "Entre em contato conosco pelo WhatsApp",
  ];

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F2E6D8] py-1">

    <div className="max-w-3xl mx-auto my-16 px-6 py-8 bg-[#B98B67] shadow-xl rounded-2xl border-amber-400 border-2 ">
      <h2 className="text-8xl font-extrabold text-gray-100 mb-2 drop-shadow-md text-center">
        F.A.Q
      </h2>
      <p className="text-lg text-gray-300 mb-8 text-center">
        Perguntas Frequentes
      </p>

      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="border rounded-lg shadow-sm border-white overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full px-4 py-3 font-medium text-left text-white hover:bg-[#996B47] hover:overflow-hidden transition-all duration-700"
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
              <div className="px-4 text-gray-300 border-t pt-2 pb-2 bg-gradient-to-b from-[#B98B67] to-[#996B47] transition-all duration-700">{answers[index]}</div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
