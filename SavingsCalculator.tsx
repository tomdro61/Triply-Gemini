import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Hotel, Calendar } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [airport, setAirport] = useState('ORD');
  const [days, setDays] = useState(7);
  const [includeHotel, setIncludeHotel] = useState(false);
  const [savings, setSavings] = useState(0);
  const [percent, setPercent] = useState(0);

  // Mock data for calculation
  const airports = [
    { code: 'BOS', name: 'Boston Logan (BOS)', parkingSave: 15 },
    { code: 'JFK', name: 'New York (JFK)', parkingSave: 18 },
    { code: 'ORD', name: 'Chicago O\'Hare (ORD)', parkingSave: 12 },
    { code: 'ATL', name: 'Atlanta (ATL)', parkingSave: 10 },
    { code: 'LAX', name: 'Los Angeles (LAX)', parkingSave: 20 },
  ];

  useEffect(() => {
    const selectedAirport = airports.find(a => a.code === airport) || airports[0];
    
    // Calculate Parking Savings
    // Assume standard drive-up is $30/day, Triply is standard - parkingSave
    const parkingSavingsTotal = selectedAirport.parkingSave * days;

    // Calculate Hotel Savings
    // Assume standard hotel near airport is $200, Triply bundle saves typically $70
    const hotelSavingsTotal = includeHotel ? 75 : 0;

    const totalSavings = parkingSavingsTotal + hotelSavingsTotal;

    // Calculate Percentage
    // Competitor Total Cost
    const dailyCompetitorRate = 35; // avg
    let competitorTotal = dailyCompetitorRate * days;
    if (includeHotel) {
      competitorTotal += 220; // avg hotel night
    }

    const calculatedPercent = Math.min(Math.round((totalSavings / competitorTotal) * 100), 60);

    setSavings(totalSavings);
    setPercent(calculatedPercent);
  }, [airport, days, includeHotel]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark rounded-2xl shadow-2xl overflow-hidden text-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Input Section */}
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-brand-orange p-2 rounded-lg mr-3">
                  <Calculator size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">Calculate Your Savings</h2>
              </div>
              <p className="text-gray-400 mb-8">See how much you can save compared to standard airport drive-up rates.</p>

              <div className="space-y-6">
                {/* Airport Selector */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 uppercase mb-2">Select Airport</label>
                  <select 
                    value={airport}
                    onChange={(e) => setAirport(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none"
                  >
                    {airports.map(a => (
                      <option key={a.code} value={a.code}>{a.name}</option>
                    ))}
                  </select>
                </div>

                {/* Duration Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-gray-300 uppercase">Trip Duration</label>
                    <span className="text-brand-orange font-bold">{days} Days</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    value={days} 
                    onChange={(e) => setDays(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 Day</span>
                    <span>30 Days</span>
                  </div>
                </div>

                {/* Hotel Toggle */}
                <label className="flex items-center p-4 bg-gray-800 rounded-lg cursor-pointer border border-gray-700 hover:border-gray-600 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={includeHotel}
                    onChange={(e) => setIncludeHotel(e.target.checked)}
                    className="w-5 h-5 text-brand-orange rounded focus:ring-brand-orange bg-gray-700 border-gray-500"
                  />
                  <div className="ml-3 flex items-center">
                    <Hotel className="text-gray-400 mr-2" size={18} />
                    <span className="text-gray-200 font-medium">Include Hotel Stay</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Output Section */}
            <div className="bg-brand-orange p-8 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 text-white opacity-10 transform rotate-12">
                <DollarSign size={200} />
              </div>
              
              <h3 className="text-white text-opacity-90 font-medium text-lg mb-2 relative z-10">Estimated Savings</h3>
              
              <div className="flex items-start justify-center relative z-10">
                <span className="text-4xl font-bold mt-2 mr-1">$</span>
                <span className="text-7xl md:text-8xl font-bold tracking-tighter">{savings}</span>
              </div>

              <div className="mt-4 inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1.5 relative z-10">
                <span className="font-bold text-white text-sm">Save approx. {percent}%</span>
              </div>

              <p className="text-white text-opacity-80 text-sm mt-8 max-w-xs mx-auto relative z-10">
                Based on average daily rates for {airport} compared to exclusive Triply member pricing.
              </p>

              <button className="mt-8 bg-white text-brand-orange font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105 active:scale-95 relative z-10">
                Find These Deals
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};