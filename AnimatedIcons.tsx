import React from 'react';

// Common animations
const styles = `
  @keyframes triply-float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-3px); } }
  @keyframes triply-drive { 0% { transform: translateX(-2px); } 50% { transform: translateX(2px); } 100% { transform: translateX(-2px); } }
  @keyframes triply-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
  @keyframes triply-bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
`;

export const AnimatedParkingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      .p-car { animation: triply-drive 3s ease-in-out infinite; }
      ${styles}
    `}</style>
    
    {/* Sign Post */}
    {/* Rounded sign - using brand blue */}
    <rect x="60" y="5" width="32" height="32" rx="8" fill="#5773BE" stroke="#3E538A" strokeWidth="2.5" />
    <text x="76" y="28" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="sans-serif" style={{ filter: 'drop-shadow(0px 1px 0px rgba(0,0,0,0.1))' }}>P</text>
    {/* Pole with rounded cap */}
    <path d="M76 37 V70" stroke="#4B5563" strokeWidth="4" strokeLinecap="round" />
    
    {/* Car - Rounder shape */}
    <g className="p-car" transform="translate(0, 5)">
       {/* Body */}
       <path d="M12 52 C12 52 18 42 25 42 H50 C57 42 63 52 63 52 V60 C63 63 60 65 57 65 H18 C15 65 12 63 12 60 Z" fill="#FB923C" stroke="#EA580C" strokeWidth="2.5" strokeLinejoin="round" />
       {/* Wheels */}
       <circle cx="22" cy="65" r="5" fill="#374151" />
       <circle cx="53" cy="65" r="5" fill="#374151" />
       <circle cx="22" cy="65" r="2" fill="#9CA3AF" />
       <circle cx="53" cy="65" r="2" fill="#9CA3AF" />
       {/* Window */}
       <path d="M26 45 H49 L54 52 H21 L26 45 Z" fill="#FEF3C7" opacity="0.8" />
    </g>
    
    {/* Ground */}
    <path d="M8 72 H92" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const AnimatedHotelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      .h-win { animation: triply-blink 4s infinite; }
      .h-win-2 { animation: triply-blink 4s infinite 2s; }
      ${styles}
    `}</style>
    
    {/* Building - softer corners */}
    <rect x="28" y="22" width="44" height="50" rx="6" fill="#FB923C" stroke="#EA580C" strokeWidth="2.5" />
    
    {/* Sign - pill shape */}
    <rect x="32" y="10" width="36" height="16" rx="8" fill="#FFFFFF" stroke="#4B5563" strokeWidth="2" />
    <text x="50" y="21" fontSize="7" fontWeight="bold" fill="#4B5563" textAnchor="middle" fontFamily="sans-serif">HOTEL</text>
    
    {/* Door - arch */}
    <path d="M42 72 V58 C42 55 58 55 58 58 V72" fill="#FEF3C7" stroke="#4B5563" strokeWidth="2" strokeLinejoin="round" />
    
    {/* Windows - rounded squares */}
    <rect x="35" y="32" width="10" height="10" rx="3" fill="#FEF3C7" className="h-win" />
    <rect x="55" y="32" width="10" height="10" rx="3" fill="#FEF3C7" className="h-win-2" />
    <rect x="35" y="46" width="10" height="10" rx="3" fill="#FEF3C7" className="h-win-2" />
    <rect x="55" y="46" width="10" height="10" rx="3" fill="#FEF3C7" className="h-win" />
    
    <path d="M15 72 H85" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const AnimatedTransferIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      .bus-body { animation: triply-float 2.5s ease-in-out infinite; }
      ${styles}
    `}</style>
    
    <g className="bus-body">
      {/* Main Body - very round, using brand blue */}
      <rect x="15" y="30" width="70" height="32" rx="10" fill="#5773BE" stroke="#3E538A" strokeWidth="2.5" />
      
      {/* Stripe */}
      <path d="M15 48 H85" stroke="#3E538A" strokeWidth="4" />

      {/* Windows - continuous strip or rounded rects */}
      <rect x="20" y="35" width="16" height="10" rx="3" fill="#DBEAFE" />
      <rect x="42" y="35" width="16" height="10" rx="3" fill="#DBEAFE" />
      <rect x="64" y="35" width="16" height="10" rx="3" fill="#DBEAFE" />
      
      {/* Wheels */}
      <circle cx="30" cy="62" r="6" fill="#374151" stroke="#1F2937" strokeWidth="2" />
      <circle cx="70" cy="62" r="6" fill="#374151" stroke="#1F2937" strokeWidth="2" />
      <circle cx="30" cy="62" r="2.5" fill="#9CA3AF" />
      <circle cx="70" cy="62" r="2.5" fill="#9CA3AF" />
    </g>
    
    {/* Motion Lines - rounded caps */}
    <path d="M10 66 H6" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
    <path d="M18 66 H16" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const AnimatedBundleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      .b-float { animation: triply-float 3s ease-in-out infinite; }
      .b-pulse { animation: triply-bounce 3s ease-in-out infinite; }
      ${styles}
    `}</style>
    
    {/* Hotel behind */}
    <g transform="translate(45, 8) scale(0.75)">
      <rect x="28" y="22" width="44" height="50" rx="6" fill="#FB923C" stroke="#EA580C" strokeWidth="2.5" />
      <rect x="32" y="10" width="36" height="16" rx="8" fill="#FFFFFF" stroke="#4B5563" strokeWidth="2" />
      <text x="50" y="21" fontSize="7" fontWeight="bold" fill="#4B5563" textAnchor="middle" fontFamily="sans-serif">HOTEL</text>
      <rect x="35" y="32" width="10" height="10" rx="3" fill="#FEF3C7" />
      <rect x="55" y="32" width="10" height="10" rx="3" fill="#FEF3C7" />
    </g>
    
    {/* Sign */}
    <g transform="translate(15, 22) scale(0.7)">
      {/* Brand blue */}
      <rect x="60" y="5" width="32" height="32" rx="8" fill="#5773BE" stroke="#3E538A" strokeWidth="2.5" />
      <text x="76" y="28" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="sans-serif">P</text>
      <path d="M76 37 V70" stroke="#4B5563" strokeWidth="4" strokeLinecap="round" />
    </g>
    
    {/* Plus sign connecting them */}
    <circle cx="50" cy="50" r="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" className="b-pulse" />
    <path d="M50 45 V55 M45 50 H55" stroke="#F97316" strokeWidth="3" strokeLinecap="round" className="b-pulse" />

    {/* Car */}
    <g className="b-float" transform="translate(0, 28) scale(0.6)">
      <path d="M12 52 C12 52 18 42 25 42 H50 C57 42 63 52 63 52 V60 C63 63 60 65 57 65 H18 C15 65 12 63 12 60 Z" fill="#F97316" stroke="#C2410C" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="22" cy="65" r="5" fill="#374151" />
      <circle cx="53" cy="65" r="5" fill="#374151" />
    </g>
    
  </svg>
);