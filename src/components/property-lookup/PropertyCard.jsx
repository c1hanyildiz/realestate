import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Star, Heart, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PropertyCard = ({ property, index }) => {
  const { toast } = useToast();

  const handleSaveProperty = (propertyUrl) => {
    window.open(propertyUrl, '_blank', 'noopener,noreferrer');
  };
  
  const handleFavorite = (propertyId) => {
    toast({
      title: "Save Property",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  }

  const formatPrice = (price) => {
    if (!price) return 'Price not available';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const defaultImage = "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-thunders rounded-2xl overflow-hidden card-hover group border border-transparent"
    >
      <div className="relative">
        <img
          src={property.imgSrc || defaultImage}
          alt={`Property at ${property.streetAddress}`}
          className="w-full h-64 object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src=defaultImage; }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gold text-black px-3 py-1 rounded-full text-sm font-medium">
            {property.statusText || 'For Rent'}
          </span>
        </div>
        <button
          onClick={() => handleFavorite(property.zpid)}
          className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:text-gold transition-colors"
          aria-label="Save Property"
        >
          <Heart size={20} />
        </button>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="text-2xl font-bold gradient-text">
            {formatPrice(property.price)}
          </div>
          {property.zestimate && (
            <div className="text-right">
              <span className="text-xs text-gray-400">Zestimate®</span>
              <p className="font-semibold text-white">{formatPrice(property.zestimate)}</p>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-white truncate">{property.streetAddress}</h3>
          <div className="flex items-center text-gray-400 text-sm mt-1">
            <MapPin size={16} className="mr-1.5 flex-shrink-0" />
            <span className="truncate">{property.city}, {property.state} {property.zipcode}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-300 border-t border-b border-thunders-light py-3">
          {property.bedrooms ? (
            <div className="flex items-center space-x-2">
              <Bed size={18} />
              <span className="text-sm font-medium">{property.bedrooms} Bed</span>
            </div>
          ) : <div />}
          {property.bathrooms ? (
            <div className="flex items-center space-x-2">
              <Bath size={18} />
              <span className="text-sm font-medium">{property.bathrooms} Bath</span>
            </div>
          ) : <div />}
          {property.livingArea ? (
            <div className="flex items-center space-x-2">
              <Square size={18} />
              <span className="text-sm font-medium">{property.livingArea.toLocaleString()} sqft</span>
            </div>
          ) : <div />}
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2 text-gray-400">
             <Building size={16} />
             <span className="text-sm font-medium">{property.homeType}</span>
          </div>
          <Button
            onClick={() => handleSaveProperty(property.detailUrl)}
            size="sm"
            className="bg-gold hover:bg-gold-light text-black font-semibold"
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;