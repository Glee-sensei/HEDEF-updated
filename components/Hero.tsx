import React from 'react';

const Hero: React.FC = () => {
  // Using the raw GitHub URL provided by the user
  const bgImageUrl = "https://raw.githubusercontent.com/Glee-sensei/HEDEF/c208c81c63800b2db6fd273f3813686734fd8ac5/assets/SDG%20BUILDING.jpg";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 scale-100 animate-[slow-zoom_40s_ease-in-out_infinite]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.85) 100%), url('${bgImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content Layer */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl">
          
          {/* THE FLOATING BORDER BADGE */}
          <div className="inline-flex items-center space-x-3 md:space-x-4 px-4 md:px-6 py-2.5 md:py-3 mb-10 md:mb-16 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform hover:scale-105 transition-all duration-500">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-3 md:w-4 h-3 md:h-4 bg-red-600 rounded-full animate-ping opacity-30"></span>
              <span className="relative w-2.5 md:w-3.5 h-2.5 md:h-3.5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]"></span>
            </div>
            <span className="text-white font-bold text-[9px] md:text-sm tracking-[0.2em] md:tracking-[0.35em] uppercase leading-none pr-1">
              Sustainable Development Goals Aligned
            </span>
          </div>
          
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white leading-[1.1] md:leading-[1.05] drop-shadow-2xl">
              Every Child <span className="text-red-600 block sm:inline italic">Learns</span>, <br className="hidden md:block" />
              Every Youth <span className="text-teal-400">Earns</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl font-light drop-shadow-lg">
              Returning children to school and equipping youth with employable skills for a dignified future in Benin City.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
              <a 
                href="#about" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all shadow-2xl shadow-teal-900/50 transform hover:-translate-y-1 flex items-center justify-center group"
              >
                Our Mission
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a 
                href="#/partner"
                className="bg-red-600 hover:bg-red-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-900/50 flex items-center justify-center"
              >
                Partner with HEdEF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SDG-colored bar at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 md:h-2 flex opacity-80">
        <div className="flex-grow bg-[#E5243B]"></div>
        <div className="flex-grow bg-[#DDA63A]"></div>
        <div className="flex-grow bg-[#4C9F38]"></div>
        <div className="flex-grow bg-[#C5192D]"></div>
        <div className="flex-grow bg-[#FF3A21]"></div>
        <div className="flex-grow bg-[#26BDE2]"></div>
        <div className="flex-grow bg-[#FCC30B]"></div>
        <div className="flex-grow bg-[#A21942]"></div>
        <div className="flex-grow bg-[#FD6925]"></div>
        <div className="flex-grow bg-[#DD1367]"></div>
        <div className="flex-grow bg-[#FF9D24]"></div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.05) translate(-0.5%, -0.25%); }
          100% { transform: scale(1) translate(0, 0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;