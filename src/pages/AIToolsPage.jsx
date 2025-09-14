import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import RenovationRoiCalculator from '@/components/ai-tools/RenovationRoiCalculator';
import MarketTrendAnalyzer from '@/components/ai-tools/MarketTrendAnalyzer';
import OpexBenchmarkingTool from '@/components/ai-tools/OpexBenchmarkingTool';

const AIToolsPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Tools Lab - Cihan Yildiz</title>
        <meta name="description" content="Explore cutting-edge AI-powered real estate tools from Cihan Yildiz. Analyze renovation ROI, predict market trends, and make data-driven investment decisions." />
        <meta property="og:title" content="AI Tools Lab - Cihan Yildiz" />
        <meta property="og:description" content="Explore cutting-edge AI-powered real estate tools from Cihan Yildiz. Analyze renovation ROI, predict market trends, and make data-driven investment decisions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/8926b371-f519-44eb-af77-4ae82faf4e9e/a2f49d41c4d3e42d853aa1b6b5fd217f.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="gradient-text">AI Tools Lab</span>
              <br />
              <span className="text-white">Data-Driven Real Estate Insights</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leverage the power of artificial intelligence to make smarter, more profitable real estate decisions. Explore our exclusive suite of analytical tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OPEX Benchmarking Tool */}
      <OpexBenchmarkingTool />

      {/* Renovation ROI Calculator */}
      <RenovationRoiCalculator />

      {/* Market Trend Analyzer */}
      <MarketTrendAnalyzer />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Ready to Apply These Insights?
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              These tools provide a glimpse of our analytical power. Partner with us for a comprehensive, expert-led strategy tailored to your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-black text-white hover:bg-black/80 px-8 py-4 text-base font-semibold">
                <Link to="/contact">
                  Schedule Consultation <Phone className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black/50 text-black hover:bg-black/10 hover:border-black px-8 py-4 text-base font-semibold">
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AIToolsPage;