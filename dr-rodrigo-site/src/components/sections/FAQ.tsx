import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const faqs = [
  {
    question: 'Como funciona a primeira consulta? Preciso me preparar para algo?',
    answer: 'A primeira consulta é uma conversa. Você não precisa se preparar para nada — só vir com suas dúvidas e me contar o que sente. Faço uma avaliação completa, ouço sua história e te apresento um diagnóstico claro e honesto. É gratuita e sem compromisso. O único objetivo é entender o que você precisa.'
  },
  {
    question: 'Tenho muito medo de dentista. Como você lida com isso?',
    answer: 'Esse é um dos relatos que mais ouço — e levo muito a sério. Trabalho com protocolos específicos para pacientes com ansiedade: atendimento calmo, sem pressa, com comunicação constante durante os procedimentos. Você sempre saberá o que estou fazendo e poderá me sinalizar quando precisar de uma pausa. Aqui, seu conforto vem antes de qualquer coisa.'
  },
  {
    question: 'Quanto tempo levam os tratamentos? Conseguirei encaixar na minha rotina?',
    answer: 'Depende de cada caso, mas faço questão de planejar os tratamentos respeitando a realidade da sua rotina. Tratamentos preventivos e estéticos mais simples podem ser concluídos em uma ou duas sessões. Casos mais complexos, como implantes ou ortodontia, têm um cronograma que apresento com antecedência para você se organizar sem surpresas.'
  },
  {
    question: 'Os procedimentos doem? Vou sentir algo durante o tratamento?',
    answer: 'Esse é o medo número um — e entendo completamente. Utilizamos anestesia local de última geração com técnica de aplicação indolor. Durante o procedimento, você estará anestesiado e confortável. Em alguns casos pode haver uma leve sensibilidade nos dias seguintes, mas sempre oriento exatamente o que esperar e como cuidar. Transparência faz parte do meu atendimento.'
  },
  {
    question: 'Como sei qual tratamento é o ideal para o meu caso?',
    answer: 'Essa é exatamente a função da avaliação inicial. Não existe tratamento ideal genérico — existe o tratamento certo para o seu caso, seu histórico e seus objetivos. Após o diagnóstico completo, apresento as opções disponíveis com clareza, explico os prós e contras de cada uma e decidimos juntos o melhor caminho. Você nunca sai daqui sem entender o que foi planejado.'
  },
  {
    question: 'Os resultados são duradouros? Como mantenho o resultado após o tratamento?',
    answer: 'Sim — trabalho com materiais premium e técnicas que garantem longevidade. Mas a durabilidade de qualquer tratamento depende também dos cuidados diários. Por isso, ao final de cada procedimento, oriento detalhadamente sobre higiene, hábitos e cuidados específicos para o seu caso. Além disso, faço acompanhamento periódico para garantir que o resultado se mantenha por muitos anos.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="faq-section py-24 lg:py-32">
      <div className="container-custom">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="block font-sans font-medium text-[11px] uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Tire suas dúvidas
          </span>
          <h2 className="font-display font-semibold text-[#0A2A43]" style={{
            fontSize: 'clamp(28px, 4vw, 48px)'
          }}>
            Perguntas <em className="text-[#C9A84C] not-italic italic">Frequentes</em>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="max-w-[780px] mx-auto relative z-10">
          {faqs.map((faq, i) => (
            <m.div
              key={i}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`faq-item ${openIndex === i ? 'active' : ''}`}
            >
              <div
                className="faq-header"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="flex-1">{faq.question}</span>
                <div className="faq-icon">
                  <m.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Plus size={16} />
                  </m.div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="faq-answer">{faq.answer}</div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};
