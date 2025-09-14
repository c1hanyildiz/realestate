import React from 'react';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';

const PropertyGrid = ({ properties, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto"></div>
        <p className="text-white mt-4">Searching for properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-400">
        <p>
          <span className="font-bold">Error:</span> {error}
        </p>
        <p className="mt-2 text-gray-400">Could not fetch properties. Please check your connection or API configuration.</p>
      </div>
    );
  }

  return (
    <section className="py-12 bg-thunders-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          {properties && properties.length > 0 ? (
            <>
              <h2 className="text-3xl font-bold text-white mb-4">
                Search <span className="gradient-text">Results</span>
              </h2>
              <p className="text-gray-300">
                Showing {properties.length} properties matching your criteria.
              </p>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-white mb-4">No Properties Found</h2>
              <p className="text-gray-400">Try adjusting your search filters or searching a different area.</p>
            </div>
          )}
        </motion.div>

        {properties && properties.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={property.zpid} property={property} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;