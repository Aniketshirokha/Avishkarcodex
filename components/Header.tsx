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
        {/* Status Indicator Dot */}
        <div className="absolute top-4 left-4 flex items-center justify-center">
           <div className="w-5 h-5 rounded-full border border-blue-200 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0051FF]"></div>
           </div>
        </div>

        <Link to="/" className="flex items-center group z-50">
          <div className="flex items-center space-x-3 md:space-x-4">
             <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-[1.2rem] bg-[#0A2540] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:rotate-6 shadow-xl">
                <span className="text-white font-black text-xl md:text-2xl">A</span>
                <div className="scanline opacity-30"></div>
             </div>
             <div className="flex flex-col">
                <span className="font-black text-lg md:text-xl tracking-tighter text-[#0A2540] leading-none uppercase">AAVISHKAR</span>
                <span className="text-[7px] md:text-[9px] font-black tracking-[0.4em] text-[#0051FF] uppercase opacity-80">Codex Infotech</span>
             </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 md:space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group py-2 ${location.pathname === link.to ? 'text-[#0051FF]' : 'text-[#64748B] hover:text-[#0A2540]'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2.5px] bg-[#0051FF] transition-all duration-500 rounded-full ${location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <Link to="/contact" className="btn-primary px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-[1.2rem] text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase shadow-xl hover:scale-105 active:scale-95 transition-all">
            Book a Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 p-3 rounded-xl bg-slate-100 text-[#0A2540] active:scale-90 transition-transform" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-[#0A2540] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'} z-[90]`}>
        {/* Explicit Close Button inside Menu */}
        <div className="absolute top-8 right-6">
           <button 
             onClick={() => setIsMobileMenuOpen(false)}
             className="p-4 bg-white/10 text-white rounded-full backdrop-blur-md hover:bg-white/20 transition-colors"
           >
             <X size={32} />
           </button>
        </div>

        <div className="h-full flex flex-col justify-center items-center p-10 space-y-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-4xl sm:text-5xl font-black transition-all tracking-tighter ${location.pathname === link.to ? 'text-[#0051FF]' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-12 w-full max-w-xs">
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="w-full flex items-center justify-center text-[#0051FF] text-xl font-black uppercase tracking-widest border-2 border-[#0051FF]/20 py-6 rounded-2xl hover:bg-[#0051FF]/10 transition-colors"
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