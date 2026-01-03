import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-24 md:mb-32 reveal ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-fluid-h2 text-[#0A2540] mb-10 tracking-tighter leading-none font-black">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl md:text-2xl text-[#64748B] max-w-3xl leading-relaxed font-bold ${align === 'center' ? 'mx-auto' : ''} opacity-80`}>
          {subtitle}
        </p>
      )}
      <div className={`relative h-1.5 gradient-primary rounded-full mt-14 overflow-hidden shadow-sm ${align === 'center' ? 'mx-auto w-32' : 'w-24'}`}>
        <div className="absolute inset-0 bg-blue-400/20 animate-pulse"></div>
        <div className="absolute top-0 left-[-100%] w-full h-full bg-white/60 animate-shimmer"></div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-shimmer { animation: shimmer 2.5s infinite var(--easing); }
        .gradient-primary { background: linear-gradient(90deg, #0051FF, #4FACFE); }
      `}</style>
    </div>
  );
};

export default SectionHeader;