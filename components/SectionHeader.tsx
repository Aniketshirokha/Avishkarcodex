
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 md:mb-24 reveal active ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A2540] mb-6 tracking-tighter leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl text-[#374151] max-w-2xl leading-relaxed font-bold ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-[5px] gradient-primary rounded-full mt-8 shadow-sm ${align === 'center' ? 'mx-auto w-32' : 'w-20'}`}></div>
    </div>
  );
};

export default SectionHeader;
