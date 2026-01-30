import React from 'react';

const ImpactStats: React.FC = () => {
  // Provided raw image URL for the notebook texture
  const noteImageUrl = "https://raw.githubusercontent.com/Glee-sensei/HEDEF/9b7c365df4d42c7ae3564a85272830b8971db348/assets/NOTE.jpg";

  const milestones = [
    {
      action: 'Advancing',
      label: 'Education for thousands of children',
      target: '5,000+',
      percent: 45,
      icon: '🎓',
      color: 'teal'
    },
    {
      action: 'Equipping',
      label: 'Youths with vital employable skills',
      target: '1,500',
      percent: 60,
      icon: '🛠️',
      color: 'red'
    },
    {
      action: 'Expanding',
      label: 'Into new communities every month',
      target: '25+',
      percent: 40,
      icon: '🏠',
      color: 'teal'
    },
    {
      action: 'Building',
      label: 'A network of dedicated supporters',
      target: '200+',
      percent: 30,
      icon: '🤝',
      color: 'red'
    },
  ];

  return (
    <section id="impact" className="py-32 md:py-48 bg-slate-950 relative overflow-hidden">
      {/* 
        IMAGE OVERLAY BORDERS
        Integrating the NOTE.jpg as a decorative, textured border at the top and bottom.
        Using a low opacity and mask to blend it seamlessly into the dark background.
      */}
      <div className="absolute top-0 left-0 right-0 h-64 z-0 pointer-events-none overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center opacity-20 transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url('${noteImageUrl}')`,
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
          }}
        ></div>
        {/* Subtle glowing line at the very top edge */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 z-0 pointer-events-none overflow-hidden rotate-180">
        <div 
          className="w-full h-full bg-cover bg-center opacity-20 transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url('${noteImageUrl}')`,
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
          }}
        ></div>
        {/* Subtle glowing line at the very bottom edge */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      </div>

      {/* Atmospheric Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-teal-600/10 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-red-600/5 blur-[140px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
          <div className="inline-flex items-center px-5 py-2 mb-10 bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl">
            <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 mr-4 animate-pulse"></span>
            <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">Scaling Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
            Our Commitment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-white">to the Future</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
            We've moved beyond tracking current numbers to aggressively chasing our 2026 milestones. Every project is a step toward systemic change.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">
          {milestones.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/[0.02] backdrop-blur-3xl p-10 md:p-12 rounded-[3rem] border border-white/5 flex flex-col h-full hover:bg-white/[0.04] hover:border-white/10 transition-all duration-700 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
            >
              {/* Decorative faint icon in background */}
              <div className="absolute -right-6 -bottom-6 text-[12rem] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none transform rotate-12">
                {item.icon}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl mb-10 flex items-center justify-center text-4xl shadow-2xl transition-transform duration-500 group-hover:scale-110 ${item.color === 'teal' ? 'bg-teal-500/20 text-teal-400 border border-teal-500/20' : 'bg-red-500/20 text-red-400 border border-red-500/20'}`}>
                  {item.icon}
                </div>
                
                <h3 className={`font-black text-[11px] uppercase tracking-[0.4em] mb-6 ${item.color === 'teal' ? 'text-teal-400' : 'text-red-400'}`}>
                  {item.action}
                </h3>
                <p className="text-white font-serif text-3xl leading-snug mb-12 group-hover:text-teal-50 transition-colors">
                  {item.label}
                </p>

                <div className="mt-auto pt-10 border-t border-white/5 space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-5">
                      <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Goal Alignment</span>
                      <span className="text-white/40 font-mono text-xs italic">Moving fast</span>
                    </div>
                    
                    {/* Progressive Loading Shimmer Bar */}
                    <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden p-[1px]">
                      <div 
                        className={`h-full rounded-full transition-all duration-[2500ms] ease-out relative ${item.color === 'teal' ? 'bg-gradient-to-r from-teal-600 to-teal-400' : 'bg-gradient-to-r from-red-600 to-red-400'}`}
                        style={{ width: `${item.percent}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3 flex items-center">
                      <span className={`w-1.5 h-1.5 rounded-full mr-3 animate-pulse ${item.color === 'teal' ? 'bg-teal-500' : 'bg-red-500'}`}></span>
                      2026 Target
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-black text-4xl md:text-5xl tracking-tighter group-hover:translate-x-1 transition-transform">{item.target}</span>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${item.color === 'teal' ? 'border-teal-500/30 bg-teal-500/5 text-teal-400 group-hover:bg-teal-500 group-hover:text-white' : 'border-red-500/30 bg-red-500/5 text-red-400 group-hover:bg-red-500 group-hover:text-white'}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Section */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 via-red-500 to-teal-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <a 
              href="#/donate" 
              className="relative inline-flex items-center justify-center px-16 py-7 md:px-20 md:py-8 font-black text-white transition-all duration-500 bg-white/5 hover:bg-white/10 backdrop-blur-3xl rounded-[2rem] focus:outline-none border border-white/10 hover:border-white/20 hover:scale-[1.02]"
            >
              <span className="flex items-center text-xl md:text-2xl uppercase tracking-[0.3em]">
                Become a Partner
                <svg className="w-8 h-8 ml-6 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </a>
          </div>
          <p className="mt-12 text-slate-500 text-[11px] font-black uppercase tracking-[0.5em] text-center opacity-60">
            Bridging the gap for a dignified future
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>
    </section>
  );
};

export default ImpactStats;