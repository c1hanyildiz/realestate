import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/property-lookup/SearchBar';
import PropertyGrid from '@/components/property-lookup/PropertyGrid';
import { fetchProperties } from '@/lib/zillow';
import { useToast } from '@/components/ui/use-toast';

const PropertyLookupPage = () => {
  const { toast } = useToast();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(async (searchParams) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProperties(searchParams);
      if (data && data.props) {
        setProperties(data.props);
      } else {
        setProperties([]);
        toast({
          title: "No Results",
          description: "No properties found for your search criteria.",
          variant: "destructive"
        });
      }
    } catch (err) {
      console.error("Failed to fetch properties:", err);
      setError("Failed to fetch properties. Please try again later.");
      toast({
        title: "Search Failed",
        description: "An error occurred while fetching properties.",
        variant: "destructive"
      });
      setProperties([]);
    } finally {
      setLoading(false);
    }
  }, [toast]);
  
  useEffect(() => {
    handleSearch({ location: '10012', home_type: 'apartments' });
  }, [handleSearch]);

  return (
    <>
      <Helmet>
        <title>Property Lookup - Find Your Perfect Real Estate Investment</title>
        <meta name="description" content="Advanced property search and lookup tools powered by comprehensive real estate data. Find the perfect investment opportunities with detailed property information." />
        <meta property="og:title" content="Property Lookup - Find Your Perfect Real Estate Investment" />
        <meta property="og:description" content="Advanced property search and lookup tools powered by comprehensive real estate data. Find the perfect investment opportunities with detailed property information." />
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
              <span className="gradient-text">Property Lookup</span>
              <br />
              <span className="text-white">Find Your Perfect Investment</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover exceptional real estate opportunities with our comprehensive property search and analysis tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <SearchBar onSearch={handleSearch} loading={loading} />

      {/* Results Section */}
      <PropertyGrid properties={properties} loading={loading} error={error} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Need Expert Property Analysis?
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Let our real estate experts help you evaluate these properties and make informed investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-black text-white hover:bg-black/80 px-8 py-3 text-base font-semibold">
                <Link to="/contact">
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black/50 text-black hover:bg-black/10 hover:border-black px-8 py-3 text-base font-semibold">
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PropertyLookupPage;