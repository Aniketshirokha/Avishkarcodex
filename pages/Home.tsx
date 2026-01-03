import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Cpu, Shield, Zap, Activity, Layers, 
  Terminal, Globe, ShoppingBag, Smartphone, Layout,
  ChevronRight, ExternalLink, Box, Database, Lightbulb, Rocket, TrendingUp, Code, Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, CASE_STUDIES, TESTIMONIALS } from '../constants';
import { Service } from '../types';
import SectionHeader from '../components/SectionHeader';
import ServiceLightbox from '../components/ServiceLightbox';
import ContactForm from '../components/ContactForm';
import { useMagnetic } from '../hooks/useMagnetic';
import { useTilt } from '../hooks/useTilt';

const iconMap: any = { ShoppingBag, Smartphone, Layout, Cpu, Shield, Zap, Activity, Layers };

const AbstractOrb = ({ tiltStyle, parallax }: { tiltStyle: any, parallax: { x: number, y: number } }) => {
  return (
    <div 
      style={{
        ...tiltStyle,
        transform: `${(tiltStyle as any).transform || ''} translate3d(${parallax.x * 0.2}px, ${parallax.y * 0.2}px, 0)`
      }}
      className="relative w-full aspect-square max-w-[550px] mx-auto animate-float-subtle flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[#0051FF]/10 rounded-full blur-[120px] scale-90 animate-pulse"></div>
      <div className="absolute w-[95%] h-[95%] border-[1.5px] border-dashed border-[#0051FF]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
      
      <div className="relative w-64 h-64 lg:w-80 lg:h-80 group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0051FF] to-[#4FACFE] rounded-full opacity-20 blur-2xl"></div>
        <div className="relative h-full w-full bg-white/80 backdrop-blur-3xl rounded-full border-[10px] border-white shadow-[0_40px_80px_rgba(0,81,255,0.15)] overflow-hidden flex items-center justify-center">
          <div className="scanline opacity-20"></div>
          <div className="relative w-48 h-48 bg-[#0A2540] rounded-full flex items-center justify-center shadow-inner overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0051FF]/40 to-transparent"></div>
             <div className="relative z-10 text-[#4FACFE] animate-pulse">
                <Cpu size={80} />
             </div>
          </div>
        </div>
      </div>

      <div style={{ transform: `translate3d(${parallax.x * -0.6}px, ${parallax.y * -0.6}px, 0)` }} className="absolute top-10 -left-6 z-20">
         <div className="glass-panel px-6 py-4 rounded-2xl shadow-xl border-white border-2 flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#0A2540]">Live in Ahmedabad</span>
         </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { ref: magRef, style: magStyle } = useMagnetic(12);
  const { tiltStyle, onMouseMove, onMouseLeave } = useTilt(8); 
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      setParallax({
        x: (e.clientX - window.innerWidth / 2) / 60,
        y: (e.clientY - window.innerHeight / 2) / 60,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 lg:py-40 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-[55%] text-center lg:text-left z-10 reveal">
            <div className="inline-flex items-center space-x-3 mb-6 lg:mb-10 glass-panel px-6 py-2.5 rounded-full border-white border-2 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0051FF]"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0A2540]">Top IT Company in Gujarat</span>
            </div>
            
            <h1 className="text-fluid-h1 text-[#0A2540] mb-8 lg:mb-10 leading-[0.82] tracking-tighter">
              Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0051FF] to-[#4FACFE]">Tech Solutions</span> <br className="hidden lg:block"/> for Growth.
            </h1>
            
            <p className="text-lg lg:text-2xl text-[#475569] mb-10 lg:mb-14 max-w-2xl mx-auto lg:mx-0 font-bold opacity-80 leading-relaxed">
              We build professional websites, mobile apps, and custom software to help your business succeed online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
              <div ref={magRef} style={magStyle} className="magnetic-wrap w-full sm:w-auto">
                <Link to="/contact" className="btn-primary w-full sm:px-14 py-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center">
                  Book a Free Consultation <ArrowRight className="ml-4 shrink-0" size={18} />
                </Link>
              </div>
              <Link to="/services" className="btn-outline w-full sm:px-14 py-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center border-2 border-slate-200 hover:border-[#0051FF] transition-all">
                Our Services
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:w-[45%] relative perspective-1000">
            <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
              <AbstractOrb tiltStyle={tiltStyle} parallax={parallax} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-40 bg-white/30">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Expert IT Services" 
            subtitle="Reliable technology partners for startups and established businesses in Ahmedabad and beyond."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {SERVICES.slice(0, 4).map((service, i) => {
              const Icon = iconMap[service.icon] || Activity;
              return (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="glass-panel p-8 lg:p-12 rounded-[2.5rem] border-2 border-white hover:border-[#0051FF]/30 hover:shadow-2xl transition-all duration-700 group cursor-pointer reveal"
                >
                  <div className="w-14 h-14 bg-[#0A2540] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-[#0051FF] transition-all shadow-lg">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-[#0A2540] mb-3 tracking-tight group-hover:text-[#0051FF] transition-colors">{service.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-8 font-bold opacity-80">{service.shortDesc}</p>
                  <div className="flex items-center text-[#0051FF] font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    View Details <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-40 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Who We Help" 
            subtitle="We provide high-quality digital support for businesses that need to scale fast."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "SaaS & Startups", icon: Globe, desc: "Fast websites and scalable cloud software." },
              { title: "Local Businesses", icon: Building2, desc: "Professional company websites and branding." },
              { title: "E-commerce", icon: ShoppingBag, desc: "Shopify stores that help you sell more online." },
              { title: "AI Automation", icon: Zap, desc: "Saving you time with smart AI tools and bots." }
            ].map((industry, i) => (
              <div key={i} className="soft-card p-10 bg-white border border-slate-100 rounded-[2.5rem] reveal hover:shadow-xl transition-all text-center group">
                <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center text-[#4FACFE] mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  <industry.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#0A2540] mb-4 tracking-tight">{industry.title}</h3>
                <p className="text-[#64748B] font-bold opacity-80 text-sm leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-40 bg-[#0A2540] text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Our Simple Process" 
            subtitle="How we take your idea from start to finish in 4 easy steps."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mt-20">
            {[
              { step: "01", title: "Free Consultation", icon: Lightbulb, desc: "We discuss your goals and plan the best tech solution." },
              { step: "02", title: "Design Concept", icon: Layout, desc: "We create a beautiful design that fits your brand perfectly." },
              { step: "03", title: "Coding & Launch", icon: Code, desc: "Our developers build and test your product for high speed." },
              { step: "04", title: "Support & Grow", icon: Rocket, desc: "We provide regular updates to keep your site running smooth." }
            ].map((delivery, i) => (
              <div key={i} className="relative group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#4FACFE] mb-8 group-hover:bg-[#0051FF] group-hover:text-white transition-all shadow-xl">
                    <delivery.icon size={28} />
                  </div>
                  <div className="text-[12px] font-black uppercase tracking-widest text-white/40 mb-3">Step {delivery.step}</div>
                  <h3 className="text-2xl font-black mb-5 tracking-tight group-hover:text-[#4FACFE] transition-colors">{delivery.title}</h3>
                  <p className="text-white/50 font-bold text-sm leading-relaxed">{delivery.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-sync" className="py-20 lg:py-40 bg-[#F8FAFC] border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16 reveal">
            <div className="tag-pill mb-8">Get In Touch</div>
            <h2 className="text-6xl md:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-[0.9]">
              Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0061FF]">Business.</span>
            </h2>
            <p className="text-2xl text-[#64748B] leading-relaxed max-w-2xl font-semibold opacity-90">
              Ready to start your project? Fill out the form below and we'll get back to you soon.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {selectedService && (
        <ServiceLightbox 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
          onNext={() => {}}
          onPrev={() => {}}
        />
      )}
    </div>
  );
};

export default Home;