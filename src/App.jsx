import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import PropertyLookupPage from '@/pages/PropertyLookupPage';
import ContactPage from '@/pages/ContactPage';
import PortfolioPage from '@/pages/PortfolioPage';
import AIToolsPage from '@/pages/AIToolsPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-thunders-dark">
        <Helmet>
          <title>Cihan Yildiz - Real Estate Maintenance & Management Consulting</title>
          <meta name="description" content="Cihan Yildiz: Your trusted expert for real estate maintenance and management consulting services. Personalized property solutions with comprehensive property lookup tools." />
          <meta property="og:title" content="Cihan Yildiz - Real Estate Maintenance & Management Consulting" />
          <meta property="og:description" content="Cihan Yildiz: Your trusted expert for real estate maintenance and management consulting services. Personalized property solutions with comprehensive property lookup tools." />
        </Helmet>
        
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/property-lookup" element={<PropertyLookupPage />} />
            <Route path="/ai-tools" element={<AIToolsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;