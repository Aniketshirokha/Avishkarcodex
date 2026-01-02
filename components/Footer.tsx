
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
             <Link to="/" className="flex items-center group">
               <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: BRAND_COLORS.primary }}>
                     <span className="text-white font-black text-xl">A</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="font-bold text-xl tracking-tight leading-none" style={{ color: BRAND_COLORS.primary }}>AAVISHKAR</span>
                     <span className="text-[10px] font-bold tracking-[0.25em] opacity-80 uppercase" style={{ color: BRAND_COLORS.secondary }}>Codex Infotech</span>
                  </div>
               </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Empowering modern businesses with elite technology solutions, design, and automation. We build the future of digital products.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-white transition-all transform hover:-translate-y-1" style={{ '--hover-bg': BRAND_COLORS.primary } as any} 
                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND_COLORS.primary)}
                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-[10px] tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-5 text-sm font-bold text-slate-500">
              <li><Link to="/" className="hover:text-slate-900 transition-colors">Home</Link></li>
              <li><Link to="/case-studies" className="hover:text-slate-900 transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-slate-900 transition-colors">Our Story</Link></li>
              <li><Link to="/careers" className="hover:text-slate-900 transition-colors">Career Programs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-[10px] tracking-[0.3em]">Capabilities</h4>
            <ul className="space-y-5 text-sm font-bold text-slate-500">
              <li><Link to="/services" className="hover:text-slate-900 transition-colors">Development</Link></li>
              <li><Link to="/services" className="hover:text-slate-900 transition-colors">Design & Branding</Link></li>
              <li><Link to="/services" className="hover:text-slate-900 transition-colors">Automation Systems</Link></li>
              <li><Link to="/services" className="hover:text-slate-900 transition-colors">Media & 3D</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-[10px] tracking-[0.3em]">HQ Office</h4>
            <ul className="space-y-6 text-sm font-bold text-slate-500">
              <li className="flex items-start space-x-3">
                <MapPin size={18} style={{ color: BRAND_COLORS.secondary }} className="shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} style={{ color: BRAND_COLORS.secondary }} className="shrink-0" />
                <span>hello@aavishkarcodex.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} style={{ color: BRAND_COLORS.secondary }} className="shrink-0" />
                <span>+91 91060 25254</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 font-black uppercase tracking-widest space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Aavishkar Codex Infotech LLP. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
