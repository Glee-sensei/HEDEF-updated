import React, { useEffect } from 'react';

const DonatePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-teal-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Transforming Lives Through <br className="hidden md:block" />
            <span className="text-red-500">Education</span> and <span className="text-teal-400">Empowerment</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            Your support fuels our mission to bridge the gap between potential and opportunity. By donating to HEdEF, you are directly investing in a future where every child learns and every youth earns. Together, we can build a more equitable and sustainable society.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-4">What Your Support Makes Possible</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality Education",
                desc: "Supporting access to quality and inclusive education for children in underserved communities.",
                icon: "📚"
              },
              {
                title: "Learning Materials",
                desc: "Providing textbooks, uniforms, and digital skills training to bridge the literacy gap.",
                icon: "💻"
              },
              {
                title: "Youth Empowerment",
                desc: "Equipping youths with vocational skills and mentorship to foster economic independence.",
                icon: "🚀"
              },
              {
                title: "Sustainable Solutions",
                desc: "Strengthening community-driven sustainable solutions aligned with global SDGs.",
                icon: "🌍"
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Options Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-4">Ways to Give</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* One-time/Monthly Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 rounded-3xl bg-white shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">Online Support</h3>
                <div className="space-y-4">
                  <button className="w-full py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center">
                    One-time Donation
                  </button>
                  <button className="w-full py-4 border-2 border-teal-600 text-teal-600 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center justify-center">
                    Monthly Giving
                  </button>
                </div>
                <p className="mt-6 text-xs text-slate-400 text-center leading-relaxed">
                  Secure processing powered by industry-standard encryption.
                </p>
              </div>
            </div>

            {/* Bank Transfer Card */}
            <div className="lg:col-span-2">
              <div id="bank-transfer" className="p-8 md:p-12 rounded-3xl bg-teal-900 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center mr-4">🏦</span>
                  Donate via Bank Transfer
                </h3>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-6">
                    <div>
                      <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1">Bank Name</p>
                      <p className="text-xl font-medium">WEMA BANK PLC</p>
                    </div>
                    <div>
                      <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1">Account Name</p>
                      <p className="text-xl font-medium">HUMANE EDUCATION AND EMPOWERMENT FOUNDATION</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1">Account Number</p>
                      <div className="flex items-center space-x-3">
                        <p className="text-3xl font-bold tracking-tighter">0126868421</p>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText('0126868421');
                            alert('Account number copied!');
                          }}
                          className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                          title="Copy Account Number"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1">Currency</p>
                      <p className="text-xl font-medium">Nigerian Naira (₦)</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-black/20 rounded-2xl border border-white/10">
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    Note: After making a transfer, please send a confirmation email to <span className="text-white font-bold">hedef.nigeria@gmail.com</span> so we can acknowledge your gift and send you an official receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Transparency */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-teal-900 mb-8">Our Commitment to Transparency</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-3">
              <h4 className="font-bold text-teal-900">Ethical Management</h4>
              <p className="text-sm text-slate-600 leading-relaxed">We maintain the highest standards of financial ethics in all our operations.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-teal-900">Full Accountability</h4>
              <p className="text-sm text-slate-600 leading-relaxed">We are strictly accountable to our donors, partners, and the communities we serve.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-teal-900">Impact Focused</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Every kobo donated is used to drive measurable impact and long-term program delivery.</p>
            </div>
          </div>
          <p className="mt-12 text-slate-500 text-sm italic">
            At HEdEF, we pride ourselves on transparency and responsible stewardship. Your trust is our most valuable asset.
          </p>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="text-4xl mb-6">❤️</div>
          <h3 className="text-2xl md:text-3xl font-serif text-teal-900 mb-6 italic">With Gratitude</h3>
          <p className="text-slate-700 leading-relaxed">
            Every contribution—big or small—creates meaningful and lasting change. Thank you for being a part of the HEdEF story and for believing in the potential of Africa's youth and children.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;