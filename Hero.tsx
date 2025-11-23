import React, { useState } from 'react';
import { SearchTab } from '../types';
import { planTrip } from '../services/geminiService';
import { 
  Car, 
  Hotel, 
  Package, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Loader2,
  SquareParking
} from 'lucide-react';

interface HeroProps {
  onSearch: (tab: SearchTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<SearchTab>(SearchTab.HOTELS);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSearch(activeTab);
    }, 1000); 
  };

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    
    setIsLoading(true);
    setAiResponse(null);
    const result = await planTrip(aiPrompt);
    setAiResponse(result);
    setIsLoading(false);
  };

  const tabs = [
    { id: SearchTab.PARKING, icon: SquareParking, label: 'Parking' },
    { id: SearchTab.HOTELS, icon: Hotel, label: 'Hotels' },
    { id: SearchTab.CARS, icon: Car, label: 'Cars' },
    { id: SearchTab.PACKAGES, icon: Package, label: 'Packages' },
    { id: SearchTab.AI_MODE, icon: Sparkles, label: 'AI Mode' },
  ];

  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center pt-20" 
         style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80')` }}>
      
      <div className="w-full max-w-5xl px-4 sm:px-6 relative z-10 pb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 drop-shadow-lg">
          Your Trip, <br/><span className="text-brand-orange">Simplified</span>
        </h1>

        {/* Search Container */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          
          {/* Tabs */}
          <div className="flex overflow-x-auto no-scrollbar border-b border-gray-200 bg-gray-50">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center px-6 py-4 min-w-[100px] md:flex-1 transition-colors text-sm md:text-base font-medium
                    ${isActive ? 'bg-white text-brand-orange border-b-2 border-brand-orange' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}
                  `}
                >
                  <tab.icon size={18} className={`mr-2 ${isActive ? 'stroke-2' : 'stroke-1'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="p-4 md:p-6 bg-white">
            {activeTab === SearchTab.AI_MODE ? (
              // AI Mode Interface
              <div className="animate-fade-in">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <Sparkles className="text-brand-orange mr-2" size={20} />
                  Let AI plan your dream trip
                </h2>
                <form onSubmit={handleAiSubmit}>
                  <div className="relative">
                    <textarea 
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none h-32"
                      placeholder="Tell me about your dream trip... (e.g., 'A romantic weekend in Kyoto under $1500 with sushi classes')"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                    />
                    <button 
                      type="submit"
                      disabled={isLoading || !aiPrompt}
                      className="absolute bottom-4 right-4 bg-brand-orange text-white p-2 rounded-full hover:bg-orange-600 disabled:bg-gray-300 transition-all"
                    >
                      {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles />}
                    </button>
                  </div>
                </form>
                
                {aiResponse && (
                  <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-100 text-gray-800 animate-fade-in">
                     <h3 className="font-bold text-brand-orange mb-2">Triply AI Suggestion:</h3>
                     <div className="prose prose-sm max-w-none">
                        <p className="whitespace-pre-line">{aiResponse}</p>
                     </div>
                  </div>
                )}
              </div>
            ) : (
              // Standard Search Interface
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end animate-fade-in">
                
                {/* Location */}
                <div className="md:col-span-4 relative group">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Where to?</label>
                  <div className="relative flex items-center">
                    <MapPin className="absolute left-3 text-brand-blue opacity-80" size={20} />
                    <input 
                      type="text" 
                      placeholder="City, Airport, or Address" 
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none font-medium text-gray-900 group-hover:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Depart Date */}
                <div className="md:col-span-3 relative group">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Depart</label>
                  <div className="relative flex items-center">
                    <Calendar className="absolute left-3 text-brand-blue opacity-80" size={20} />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none font-medium text-gray-900 group-hover:bg-white transition-colors cursor-pointer"
                      onClick={(e) => (e.target as any).showPicker?.()}
                    />
                  </div>
                </div>

                {/* Return Date */}
                <div className="md:col-span-3 relative group">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Return</label>
                  <div className="relative flex items-center">
                    <Calendar className="absolute left-3 text-brand-blue opacity-80" size={20} />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none font-medium text-gray-900 group-hover:bg-white transition-colors cursor-pointer"
                      onClick={(e) => (e.target as any).showPicker?.()}
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="md:col-span-2">
                  <button 
                    onClick={handleSearch}
                    disabled={isLoading}
                    className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin h-6 w-6" />
                    ) : (
                      <>Search</>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};