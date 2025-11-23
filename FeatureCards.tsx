import React from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  AnimatedParkingIcon, 
  AnimatedHotelIcon, 
  AnimatedTransferIcon, 
  AnimatedBundleIcon 
} from './AnimatedIcons';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      title: "Airport Parking",
      description: "Secure, guaranteed spots at unbeatable rates near major hubs.",
      icon: AnimatedParkingIcon,
      link: "#parking"
    },
    {
      title: "Hotels",
      description: "Cozy stays, business suites, and luxury resorts for every budget.",
      icon: AnimatedHotelIcon,
      link: "#hotels"
    },
    {
      title: "Transfers",
      description: "Reliable shuttles and private rides to get you to your destination.",
      icon: AnimatedTransferIcon,
      link: "#"
    },
    {
      title: "Bundles",
      description: "Combine parking and hotel stays to save up to 40% instantly.",
      icon: AnimatedBundleIcon,
      link: "#"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <a 
              key={index} 
              href={feature.link}
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
            >
              <div className="w-full h-28 flex items-center justify-center mb-4 overflow-visible">
                <feature.icon 
                  className="w-32 h-32 group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-sm" 
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-brand-orange transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 text-sm mb-6 leading-relaxed text-center">
                {feature.description}
              </p>
              
              <div className="flex items-center justify-center text-brand-orange font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="mr-2">View Options</span>
                <ArrowRight 
                  size={16} 
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};