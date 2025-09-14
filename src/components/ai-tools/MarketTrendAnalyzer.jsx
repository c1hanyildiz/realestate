import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, MapPin, TrendingUp, Users, Home, BarChart, Zap } from 'lucide-react';

const MarketTrendAnalyzer = () => {
  const [location, setLocation] = useState('10012');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    setLoading(true);
    setAnalysis(null);

    setTimeout(() => {
      setAnalysis({
        locationName: 'Greenwich Village, NY 10012',
        appreciationForecast: '8.2%',
        rentalDemand: 'High',
        neighborhoodScore: 92,
        avgDaysOnMarket: 45,
        summary: 'The area shows strong fundamentals with high rental demand and a positive appreciation forecast. The neighborhood score is excellent, driven by amenities and low crime rates. Properties are moving relatively quickly, indicating a seller\'s market.'
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-thunders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market <span className="gradient-text">Trend Analyzer</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get AI-driven insights into local real estate market trends. Enter a location to analyze appreciation forecasts, rental demand, and key neighborhood metrics.
            </p>
            <img  class="w-full h-80 object-cover rounded-2xl shadow-2xl" alt="Digital chart showing upward market trends over a city skyline" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 lg:order-1"
          >
            <form onSubmit={handleAnalyze} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Enter Zip Code or City</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-thunders/50 border border-thunders-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold-light text-black py-4 text-lg" disabled={loading}>
                {loading ? (
                  <><Zap className="mr-2 animate-spin" size={20} /> Analyzing...</>
                ) : (
                  <><BarChart className="mr-2" size={20} /> Analyze Market</>
                )}
              </Button>
            </form>

            {analysis && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 pt-6 border-t border-thunders-light space-y-4"
              >
                <h3 className="text-xl font-bold text-center text-white">Market Analysis: <span className="gradient-text">{analysis.locationName}</span></h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  <div className="bg-thunders/50 p-4 rounded-lg text-center">
                    <TrendingUp className="mx-auto text-gold mb-1" />
                    <p className="text-sm text-gray-400">1-Yr Appreciation</p>
                    <p className="text-2xl font-bold text-white">{analysis.appreciationForecast}</p>
                  </div>
                  <div className="bg-thunders/50 p-4 rounded-lg text-center">
                    <Users className="mx-auto text-gold mb-1" />
                    <p className="text-sm text-gray-400">Rental Demand</p>
                    <p className="text-2xl font-bold text-white">{analysis.rentalDemand}</p>
                  </div>
                  <div className="bg-thunders/50 p-4 rounded-lg text-center">
                    <Home className="mx-auto text-gold mb-1" />
                    <p className="text-sm text-gray-400">Neighborhood Score</p>
                    <p className="text-2xl font-bold text-white">{analysis.neighborhoodScore}/100</p>
                  </div>
                   <div className="bg-thunders/50 p-4 rounded-lg text-center">
                    <Zap className="mx-auto text-gold mb-1" />
                    <p className="text-sm text-gray-400">Avg. Days on Market</p>
                    <p className="text-2xl font-bold text-white">{analysis.avgDaysOnMarket}</p>
                  </div>
                </div>
                 <div className="bg-thunders/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">AI Summary:</h4>
                    <p className="text-sm text-gray-300">{analysis.summary}</p>
                 </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketTrendAnalyzer;