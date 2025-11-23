import React, { useState, useEffect } from 'react';
import { Plane, Menu, X, User } from 'lucide-react';

interface NavbarProps {
  onLogoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLogoClick) {
      onLogoClick();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <div className="bg-brand-orange text-white p-2 rounded-lg mr-2">
              <Plane size={24} fill="currentColor" />
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} tracking-tight`}>Triply</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Deals', 'Support', 'Trips'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className={`font-medium hover:text-brand-orange transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}
              >
                {item}
              </a>
            ))}
            <button className={`bg-brand-orange text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md`}>
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 animate-fade-in">
          {['Deals', 'Support', 'Trips'].map((item) => (
            <a key={item} href="#" className="text-gray-800 font-medium py-2 border-b border-gray-100">
              {item}
            </a>
          ))}
          <button className="bg-brand-orange text-white px-5 py-3 rounded-lg font-bold w-full flex justify-center items-center">
            <User size={20} className="mr-2" /> Sign In
          </button>
        </div>
      )}
    </nav>
  );
};