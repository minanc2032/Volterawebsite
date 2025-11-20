import { BookOpen, Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Wat betekent de afbouw van salderen voor jouw energierekening?',
    excerpt: 'De salderingsregeling wordt stapsgewijs afgebouwd. Ontdek wat dit voor jou betekent en hoe je hiermee om kunt gaan.',
    category: 'Zonnepanelen',
    readTime: 5,
    image: '/images/WhatsApp Image 2025-11-11 at 13.46.29.jpeg'
  },
  {
    id: 2,
    title: 'De waarheid over thuisbatterijen: wat levert het écht op?',
    excerpt: 'Een eerlijk en compleet overzicht van de voor- en nadelen van thuisbatterijen in 2025.',
    category: 'Thuisbatterijen',
    readTime: 7,
    image: '/images/WhatsApp Image 2025-11-11 at 13.48.32.jpeg'
  },
  {
    id: 3,
    title: 'Is jouw woning klaar voor een warmtepomp?',
    excerpt: 'Niet elke woning is direct geschikt. Leer welke factoren belangrijk zijn bij de keuze voor een warmtepomp.',
    category: 'Warmtepompen',
    readTime: 6,
    image: '/images/WhatsApp Image 2025-11-11 at 13.52.13 (2).jpeg'
  },
  {
    id: 4,
    title: '5 manieren om slim te besparen met dynamische tarieven',
    excerpt: 'Dynamische energiecontracten bieden kansen. Ontdek hoe je hier optimaal van profiteert.',
    category: 'Energiebeheer',
    readTime: 5,
    image: '/images/WhatsApp Image 2025-11-11 at 13.45.14.jpeg'
  },
];

export default function Kenniscentrum() {
  return (
    <div className="min-h-screen pt-24">
      <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Kenniscentrum</h1>
          <p className="text-2xl opacity-90 max-w-2xl mx-auto">
            Alles wat je moet weten over verduurzaming van je woning
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="flex flex-wrap gap-3 mb-12">
          {['Alle artikelen', 'Zonnepanelen', 'Thuisbatterijen', 'Warmtepompen', 'Subsidies', 'Energiebeheer'].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                category === 'Alle artikelen'
                  ? 'bg-[#aadd5f] text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#aadd5f]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${article.image}')` }}
              ></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#aadd5f]/20 text-[#2a3f4f] text-sm font-semibold rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime} min
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#2a3f4f] mb-3">{article.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{article.excerpt}</p>
                <a
                  href={`/kenniscentrum/${article.id}`}
                  className="inline-flex items-center text-[#aadd5f] font-semibold hover:text-[#99cc4f] transition-colors"
                >
                  Lees meer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Persoonlijk advies nodig?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ontdek wat de beste keuzes zijn voor jouw specifieke situatie
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
