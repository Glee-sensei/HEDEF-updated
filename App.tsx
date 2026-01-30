import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import ImpactStats from './components/ImpactStats';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import Team from './components/Team';
import DonatePage from './components/DonatePage';
import AboutPage from './components/AboutPage';
import PartnerPage from './components/PartnerPage';

// Page Components
const HomePage = () => {
  const aboutImageUrl = "https://raw.githubusercontent.com/Glee-sensei/HEDEF/c208c81c63800b2db6fd273f3813686734fd8ac5/assets/ekosodin.jpg";
  
  // Media Assets for Impact Gallery
  const posterImg = "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8e9102c6b2017b13264adbcf8466bf60df7a2082/assets/After%20giving%20out%20uniform%20to%20about%20100%20students%20of%20Ekosodin%20primary%20school%20with%20bad%20uniforms%20from%20(6).jpg";
  
  const impactVideos = [
    {
      id: 1,
      title: "School Uniform Distribution",
      description: "Providing new uniforms to 100+ students at Ekosodin Primary School.",
      url: "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8e9102c6b2017b13264adbcf8466bf60df7a2082/assets/After%20giving%20out%20uniform%20to%20about%20100%20students%20of%20Ekosodin%20primary%20school%20with%20bad%20uniforms%20from.mp4",
      poster: posterImg
    },
    {
      id: 2,
      title: "Community Outreach Phase II",
      description: "Expanding our reach to ensure every child has what they need to learn comfortably.",
      url: "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8e9102c6b2017b13264adbcf8466bf60df7a2082/assets/After%20giving%20out%20uniform%20to%20about%20100%20students%20of%20Ekosodin%20primary%20school%20with%20bad%20uniforms%20from%20(1).mp4",
      poster: posterImg
    },
    {
      id: 3,
      title: "Putting Smiles on Faces",
      description: "Our priority is helping each other and building a humane society together.",
      url: "https://raw.githubusercontent.com/Glee-sensei/HEDEF/1c5bcda1cf68e36b9e398aea6207dcfe7548b5f6/assets/Putting%20smiles%20on%20people%E2%80%99s%20faces%20is%20what%20we%20do%20helping%20each%20other%20is%20our%20priority%20%23humane%20%23human.mp4",
      poster: posterImg
    }
  ];

  const [activeVideo, setActiveVideo] = useState(impactVideos[0]);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <div id="impact">
        <ImpactStats />
      </div>
      
      {/* About Preview Section */}
      <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-48 md:w-64 h-48 md:h-64 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-48 md:w-64 h-48 md:h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
              <img 
                src={aboutImageUrl} 
                alt="HEdEF Team and Beneficiaries at Ekosodin" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="space-y-6 md:space-y-8 order-1 md:order-2">
              <div>
                <h4 className="text-teal-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Our Foundation</h4>
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">Founded by Microbiology Students with a <span className="text-red-600">Vision</span></h2>
              </div>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Founded in 2021 by microbiology students of the <span className="font-bold text-teal-700">University of Benin</span>, HEdEF emerged in response to the alarming number of children engaged in street hawking instead of schooling.
              </p>
              <div className="bg-slate-50 p-5 md:p-6 rounded-xl border-l-4 border-teal-600">
                <p className="italic text-slate-700 text-sm md:text-base">"We seek to educate the growing age and empower the working age—aligning directly with global sustainable development efforts."</p>
              </div>
              <div className="flex pt-4">
                <Link to="/about" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-teal-500/20 inline-flex items-center">
                  Learn Our Story
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Video Impact Gallery */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-4">See Our Impact in Action</h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-slate-600">Explore the stories of change from our community projects and see how your support transforms lives.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Main Player Container */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-slate-900 aspect-video group">
              <video 
                key={activeVideo.url}
                controls 
                className="w-full h-full object-cover"
                poster={activeVideo.poster}
                autoPlay={false}
              >
                <source src={activeVideo.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Floating Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0 hidden md:block">
                <div className="bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 max-w-md">
                  <h3 className="text-white font-bold text-lg mb-1">{activeVideo.title}</h3>
                  <p className="text-white/80 text-xs">{activeVideo.description}</p>
                </div>
              </div>
            </div>

            {/* Video Selection Tabs */}
            <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
              {impactVideos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 text-left border-2 flex items-center space-x-3 md:space-x-4 ${
                    activeVideo.id === video.id 
                    ? 'bg-teal-600 border-teal-600 text-white shadow-xl shadow-teal-600/20 scale-105' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-teal-300 hover:bg-teal-50/50'
                  }`}
                >
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${activeVideo.id === video.id ? 'bg-white animate-pulse' : 'bg-slate-300'}`}></div>
                  <div>
                    <span className="block font-bold text-[10px] md:text-sm uppercase tracking-wider">{video.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Programs />

      <Team />
      
      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-teal-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-red-600/10 blur-[100px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-teal-400/10 blur-[100px] md:blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-5xl font-serif mb-8 md:mb-12 max-w-4xl mx-auto leading-tight">
            "Join us in this transformative journey toward a more <span className="text-red-500">educated</span> and <span className="text-teal-400">empowered</span> society."
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <Link to="/partner" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold transition-all shadow-xl shadow-red-900/40 transform hover:scale-105 hover:-translate-y-1 inline-flex items-center justify-center">
              Become a Partner
            </Link>
            <Link to="/donate" className="w-full sm:w-auto border-2 border-white/20 hover:bg-white/10 px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-[72px] md:pt-[88px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/partner" element={<PartnerPage />} />
          </Routes>
        </div>
        <Footer />
        < AIAssistant />
      </div>
    </Router>
  );
};

export default App;