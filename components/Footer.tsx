
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/humaneeducationempowerment/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.667-.014 4.947-.072c4.357-.2 6.78-2.618 6.98-6.98.058-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Column 1: Brand and Description */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block transform hover:scale-105 transition-transform">
              <Logo light />
            </Link>
            <p className="text-slate-400 leading-relaxed text-base max-w-sm">
              The Humane EDUCATION AND EMPOWERMENT FOUNDATION (HEdEF) is dedicated to ensuring quality education (SDG 4) and economic growth (SDG 8) for everyone.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-all group shadow-lg"
                  title={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="text-slate-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Key Pillars */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Foundation</h4>
            <ul className="space-y-4 text-sm">
              {['About HEdEF', 'Our Programs', 'Impact Reports', 'The Team', 'SDG Alignment'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Get Involved</h4>
            <ul className="space-y-4 text-sm">
              {['Sponsorship', 'Volunteering', 'Partnerships', 'Donate Now', 'Newsletter'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Box - The "Box" for Gmail */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Reach Out</h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="mr-4 text-teal-500 text-xl">📍</span>
                <p className="text-slate-400 text-sm leading-relaxed">
                  2B Irowa Obazie Street,<br />
                  Benin City, Egor LGA,<br />
                  Edo State, Nigeria.
                </p>
              </div>
              
              {/* THE GMAIL BOX */}
              <div className="p-6 bg-gradient-to-br from-teal-900/40 to-slate-800/40 rounded-2xl border border-slate-800/60 shadow-inner group hover:border-teal-500/30 transition-colors">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center mr-3">
                    <span className="text-teal-400">✉️</span>
                  </div>
                  <p className="text-teal-500 font-bold text-xs uppercase tracking-widest">Official Contact</p>
                </div>
                <a 
                  href="mailto:hedef.nigeria@gmail.com" 
                  className="text-white hover:text-teal-400 text-lg font-medium transition-colors break-all block"
                >
                  hedef.nigeria@gmail.com
                </a>
                <p className="mt-2 text-[10px] text-slate-500 uppercase tracking-tighter">Expect a response within 24 hours</p>
              </div>

              <div className="pt-2">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl w-full transition-all shadow-xl shadow-teal-900/30 active:scale-95">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] uppercase tracking-[0.3em] font-medium">
          <p className="mb-6 md:mb-0 text-center md:text-left">© {new Date().getFullYear()} Humane EDUCATION AND EMPOWERMENT FOUNDATION (HEdEF). All Rights Reserved.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">SDG Impact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
