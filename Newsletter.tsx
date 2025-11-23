import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-brand-blue text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 mix-blend-overlay opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-6 backdrop-blur-sm shadow-sm">
          <Mail className="w-6 h-6 text-white" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
          Get 10% off your first booking
        </h2>
        
        <p className="text-blue-100 text-base mb-8 max-w-xl mx-auto leading-relaxed">
          Join 50,000+ travelers. Subscribe to our newsletter to receive exclusive travel deals, secret offers, and trip inspiration sent directly to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 shadow-lg font-medium transition-all"
            required
          />
          <button className="px-6 py-3 bg-brand-orange text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center group whitespace-nowrap">
            Subscribe
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <p className="text-blue-200 text-xs mt-4 font-medium">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};