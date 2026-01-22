
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import ImpactStats from './components/ImpactStats';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

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
    <main>
      <Hero />
      <ImpactStats />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
              <img 
                src={aboutImageUrl} 
                alt="HEdEF Team and Beneficiaries at Ekosodin" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5] md:aspect-auto transform hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-2">Our Foundation</h4>
                <h2 className="text-4xl font-serif text-slate-900 leading-tight">Founded by Microbiology Students with a <span className="text-red-600">Vision</span></h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 2021 by microbiology students of the <span className="font-bold text-teal-700">University of Benin</span>, HEdEF emerged in response to the alarming number of children engaged in street hawking instead of schooling.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-teal-600">
                <p className="italic text-slate-700">"We seek to educate the growing age and empower the working age—aligning directly with global sustainable development efforts."</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                  <h4 className="font-bold text-teal-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Our Mission
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">To advance inclusive education and economic empowerment by returning children to school, equipping youth with employable skills, and supporting their transition into dignified work.</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                  <h4 className="font-bold text-teal-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Our Vision
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">A society where every child has access to quality education and every youth is equipped for economic contribution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Video Impact Gallery */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-teal-900 mb-4">See Our Impact in Action</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-slate-600">Explore the stories of change from our community projects and see how your support transforms lives.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Main Player Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] border-8 border-white bg-slate-900 aspect-video group">
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
              <div className="absolute bottom-10 left-10 right-10 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0 hidden md:block">
                <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-md">
                  <h3 className="text-white font-bold text-xl mb-1">{activeVideo.title}</h3>
                  <p className="text-white/80 text-sm">{activeVideo.description}</p>
                </div>
              </div>
            </div>

            {/* Video Selection Tabs */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {impactVideos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`px-6 py-4 rounded-2xl transition-all duration-300 text-left border-2 flex items-center space-x-4 ${
                    activeVideo.id === video.id 
                    ? 'bg-teal-600 border-teal-600 text-white shadow-xl shadow-teal-600/20 scale-105' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-teal-300 hover:bg-teal-50/50'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${activeVideo.id === video.id ? 'bg-white animate-pulse' : 'bg-slate-300'}`}></div>
                  <div>
                    <span className="block font-bold text-sm uppercase tracking-wider">{video.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Programs />
      
      {/* Call to Action Section */}
      <section className="py-24 bg-teal-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 max-w-4xl mx-auto leading-tight">
            "Join us in this transformative journey toward a more <span className="text-red-500">educated</span> and <span className="text-teal-400">empowered</span> society."
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-bold transition-all shadow-2xl shadow-red-900/40 transform hover:scale-105 hover:-translate-y-1">
              Become a Sponsor
            </button>
            <button className="border-2 border-white/20 hover:bg-white/10 px-10 py-5 rounded-xl font-bold transition-all transform hover:scale-105">
              Volunteer With Us
            </button>
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
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;
