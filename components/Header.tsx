import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Block scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Case Studies', to: '/case-studies' },
    { name: 'Programs', to: '/careers' },
    { name: 'About', to: '/about' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4`}>
      <nav className={`container mx-auto max-w-6xl px-8 py-4 flex justify-between items-center transition-all duration-500 rounded-[2.5rem] border ${isScrolled ? 'glass-nav border-slate-200 shadow-xl' : 'bg-white/80 border-transparent shadow-sm'}`}>
        <Link to="/" className="flex items-center group z-50">
          <div className="flex items-center space-x-3">
             <div className="relative w-10 h-10 rounded-xl bg-[#0A2540] flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-6 shadow-md">
                <span className="text-white font-black text-xl">A</span>
             </div>
             <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight leading-none text-[#0A2540]">AAVISHKAR</span>
                <span className="text-[8px] font-black tracking-[0.3em] opacity-60 uppercase text-[#4FACFE]">Codex Infotech</span>
             </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-[13px] font-bold transition-all relative group py-2 ${location.pathname === link.to ? 'text-[#0A2540]' : 'text-[#64748B] hover:text-[#0A2540]'}`}
            >
              {link.name}
              <span 
                className={`absolute -bottom-1 left-0 h-[2.5px] bg-[#4FACFE] transition-all duration-500 rounded-full ${location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></span>
            </Link>
          ))}
          <div className="pl-4">
            <Link
              to="/contact"
              className="btn-primary px-8 py-3 rounded-xl text-[12px] font-black tracking-[0.1em] uppercase shadow-lg"
            >
              Start Project
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 text-[#0A2540] p-3 hover:bg-slate-100 rounded-2xl transition-all active:scale-90" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Modern Fullscreen Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#0A2540] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'} pointer-events-auto z-[45]`}
      >
        <div className="h-full flex flex-col justify-between p-12 pt-32">
          <div className={`space-y-6 ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                className="mobile-menu-link block text-5xl font-black text-white hover:text-[#4FACFE] transition-colors tracking-tighter"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${0.1 + navLinks.length * 0.1}s` }}
              className="mobile-menu-link group inline-flex items-center text-2xl font-black text-[#4FACFE] mt-8 tracking-tight"
            >
              Initialize Project <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className={`mt-auto border-t border-white/10 pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-8 sm:space-y-0 ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div 
              style={{ transitionDelay: '0.6s' }}
              className="mobile-menu-link"
            >
              <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Connect Protocol</div>
              <div className="flex space-x-6">
                 <a href="#" className="text-white hover:text-[#4FACFE] transition-colors"><Instagram size={24} /></a>
                 <a href="#" className="text-white hover:text-[#4FACFE] transition-colors"><Linkedin size={24} /></a>
                 <a href="#" className="text-white hover:text-[#4FACFE] transition-colors"><Twitter size={24} /></a>
              </div>
            </div>
            <div 
              style={{ transitionDelay: '0.7s' }}
              className="mobile-menu-link text-right"
            >
               <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-2">Regional Hub</div>
               <div className="text-white font-bold text-lg">Ahmedabad, India</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;