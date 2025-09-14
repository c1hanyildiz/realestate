import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchBar = ({ onSearch, loading }) => {
  const [searchQuery, setSearchQuery] = useState('10012');
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    bedsMin: '',
    bathsMin: '',
    home_type: 'apartments'
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = {
      location: searchQuery,
      ...filters
    };
    onSearch(searchParams);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return (
    <section className="py-12 bg-thunders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter Zip Code, City, or Address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-thunders/50 border border-thunders-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
            </div>
            <Button type="submit" size="lg" className="bg-gold hover:bg-gold-light text-black px-8 font-semibold" disabled={loading}>
              <Search className="mr-2" size={20} />
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Min Price</label>
              <input type="number" placeholder="$0" value={filters.minPrice} onChange={(e) => handleFilterChange('minPrice', e.target.value)} className="w-full px-3 py-2 bg-thunders/50 border border-thunders-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Max Price</label>
              <input type="number" placeholder="Any" value={filters.maxPrice} onChange={(e) => handleFilterChange('maxPrice', e.target.value)} className="w-full px-3 py-2 bg-thunders/50 border border-thunders-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Bedrooms</label>
              <select value={filters.bedsMin} onChange={(e) => handleFilterChange('bedsMin', e.target.value)} className="w-full px-3 py-2 bg-thunders/50 border border-thunders-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold">
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Bathrooms</label>
              <select value={filters.bathsMin} onChange={(e) => handleFilterChange('bathsMin', e.target.value)} className="w-full px-3 py-2 bg-thunders/50 border border-thunders-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold">
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Property Type</label>
              <select value={filters.home_type} onChange={(e) => handleFilterChange('home_type', e.target.value)} className="w-full px-3 py-2 bg-thunders/50 border border-thunders-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold">
                <option value="apartments">Apartments</option>
                <option value="houses">Houses</option>
                <option value="townhomes">Townhomes</option>
                <option value="condos">Condos</option>
              </select>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default SearchBar;