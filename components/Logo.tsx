
import React from 'react';

const Logo: React.FC<{ className?: string, light?: boolean }> = ({ className = "h-12", light = false }) => {
  const textColor = light ? 'text-white' : 'text-slate-800';
  const subTextColor = light ? 'text-white/90' : 'text-teal-700';
  const foundationColor = light ? 'text-white/50' : 'text-slate-500';

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-14 h-14 drop-shadow-sm">
          {/* Heart - Main Shape */}
          <path d="M50 85C50 85 15 65 15 35C15 15 45 15 50 30C55 15 85 15 85 35C85 65 50 85 50 85Z" fill="#ef4444" />
          {/* Teal Wave Overlay */}
          <path d="M20 55C30 65 50 75 80 50C85 40 85 30 85 30C85 30 70 70 50 75C30 80 15 65 20 55Z" fill="#33899c" />
          {/* Internal white dots */}
          <circle cx="50" cy="38" r="4" fill="white" />
          <circle cx="38" cy="45" r="3" fill="white" />
          <circle cx="62" cy="45" r="3" fill="white" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-3xl font-black tracking-tighter uppercase mb-0 ${textColor}`}>
          HUMANE
        </span>
        <span className={`text-lg font-bold tracking-tight uppercase mb-0.5 ${subTextColor}`}>
          EDUCATION
        </span>
        <span className={`text-[8px] font-extrabold tracking-[0.05em] uppercase whitespace-nowrap ${foundationColor}`}>
          AND EMPOWERMENT FOUNDATION
        </span>
      </div>
    </div>
  );
};

export default Logo;
