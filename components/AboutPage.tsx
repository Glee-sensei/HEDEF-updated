import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      title: "Education Access & Equity",
      desc: "We work to ensure that every child—regardless of socioeconomic background—has access to quality education, learning materials, and a supportive environment to succeed academically.",
      icon: "🎓"
    },
    {
      title: "Vocational Training",
      desc: "We provide targeted vocational and skills-based training programs that equip youths with industry-relevant competencies for employability and innovation.",
      icon: "🛠️"
    },
    {
      title: "Economic Empowerment",
      desc: "Through job placement support and entrepreneurship development, we promote economic independence and sustainable livelihoods among young people.",
      icon: "💰"
    },
    {
      title: "Community Engagement",
      desc: "We engage communities and collaborate with stakeholders to influence policies that support youth empowerment and social inclusion.",
      icon: "🤝"
    },
    {
      title: "Sustainable Partnerships",
      desc: "We build strategic partnerships with government and private sectors to scale impact and deliver effective, long-term development solutions.",
      icon: "🔗"
    }
  ];

  const outcomes = [
    "Increased school enrollment and literacy rates among children",
    "Reduced cases of street hawking and child labor",
    "Improved employability and self-reliance among youths",
    "Stronger economic stability within vulnerable communities"
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-teal-950 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
            Advancing <span className="text-teal-400">Equity</span>, <br />
            Empowering <span className="text-red-500">Futures</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed">
            Humane Initiative is a youth-led nonprofit organization committed to quality education, economic empowerment, and social equity in underserved communities.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-teal-900 leading-tight">
                About Humane Initiative
              </h2>
              <div className="w-20 h-1.5 bg-red-500"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Founded on the belief that education is a fundamental human right and a powerful driver of sustainable development, the Initiative works to ensure that no child is denied learning opportunities and no youth is left without the skills needed to thrive.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our work is directly aligned with the United Nations Sustainable Development Goals (SDGs), particularly SDG 4 (Quality Education), SDG 8 (Decent Work and Economic Growth), SDG 1 (No Poverty), and SDG 10 (Reduced Inequalities).
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-teal-50 p-8 rounded-3xl border border-teal-100 shadow-inner">
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-teal-900 font-bold mb-2 uppercase tracking-widest text-xs">Our Mission</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      To advance quality education and economic empowerment by providing out-of-school children with access to formal education and vocational training.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-teal-900 font-bold mb-2 uppercase tracking-widest text-xs">Our Vision</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      A society where every child has access to quality education and every youth is equipped with the skills needed to contribute meaningfully to economic development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
               <div className="relative">
                 <div className="absolute -inset-4 bg-teal-600/5 rounded-3xl -rotate-2"></div>
                 <img 
                    src="https://raw.githubusercontent.com/Glee-sensei/HEDEF/9b7c365df4d42c7ae3564a85272830b8971db348/assets/284427959_149848907590891_8955459757128365130_n.jpg" 
                    alt="Humane Initiative Community Outreach" 
                    className="relative z-10 rounded-2xl shadow-2xl w-full h-[450px] object-cover"
                 />
               </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif text-teal-900">Our Story</h2>
              <p className="text-slate-600 leading-relaxed">
                Humane Initiative was founded in 2021 by a group of microbiology students at the <span className="font-bold text-teal-700">University of Benin</span>, driven by concern over the growing number of children out of school and engaged in street hawking.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Witnessing the long-term social and economic consequences of limited access to education, the founders were inspired to act. The Initiative was established to "educate the growing age and empower the working age," bridging the gap between access to learning and livelihood opportunities.
              </p>
              <div className="p-6 bg-white rounded-2xl border-l-4 border-red-500 shadow-sm italic text-slate-700">
                "We respond to challenges by combining educational sponsorships, vocational training, and mentorship to address both immediate needs and long-term outcomes."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-6">Our Five Pillars</h2>
            <p className="text-slate-600">These core principles guide our programs and ensure we create a sustainable impact in the communities we serve.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-teal-900 hover:border-teal-800 transition-all duration-500 hover:-translate-y-2 shadow-sm">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-teal-900 group-hover:text-white mb-4 transition-colors">{pillar.title}</h3>
                <p className="text-slate-600 group-hover:text-teal-100 text-sm leading-relaxed transition-colors">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-teal-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Impact</h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Through our interventions, Humane Initiative aims to achieve measurable and lasting outcomes that strengthen economic stability and resilience.
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <span className="text-teal-400 mt-1">✓</span>
                      <p className="text-sm md:text-base font-medium text-slate-100">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 text-center">
                <div className="mb-8">
                  <span className="text-5xl font-black text-teal-400">100%</span>
                  <p className="text-sm uppercase tracking-widest font-bold mt-2">Commitment</p>
                </div>
                <p className="text-slate-300 italic mb-8">
                  "By aligning our mission with the SDGs, we contribute meaningfully to global efforts to reduce poverty and foster economic empowerment."
                </p>
                <a href="#/donate" className="block w-full py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold transition-all shadow-lg shadow-red-900/40">
                  Support Our Mission
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-8">Join Our Journey</h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            We invite individuals, organizations, and policymakers to partner with us in building a more educated, empowered, and equitable society. Every contribution creates meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <a href="mailto:hedef.nigeria@gmail.com" className="w-full sm:w-auto px-10 py-4 bg-teal-900 text-white rounded-xl font-bold hover:bg-teal-800 transition-all shadow-xl">
               Contact Us
             </a>
             <a href="https://forms.gle/JwR9UUBc5pW58upq9" target="_blank" className="w-full sm:w-auto px-10 py-4 border-2 border-teal-900 text-teal-900 rounded-xl font-bold hover:bg-teal-50 transition-all">
               Volunteer Now
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;