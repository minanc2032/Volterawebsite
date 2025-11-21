import { Link } from 'react-router-dom';
import { Sun, Zap, Snowflake } from 'lucide-react';

export default function ProductSections() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 text-[15px] text-[#000000] mb-4">
              <Sun className="w-7 h-7 text-[#FFD700] animate-spin-slow" />
             <span className="font-bold">Wij zorgen voor de beste, meest rendabele oplossing.</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#000000] mb-4">
              Zonnepanelen:
              <br />
              <span className="text-[#FFD700]">Bespaar direct</span>
            </h2>
            <p className="text-base text-[#555555] leading-relaxed mb-6">
              Met zonnepanelen van Voltera wek je zelf groene energie op én bespaar je direct op je energierekening. Onze panelen zijn van de hoogste kwaliteit en worden vakkundig geïnstalleerd door gecertificeerde monteurs. Ook zonder salderingsregeling blijven ze rendabel. Dankzij slimme omvormers en integratie met onze thuisbatterij haal je altijd het maximale uit de zon.
            </p>
            <Link to="/zonnepanelen">
              <button className="bg-[#aadd5f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#99cc4f] transition-all duration-200">
                Meer over Zonnepanelen
              </button>
            </Link>
          </div>
          <div className="relative">
            <img
              src="/images/WhatsApp Image 2025-11-11 at 13.48.32 copy.jpeg"
              alt="Zonnepanelen installatie"
              className="rounded-[2rem] shadow-lg w-full object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 relative">
            <img
              src="/images/WhatsApp Image 2025-11-11 at 13.52.13 (2).jpeg"
              alt="Thuisbatterij"
              className="rounded-[2rem] shadow-lg w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-[15px] text-[#000000] mb-4">
              <img src="/icons/WhatsApp Image 2025-11-11 at 13.48.52.jpeg" alt="" className="w-7 h-7 animate-bounce-subtle" />
             <span className="font-bold">Voorbereid op de toekomst</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#000000] mb-4">
              De Thuisbatterij:
              <br />
              <span className="text-[#aadd5f]">Bespaart en verdient</span>
            </h2>
            <p className="text-base text-[#555555] leading-relaxed mb-6">
              Met een Voltera-thuisbatterij gebruik je je eigen zonne-energie precies wanneer jij die nodig hebt. Zo verlaag je je energiekosten en word je minder afhankelijk van het net. De batterij laadt automatisch op als de zon schijnt en levert stroom terug als de tarieven hoog zijn. Dat maakt hem niet alleen slim, maar ook winstgevend. Maak je klaar voor een zelfvoorzienende toekomst.
            </p>
            <Link to="/thuisbatterijen">
              <button className="bg-[#aadd5f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#99cc4f] transition-all duration-200">
                Meer over Thuisbatterij
              </button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 text-[15px] text-[#000000] mb-4">
              <img src="/images/WhatsApp Image 2025-11-11 at 13.52.13 (6) copy.jpeg" alt="" className="w-7 h-7 animate-bounce-subtle" />
              <span className="font-bold">Comfortabel wonen, duurzaam verwarmen</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#000000] mb-4">
              De <span className="text-[#ff5a2e]">Warmtepomp</span>
              <br />
              die met je meedenkt
            </h2>
            <p className="text-base text-[#555555] leading-relaxed mb-6">
              Met een hybride warmtepomp van Voltera verlaag je je gasverbruik tot wel <strong>70%</strong>. Hij werkt samen met je cv-ketel, maar gebruikt stroom als dat goedkoper en duurzamer is. Onze warmtepompen zijn fluisterstil, efficiënt en passen in vrijwel iedere woning. Zo geniet je van een comfortabel binnenklimaat én een <strong>lagere energierekening</strong> – zonder in te leveren op warmte. Zo geniet je van een comfortabel binnenklimaat én een lagere energierekening – zonder in te leveren op warmte Hij werkt samen met je cv-ketel, maar gebruikt stroom als dat goedkoper en duurzamer is.
            </p>
            <Link to="/warmtepompen">
              <button className="bg-[#aadd5f] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#99cc4f] transition-all duration-200">
                Meer over Warmtepomp
              </button>
            </Link>
          </div>
          <div className="relative">
            <img
              src="/images/WhatsApp Image 2025-11-11 at 13.52.13 (3).jpeg"
              alt="Warmtepomp"
              className="rounded-[2rem] shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
