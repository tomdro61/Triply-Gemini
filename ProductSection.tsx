import React, { useState, useMemo } from 'react';
import { Star, MapPin, ArrowRight, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  type: 'parking' | 'hotel';
  products: Product[];
  cities?: string[];
  background?: 'white' | 'gray';
}

export const ProductSection: React.FC<ProductSectionProps> = ({ 
  title, 
  subtitle, 
  type, 
  products, 
  cities,
  background = 'white'
}) => {
  const [activeCity, setActiveCity] = useState<string | null>(cities ? cities[0] : null);

  const displayProducts = useMemo(() => {
    if (!activeCity) return products.slice(0, 4);
    return products.filter(p => p.city === activeCity).slice(0, 4);
  }, [products, activeCity]);

  const formatAmenity = (amenity: string): string => {
    const map: Record<string, string> = {
      shuttle: 'Free Shuttle',
      security: '24/7 Security',
      covered: 'Covered Parking',
      wifi: 'Free WiFi',
      breakfast: 'Breakfast Included',
      gym: 'Fitness Center',
      pool: 'Swimming Pool'
    };
    return map[amenity] || amenity.charAt(0).toUpperCase() + amenity.slice(1);
  };

  const bgClass = background === 'gray' ? 'bg-brand-gray' : 'bg-white';

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          {/* Left Column: Title & Pills */}
          <div className="w-full md:w-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">{title}</h2>
            
            {/* City Pills */}
            {cities && (
              <div className="flex space-x-2 overflow-x-auto no-scrollbar p-1 w-full md:w-auto">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setActiveCity(city)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                      activeCity === city
                        ? 'bg-brand-orange text-white shadow-md transform scale-105'
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: View All Link */}
          <a href="#" className="hidden md:flex items-center text-brand-orange font-semibold hover:text-orange-400 whitespace-nowrap mb-2 group transition-colors">
            View All {type === 'parking' ? 'Parking Options' : 'Hotels'} 
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full animate-fade-in">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                    {product.tag}
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-md flex items-center shadow-sm">
                  <Star size={12} className="text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{product.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin size={14} className="mr-1 flex-shrink-0 text-brand-blue" />
                  <span className="truncate">{product.subtitle}</span>
                </div>

                {/* Amenities List with Checks */}
                <div className="space-y-2 mb-5">
                  {product.amenities.slice(0, 3).map((amenity, i) => (
                     <div key={i} className="flex items-center text-gray-600 text-sm">
                        <Check size={14} className="text-brand-orange mr-2 flex-shrink-0 stroke-[3]" />
                        <span className="font-medium text-xs sm:text-sm">{formatAmenity(amenity)}</span>
                     </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through block">${product.originalPrice}</span>
                    )}
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-xs text-gray-500 font-normal">/{type === 'parking' ? 'day' : 'night'}</span>
                  </div>
                  <button className="bg-transparent border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    {type === 'parking' ? 'Details' : 'Book'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button className="w-full py-3 border border-gray-300 rounded-lg font-semibold text-gray-700">View All {type === 'parking' ? 'Parking Options' : 'Hotels'}</button>
        </div>
      </div>
    </section>
  );
};