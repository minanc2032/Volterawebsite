import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Hoeveel kan ik besparen met een thuisbatterij?',
    answer: 'Met een thuisbatterij kun je gemiddeld €150 tot €400 per jaar besparen, afhankelijk van je verbruik, zonne-opbrengst en energiecontract.\nDe grootste winst haal je met dynamische stroomtarieven of als salderen verder wordt afgebouwd. Zonder deze factoren is het financieel voordeel nog beperkt.'
  },
  {
    question: 'Waarom is een thuisbatterij een slimme investering?',
    answer: 'Een thuisbatterij maakt je minder afhankelijk van het elektriciteitsnet en stijgende energieprijzen.\nJe gebruikt meer van je eigen zonne-energie, wat je energierekening verlaagt.\nDaarnaast ben je voorbereid op de afbouw van salderen en toekomstige dynamische tarieven.'
  },
  {
    question: 'Helpen jullie bij financiering en subsidies?',
    answer: 'Ja, wij helpen bij het aanvragen van financiering en het benutten van beschikbare subsidies.'
  },
  {
    question: 'Hoe snel verdien ik mijn investering in een thuisbatterij terug?',
    answer: 'De terugverdientijd ligt nu gemiddeld tussen de 10 en 15 jaar.\nMet dynamische tarieven en slimme aansturing kan dit korter worden.\nZonder die factoren is de terugverdientijd langer en afhankelijk van toekomstige salderingsregels.'
  },
  {
    question: 'Wat besparen andere klanten gemiddeld met zonnepanelen of batterijen?',
    answer: 'Met zonnepanelen bespaar je gemiddeld €400 tot €700 per jaar, afhankelijk van je dak en verbruik. Een thuisbatterij kan die besparing nog met €150 tot €300 verhogen door meer eigen stroom te gebruiken.\nHet totale voordeel verschilt per huishouden en type energiecontract.'
  },
  {
    question: 'Hoe weet ik welke batterij het beste bij mijn woning past?',
    answer: 'De ideale batterijgrootte hangt af van je jaarlijkse verbruik en zonnepanelenopbrengst.\nGemiddeld is een capaciteit van 5 tot 10 kWh geschikt voor een huishouden met 10 zonnepanelen.\nWe berekenen dit precies voor je tijdens een persoonlijk adviesgesprek.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#f8fef0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#000000] mb-6 leading-tight">
              Veelgestelde <span className="text-[#79dc32]">vragen?</span>
            </h2>
            <p className="text-base text-[#555555] leading-relaxed">
              Ontdek de nieuwste inzichten, praktische tips en antwoorden op vragen over duurzaam wonen en energie besparen.<br />
              Voltera zorgt ervoor dat verduurzamen eenvoudig, betrouwbaar en betaalbaar blijft.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[15px] text-[#000000] pr-4">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-6 h-6 text-[#aadd5f] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-[#555555] leading-relaxed text-[15px] whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
