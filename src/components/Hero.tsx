export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f0f4f8]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/WhatsApp Image 2025-11-11 at 13.45.14 copy.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#2a3f4f]/50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
           DUURZAAM
WONEN
ZONDER ZORGEN
          </h1>

          <p className="text-xl sm:text-2xl text-white mb-10 leading-relaxed">
            Zonnepanelen, thuisbatterijen en warmtepompen – perfect afgestemd op jouw woning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/calculator"
              className="bg-[#aadd5f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#99cc4f] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Ontvang jouw persoonlijk bespaarplan
            </a>
            <a
              href="/contact"
              className="bg-white text-[#2a3f4f] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel direct met een adviseur
            </a>
          </div>

          <div className="flex items-center gap-4 justify-center">
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
      </div>
    </section>
  );
}
