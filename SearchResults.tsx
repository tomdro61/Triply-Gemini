import React, { useState, useMemo } from 'react';
import { Product, SearchTab } from '../types';
import { 
  Star, 
  MapPin, 
  Wifi, 
  Car, 
  Coffee, 
  Shield, 
  Check, 
  SlidersHorizontal, 
  ArrowUpDown, 
  Filter,
  X
} from 'lucide-react';

interface SearchResultsProps {
  results: Product[];
  type: SearchTab;
}

type SortOption = 'recommended' | 'price_asc' | 'price_desc' | 'rating_desc';

interface Filters {
  priceRange: 'all' | 'under100' | '100to200' | 'over200';
  minRating: number;
  amenities: string[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results, type }) => {
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const [filters, setFilters] = useState<Filters>({
    priceRange: 'all',
    minRating: 0,
    amenities: []
  });

  // Available amenities derived from current type or hardcoded common ones
  const availableAmenities = ['wifi', 'breakfast', 'pool', 'gym', 'parking', 'shuttle', 'security', 'covered'];

  const filteredResults = useMemo(() => {
    return results
      .filter(item => {
        // Price Filter
        if (filters.priceRange === 'under100' && item.price >= 100) return false;
        if (filters.priceRange === '100to200' && (item.price < 100 || item.price > 200)) return false;
        if (filters.priceRange === 'over200' && item.price <= 200) return false;
        
        // Rating Filter
        if (filters.minRating > 0 && item.rating < filters.minRating) return false;

        // Amenities Filter
        if (filters.amenities.length > 0) {
          const hasAllAmenities = filters.amenities.every(a => item.amenities.includes(a));
          if (!hasAllAmenities) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price_asc') return a.price - b.price;
        if (sortBy === 'price_desc') return b.price - a.price;
        if (sortBy === 'rating_desc') return b.rating - a.rating;
        return 0;
      });
  }, [results, filters, sortBy]);

  const toggleAmenity = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity) 
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const renderStars = (count: number) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={14} 
          className={`${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-0.5`} 
        />
      ))}
    </div>
  );

  const getAmenityIcon = (name: string) => {
    switch (name) {
      case 'wifi': return <Wifi size={14} />;
      case 'shuttle': return <Car size={14} />;
      case 'security': return <Shield size={14} />;
      case 'breakfast': return <Coffee size={14} />;
      default: return <Check size={14} />;
    }
  };

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Price Range */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-2">
          {[
            { id: 'all', label: 'Any Price' },
            { id: 'under100', label: 'Under $100' },
            { id: '100to200', label: '$100 - $200' },
            { id: 'over200', label: '$200+' }
          ].map((option) => (
            <label key={option.id} className="flex items-center cursor-pointer group">
              <input 
                type="radio" 
                name="price"
                checked={filters.priceRange === option.id}
                onChange={() => setFilters(prev => ({ ...prev, priceRange: option.id as any }))}
                className="w-4 h-4 text-brand-orange focus:ring-brand-orange border-gray-300"
              />
              <span className="ml-3 text-gray-600 group-hover:text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Star Rating */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Star Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <label key={rating} className="flex items-center cursor-pointer group">
              <input 
                type="radio" 
                name="rating"
                checked={filters.minRating === rating}
                onChange={() => setFilters(prev => ({ ...prev, minRating: rating === filters.minRating ? 0 : rating }))}
                className="w-4 h-4 text-brand-orange focus:ring-brand-orange border-gray-300"
              />
              <span className="ml-3 flex items-center text-gray-600 group-hover:text-gray-900">
                {renderStars(rating)} <span className="ml-2 text-sm">& up</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Amenities</h3>
        <div className="space-y-2">
          {availableAmenities.map((amenity) => (
            <label key={amenity} className="flex items-center cursor-pointer group">
              <input 
                type="checkbox" 
                checked={filters.amenities.includes(amenity)}
                onChange={() => toggleAmenity(amenity)}
                className="w-4 h-4 text-brand-orange rounded focus:ring-brand-orange border-gray-300"
              />
              <span className="ml-3 text-gray-600 capitalize group-hover:text-gray-900">{amenity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 capitalize">{filteredResults.length} {type}s Found</h2>
            <p className="text-gray-500 text-sm">Showing best results based on your search</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setShowMobileFilters(true)}
              className="md:hidden flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700"
            >
              <Filter size={18} className="mr-2" /> Filters
            </button>

            {/* Sort Dropdown */}
            <div className="relative flex items-center">
              <ArrowUpDown size={18} className="text-gray-500 absolute left-3" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="pl-10 pr-8 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-brand-orange focus:outline-none appearance-none cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating_desc">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center mb-6">
                <SlidersHorizontal size={20} className="text-brand-orange mr-2" />
                <h2 className="font-bold text-lg">Filters</h2>
              </div>
              <FilterPanel />
            </div>
          </aside>

          {/* Mobile Filters Drawer */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)}></div>
              <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button onClick={() => setShowMobileFilters(false)}>
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>
                <FilterPanel />
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full mt-8 bg-brand-orange text-white py-3 rounded-lg font-bold"
                >
                  Show Results
                </button>
              </div>
            </div>
          )}

          {/* Results List */}
          <div className="flex-1 space-y-4">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-64 h-48 sm:h-auto relative flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    {item.tag && (
                      <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                        {item.tag}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col sm:flex-row justify-between">
                    <div className="flex-1 mr-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                          <div className="flex items-center text-gray-500 text-sm mb-2">
                            <MapPin size={14} className="mr-1" /> {item.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        <div className="bg-brand-orange text-white text-sm font-bold px-2 py-0.5 rounded mr-2">
                          {item.rating}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.rating >= 4.5 ? 'Excellent' : 'Very Good'} <span className="text-gray-400">({item.reviewCount} reviews)</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 capitalize">
                            <span className="mr-1.5 text-gray-400">{getAmenityIcon(amenity)}</span>
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="mt-4 sm:mt-0 sm:text-right flex flex-row sm:flex-col justify-between items-end sm:items-end border-t sm:border-t-0 border-gray-100 pt-4 sm:pt-0">
                      <div className="text-left sm:text-right">
                        {item.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">${item.originalPrice}</div>
                        )}
                        <div className="flex items-baseline sm:justify-end">
                          <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                          <span className="text-gray-500 text-sm ml-1">/{type === 'Parking' ? 'day' : 'night'}</span>
                        </div>
                        <div className="text-xs text-green-600 font-medium mt-1">Free Cancellation</div>
                      </div>
                      
                      <button className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition-colors shadow-sm mt-0 sm:mt-4">
                        View Deal
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-12 rounded-xl text-center border border-gray-200">
                <div className="inline-block p-4 bg-gray-50 rounded-full mb-4">
                  <Filter size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more options.</p>
                <button 
                  onClick={() => setFilters({ priceRange: 'all', minRating: 0, amenities: [] })}
                  className="mt-4 text-brand-orange font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};