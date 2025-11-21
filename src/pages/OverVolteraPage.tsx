import { SEO } from '../components/SEO';
import { Target, Users, Award, Shield, CheckCircle2, Link as LinkIcon, TrendingUp, Settings, BadgeCheck, MessageSquare } from 'lucide-react';

export default function OverVolteraPage() {
  return (
    <>
      <SEO
        title="Over Voltera"
        description="Ontdek wie we zijn, wat we doen en waarom duizenden Nederlanders kiezen voor Voltera als partner in verduurzaming."
      />

      <div className="pt-20">
        <section className="bg-gradient-to-r from-[#2a3f4f] to-[#3d4f5c] text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Over Voltera</h1>
              <p className="text-xl leading-relaxed">
                Wij maken verduurzamen eenvoudig, betaalbaar en toegankelijk voor iedereen. Met persoonlijk advies, topproducten en vakkundige installatie.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Onze missie</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <span className="text-[#aadd5f] font-semibold">Verduurzaming versnellen zonder zorgen.</span> Bij Voltera geloven we dat iedereen moet kunnen profiteren van duurzame energie zonder de complexiteit en stress die er vaak bij komt kijken.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We nemen alle zorgen uit handen: van advies en subsidieaanvraag tot installatie en onderhoud. Zo kun jij direct genieten van lagere energiekosten en een duurzamer huis, zonder gedoe.
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-[#aadd5f] mb-2">5.000+</div>
                    <div className="text-gray-700">Tevreden klanten</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#aadd5f] mb-2">25 jaar</div>
                    <div className="text-gray-700">Productgarantie</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#aadd5f] mb-2">100%</div>
                    <div className="text-gray-700">Maatwerk</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#aadd5f] mb-2">4.8/5</div>
                    <div className="text-gray-700">Klantbeoordeling</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Onze visie</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wij streven naar een toekomst waarin elke woning verduurzaamd is, met slimme oplossingen die jarenlang waarde bieden.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-[#aadd5f] bg-opacity-10 rounded-full flex items-center justify-center text-[#aadd5f] mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete oplossingen</h3>
                <p className="text-gray-600 leading-relaxed">
                  Van zonnepanelen tot warmtepompen en thuisbatterijen – alles perfect op elkaar afgestemd voor maximaal rendement.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-[#aadd5f] bg-opacity-10 rounded-full flex items-center justify-center text-[#aadd5f] mx-auto mb-6">
                  <LinkIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eén aanspreekpunt</h3>
                <p className="text-gray-600 leading-relaxed">
                  Geen gedoe met verschillende partijen. Bij ons heb je één vast contactpersoon die je door het hele proces begeleidt.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-[#aadd5f] bg-opacity-10 rounded-full flex items-center justify-center text-[#aadd5f] mx-auto mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Langetermijnwaarde</h3>
                <p className="text-gray-600 leading-relaxed">
                  We denken verder dan alleen de installatie. Met jarenlange garanties en service zorgen we dat je investering zich blijft terugverdienen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Waarom Voltera?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: 'Hele keten intern beheerd',
                  description: 'Van advies tot installatie en nazorg – alles gebeurt door ons eigen team. Zo behouden we volledige kwaliteitscontrole en kun je altijd bij ons terecht.'
                },
                {
                  icon: <BadgeCheck className="w-8 h-8" />,
                  title: 'Gecertificeerde installateurs',
                  description: 'Al onze installateurs zijn volledig gecertificeerd en hebben jarenlange ervaring met het plaatsen van zonnepanelen, warmtepompen en thuisbatterijen.'
                },
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  title: 'Transparant & eerlijk advies',
                  description: 'Geen verkoop praatjes, maar helder advies over wat écht het beste is voor jouw situatie. Met duidelijke prijzen en realistische verwachtingen.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#aadd5f] bg-opacity-10 rounded-lg flex items-center justify-center text-[#aadd5f] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ons team & capaciteit</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Met een ervaren team van specialisten en moderne installatiemethoden realiseren we jaarlijks honderden projecten.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl font-bold text-[#aadd5f] mb-2">50+</div>
                <div className="text-gray-700 font-medium">Gecertificeerde installateurs</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl font-bold text-[#aadd5f] mb-2">500+</div>
                <div className="text-gray-700 font-medium">Installaties per jaar</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl font-bold text-[#aadd5f] mb-2">15+</div>
                <div className="text-gray-700 font-medium">Jaar ervaring</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl font-bold text-[#aadd5f] mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Service & support</div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/WhatsApp Image 2025-11-11 at 13.48.32.jpeg"
                  alt="Voltera installatieteam aan het werk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Ons installatieteam</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/WhatsApp Image 2025-11-11 at 13.52.13 (2).jpeg"
                  alt="Professionele installatie in uitvoering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Vakkundige installatie</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/WhatsApp Image 2025-11-11 at 13.46.29.jpeg"
                  alt="Moderne installatiematerialen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Modern materiaal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Echte woningen, echte installaties</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ontdek hoe we Nederlandse huizen verduurzamen met hoogwaardige installaties die er netjes uitzien én optimaal presteren.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative h-72 bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="/images/WhatsApp Image 2025-11-11 at 13.45.14.jpeg"
                  alt="Zonnepanelen installatie op schuin dak"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold mb-1">Zonnepanelen - Woonhuis</p>
                  <p className="text-white/80 text-sm">18 panelen, 7.200 Wp</p>
                </div>
              </div>
              <div className="group relative h-72 bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="/images/WhatsApp Image 2025-11-11 at 13.45.14 copy.jpeg"
                  alt="Complete PV-installatie met omvormer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold mb-1">Complete installatie</p>
                  <p className="text-white/80 text-sm">Inclusief omvormer & monitoring</p>
                </div>
              </div>
              <div className="group relative h-72 bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="/images/WhatsApp Image 2025-11-11 at 13.52.13 (3).jpeg"
                  alt="Warmtepomp installatie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold mb-1">Warmtepomp - Tussenwoning</p>
                  <p className="text-white/80 text-sm">Hybride systeem</p>
                </div>
              </div>
              <div className="group relative h-72 bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="/images/WhatsApp Image 2025-11-12 at 23.46.22.jpeg"
                  alt="Zonnepanelen op plat dak"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold mb-1">Plat dak installatie</p>
                  <p className="text-white/80 text-sm">24 panelen, optimale opbrengst</p>
                </div>
              </div>
              <div className="group relative h-72 bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="/images/WhatsApp Image 2025-11-11 at 13.52.13 (4).jpeg"
                  alt="Nette afwerking elektrische installatie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold mb-1">Nette afwerking</p>
                  <p className="text-white/80 text-sm">Professionele kabelmanagement</p>
                </div>
              </div>
              <div className="group relative h-72 bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="/images/WhatsApp Image 2025-11-11 at 13.52.13 (5).jpeg"
                  alt="Thuisbatterij installatie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold mb-1">Thuisbatterij systeem</p>
                  <p className="text-white/80 text-sm">10 kWh opslag capaciteit</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
