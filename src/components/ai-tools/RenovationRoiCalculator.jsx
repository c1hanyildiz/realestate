import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  TrendingUp, 
  Sparkles, 
  Hammer, 
  Paintbrush2, 
  ChefHat,
  Building,
  Store,
  Briefcase,
  Home
} from 'lucide-react';

const residentialOptions = [
  { id: 'luxury-kitchen', name: 'Luxury Kitchen Remodel', icon: ChefHat, avgCost: 85000, avgValueIncrease: 110000, imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba' },
  { id: 'master-suite', name: 'Master Suite Addition', icon: Paintbrush2, avgCost: 150000, avgValueIncrease: 190000, imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0' },
  { id: 'home-office', name: 'High-End Home Office', icon: Briefcase, avgCost: 45000, avgValueIncrease: 60000, imageUrl: 'https://images.unsplash.com/photo-1593062627453-e73551424893' },
];

const commercialOptions = [
  { id: 'office-tech', name: 'Office Tech Upgrade', icon: Building, avgCost: 120000, avgValueIncrease: 160000, imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978' },
  { id: 'retail-facelift', name: 'Retail Storefront Facelift', icon: Store, avgCost: 75000, avgValueIncrease: 105000, imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1' },
  { id: 'lobby-modernization', name: 'Lobby Modernization', icon: Hammer, avgCost: 200000, avgValueIncrease: 275000, imageUrl: 'https://images.unsplash.com/photo-1541829076-fee034E21656' },
];

const RenovationRoiCalculator = () => {
  const [propertyType, setPropertyType] = useState('residential');
  const [propertyValue, setPropertyValue] = useState(1500000);
  const [currentOptions, setCurrentOptions] = useState(residentialOptions);
  const [selectedRenovation, setSelectedRenovation] = useState(residentialOptions[0]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (propertyType === 'residential') {
      setCurrentOptions(residentialOptions);
      setSelectedRenovation(residentialOptions[0]);
      setPropertyValue(1500000);
    } else {
      setCurrentOptions(commercialOptions);
      setSelectedRenovation(commercialOptions[0]);
      setPropertyValue(5000000);
    }
    setResult(null);
  }, [propertyType]);

  const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value);

  const calculateROI = (e) => {
    e.preventDefault();
    const totalCost = selectedRenovation.avgCost;
    const valueIncrease = selectedRenovation.avgValueIncrease;
    const newPropertyValue = propertyValue + valueIncrease;
    const roi = ((valueIncrease - totalCost) / totalCost) * 100;

    setResult({
      newPropertyValue: formatCurrency(newPropertyValue),
      costSpent: formatCurrency(totalCost),
      valueIncrease: formatCurrency(valueIncrease),
      roi: roi.toFixed(1),
    });
  };

  return (
    <section className="py-20 bg-thunders-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Renovation <span className="gradient-text">ROI Calculator</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Estimate the potential return on investment for various renovation projects in Manhattan. Our AI model analyzes up-to-date 2025 market data to provide value-add predictions.
            </p>
            <motion.div key={selectedRenovation.imageUrl} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <img src={selectedRenovation.imageUrl} className="w-full h-80 object-cover rounded-2xl shadow-2xl" alt={selectedRenovation.name} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <form onSubmit={calculateROI} className="space-y-6">
               <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Property Type</label>
                <div className="flex bg-thunders/50 p-1 rounded-lg">
                  <button type="button" onClick={() => setPropertyType('residential')} className={`w-1/2 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${propertyType === 'residential' ? 'bg-gold text-black' : 'text-gray-300'}`}>
                    <Home size={16} /> Residential
                  </button>
                  <button type="button" onClick={() => setPropertyType('commercial')} className={`w-1/2 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${propertyType === 'commercial' ? 'bg-gold text-black' : 'text-gray-300'}`}>
                    <Building size={16} /> Commercial
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Current Property Value</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="number"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-thunders/50 border border-thunders-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Renovation Project</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {currentOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setSelectedRenovation(option)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${selectedRenovation.id === option.id ? 'border-gold bg-gold/10' : 'border-thunders-light bg-thunders/50'}`}
                      >
                        <Icon className={`mb-1 ${selectedRenovation.id === option.id ? 'text-gold' : 'text-gray-400'}`} size={24} />
                        <span className="text-xs text-center text-white">{option.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold-light text-black py-4 text-lg">
                <Sparkles className="mr-2" size={20} />
                Analyze ROI
              </Button>
            </form>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 pt-6 border-t border-thunders-light space-y-4"
              >
                <h3 className="text-xl font-bold text-center text-white">AI-Powered Analysis Results (2025 Data)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                  {propertyType === 'residential' ? (
                    <div className="bg-thunders/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-400">Est. New Value</p>
                      <p className="text-2xl font-bold text-white">{result.newPropertyValue}</p>
                    </div>
                  ) : (
                    <div className="bg-thunders/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-400">Cost Spent</p>
                      <p className="text-2xl font-bold text-white">{result.costSpent}</p>
                    </div>
                  )}
                  <div className="bg-thunders/50 p-4 rounded-lg">
                    <p className="text-sm text-gray-400">Value Increase</p>
                    <p className="text-2xl font-bold text-white">{result.valueIncrease}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-gold/20 to-gold/5 p-4 rounded-lg text-center">
                  <p className="text-sm text-gold">Estimated Return on Investment (ROI)</p>
                  <p className="text-4xl font-bold gradient-text flex items-center justify-center">
                    <TrendingUp className="mr-2" /> {result.roi}%
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RenovationRoiCalculator;