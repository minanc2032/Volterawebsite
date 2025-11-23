import { useState } from 'react';
import { Phone, Mail, Clock, Check, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { SEO } from '../components/SEO';
import { submitContactForm, ContactSubmission } from '../lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    requestCallback: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const submission: ContactSubmission = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      status: 'new',
    };

    await submitContactForm(submission);

    setLoading(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        requestCallback: false,
      });
    }, 3000);
  };

  return (
    <>
      <SEO
        title="Contact - Voltera"
        description="Neem contact met ons op. We helpen je graag verder met al je vragen over zonnepanelen, thuisbatterijen en warmtepompen."
      />

      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="py-20 bg-[#aadd5f] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
            <p className="text-xl opacity-90">We helpen je graag verder met al je vragen.</p>
          </div>
        </section>

        <section className="py-20 -mt-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <Card className="shadow-lg p-6 flex items-start gap-4 bg-white">
                  <div className="bg-[#aadd5f]/10 p-3 rounded-lg text-[#aadd5f]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Bel ons</h3>
                    <p className="text-gray-600 mb-2">Direct advies nodig?</p>
                    <a
                      href="tel:0201234567"
                      className="text-[#aadd5f] font-bold text-lg hover:underline"
                    >
                      020 123 4567
                    </a>
                  </div>
                </Card>

                <Card className="shadow-lg p-6 flex items-start gap-4 bg-white">
                  <div className="bg-[#aadd5f]/10 p-3 rounded-lg text-[#aadd5f]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Mail ons</h3>
                    <p className="text-gray-600 mb-2">Antwoord binnen 1 dag.</p>
                    <a
                      href="mailto:info@voltera.nl"
                      className="text-[#aadd5f] font-bold text-lg hover:underline"
                    >
                      info@voltera.nl
                    </a>
                  </div>
                </Card>

                <Card className="shadow-lg p-6 flex items-start gap-4 bg-white">
                  <div className="bg-[#aadd5f]/10 p-3 rounded-lg text-[#aadd5f]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Openingstijden</h3>
                    <p className="text-gray-600">Ma - Vr: 08:30 - 18:00</p>
                    <p className="text-gray-600">Za: 10:00 - 16:00</p>
                  </div>
                </Card>

                <a
                  href="https://wa.me/31201234567?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20verduurzaming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="shadow-lg p-6 flex items-start gap-4 bg-white hover:bg-[#aadd5f]/5 transition-colors cursor-pointer">
                    <div className="bg-green-100 p-3 rounded-lg text-green-600">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600 mb-2">Direct chatten?</p>
                      <span className="text-green-600 font-bold text-lg hover:underline">
                        Start gesprek
                      </span>
                    </div>
                  </Card>
                </a>
              </div>

              <div className="lg:col-span-2">
                <Card className="shadow-xl h-full bg-white">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">
                      Stuur ons een bericht
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Plan direct een gesprek met een adviseur. We nemen binnen 24 uur contact op.
                    </p>

                    {success && (
                      <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-green-900">Bericht verzonden!</h4>
                          <p className="text-green-800 text-sm">
                            We nemen zo snel mogelijk contact met je op.
                          </p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900">Voornaam</label>
                          <Input
                            placeholder="Jan"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({ ...formData, firstName: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900">Achternaam</label>
                          <Input
                            placeholder="Jansen"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({ ...formData, lastName: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900">
                            E-mailadres
                          </label>
                          <Input
                            type="email"
                            placeholder="jan@voorbeeld.nl"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900">
                            Telefoonnummer
                          </label>
                          <Input
                            type="tel"
                            placeholder="06 12345678"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-900">Onderwerp</label>
                        <Input
                          placeholder="Waar gaat het over?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-900">Bericht</label>
                        <Textarea
                          placeholder="Typ hier je bericht..."
                          className="min-h-[150px]"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.requestCallback}
                            onChange={(e) =>
                              setFormData({ ...formData, requestCallback: e.target.checked })
                            }
                            className="mt-1 w-4 h-4 text-[#aadd5f] rounded focus:ring-[#aadd5f]"
                          />
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-900">
                              Ik wil graag teruggebeld worden
                            </span>
                            <p className="text-xs text-gray-600 mt-1">
                              Een van onze adviseurs belt je binnen 24 uur op het opgegeven nummer.
                            </p>
                          </div>
                        </label>
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={loading}>
                        {loading ? 'Bezig met verzenden...' : 'Verstuur bericht'}
                      </Button>
                    </form>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
