
import React from 'react';

const ImpactStats: React.FC = () => {
  const stats = [
    { label: 'Out-of-school Children Enrolled', value: '2,400', icon: '🎓' },
    { label: 'Youths Skillfully Empowered', value: '850', icon: '🛠️' },
    { label: 'Communities Impacted', value: '12', icon: '🏠' },
    { label: 'Partners & Supporters', value: '50+', icon: '🤝' },
  ];

  return (
    <section id="impact" className="py-12 bg-teal-900 -mt-10 relative z-20 container mx-auto rounded-xl shadow-2xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center group border-r border-teal-800/50 last:border-0">
            <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-teal-400 font-medium uppercase text-xs tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
