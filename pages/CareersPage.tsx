import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, ArrowRight, Zap, Code2, ShoppingBag, 
  Terminal, Layout, Cpu, Smartphone, Shield, Box, Activity,
  Briefcase, TrendingUp, Layers, ChevronRight, Globe, Code
} from 'lucide-react';
import { COURSES } from '../constants';
import { Course } from '../types';
import CourseLightbox from '../components/CourseLightbox';

const iconMap: any = { 
  Code2, Zap, ShoppingBag, Terminal, Layout, 
  Cpu, Smartphone, Shield, Box, Activity, 
  Briefcase, TrendingUp, Layers, Globe, Code
};

const CATEGORIES = [
  "Development Courses",
  "Mobile Development",
  "Tech Specializations",
  "Data & AI",
  "Networking & Security",
  "Programming Courses",
  "Internships"
];

const CareersPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = useMemo(() => {
    return COURSES.filter(c => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-40 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-24 reveal active">
          <div className="tag-pill mb-8">Talent Protocol v4.0</div>
          <h1 className="text-fluid-h2 text-[#0A2540] mb-8 leading-none tracking-tighter">
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0051FF] to-[#4FACFE]">Synchronization.</span>
          </h1>
          <p className="text-2xl text-[#64748B] font-bold opacity-80 leading-relaxed max-w-2xl">
            Immersive engineering units designed to transform potential into high-fidelity technical mastery within our professional agency ecosystem.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Sidebar Navigation - Sticky on Desktop */}
          <aside className="lg:w-80 w-full flex-shrink-0 lg:sticky lg:top-40 z-40">
            {/* Mobile Horizontal Tabs */}
            <div className="lg:hidden flex overflow-x-auto pb-4 gap-3 no-scrollbar -mx-6 px-6 mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-[#0A2540] text-white shadow-xl scale-105' 
                      : 'bg-slate-100 text-[#64748B] hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Desktop Vertical Menu */}
            <div className="hidden lg:block space-y-2">
              <h4 className="text-[10px] font-black text-[#64748B] uppercase tracking-[0.4em] mb-10 px-4">Navigation Channels</h4>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full group flex items-center justify-between px-6 py-5 rounded-[1.8rem] transition-all duration-500 border-2 ${
                    activeCategory === cat 
                      ? 'bg-white border-[#0051FF] text-[#0051FF] shadow-lg translate-x-4' 
                      : 'bg-transparent border-transparent text-[#64748B] hover:bg-slate-50 hover:text-[#0A2540]'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 rounded-full mr-4 transition-all duration-500 ${activeCategory === cat ? 'bg-[#0051FF] scale-150' : 'bg-slate-300 group-hover:bg-slate-400'}`}></div>
                    <span className="font-black text-[11px] uppercase tracking-widest">{cat}</span>
                  </div>
                  {activeCategory === cat && <ChevronRight size={18} className="animate-in slide-in-from-left-2" />}
                </button>
              ))}
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-grow">
            <div key={activeCategory} className="animate-in fade-in slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-slate-100 pb-8">
                 <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tighter">{activeCategory}</h2>
                 <div className="mt-4 md:mt-0 text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.3em]">
                   {filteredCourses.length} ACTIVE MODULES
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {filteredCourses.map((course, i) => {
                  const Icon = iconMap[course.icon] || Code2;
                  return (
                    <div 
                      key={course.id} 
                      onClick={() => setSelectedCourse(course)}
                      className="group relative bg-white border-2 border-slate-50 p-10 lg:p-12 rounded-[3rem] hover:border-[#0051FF]/20 hover:shadow-4xl transition-all duration-700 cursor-pointer overflow-hidden reveal active" 
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0051FF]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      <div className="flex justify-between items-start mb-10">
                        <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center text-white group-hover:bg-[#0051FF] group-hover:scale-110 transition-all duration-500 shadow-xl">
                          <Icon size={28} />
                        </div>
                        <div className="tag-pill bg-slate-50 text-[10px] font-black uppercase tracking-widest opacity-60">{course.duration}</div>
                      </div>
                      
                      <h3 className="text-2xl font-black text-[#0A2540] mb-5 tracking-tight group-hover:text-[#0051FF] transition-colors leading-tight">{course.title}</h3>
                      <p className="text-[#64748B] text-sm leading-relaxed mb-12 font-bold opacity-80">{course.shortDesc}</p>
                      
                      <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center text-[#0051FF] font-black uppercase tracking-[0.4em] text-[9px]">
                          Sync Protocol <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                        <div className="text-[10px] font-black text-[#CBD5E1] uppercase tracking-widest">
                          ID: {course.id.split('-')[0]}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Application CTA */}
            <div className="mt-32 p-12 md:p-24 bg-[#0A2540] rounded-[4rem] md:rounded-[6rem] text-white shadow-4xl reveal active relative overflow-hidden border-4 border-white/5">
               <div className="scanline opacity-10"></div>
               <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-[#4FACFE] mb-10 border border-white/10 animate-float-subtle">
                     <TrendingUp size={40} />
                  </div>
                  <h3 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter italic">Ready to Execute?</h3>
                  <p className="text-white/40 text-xl font-bold max-w-2xl mb-16 leading-relaxed">Our cohorts are designed for the high-load reality of modern agency production. Apply to synchronize with our elite engineering team.</p>
                  <a href="#/contact" className="btn-primary btn-pill px-16 py-8 text-xs font-black uppercase tracking-[0.3em] flex items-center shadow-2xl hover:scale-105 active:scale-95 transition-all">
                     Initialize Application <ArrowRight className="ml-4" />
                  </a>
               </div>
               <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
          </main>
        </div>
      </div>

      {selectedCourse && (
        <CourseLightbox course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  );
};

export default CareersPage;