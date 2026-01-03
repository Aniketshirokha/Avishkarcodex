import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Case Studies', to: '/case-studies' },
    { name: 'Course', to: '/careers' },
    { name: 'About', to: '/about' },
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-700 px-4 md:px-6 py-4 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <nav className={`container mx-auto max-w-6xl px-6 md:px-10 py-4 md:py-5 flex justify-between items-center transition-all duration-500 rounded-2xl md:rounded-[2.5rem] border relative ${isScrolled ? 'glass-panel border-slate-200 shadow-2xl' : 'bg-white/50 border-transparent shadow-sm'}`}>
        <Link to="/" className="flex items-center group z-50">
          <div className="flex items-center space-x-3">
             <div className="relative w-10 h-10 rounded-xl bg-[#0A2540] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:rotate-6 shadow-xl">
                <span className="text-white font-black text-xl">A</span>
             </div>
             <div className="flex flex-col">
                <span className="font-black text-base md:text-xl tracking-tighter text-[#0A2540] leading-none uppercase">AAVISHKAR</span>
                <span className="text-[7px] md:text-[9px] font-black tracking-[0.4em] text-[#0051FF] uppercase opacity-80">Codex Infotech</span>
             </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group py-2 ${location.pathname === link.to ? 'text-[#0051FF]' : 'text-[#64748B] hover:text-[#0A2540]'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary px-8 py-3.5 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase shadow-xl hover:scale-105 active:scale-95 transition-all">
            Book a Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 p-3 rounded-xl bg-slate-100 text-[#0A2540]" 
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-[#0A2540] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} z-[110] flex flex-col justify-center items-center`}>
        {/* Explicit Close Button inside Menu */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-10 right-8 p-4 bg-white/10 text-white rounded-full backdrop-blur-md hover:bg-white/20 transition-all border border-white/20 active:scale-90"
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <div className="w-full flex flex-col items-center space-y-8 px-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-4xl sm:text-5xl font-black transition-all tracking-tighter text-center ${location.pathname === link.to ? 'text-[#0051FF]' : 'text-white hover:text-[#0051FF]'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-12 w-full max-w-xs">
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="w-full flex items-center justify-center text-[#0051FF] text-xl font-black uppercase tracking-widest border-2 border-[#0051FF] py-6 rounded-2xl bg-white shadow-2xl active:scale-95 transition-all"
            >
              Book a Call <ArrowRight className="ml-4" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;