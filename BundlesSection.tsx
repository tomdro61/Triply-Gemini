import React, { useState, useMemo } from 'react';
import { ArrowUpDown, Check, ArrowRight } from 'lucide-react';
import { Bundle } from '../types';

interface BundlesSectionProps {
  bundles: Bundle[];
  cities: string[];
  background?: 'white' | 'gray';
}

export const BundlesSection: React.FC<BundlesSectionProps> = ({ 
  bundles, 
  cities,
  background = 'white'
}) => {
  const [activeCity, setActiveCity] = useState<string>('All');

  const displayBundles = useMemo(() => {
    let filtered = activeCity === 'All' ? bundles : bundles.filter(b => b.city === activeCity);
    return filtered.sort((a, b) => b.savings - a.savings).slice(0, 3);
  }, [bundles, activeCity]);

  const allCities = ['All', ...cities];
  const bgClass = background === 'gray' ? 'bg-brand-gray' : 'bg-white';

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Save more with Park + Sleep + Fly bundles</h2>
          <p className="text-gray-500 mt-2">Bundle your parking with a hotel stay and save up to 40%</p>
        </div>

        {/* Controls Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          {/* City Pills */}
          <div className="flex space-x-2 overflow-x-auto no-scrollbar w-full md:w-auto p-1">
            {allCities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
                  activeCity === city
                    ? 'bg-brand-orange text-white border-brand-orange shadow-md transform scale-105'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Sort Button */}
          <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 font-medium text-sm whitespace-nowrap">
            <ArrowUpDown size={16} className="mr-2" />
            Highest Savings
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayBundles.map((bundle) => (
            <div key={bundle.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              
              <div className="mb-4">
                <span className="inline-block bg-blue-50 text-brand-blue text-sm font-bold px-3 py-1 rounded-md mb-3">
                  Save ${bundle.savings}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{bundle.title}</h3>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {bundle.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 text-sm">
                    <div className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Package Total</span>
                    <span className="text-2xl font-bold text-gray-900">${bundle.price}</span>
                 </div>
                 <button className="text-brand-orange font-bold hover:underline flex items-center">
                    View Bundle <ArrowRight size={16} className="ml-1" />
                 </button>
              </div>

            </div>
          ))}
          
          {displayBundles.length === 0 && (
            <div className="col-span-3 text-center py-12 bg-white rounded-xl border border-gray-200 border-dashed">
              <p className="text-gray-500">No bundles available for {activeCity} right now.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};