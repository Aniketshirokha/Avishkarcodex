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
    <div className="pt-32 pb-24 min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 reveal active">
          <div className="tag-pill mb-8">Direct Link</div>
          <h1 className="text-6xl md:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-[0.9]">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0061FF]">Sync.</span>
          </h1>
          <p className="text-2xl text-[#64748B] leading-relaxed max-w-2xl font-semibold opacity-90">
            Transmit your project requirements to our engineering leads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="reveal soft-card p-10 md:p-20 bg-white shadow-2xl active border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col space-y-4">
                    <label className="text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Identity</label>
                    <input required type="text" placeholder="Full Name" className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-bold text-[#0A2540] shadow-sm" />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Communication</label>
                    <input required type="email" placeholder="active@email.com" className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-bold text-[#0A2540] shadow-sm" />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Protocol (Tel)</label>
                    <input required type="tel" placeholder="+1 (000) 000-0000" className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-bold text-[#0A2540] shadow-sm" />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Project track</label>
                    <select 
                      value={selectedService} 
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-black text-[#0A2540] cursor-pointer shadow-sm"
                    >
                      <option value="">General Architecture</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2 flex flex-col space-y-4">
                    <label className="text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Engineering Brief</label>
                    <textarea required rows={5} placeholder="Describe your technical goals and constraints..." className="bg-slate-50 border-2 border-slate-100 p-6 rounded-3xl outline-none focus:border-[#0A2540] transition-all font-bold text-[#0A2540] shadow-sm resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <button type="submit" className="btn-primary w-full py-8 rounded-[2.5rem] font-black text-2xl uppercase tracking-[0.25em] flex items-center justify-center group shadow-4xl">
                      Transmit Brief <ArrowRight className="ml-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="reveal soft-card p-24 text-center bg-[#0A2540] text-white active shadow-4xl border-none">
                <div className="inline-flex items-center justify-center w-28 h-28 bg-white/10 rounded-[3.5rem] mb-12 shadow-2xl border border-white/20 animate-float">
                  <CheckCircle2 size={56} className="text-[#4FACFE]" />
                </div>
                <h2 className="text-5xl font-black mb-8 tracking-tighter">Sync Verified.</h2>
                <p className="text-white/60 max-w-md mx-auto font-bold text-xl leading-relaxed">Your data packet has been successfully verified. An architecture lead will contact you via protocol shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-16 text-sm font-black underline uppercase tracking-[0.3em] text-[#4FACFE] hover:text-white transition-colors">Start New Synchronization</button>
              </div>
            )}
          </div>

          <div className="space-y-16">
            <div className="reveal active stagger-1">
              <h3 className="font-black text-[#0A2540] mb-10 uppercase text-[12px] tracking-[0.4em] flex items-center">
                <span className="w-12 h-[2px] bg-[#4FACFE] mr-4"></span>
                Direct Channels
              </h3>
              <div className="space-y-8">
                <a href="https://wa.me/919106025254" className="flex items-center space-x-6 p-8 bg-white rounded-[2.5rem] hover:shadow-2xl transition-all border border-slate-100 group shadow-md">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#4FACFE] group-hover:bg-[#0A2540] group-hover:text-white transition-all shadow-sm">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] mb-1">Instant Relay</div>
                    <div className="font-black text-[#0A2540] text-lg">+91 91060 25254</div>
                  </div>
                </a>
                <a href="mailto:hello@aavishkarcodex.com" className="flex items-center space-x-6 p-8 bg-white rounded-[2.5rem] hover:shadow-2xl transition-all border border-slate-100 group shadow-md">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#4FACFE] group-hover:bg-[#0A2540] group-hover:text-white transition-all shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] mb-1">Protocol Mail</div>
                    <div className="font-black text-[#0A2540] text-lg">hello@aavishkarcodex.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="reveal active stagger-2">
              <h3 className="font-black text-[#0A2540] mb-10 uppercase text-[12px] tracking-[0.4em] flex items-center">
                <span className="w-12 h-[2px] bg-[#4FACFE] mr-4"></span>
                Location Sync
              </h3>
              <div className="soft-card p-12 flex items-start space-x-6 bg-white border-slate-100 shadow-xl">
                 <div className="p-4 bg-slate-50 rounded-2xl text-[#0A2540]">
                    <MapPin size={28} />
                 </div>
                 <div>
                   <p className="text-[#0A2540] font-black text-2xl tracking-tight">
                     Ahmedabad, India
                   </p>
                   <p className="text-[#64748B] text-sm mt-3 font-bold uppercase tracking-[0.2em]">Regional HQ</p>
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