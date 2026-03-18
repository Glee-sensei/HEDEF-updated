
import React, { useEffect } from 'react';

const PartnerPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerships = [
    {
      title: "Corporate & CSR Partnerships",
      description: "Collaborating with businesses to integrate social responsibility into their core operations.",
      contribution: "Corporate funding, employee engagement programs, and co-branded initiatives.",
      impact: "Drives scalable social impact while enhancing brand reputation and stakeholder value.",
      icon: "🏢"
    },
    {
      title: "Development & Grant Partnerships",
      description: "Partnering with foundations and development agencies to fund high-impact programs.",
      contribution: "Grant funding, strategic oversight, and programmatic support.",
      impact: "Secures the resources necessary for large-scale interventions in education and empowerment.",
      icon: "📜"
    },
    {
      title: "Technical & Knowledge Partnerships",
      description: "Sharing expertise and technology to optimize program delivery and innovation.",
      contribution: "Technical consultancy, digital tools, and research collaboration.",
      impact: "Enhances organizational efficiency and ensures our programs are data-driven and forward-thinking.",
      icon: "💡"
    },
    {
      title: "Community & Volunteer Partnerships",
      description: "Engaging local groups and individuals to drive change from the ground up.",
      contribution: "Local expertise, volunteer hours, and community mobilization.",
      impact: "Ensures programs are culturally relevant and sustainable through community ownership.",
      icon: "🏘️"
    },
    {
      title: "Media & Advocacy Partnerships",
      description: "Amplifying our voice to influence policy and raise public awareness.",
      contribution: "Media coverage, advocacy campaigns, and communication strategy.",
      impact: "Changes public perception and drives systemic change for education and youth rights.",
      icon: "📣"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-teal-950 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
            Partnering for <span className="text-teal-400">Sustainable</span> Change
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed">
            We believe that lasting social change is only possible through collective action. By partnering with HEdEF, your organization joins a global movement to advance education, empowerment, and social equity.
          </p>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-6">Why Partner With HEdEF</h2>
            <div className="w-20 h-1.5 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Global Alignment",
                desc: "Our programs are strictly aligned with the UN Sustainable Development Goals, specifically SDGs 1, 4, 8, and 10."
              },
              {
                title: "Community-Led",
                desc: "We prioritize community-driven and locally informed programs that ensure cultural relevance and longevity."
              },
              {
                title: "Unwavering Integrity",
                desc: "HEdEF maintains the highest standards of transparency and accountability in all financial and operational dealings."
              },
              {
                title: "Measurable Impact",
                desc: "We focus on data-driven results and sustainable social impact that transforms lives for generations."
              }
            ].map((item, i) => (
              <div key={i} className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-4">Partnership Opportunities</h2>
            <p className="text-slate-600">We offer diverse pathways for collaboration, tailored to the unique strengths and goals of our partners.</p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {partnerships.map((p, i) => (
              <div key={i} className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{p.icon}</div>
                    <h3 className="text-2xl font-bold text-teal-900 leading-tight">{p.title}</h3>
                  </div>
                  <div className="md:w-3/4 space-y-6">
                    <p className="text-slate-700 text-lg font-medium">{p.description}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">How You Contribute</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{p.contribution}</p>
                      </div>
                      <div>
                        <h4 className="text-red-500 font-bold text-xs uppercase tracking-widest mb-2">Achieved Impact</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{p.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Possible Outcomes */}
      <section className="py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-12">What Partnership Makes Possible</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="text-teal-400 font-bold text-xl mb-4">Educational Access</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Providing high-quality and inclusive education to children in the most underserved regions.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="text-teal-400 font-bold text-xl mb-4">Youth Empowerment</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Equipping young people with digital and vocational skills for competitive employability.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="text-teal-400 font-bold text-xl mb-4">Resilient Societies</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Strengthening community self-reliance and fostering long-term economic stability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-teal-900 mb-8">Get in Touch</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Ready to make a difference? We invite your organization to start a conversation with us and collaborate for lasting social impact.
          </p>
          
          <div className="inline-flex flex-col items-center bg-teal-50 p-8 md:p-12 rounded-[2rem] border border-teal-100 shadow-inner">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Direct Inquiry</span>
            <a href="mailto:hedef.nigeria@gmail.com" className="text-2xl md:text-4xl font-bold text-teal-900 hover:text-red-600 transition-colors break-all">
              hedef.nigeria@gmail.com
            </a>
            <div className="mt-8">
              <a href="mailto:hedef.nigeria@gmail.com" className="bg-teal-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-teal-800 transition-all shadow-xl shadow-teal-900/20">
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
