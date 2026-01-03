import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Zap, Code2, ShoppingBag, Terminal } from 'lucide-react';
import { COURSES } from '../constants';
import { Course } from '../types';
import CourseLightbox from '../components/CourseLightbox';

const iconMap: any = { Code2, Zap, ShoppingBag };

const CareersPage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="pt-40 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 reveal">
          <div className="tag-pill mb-8">Talent Protocol</div>
          <h1 className="text-fluid-h2 text-[#0A2540] mb-8 leading-none tracking-tighter">
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0051FF] to-[#4FACFE]">Synchronization.</span>
          </h1>
          <p className="text-2xl text-[#64748B] font-bold opacity-80 leading-relaxed max-w-2xl">
            Immersive engineering units designed to transform academic potential into high-fidelity technical mastery.
          </p>
        </div>

        {/* Track Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-40">
          {COURSES.map((course, i) => {
            const Icon = iconMap[course.icon] || Zap;
            return (
              <div 
                key={course.id} 
                onClick={() => setSelectedCourse(course)}
                className="glass-panel p-12 flex flex-col h-full rounded-[3.5rem] border-2 border-white group cursor-pointer hover:shadow-4xl transition-all duration-700 reveal" 
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center text-white group-hover:bg-[#0051FF] transition-all shadow-xl">
                    <Icon size={32} />
                  </div>
                  <div className="tag-pill">{course.duration}</div>
                </div>
                <h3 className="text-2xl font-black text-[#0A2540] mb-4 tracking-tight group-hover:text-[#0051FF] transition-colors">{course.title}</h3>
                <p className="text-[#64748B] text-base leading-relaxed mb-10 font-bold opacity-80 flex-grow">{course.shortDesc}</p>
                <div className="flex items-center text-[#0051FF] font-black uppercase tracking-[0.3em] text-[10px] group-hover:translate-x-3 transition-transform">
                  Access Syllabus <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Residency Context */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40 items-center">
          <div className="reveal">
            <h2 className="text-5xl font-black text-[#0A2540] mb-10 leading-none tracking-tighter">Agency Residency.</h2>
            <p className="text-[#64748B] text-xl mb-12 font-bold leading-relaxed">
              We eliminate the gap between static theory and production delivery. Every program participant enters a high-fidelity environment guided by active project leads.
            </p>
            <div className="space-y-6">
              {[
                "Direct mentorship from senior architecture leads",
                "Live collaboration on production-grade modules",
                "Advanced tech-stack synchronization",
                "Placement ecosystems within global client networks"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-5 text-[#0A2540] font-black bg-white p-6 rounded-[2.5rem] border-2 border-white shadow-xl">
                  <div className="p-2 bg-blue-50 rounded-xl text-[#0051FF]"><CheckCircle2 size={24} /></div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative reveal flex justify-center">
            <div className="w-full max-w-md aspect-square bg-[#0A2540] rounded-[4rem] p-16 flex flex-col justify-center items-center text-center shadow-4xl relative overflow-hidden group">
               <div className="scanline opacity-20"></div>
               <Terminal size={100} className="text-[#0051FF] mb-10 animate-pulse" />
               <div className="text-5xl font-black text-white mb-2 tracking-tighter leading-none">200+</div>
               <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Unit Alumni Sync</div>
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0051FF]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {selectedCourse && (
        <CourseLightbox course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  );
};

export default CareersPage;