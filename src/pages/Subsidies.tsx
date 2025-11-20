import { Euro, CheckCircle, FileText, AlertCircle } from 'lucide-react';

export default function Subsidies() {
  return (
    <div className="min-h-screen pt-24">
      <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <Euro className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Subsidies & Regelgeving</h1>
          <p className="text-2xl opacity-90 max-w-2xl mx-auto">
            Ontdek welke subsidies beschikbaar zijn voor uw verduurzaming
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-lg mb-12">
          <div className="flex items-start">
            <AlertCircle className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-[#2a3f4f] mb-3">Let op: Subsidies in 2025</h2>
              <p className="text-gray-700 leading-relaxed">
                De subsidieregeling kan wijzigen gedurende het jaar. De hier vermelde bedragen zijn indicatief en gelden per de huidige regelgeving.
                Wij controleren altijd de meest actuele bedragen voor u.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#2a3f4f] mb-12">ISDE Subsidie Warmtepompen</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">Hybride Warmtepomp</h3>
              <div className="text-center my-8">
                <p className="text-5xl font-bold text-[#aadd5f] mb-2">€2.100</p>
                <p className="text-gray-600">Basis subsidiebedrag</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Combineert warmtepomp met cv-ketel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Geschikt voor alle woningtypes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Relatief lage investering</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#aadd5f]">
              <div className="bg-[#aadd5f] text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                MEEST GEKOZEN
              </div>
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">All-Electric Lucht/Water</h3>
              <div className="text-center my-8">
                <p className="text-5xl font-bold text-[#aadd5f] mb-2">€3.500</p>
                <p className="text-gray-600">Basis subsidiebedrag</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Volledig elektrisch systeem</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">100% gasvrij wonen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ook geschikt voor koeling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">All-Electric Bodem/Water</h3>
              <div className="text-center my-8">
                <p className="text-5xl font-bold text-[#aadd5f] mb-2">€5.600</p>
                <p className="text-gray-600">Basis subsidiebedrag</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hoogste efficiëntie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Laagste energiekosten</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Vereist ruimte voor bronnen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-10 mb-20">
          <h2 className="text-3xl font-bold text-[#2a3f4f] mb-8">Zo vraagt u ISDE subsidie aan</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#aadd5f] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold text-[#2a3f4f] mb-2">Offerte aanvragen</h3>
              <p className="text-gray-700 text-sm">Vraag een offerte aan bij Voltera voor uw warmtepomp</p>
            </div>
            <div className="text-center">
              <div className="bg-[#aadd5f] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold text-[#2a3f4f] mb-2">Aanvraag indienen</h3>
              <p className="text-gray-700 text-sm">Wij helpen u met het indienen van de subsidieaanvraag bij RVO</p>
            </div>
            <div className="text-center">
              <div className="bg-[#aadd5f] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold text-[#2a3f4f] mb-2">Installatie</h3>
              <p className="text-gray-700 text-sm">Na toekenning plannen we de installatie van uw warmtepomp</p>
            </div>
            <div className="text-center">
              <div className="bg-[#aadd5f] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold text-[#2a3f4f] mb-2">Uitbetaling</h3>
              <p className="text-gray-700 text-sm">Subsidie wordt uitgekeerd na installatie en keuring</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <FileText className="w-10 h-10 text-[#aadd5f] mb-4" />
            <h2 className="text-2xl font-bold text-[#2a3f4f] mb-4">BTW-teruggave Zonnepanelen</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Voor de aanschaf en installatie van zonnepanelen kunt u onder voorwaarden het verlaagde BTW-tarief van 0% krijgen.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                <span>Geldig voor bestaande woningen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                <span>Vermogen max. 10 kW per woning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                <span>Direct verrekend in de offerte</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <FileText className="w-10 h-10 text-[#aadd5f] mb-4" />
            <h2 className="text-2xl font-bold text-[#2a3f4f] mb-4">Regionale Regelingen</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sommige gemeenten en provincies bieden extra subsidies of leningen voor verduurzaming.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                <span>Warmtefonds (renteloze lening)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                <span>Energiebespaarlening (lage rente)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                <span>Gemeentelijke subsidieregelingen</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ontdek welke subsidies u kunt krijgen</h2>
          <p className="text-xl mb-8 opacity-90">
            In uw persoonlijk bespaarplan nemen we alle beschikbare subsidies mee
          </p>
          <a
            href="/bespaarplan"
            className="inline-block bg-[#aadd5f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#99cc4f] transition-all duration-300"
          >
            Ontvang jouw subsidieoverzicht
          </a>
        </div>
      </div>
    </div>
  );
}
