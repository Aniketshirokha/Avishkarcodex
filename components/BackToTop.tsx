import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[100] p-4 bg-white text-[#0A2540] border-2 border-slate-100 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-90 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#4FACFE] to-[#0061FF] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
      <ArrowUp size={24} className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
};

export default BackToTop;