import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "De installatie verliep perfect. Voltera was professioneel, duidelijk en op tijd. Alles netjes geregeld. Zeker een aanrader!",
    author: "Emma",
    rating: 5
  },
  {
    text: "We zijn overgestapt op zonnepanelen en een thuisbatterij van Voltera, topservice en snelle communicatie.",
    author: "Tom",
    rating: 5
  },
  {
    text: "De warmtepomp en zonnepanelen werken fantastisch. De service was ook erg goed. top top top!",
    author: "Dan",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#e8f8d8] rounded-full px-6 py-3">
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 bg-[#57c30f] rounded-full animate-pulse-circle"></div>
              </div>
              <span className="text-[#57c30f] font-bold text-sm uppercase tracking-wide">KLANT ERVARINGEN</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#000000] mb-6 leading-tight">
            Echte besparingen van echte klanten
          </h2>
          <p className="text-base text-[#555555] max-w-3xl mx-auto mb-8 leading-relaxed">
            Onze klanten vertellen hoe zij hun huis of bedrijf hebben verduurzaamd met de oplossingen van Voltera.
            <br />Van zonnepanelen tot warmtepompen, we maken duurzaamheid persoonlijk, efficiënt en betrouwbaar.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a href="https://nl.trustpilot.com/review/voltera.nl" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/WhatsApp Image 2025-11-12 at 22.19.18 (1).jpeg"
                alt="Trustpilot"
                className="h-12 w-auto object-contain"
              />
            </a>
            <a href="https://www.google.com/search?newwindow=1&sca_esv=e133efb347e6c9df&sxsrf=AE3TifO3Z3KGGnrziznzD9LWEGB5dAPD4Q:1761329188962&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwoctDgESwxCWhhNGCBnZmBLgXR5hxWoP643bP7ikIDRGCDt75xB7hIwXjA1T0vFYrdyQD7JbJcEvjHuFVQyzLTvgMeK&q=Voltera+Reviews&sa=X&ved=2ahUKEwio44_Ftr2QAxXrKRAIHXFBPJwQ0bkNegQIHhAD&biw=1920&bih=911&dpr=1" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/WhatsApp Image 2025-11-11 at 13.52.13 copy.jpeg"
                alt="Google Reviews"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-2xl p-8 shadow-sm hover:-translate-y-2 transition-transform duration-300 text-center"
            >
              <p className="text-[#333333] mb-6 leading-relaxed text-[15px]">
                "{testimonial.text}"
              </p>
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ffc107] text-[#ffc107]" />
                ))}
              </div>
              <p className="text-[#000000] font-medium">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
