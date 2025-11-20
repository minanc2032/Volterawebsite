import { Wind, Home, Euro, CheckCircle, AlertCircle } from 'lucide-react';

export default function Warmtepompen() {
  return (
    <div className="min-h-screen pt-24">
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/WhatsApp Image 2025-11-11 at 13.52.13 (2).jpeg')" }}
      >
        <div className="absolute inset-0 bg-[#2a3f4f]/70"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-6">Van gas naar gemak</h1>
          <p className="text-2xl text-white/90 max-w-2xl">
            Met een hybride of all-electric warmtepomp bespaar je energie zonder comfort te verliezen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#2a3f4f] mb-12 text-center">Kies het systeem dat bij u past</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-transparent hover:border-[#aadd5f] transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-[#aadd5f] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Wind className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2a3f4f]">Hybride Warmtepomp</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Combineert een warmtepomp met uw bestaande cv-ketel. De warmtepomp doet het meeste werk, de cv-ketel springt bij op koude dagen.
              </p>
              <h4 className="font-bold text-[#2a3f4f] mb-3">Voordelen:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Geen grote aanpassingen nodig</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Geschikt voor elk woningtype</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lager investeringsbedrag</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Besparing: 30-50% op gasverbruik</span>
                </li>
              </ul>
              <div className="bg-[#f0f4f8] rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Investering:</span>
                  <span className="font-bold text-[#2a3f4f]">€4.500 - €7.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">ISDE Subsidie:</span>
                  <span className="font-bold text-[#aadd5f]">Tot €2.100</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-transparent hover:border-[#aadd5f] transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-[#aadd5f] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2a3f4f]">All-Electric Warmtepomp</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Volledig elektrisch verwarmingssysteem. Geen gas meer nodig, maximale duurzaamheid en comfort.
              </p>
              <h4 className="font-bold text-[#2a3f4f] mb-3">Voordelen:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">100% gasvrij en duurzaam</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lagere energiekosten op termijn</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ook voor koeling in zomer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hogere woningwaarde</span>
                </li>
              </ul>
              <div className="bg-[#f0f4f8] rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Investering:</span>
                  <span className="font-bold text-[#2a3f4f]">€15.000 - €25.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">ISDE Subsidie:</span>
                  <span className="font-bold text-[#aadd5f]">Tot €5.600</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-20">
          <div className="flex items-start">
            <AlertCircle className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-[#2a3f4f] mb-4">Geschiktheid Per Woningtype</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-bold mb-2">Nieuwbouw (na 2010) of goed geïsoleerd:</h3>
                  <p className="leading-relaxed">Perfect geschikt voor all-electric warmtepomp. Lage temperatuurverwarming (vloerverwarming) werkt optimaal.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Bestaande bouw (1990-2010):</h3>
                  <p className="leading-relaxed">Hybride warmtepomp is ideaal. Werkt goed met bestaande radiatoren en cv-systeem.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Oudere woningen (voor 1990):</h3>
                  <p className="leading-relaxed">Eerst isolatie verbeteren, dan hybride systeem. Of start met hybride en verbeter isolatie stapsgewijs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#2a3f4f] mb-8">ISDE Subsidie 2025</h2>
          <div className="bg-white rounded-xl shadow-xl p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              De Investeringssubsidie Duurzame Energie (ISDE) maakt warmtepompen financieel aantrekkelijker. Het subsidiebedrag is afhankelijk van het type warmtepomp.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#f0f4f8] rounded-lg p-6 text-center">
                <Euro className="w-10 h-10 text-[#aadd5f] mx-auto mb-3" />
                <h3 className="font-bold text-[#2a3f4f] mb-2">Hybride Warmtepomp</h3>
                <p className="text-3xl font-bold text-[#aadd5f] mb-2">€2.100</p>
                <p className="text-sm text-gray-600">Basis subsidiebedrag</p>
              </div>
              <div className="bg-[#f0f4f8] rounded-lg p-6 text-center">
                <Euro className="w-10 h-10 text-[#aadd5f] mx-auto mb-3" />
                <h3 className="font-bold text-[#2a3f4f] mb-2">All-Electric Lucht/Water</h3>
                <p className="text-3xl font-bold text-[#aadd5f] mb-2">€3.500</p>
                <p className="text-sm text-gray-600">Basis subsidiebedrag</p>
              </div>
              <div className="bg-[#f0f4f8] rounded-lg p-6 text-center">
                <Euro className="w-10 h-10 text-[#aadd5f] mx-auto mb-3" />
                <h3 className="font-bold text-[#2a3f4f] mb-2">All-Electric Bodem/Water</h3>
                <p className="text-3xl font-bold text-[#aadd5f] mb-2">€5.600</p>
                <p className="text-sm text-gray-600">Basis subsidiebedrag</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-6">
              <h4 className="font-bold text-[#2a3f4f] mb-3">Belangrijk om te weten:</h4>
              <ul className="space-y-2 text-gray-700">
                <li><CheckCircle className="w-5 h-5 text-[#aadd5f] inline mr-2" />De subsidie wordt aangevraagd via RVO.nl</li>
                <li><CheckCircle className="w-5 h-5 text-[#aadd5f] inline mr-2" />Wij helpen u met het aanvraagproces</li>
                <li><CheckCircle className="w-5 h-5 text-[#aadd5f] inline mr-2" />Installatie moet door erkend installateur (zoals Voltera)</li>
                <li><CheckCircle className="w-5 h-5 text-[#aadd5f] inline mr-2" />Budget beschikbaar tot december 2025</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ontdek welke warmtepomp bij uw woning past</h2>
          <p className="text-xl mb-8 opacity-90">
            Ontvang persoonlijk advies inclusief subsidiecheck en besparingscalculatie.
          </p>
          <a
            href="/bespaarplan"
            className="inline-block bg-[#aadd5f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#99cc4f] transition-all duration-300"
          >
            Ontvang jouw warmtepompadvies
          </a>
        </div>
      </div>
    </div>
  );
}
