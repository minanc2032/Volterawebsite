export default function TrustedByLogos() {
  const partners = [
    { name: 'InstallQ', logo: '/logos/installq.svg' },
    { name: 'SolarEdge', logo: '/logos/solaredge.svg' },
    { name: 'Enphase', logo: '/logos/enphase.svg' },
    { name: 'TechniekNL', logo: '/logos/technieknl.svg' }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Vertrouwd door en samenwerking met
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
