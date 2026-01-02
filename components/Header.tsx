import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Case Studies', to: '/case-studies' },
    { name: 'Programs', to: '/careers' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4`}>
      <nav className={`container mx-auto max-w-6xl px-8 py-3 flex justify-between items-center transition-all duration-500 border ${isScrolled ? 'glass-nav shadow-lg rounded-[2rem] border-white/50' : 'bg-transparent border-transparent'}`}>
        <Link to="/" className="flex items-center group">
          <div className="flex items-center space-x-3">
             <div className="relative w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-6 shadow-md">
                <span className="text-white font-black text-xl">A</span>
             </div>
             <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight leading-none text-[#0A2540]">AAVISHKAR</span>
                <span className="text-[8px] font-black tracking-[0.3em] opacity-60 uppercase text-[#4FACFE]">Codex Infotech</span>
             </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-sm font-bold transition-all relative group py-2 ${location.pathname === link.to ? 'text-[#0A2540]' : 'text-[#6B7280] hover:text-[#0A2540]'}`}
            >
              {link.name}
              <span 
                className={`absolute -bottom-1 left-0 h-[2px] gradient-primary transition-all duration-500 rounded-full ${location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></span>
            </Link>
          ))}
          <div className="pl-4">
            <Link
              to="/contact"
              className="relative text-white px-7 py-3 rounded-2xl text-sm font-black transition-all transform hover:scale-105 active:scale-95 shadow-xl gradient-primary uppercase tracking-widest overflow-hidden group"
            >
              <span className="relative z-10">Start Project</span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></span>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#0A2540] p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl border border-white shadow-2xl p-10 flex flex-col space-y-8 rounded-[2.5rem] animate-in fade-in slide-in-from-top-4 duration-500 ease-out">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold text-[#0A2540] hover:text-[#4FACFE] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-center py-5 rounded-[1.5rem] font-black text-xl tracking-widest uppercase shadow-xl gradient-primary"
          >
            Launch Project
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;