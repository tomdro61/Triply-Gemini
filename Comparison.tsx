import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const Comparison: React.FC = () => {
  const cons = [
    "Limited options from single providers",
    "Hours of research across multiple tabs",
    "Hidden fees added at checkout",
    "No guarantee you found the lowest price"
  ];

  const pros = [
    "Compare 100s of providers instantly",
    "AI-powered recommendations",
    "Transparent pricing with no surprises",
    "Best Price Guarantee or we pay the difference",
    "Exclusive member-only deals",
    "Free cancellation on most bookings"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Triply?</h2>
          <p className="text-gray-500 mt-2">See the difference smart travel booking makes</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Triply */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-300"></div>
            <h3 className="text-xl font-bold text-gray-600 mb-6">Booking Before Triply</h3>
            <ul className="space-y-4">
              {cons.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-500">
                  <XCircle className="text-red-400 w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="line-through decoration-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Triply */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-brand-orange relative transform md:-translate-y-4">
            <div className="absolute -top-3 right-8 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Recommended
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Booking With Triply</h3>
            <ul className="space-y-4">
              {pros.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-800 font-medium">
                  <CheckCircle2 className="text-brand-orange w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};