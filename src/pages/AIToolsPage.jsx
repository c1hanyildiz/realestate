import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, ExternalLink } from 'lucide-react';

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
              Leverage the power of artificial intelligence to make smarter, more profitable real estate decisions. Our AI tools have been moved to a dedicated showcase platform.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Button 
                onClick={() => window.open('/ai-apps/index.html', '_blank')}
                size="lg" 
                className="bg-gold hover:bg-gold-light text-black px-8 py-4 text-lg font-semibold"
              >
                <ExternalLink className="mr-2" size={20} />
                Visit AI Apps Showcase
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tools Preview Section */}
      <section className="py-20 bg-thunders-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">AI Tools</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Three powerful AI applications designed to revolutionize your real estate operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 text-center card-hover"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="text-blue-400 text-2xl">📊</i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">OPEX Benchmarking</h3>
              <p class="text-gray-300 mb-6">AI-powered operating expense analysis that compares your costs against industry benchmarks.</p>
              <ul class="text-left space-y-2 text-gray-300 mb-6">
                <li class="flex items-center"><span class="text-green-400 mr-2">✓</span> Real-time benchmark comparisons</li>
                <li class="flex items-center"><span class="text-green-400 mr-2">✓</span> AI-driven cost optimization</li>
                <li class="flex items-center"><span class="text-green-400 mr-2">✓</span> Detailed savings analysis</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center card-hover"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="text-green-400 text-2xl">📈</i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Renovation ROI Calculator</h3>
              <p class="text-gray-300 mb-6">Make smarter renovation decisions with AI-powered ROI predictions and market analysis.</p>
              <ul class="text-left space-y-2 text-gray-300 mb-6">
                <li class="flex items-center"><span class="text-green-400 mr-2">✓</span> Market-based ROI predictions</li>
                <li class="flex items-center"><span class="text-green-400 mr-2">✓</span> Project cost optimization</li>
                <li class="flex items-center"><span class="text-green-400 mr-2">✓</span> Risk assessment analysis</li>
              </ul>
            </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Experience our AI tools firsthand and see how they can revolutionize your real estate operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('/ai-apps/index.html', '_blank')}
                size="lg" 
                variant="secondary" 
                className="bg-black text-white hover:bg-black/80 px-8 py-4 text-base font-semibold"
              >
                <ExternalLink className="mr-2" size={20} />
                Visit AI Apps Showcase
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-black text-white hover:bg-black/80 px-8 py-4 text-base font-semibold">
                <Link to="/contact">
                  <Phone className="mr-2" size={20} />
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-2xl p-8 text-center card-hover"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="text-purple-400 text-2xl">🎯</i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Market Trend Analyzer</h3>
              <p class="text-gray-300 mb-6">Stay ahead of market trends with AI-powered analysis and predictive insights.</p>
              <ul class="text-left space-y-2 text-gray-300 mb-6">
                <li class="flex items-center"><span class="text-green-400 mr-2">✓</span> Predictive market analysis</li>
                <li class="flex items-center"><span class="text-green-400 mr-2">✓</span> Location-based insights</li>
                <li class="flex items-center"><span class="text-green-400 mr-2">✓</span> Investment opportunity scoring</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              onClick={() => window.open('/ai-apps/index.html', '_blank')}
              size="lg" 
              className="bg-gold hover:bg-gold-light text-black px-8 py-4 text-lg font-semibold"
            >
              <ExternalLink className="mr-2" size={20} />
              Try All Tools - AI Apps Showcase
            </Button>
          </motion.div>
        </div>
      </section>
export default AIToolsPage;