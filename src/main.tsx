import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import OverVoltera from './pages/OverVoltera';
import Zonnepanelen from './pages/Zonnepanelen';
import Thuisbatterijen from './pages/Thuisbatterijen';
import Warmtepompen from './pages/Warmtepompen';
import Bespaarplan from './pages/Bespaarplan';
import Financieringsopties from './pages/Financieringsopties';
import Kenniscentrum from './pages/Kenniscentrum';
import Subsidies from './pages/Subsidies';
import Contact from './pages/Contact';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="over-voltera" element={<OverVoltera />} />
          <Route path="zonnepanelen" element={<Zonnepanelen />} />
          <Route path="thuisbatterijen" element={<Thuisbatterijen />} />
          <Route path="warmtepompen" element={<Warmtepompen />} />
          <Route path="bespaarplan" element={<Bespaarplan />} />
          <Route path="financieringsopties" element={<Financieringsopties />} />
          <Route path="kenniscentrum" element={<Kenniscentrum />} />
          <Route path="subsidies" element={<Subsidies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
