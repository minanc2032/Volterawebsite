import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import EnhancedHeader from './components/EnhancedHeader';
import EnhancedFooter from './components/EnhancedFooter';
import { ScrollToTop } from './components/ScrollToTop';
import HomePage from './pages/HomePage';

const OverVolteraPage = lazy(() => import('./pages/OverVolteraPage'));
const ZonnepanelenPage = lazy(() => import('./pages/ZonnepanelenPage'));
const ThuisbatterijenPage = lazy(() => import('./pages/ThuisbatterijenPage'));
const WarmtepompenPage = lazy(() => import('./pages/WarmtepompenPage'));
const FinancieringPage = lazy(() => import('./pages/FinancieringPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const KlantcasesPage = lazy(() => import('./pages/KlantcasesPage'));
const KenniscentrumPage = lazy(() => import('./pages/KenniscentrumPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const SubsidiesPage = lazy(() => import('./pages/SubsidiesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const CookiesPage = lazy(() => import('./pages/CookiesPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-[#aadd5f]"></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <EnhancedHeader />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/over-voltera" element={<OverVolteraPage />} />
              <Route path="/zonnepanelen" element={<ZonnepanelenPage />} />
              <Route path="/thuisbatterijen" element={<ThuisbatterijenPage />} />
              <Route path="/warmtepompen" element={<WarmtepompenPage />} />
              <Route path="/financiering" element={<FinancieringPage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/klantcases" element={<KlantcasesPage />} />
              <Route path="/kenniscentrum" element={<KenniscentrumPage />} />
              <Route path="/kenniscentrum/:slug" element={<ArticlePage />} />
              <Route path="/subsidies" element={<SubsidiesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/algemene-voorwaarden" element={<TermsPage />} />
            </Routes>
          </Suspense>
        </main>
        <EnhancedFooter />
      </div>
    </Router>
  );
}

export default App;
