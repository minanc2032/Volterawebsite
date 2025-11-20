import { Award, Users, Shield, Target } from 'lucide-react';

export default function OverVoltera() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[#f0f4f8] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2a3f4f] mb-6">
            Verduurzamen zonder zorgen
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Wij combineren kennis, vakmanschap en volledige ketencontrole voor een zorgeloze energietoekomst.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#2a3f4f] mb-6">Onze Missie</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nederland versneld verduurzamen – zonder gedoe. Wij geloven dat elke woning verdient om energiezuinig, comfortabel en toekomstbestendig te zijn.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Voltera maakt de overstap naar duurzame energie eenvoudig en betrouwbaar door transparant advies, hoogwaardige installaties en blijvende service aan te bieden.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#2a3f4f] mb-6">Onze Visie</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Complete oplossingen, één aanspreekpunt, blijvend rendement. Wij zien een toekomst waarin woningeigenaren volledige controle hebben over hun energiekosten.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Door innovatieve technologie te combineren met persoonlijk advies, helpen we Nederland stap voor stap naar een duurzame en onafhankelijke energievoorziening.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-[#2a3f4f] mb-10 text-center">Waarom Voltera</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#aadd5f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2a3f4f] mb-3">Volledige Keten in Eigen Beheer</h3>
              <p className="text-gray-600 leading-relaxed">
                Van advies tot installatie en nazorg: alles onder één dak voor maximale kwaliteit en controle.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#aadd5f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2a3f4f] mb-3">Erkende Installateurs</h3>
              <p className="text-gray-600 leading-relaxed">
                Al onze technici zijn volledig gecertificeerd en werken volgens de hoogste kwaliteitsnormen.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#aadd5f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2a3f4f] mb-3">Transparant en Eerlijk Advies</h3>
              <p className="text-gray-600 leading-relaxed">
                Geen verborgen kosten, geen verrassingen. U krijgt helder inzicht in wat wel en niet past bij uw situatie.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#aadd5f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2a3f4f] mb-3">Maatwerk voor Elke Woning</h3>
              <p className="text-gray-600 leading-relaxed">
                Geen standaard pakket, maar een oplossing die precies aansluit op uw verbruik en woningsituatie.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6">Klaar voor uw energietransitie?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ontdek wat Voltera voor uw woning kan betekenen.
          </p>
          <a
            href="/bespaarplan"
            className="inline-block bg-[#aadd5f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#99cc4f] transition-all duration-300"
          >
            Ontvang jouw persoonlijk bespaarplan
          </a>
        </div>
      </div>
    </div>
  );
}
