import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function PlaceholderPage({ title, description, comingSoon = false }: PlaceholderPageProps) {
  return (
    <>
      <SEO title={title} description={description} />
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-xl text-gray-600 mb-8">{description}</p>
            {comingSoon && (
              <div className="bg-white rounded-xl p-8 shadow-md mb-8">
                <p className="text-lg text-gray-700">Deze pagina is in ontwikkeling en wordt binnenkort beschikbaar.</p>
              </div>
            )}
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#aadd5f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#99cc4f] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Terug naar home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
