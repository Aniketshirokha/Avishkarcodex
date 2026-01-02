import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const ContactPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const serviceFromUrl = params.get('service');
    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20 reveal active">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter">
            Let's <span className="text-transparent bg-clip-text gradient-primary">Scale.</span>
          </h1>
          <p className="text-xl text-[#6B7280] leading-relaxed max-w-2xl font-medium">
            Connect with our engineering leads to initiate your project lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="reveal soft-card p-10 md:p-20 border border-white/50 active">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col space-y-3">
                    <label className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em] ml-1">Identity</label>
                    <input required type="text" placeholder="Your Full Name" className="bg-[#EAF6FF]/30 border border-white p-5 rounded-2xl outline-none focus:border-[#4FACFE] focus:ring-4 focus:ring-[#4FACFE]/5 transition-all font-medium text-[#0A2540]" />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em] ml-1">Communication</label>
                    <input required type="email" placeholder="Email Address" className="bg-[#EAF6FF]/30 border border-white p-5 rounded-2xl outline-none focus:border-[#4FACFE] focus:ring-4 focus:ring-[#4FACFE]/5 transition-all font-medium text-[#0A2540]" />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em] ml-1">Phone</label>
                    <input required type="tel" placeholder="+1 (000) 000-0000" className="bg-[#EAF6FF]/30 border border-white p-5 rounded-2xl outline-none focus:border-[#4FACFE] focus:ring-4 focus:ring-[#4FACFE]/5 transition-all font-medium text-[#0A2540]" />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em] ml-1">Required Service</label>
                    <select 
                      value={selectedService} 
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="bg-[#EAF6FF]/30 border border-white p-5 rounded-2xl outline-none focus:border-[#4FACFE] focus:ring-4 focus:ring-[#4FACFE]/5 transition-all font-bold text-[#0A2540]"
                    >
                      <option value="">General Consulting</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2 flex flex-col space-y-3">
                    <label className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em] ml-1">Project Brief</label>
                    <textarea required rows={5} placeholder="Tell us about your architectural goals..." className="bg-[#EAF6FF]/30 border border-white p-5 rounded-3xl outline-none focus:border-[#4FACFE] focus:ring-4 focus:ring-[#4FACFE]/5 transition-all font-medium text-[#0A2540] resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full text-white py-6 rounded-[2rem] font-black text-xl gradient-primary shadow-2xl hover:scale-[1.02] transition-all uppercase tracking-widest flex items-center justify-center">
                      Initialize Link <ArrowRight className="ml-3" />
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="reveal soft-card p-20 text-center gradient-primary text-white active">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-[2.5rem] mb-10 shadow-xl border border-white/30">
                  <CheckCircle2 size={48} className="text-white" />
                </div>
                <h2 className="text-4xl font-black mb-6 tracking-tight">Transmission Successful.</h2>
                <p className="text-white/80 max-w-sm mx-auto font-medium text-lg leading-relaxed">Our infrastructure team has received your brief. A specialist will follow up within 24 standard business hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-12 text-sm font-black underline uppercase tracking-widest hover:opacity-70 transition-opacity">Submit New Link</button>
              </div>
            )}
          </div>

          <div className="space-y-12">
            <div className="reveal active">
              <h3 className="font-black text-[#0A2540] mb-8 uppercase text-[10px] tracking-[0.4em] flex items-center">
                <span className="w-10 h-[2px] gradient-primary mr-4 rounded-full"></span>
                Direct Channels
              </h3>
              <div className="space-y-6">
                <a href="https://wa.me/919106025254" className="flex items-center space-x-5 p-6 bg-white rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all border border-white shadow-sm group">
                  <div className="w-14 h-14 bg-[#EAF6FF] rounded-2xl flex items-center justify-center text-[#4FACFE] group-hover:gradient-primary group-hover:text-white transition-all shadow-sm">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest">Instant Relay</div>
                    <div className="font-black text-[#0A2540] text-lg">+91 91060 25254</div>
                  </div>
                </a>
                <a href="mailto:hello@aavishkarcodex.com" className="flex items-center space-x-5 p-6 bg-white rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all border border-white shadow-sm group">
                  <div className="w-14 h-14 bg-[#EAF6FF] rounded-2xl flex items-center justify-center text-[#4FACFE] group-hover:gradient-primary group-hover:text-white transition-all shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest">Protocol Email</div>
                    <div className="font-black text-[#0A2540] text-lg">hello@aavishkarcodex.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="reveal active" style={{ transitionDelay: '200ms' }}>
              <h3 className="font-black text-[#0A2540] mb-8 uppercase text-[10px] tracking-[0.4em] flex items-center">
                <span className="w-10 h-[2px] gradient-primary mr-4 rounded-full"></span>
                Regional HQ
              </h3>
              <div className="soft-card p-10 flex items-start space-x-6 border border-white shadow-sm">
                 <div className="p-4 bg-[#EAF6FF] rounded-2xl text-[#4FACFE]">
                    <MapPin size={28} />
                 </div>
                 <div>
                   <p className="text-[#0A2540] font-black text-xl leading-tight">
                     Ahmedabad, Gujarat
                   </p>
                   <p className="text-[#6B7280] text-sm mt-3 font-medium uppercase tracking-widest">India Operations</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;