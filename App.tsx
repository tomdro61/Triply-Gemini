import React, { useState } from 'react';
import { Navbar } from './Navbar.tsx';
import { Hero } from './Hero.tsx';
import { FeatureCards } from './FeatureCards.tsx';
import { StatsBar } from './StatsBar.tsx';
import { Comparison } from './Comparison.tsx';
import { ProductSection } from './ProductSection.tsx';
import { BundlesSection } from './BundlesSection.tsx';
import { HowItWorks } from './HowItWorks.tsx';
import { SearchResults } from './SearchResults.tsx';
import { SavingsCalculator } from './SavingsCalculator.tsx';
import { Reviews } from './Reviews.tsx';
import { FAQ } from './FAQ.tsx';
import { Newsletter } from './Newsletter.tsx';
import { Footer } from './Footer.tsx';
import { Product, Bundle, SearchTab } from './types';

const App: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchType, setSearchType] = useState<SearchTab>(SearchTab.HOTELS);

  const handleSearch = (type: SearchTab) => {
    if (type === SearchTab.AI_MODE) return; // AI mode handles itself in Hero
    setSearchType(type);
    setIsSearchActive(true);
    // In a real app, this would trigger an API call or route change
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    setIsSearchActive(false);
  };

  const cities = ['Boston', 'New York', 'Atlanta', 'Chicago'];

  // Bundle Data
  const bundles: Bundle[] = [
    {
      id: 1,
      title: "ORD Premium Package",
      city: "Chicago",
      savings: 72,
      features: ["1 night at Westin O'Hare", "10 days covered parking", "Premium shuttle service", "Lounge access"],
      price: 249
    },
    {
      id: 2,
      title: "JFK Complete Package",
      city: "New York",
      savings: 65,
      features: ["1 night at Hilton JFK", "7 days secure parking", "Round-trip shuttle", "Breakfast included"],
      price: 289
    },
    {
      id: 3,
      title: "BOS Airport Bundle",
      city: "Boston",
      savings: 55,
      features: ["1 night at Hyatt Boston", "6 days secure parking", "Shuttle service included", "Free WiFi"],
      price: 215
    },
    {
      id: 4,
      title: "ATL Convenience Pack",
      city: "Atlanta",
      savings: 48,
      features: ["1 night at Renaissance ATL", "5 days uncovered parking", "24/7 Shuttle", "Coffee voucher"],
      price: 180
    },
    {
      id: 5,
      title: "ORD Saver Bundle",
      city: "Chicago",
      savings: 40,
      features: ["1 night at Holiday Inn", "7 days parking", "Shuttle included"],
      price: 150
    },
     {
      id: 6,
      title: "EWR Jetsetter",
      city: "New York",
      savings: 80,
      features: ["1 night at Newark Marriott", "14 days long-term parking", "Private transfer", "Late checkout"],
      price: 350
    }
  ];

  // Extended Mock Data for Search Results with Cities
  const parkingData: Product[] = [
    // BOSTON
    {
      id: 101,
      title: "Logan Express Parking",
      city: "Boston",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
      subtitle: "0.5 miles to BOS",
      price: 18,
      originalPrice: 28,
      rating: 4.8,
      reviewCount: 1240,
      amenities: ['shuttle', 'security', 'covered'],
      tag: "Save 35%"
    },
    {
      id: 102,
      title: "BOS Park & Go",
      city: "Boston",
      image: "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&q=80&w=800",
      subtitle: "1.2 miles to BOS",
      price: 14,
      originalPrice: 20,
      rating: 4.5,
      reviewCount: 850,
      amenities: ['shuttle', 'security'],
    },
    {
      id: 103,
      title: "Seaport Garage",
      city: "Boston",
      image: "https://images.unsplash.com/photo-1590674899505-1c5c41959359?auto=format&fit=crop&q=80&w=800",
      subtitle: "Downtown Boston",
      price: 32,
      originalPrice: 45,
      rating: 4.7,
      reviewCount: 2100,
      amenities: ['covered', 'security'],
    },
    {
      id: 104,
      title: "Economy Lot E",
      city: "Boston",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      subtitle: "On-Airport BOS",
      price: 25,
      rating: 4.2,
      reviewCount: 3400,
      amenities: ['shuttle'],
      tag: "Best Value"
    },
    // NEW YORK
    {
      id: 201,
      title: "JFK Long Term",
      city: "New York",
      image: "https://images.unsplash.com/photo-1545179605-1296651e9d43?auto=format&fit=crop&q=80&w=800",
      subtitle: "On-Airport JFK",
      price: 22,
      originalPrice: 35,
      rating: 4.3,
      reviewCount: 5400,
      amenities: ['shuttle', 'security'],
    },
    {
      id: 202,
      title: "SmartPark JFK",
      city: "New York",
      image: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?auto=format&fit=crop&q=80&w=800",
      subtitle: "1.5 miles to JFK",
      price: 19,
      originalPrice: 25,
      rating: 4.6,
      reviewCount: 1200,
      amenities: ['shuttle', 'security', 'covered'],
      tag: "Save 24%"
    },
    {
      id: 203,
      title: "EWR Economy",
      city: "New York",
      image: "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&q=80&w=800",
      subtitle: "Newark Airport",
      price: 15,
      originalPrice: 22,
      rating: 4.1,
      reviewCount: 890,
      amenities: ['shuttle'],
    },
     {
      id: 204,
      title: "Manhattan Valet",
      city: "New York",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
      subtitle: "Times Square",
      price: 55,
      originalPrice: 70,
      rating: 4.8,
      reviewCount: 320,
      amenities: ['covered', 'security'],
      tag: "Prime Location"
    },
    // ATLANTA
    {
      id: 301,
      title: "Peachy Airport Parking",
      city: "Atlanta",
      image: "https://images.unsplash.com/photo-1590674899505-1c5c41959359?auto=format&fit=crop&q=80&w=800",
      subtitle: "1 mile to ATL",
      price: 9,
      originalPrice: 14,
      rating: 4.7,
      reviewCount: 3100,
      amenities: ['shuttle', 'covered', 'security'],
      tag: "Best Seller"
    },
    {
      id: 302,
      title: "ATL West Deck",
      city: "Atlanta",
      image: "https://images.unsplash.com/photo-1573348722427-f1d6d197619a?auto=format&fit=crop&q=80&w=800",
      subtitle: "On-Airport",
      price: 16,
      rating: 4.5,
      reviewCount: 1500,
      amenities: ['shuttle'],
    },
    {
      id: 303,
      title: "Park 'N Fly Plus",
      city: "Atlanta",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
      subtitle: "0.8 miles to ATL",
      price: 11,
      originalPrice: 15,
      rating: 4.6,
      reviewCount: 980,
      amenities: ['shuttle', 'security'],
    },
    {
      id: 304,
      title: "Downtown Atlanta Lot",
      city: "Atlanta",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      subtitle: "Near Aquarium",
      price: 20,
      originalPrice: 30,
      rating: 4.3,
      reviewCount: 450,
      amenities: ['security'],
      tag: "Event Parking"
    },
    // CHICAGO
    {
      id: 401,
      title: "O'Hare Blue Lot",
      city: "Chicago",
      image: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?auto=format&fit=crop&q=80&w=800",
      subtitle: "On-Airport ORD",
      price: 18,
      rating: 4.2,
      reviewCount: 2800,
      amenities: ['shuttle', 'security'],
    },
    {
      id: 402,
      title: "PreFlight Airport",
      city: "Chicago",
      image: "https://images.unsplash.com/photo-1590674899505-1c5c41959359?auto=format&fit=crop&q=80&w=800",
      subtitle: "2 miles to ORD",
      price: 12,
      originalPrice: 18,
      rating: 4.7,
      reviewCount: 1100,
      amenities: ['shuttle', 'covered', 'tag: "Save 33%"'],
      tag: "Save 33%"
    },
    {
      id: 403,
      title: "Midway Economy",
      city: "Chicago",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
      subtitle: "On-Airport MDW",
      price: 15,
      rating: 4.1,
      reviewCount: 950,
      amenities: ['shuttle'],
    },
    {
      id: 404,
      title: "Loop Garage",
      city: "Chicago",
      image: "https://images.unsplash.com/photo-1573348722427-f1d6d197619a?auto=format&fit=crop&q=80&w=800",
      subtitle: "Downtown Chicago",
      price: 40,
      originalPrice: 55,
      rating: 4.6,
      reviewCount: 2200,
      amenities: ['covered', 'security'],
      tag: "Central"
    }
  ];

  const hotelData: Product[] = [
    // BOSTON
    {
      id: 501,
      title: "The Liberty Hotel",
      city: "Boston",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      subtitle: "Beacon Hill",
      price: 350,
      originalPrice: 450,
      rating: 4.8,
      reviewCount: 890,
      amenities: ['wifi', 'gym', 'breakfast'],
      tag: "Luxury"
    },
    {
      id: 502,
      title: "Boston Harbor Hotel",
      city: "Boston",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800",
      subtitle: "Waterfront",
      price: 420,
      originalPrice: 550,
      rating: 4.9,
      reviewCount: 1200,
      amenities: ['pool', 'wifi', 'gym', 'breakfast'],
    },
    {
      id: 503,
      title: "YOTEL Boston Seaport",
      city: "Boston",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      subtitle: "Seaport District",
      price: 189,
      originalPrice: 250,
      rating: 4.4,
      reviewCount: 650,
      amenities: ['wifi', 'gym'],
      tag: "Modern"
    },
    {
      id: 504,
      title: "Back Bay Inn",
      city: "Boston",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
      subtitle: "Back Bay",
      price: 145,
      rating: 4.2,
      reviewCount: 320,
      amenities: ['wifi', 'breakfast'],
    },
    // NEW YORK
    {
      id: 601,
      title: "The Plaza",
      city: "New York",
      image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&q=80&w=800",
      subtitle: "5th Avenue",
      price: 850,
      originalPrice: 1200,
      rating: 5.0,
      reviewCount: 3400,
      amenities: ['pool', 'gym', 'wifi', 'breakfast'],
      tag: "Iconic"
    },
    {
      id: 602,
      title: "Pod 39",
      city: "New York",
      image: "https://images.unsplash.com/photo-1505691938895-1cd10273b8be?auto=format&fit=crop&q=80&w=800",
      subtitle: "Midtown East",
      price: 120,
      originalPrice: 180,
      rating: 4.3,
      reviewCount: 2100,
      amenities: ['wifi'],
      tag: "Budget"
    },
    {
      id: 603,
      title: "Arlo SoHo",
      city: "New York",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800",
      subtitle: "SoHo",
      price: 240,
      originalPrice: 320,
      rating: 4.6,
      reviewCount: 980,
      amenities: ['wifi', 'gym', 'breakfast'],
    },
    {
      id: 604,
      title: "1 Hotel Brooklyn Bridge",
      city: "New York",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
      subtitle: "Brooklyn",
      price: 450,
      originalPrice: 580,
      rating: 4.8,
      reviewCount: 1500,
      amenities: ['pool', 'wifi', 'gym'],
      tag: "View"
    },
    // ATLANTA
    {
      id: 701,
      title: "Hyatt Regency",
      city: "Atlanta",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      subtitle: "Downtown",
      price: 180,
      originalPrice: 250,
      rating: 4.5,
      reviewCount: 3100,
      amenities: ['wifi', 'pool', 'gym'],
    },
    {
      id: 702,
      title: "The Georgian Terrace",
      city: "Atlanta",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800",
      subtitle: "Midtown",
      price: 210,
      originalPrice: 280,
      rating: 4.6,
      reviewCount: 1800,
      amenities: ['wifi', 'gym', 'breakfast'],
      tag: "Historic"
    },
    {
      id: 703,
      title: "Hotel Clermont",
      city: "Atlanta",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
      subtitle: "Poncey-Highland",
      price: 165,
      rating: 4.7,
      reviewCount: 920,
      amenities: ['wifi', 'breakfast'],
    },
    {
      id: 704,
      title: "Loews Atlanta",
      city: "Atlanta",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
      subtitle: "Midtown",
      price: 245,
      originalPrice: 320,
      rating: 4.8,
      reviewCount: 1100,
      amenities: ['wifi', 'gym', 'pool'],
    },
    // CHICAGO
    {
      id: 801,
      title: "The Langham",
      city: "Chicago",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
      subtitle: "River North",
      price: 450,
      originalPrice: 600,
      rating: 5.0,
      reviewCount: 2100,
      amenities: ['pool', 'gym', 'wifi', 'breakfast'],
      tag: "Luxury"
    },
    {
      id: 802,
      title: "Palmer House Hilton",
      city: "Chicago",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      subtitle: "The Loop",
      price: 195,
      originalPrice: 280,
      rating: 4.4,
      reviewCount: 5600,
      amenities: ['wifi', 'gym', 'breakfast'],
      tag: "Historic"
    },
    {
      id: 803,
      title: "Freehand Chicago",
      city: "Chicago",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
      subtitle: "River North",
      price: 85,
      originalPrice: 120,
      rating: 4.3,
      reviewCount: 1800,
      amenities: ['wifi'],
      tag: "Budget"
    },
    {
      id: 804,
      title: "Virgin Hotels Chicago",
      city: "Chicago",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800",
      subtitle: "The Loop",
      price: 220,
      originalPrice: 300,
      rating: 4.7,
      reviewCount: 1400,
      amenities: ['wifi', 'gym', 'breakfast'],
    }
  ];

  // Helper to get correct data based on search type
  const getResults = () => {
    if (searchType === SearchTab.HOTELS) return hotelData;
    if (searchType === SearchTab.PARKING) return parkingData;
    // Fallback for other types not fully implemented with mock data
    return hotelData; 
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar onLogoClick={handleLogoClick} />
      
      <main>
        <Hero onSearch={handleSearch} />
        
        {isSearchActive ? (
          <SearchResults 
            results={getResults()} 
            type={searchType}
          />
        ) : (
          // Landing Page View
          <div className="animate-fade-in">
            <StatsBar />
            <FeatureCards />
            
            <div id="parking">
              <ProductSection 
                title="Featured Parking Options" 
                subtitle="Secure spots at the best rates near you"
                type="parking"
                products={parkingData}
                cities={cities}
                background="white"
              />
            </div>

            <BundlesSection bundles={bundles} cities={cities} background="gray" />

            {/* Hidden as requested
            <div id="hotels">
              <ProductSection 
                title="Top-Rated Hotels Near You" 
                subtitle="Comfort and luxury for every budget"
                type="hotel"
                products={hotelData}
                cities={cities}
                background="white"
              />
            </div>
            */}

            <Comparison />
            <SavingsCalculator />
            <HowItWorks />
            <Reviews />
            <FAQ />
            <Newsletter />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
