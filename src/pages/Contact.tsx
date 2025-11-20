import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 bg-gradient-to-b from-[#f0f4f8] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl py-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="bg-[#aadd5f] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#2a3f4f] mb-4">Bericht ontvangen!</h1>
            <p className="text-xl text-gray-700 mb-8">
              Bedankt voor uw bericht. We nemen binnen 1 werkdag contact met u op.
            </p>
            <a
              href="/"
              className="inline-block bg-[#aadd5f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#99cc4f] transition-all"
            >
              Terug naar home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-5xl font-bold mb-6">Contact & Advies</h1>
          <p className="text-2xl opacity-90 max-w-2xl mx-auto">
            Onze specialisten staan voor u klaar. Bel ons direct of laat een bericht achter.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Phone className="w-12 h-12 text-[#aadd5f] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#2a3f4f] mb-3">Bel ons direct</h3>
            <a
              href="tel:+31850606755"
              className="text-2xl font-bold text-[#aadd5f] hover:text-[#99cc4f] transition-colors"
            >
              085 - 060 67 55
            </a>
            <p className="text-gray-600 mt-2">Bereikbaar op werkdagen</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Mail className="w-12 h-12 text-[#aadd5f] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#2a3f4f] mb-3">Mail ons</h3>
            <a
              href="mailto:info@voltera.nl"
              className="text-xl font-bold text-[#aadd5f] hover:text-[#99cc4f] transition-colors"
            >
              info@voltera.nl
            </a>
            <p className="text-gray-600 mt-2">Reactie binnen 24 uur</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Clock className="w-12 h-12 text-[#aadd5f] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#2a3f4f] mb-3">Openingstijden</h3>
            <div className="text-gray-700">
              <p>Ma - Vr: 08:00 - 18:00</p>
              <p>Za: 09:00 - 13:00</p>
              <p className="text-gray-500 mt-2">Zondag gesloten</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#2a3f4f] mb-6">Stuur ons een bericht</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Naam *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">E-mailadres *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Telefoonnummer</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Onderwerp *</label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                >
                  <option value="">Selecteer een onderwerp</option>
                  <option value="solar">Zonnepanelen</option>
                  <option value="battery">Thuisbatterij</option>
                  <option value="heatpump">Warmtepomp</option>
                  <option value="combination">Combinatie oplossing</option>
                  <option value="other">Anders</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Uw bericht *</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#aadd5f] text-white py-4 rounded-full font-semibold text-lg hover:bg-[#99cc4f] transition-all"
              >
                Verstuur bericht
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#2a3f4f] mb-6">Bezoekadres</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <div className="flex items-start mb-6">
                <MapPin className="w-6 h-6 text-[#aadd5f] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-[#2a3f4f] mb-1">Voltera Energy Solutions</p>
                  <p className="text-gray-700">Voorstraat 123</p>
                  <p className="text-gray-700">1234 AB Amsterdam</p>
                  <p className="text-gray-700">Nederland</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-bold text-[#2a3f4f] mb-3">Waarom Voltera?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Erkend installateur</li>
                  <li>✓ Volledige ketencontrole</li>
                  <li>✓ Transparant advies</li>
                  <li>✓ Jarenlange garantie</li>
                  <li>✓ Persoonlijke service</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#aadd5f] to-[#99cc4f] text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Liever direct persoonlijk advies?</h3>
              <p className="mb-4 opacity-90">Plan een gratis adviesgesprek</p>
              <a
                href="/bespaarplan"
                className="inline-block bg-white text-[#2a3f4f] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
              >
                Ontvang jouw bespaarplan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
