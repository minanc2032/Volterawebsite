import { SEO } from '../components/SEO';
import { Target, Users, Award, Shield } from 'lucide-react';

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
                  Bij Voltera geloven we dat iedereen moet kunnen profiteren van duurzame energie. Daarom maken we het simpel en betaalbaar om je huis te verduurzamen met zonnepanelen, thuisbatterijen en warmtepompen.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We begeleiden je van A tot Z: van het eerste advies tot aan de installatie én daarna. Met persoonlijke aandacht, transparante prijzen en producten van topkwaliteit.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Waarom Voltera?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: 'Maatwerk advies',
                  description: 'Elk huis is uniek. Daarom krijg je altijd persoonlijk advies afgestemd op jouw situatie.'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Ervaren team',
                  description: 'Ons team bestaat uit gecertificeerde installateurs met jarenlange ervaring.'
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: 'Topkwaliteit',
                  description: 'We werken alleen met A-merk producten met uitstekende garanties.'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Alles geregeld',
                  description: 'Van subsidieaanvraag tot installatie, wij regelen alles voor je.'
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
      </div>
    </>
  );
}
