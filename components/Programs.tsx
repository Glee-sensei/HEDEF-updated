
import React, { useState, useEffect } from 'react';
import { Program } from '../types';

const ProgramSlideshow: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-200">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${idx + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop';
            }}
          />
        </div>
      ))}
    </div>
  );
};

const Programs: React.FC = () => {
  const backToSchoolImages = [
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/1c5bcda1cf68e36b9e398aea6207dcfe7548b5f6/assets/EVANS.jpg",
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/1c5bcda1cf68e36b9e398aea6207dcfe7548b5f6/assets/After%20giving%20out%20uniform%20to%20about%20100%20students%20of%20Ekosodin%20primary%20school%20with%20bad%20uniforms%20from%20(6).jpg",
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/1c5bcda1cf68e36b9e398aea6207dcfe7548b5f6/assets/AUSTIN.jpg",
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/1c5bcda1cf68e36b9e398aea6207dcfe7548b5f6/assets/284427959_149848907590891_8955459757128365130_n.jpg",
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8a86bc95e60e363c0b8cfa52b78c9eea6785a4f9/assets/STUDENTS%20VIEW.jpg",
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8a86bc95e60e363c0b8cfa52b78c9eea6785a4f9/assets/TEAM%203.jpg",
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8a86bc95e60e363c0b8cfa52b78c9eea6785a4f9/assets/YEMI.jpg"
  ];

  const educationSponsorshipImages = [
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8a86bc95e60e363c0b8cfa52b78c9eea6785a4f9/assets/TECNICAL%20SCHOOL.jpg",
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8a86bc95e60e363c0b8cfa52b78c9eea6785a4f9/assets/NOTE.jpg",
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8a86bc95e60e363c0b8cfa52b78c9eea6785a4f9/assets/IDP%20camp%20outreach%20(1).jpg",
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8a86bc95e60e363c0b8cfa52b78c9eea6785a4f9/assets/SDG%204.png",
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8a86bc95e60e363c0b8cfa52b78c9eea6785a4f9/assets/STUDENTS%20VIEW.jpg"
  ];

  const vocationalImages = [
    "https://raw.githubusercontent.com/Glee-sensei/HEDEF/8a86bc95e60e363c0b8cfa52b78c9eea6785a4f9/assets/SDG%208.png",
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop"
  ];

  const programs: Program[] = [
    {
      id: '1',
      title: 'Back-to-School Initiative',
      description: 'Identifying and sponsoring out-of-school children to return to formal education systems with full supplies and uniforms.',
      image: backToSchoolImages[0],
      category: 'Education',
    },
    {
      id: '2',
      title: 'Vocational Training Lab',
      description: 'Training youth in high-demand skills such as health sciences, tailoring, and catering to ensure they earn a dignified living.',
      image: vocationalImages[0],
      category: 'Vocational',
    },
    {
      id: '3',
      title: 'Education Sponsorship',
      description: 'Direct financial support for school fees and academic materials for deserving students from low-income backgrounds.',
      image: educationSponsorshipImages[0],
      category: 'Economic',
    },
    {
      id: '4',
      title: 'Mentorship & Guidance',
      description: 'Pairing beneficiaries with industry professionals to provide career guidance, ethics training, and professional growth.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      category: 'Advocacy',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif text-teal-900 mb-4">Our Core Programs</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Humane Initiative operates on a foundation of core principles that drive our mission for sustainable impact and societal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="group bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                {program.id === '1' ? (
                  <ProgramSlideshow images={backToSchoolImages} />
                ) : program.id === '2' ? (
                  <ProgramSlideshow images={vocationalImages} />
                ) : program.id === '3' ? (
                  <ProgramSlideshow images={educationSponsorshipImages} />
                ) : (
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute top-4 left-4 z-20 bg-teal-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                  {program.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                  {program.description}
                </p>
                <button className="text-teal-600 font-bold flex items-center hover:text-red-600 transition-colors text-xs tracking-widest">
                  EXPLORE IMPACT
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
