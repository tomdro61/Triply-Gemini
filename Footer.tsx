import React from 'react';
import { Plane, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-brand-orange p-1.5 rounded-md mr-2">
                 <Plane size={20} fill="currentColor" className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Triply</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Making travel simple, affordable, and smart. Compare hundreds of providers in one click.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { header: "Company", links: ["About Us", "Careers", "Press", "Blog"] },
            { header: "Support", links: ["Help Center", "Terms of Service", "Privacy Policy", "Cookie Policy"] },
            { header: "Services", links: ["Hotels", "Airport Parking", "Car Rentals", "Travel Insurance"] }
          ].map((column, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-lg mb-6">{column.header}</h4>
              <ul className="space-y-3">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Triply Inc. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
             {/* Mock Badges */}
             <div className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-400 font-mono">SSL Secured</div>
             <div className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-400 font-mono">PCI DSS</div>
          </div>
        </div>
      </div>
    </footer>
  );
};