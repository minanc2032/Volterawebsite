import { Link } from 'react-router-dom';
import { Check, Shield, Award, Users } from 'lucide-react';
import { SEO } from '../components/SEO';
import Hero from '../components/Hero';
import TrustedByLogos from '../components/TrustedByLogos';
import IntroSection from '../components/IntroSection';
import ProductSections from '../components/ProductSections';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';

export default function HomePage() {
  const trustBadges = [
    'Erkend installateur',
    'Meer dan 5.000 tevreden klanten',
    '25 jaar productgarantie',
    'Deskundig advies',
    'Scherpe prijzen',
    'Alles uit één hand'
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Analyseer je woning',
      description: 'Vul onze calculator in en ontdek direct hoeveel je kunt besparen met onze oplossingen.'
    },
    {
      step: '2',
      title: 'Ontvang je bespaarplan',
      description: 'Een van onze energie-experts neemt contact met je op voor een persoonlijk adviesgesprek.'
    },
    {
      step: '3',
      title: 'Volledige installatie geregeld',
      description: 'Onze gecertificeerde installateurs zorgen voor een vlekkeloze installatie bij jou thuis.'
    }
  ];

  return (
    <>
      <SEO
        title="Slim verduurzamen begint bij Voltera"
        description="Zonnepanelen, thuisbatterijen en warmtepompen – perfect afgestemd op jouw woning. Bereken direct je besparing!"
        keywords="zonnepanelen, thuisbatterij, warmtepomp, verduurzamen, energiebesparing, ISDE subsidie"
      />

      <Hero />
      <TrustedByLogos />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#aadd5f]" />
                <span className="text-gray-700 font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IntroSection />
      <ProductSections />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hoe het werkt</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Van eerste contact tot installatie, wij begeleiden je door het hele proces
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#aadd5f] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#aadd5f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Bereken direct jouw besparing
            </h2>
            <p className="text-xl text-white mb-8">
              Ontdek in 2 minuten hoeveel je kunt besparen met zonnepanelen, een thuisbatterij of warmtepomp
            </p>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Ontvang jouw persoonlijk bespaarplan
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor Voltera?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-[#aadd5f] bg-opacity-10 rounded-lg flex items-center justify-center text-[#aadd5f] mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Persoonlijk advies</h3>
              <p className="text-gray-600 leading-relaxed">
                Elk huis is uniek. Daarom krijg je bij ons altijd maatwerk advies van onze energie-experts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-[#aadd5f] bg-opacity-10 rounded-lg flex items-center justify-center text-[#aadd5f] mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alles uit één hand</h3>
              <p className="text-gray-600 leading-relaxed">
                Van advies tot installatie én onderhoud. Wij regelen alles voor je, inclusief subsidies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-[#aadd5f] bg-opacity-10 rounded-lg flex items-center justify-center text-[#aadd5f] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparante prijzen</h3>
              <p className="text-gray-600 leading-relaxed">
                Geen verrassingen. Je krijgt vooraf een duidelijke offerte met alle kosten inzichtelijk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
