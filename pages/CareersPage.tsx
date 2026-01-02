import React, { useState } from 'react';
import { 
  CheckCircle2, GraduationCap, Laptop, BookOpen, 
  ChevronRight, Briefcase, Zap, Globe, Code2, 
  ShoppingBag, ArrowRight, Star
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { COURSES } from '../constants';
import { Course } from '../types';
import CourseLightbox from '../components/CourseLightbox';

const iconMap: any = {
  Code2, Zap, ShoppingBag
};

const CareersPage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const openCourse = (course: Course) => setSelectedCourse(course);
  const closeCourse = () => setSelectedCourse(null);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20 reveal active">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-none">
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0061FF]">Programs.</span>
          </h1>
          <p className="text-xl text-[#374151] leading-relaxed max-w-2xl font-bold">
            Bridging the transition from academic theory to elite technical delivery through immersive agency-led mentorship and professional skill units.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-40">
          {COURSES.map((course, i) => {
            const Icon = iconMap[course.icon] || GraduationCap;
            return (
              <div 
                key={course.id} 
                onClick={() => openCourse(course)}
                className="reveal soft-card p-12 flex flex-col h-full border-2 border-white group cursor-pointer hover:border-blue-100" 
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-16 h-16 bg-gradient-to-br from-[#4FACFE] to-[#0061FF] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={32} />
                  </div>
                  <div className="tag-pill">
                    {course.duration}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-[#0A2540] mb-3 tracking-tight group-hover:text-[#4FACFE] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#374151] text-base leading-relaxed mb-10 font-bold flex-grow opacity-80">
                  {course.shortDesc}
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex flex-wrap gap-2">
                    {course.skills.slice(0, 3).map((skill, si) => (
                      <span key={si} className="text-[10px] font-black uppercase tracking-widest text-[#0369A1] bg-blue-50/50 border border-blue-100 px-3 py-1.5 rounded-xl">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-[#0A2540] font-black uppercase tracking-[0.2em] text-[10px] group-hover:translate-x-2 transition-transform">
                  Access Syllabus <ArrowRight className="ml-2 w-4 h-4 text-[#4FACFE]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Context */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40 items-center">
          <div className="reveal active">
            <h2 className="text-4xl md:text-5xl font-black text-[#0A2540] mb-8 leading-tight tracking-tight">Enterprise-Ready Excellence.</h2>
            <p className="text-[#374151] text-lg mb-10 leading-relaxed font-bold">
              We eliminate the gap between traditional education and actual industry delivery. Our programs are engineered to build high-performance talent capable of handling global project complexity.
            </p>
            <div className="space-y-6">
              {[
                "Immersive residency within our architecture units",
                "Senior mentorship on production-grade systems",
                "Project-led evaluation over traditional grading",
                "Advanced tech-stack mastery: React, Node.js, AI, Shopify",
                "Placement ecosystems within our client network"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 text-[#0A2540] font-black bg-white p-5 rounded-[2rem] border-2 border-white shadow-md">
                  <div className="p-1.5 bg-blue-50 rounded-full"><CheckCircle2 size={20} className="text-[#4FACFE]" /></div>
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative reveal active">
             <div className="absolute inset-0 bg-blue-400 opacity-10 blur-[100px] rounded-full -z-10"></div>
             <div className="grid grid-cols-2 gap-8">
               <div className="soft-card p-12 flex flex-col justify-center items-center text-center border-2 border-white">
                 <div className="w-16 h-16 bg-gradient-to-br from-[#4FACFE] to-[#0061FF] rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                   <Star size={32} />
                 </div>
                 <div className="text-4xl font-black text-[#0A2540] mb-2 tracking-tighter leading-none">200+</div>
                 <div className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.2em]">Industry Alumni</div>
               </div>
               <div className="soft-card p-12 flex flex-col justify-center items-center text-center mt-12 border-2 border-white">
                 <div className="w-16 h-16 bg-gradient-to-br from-[#0061FF] to-[#60A5FA] rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                   <Globe size={32} />
                 </div>
                 <div className="text-4xl font-black text-[#0A2540] mb-2 tracking-tighter leading-none">Global</div>
                 <div className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.2em]">Deployment Reach</div>
               </div>
             </div>
          </div>
        </div>

        {/* Application Form */}
        <section className="reveal active">
          <div className="soft-card p-10 md:p-24 border-2 border-white bg-white/80 backdrop-blur-xl">
            <SectionHeader title="Candidate Terminal" subtitle="Begin your professional synchronization with our engineering leads." align="left" />
            <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black text-[#0A2540] uppercase tracking-[0.3em] ml-1">Identity</label>
                <input required type="text" placeholder="Full Name" className="bg-blue-50/50 border-2 border-white p-5 rounded-2xl outline-none focus:border-blue-400 transition-all font-bold text-[#0A2540] shadow-inner placeholder:text-[#9CA3AF]" />
              </div>
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black text-[#0A2540] uppercase tracking-[0.3em] ml-1">Communication</label>
                <input required type="email" placeholder="active@email.com" className="bg-blue-50/50 border-2 border-white p-5 rounded-2xl outline-none focus:border-blue-400 transition-all font-bold text-[#0A2540] shadow-inner placeholder:text-[#9CA3AF]" />
              </div>
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black text-[#0A2540] uppercase tracking-[0.3em] ml-1">Mobile</label>
                <input required type="tel" placeholder="+91 00000 00000" className="bg-blue-50/50 border-2 border-white p-5 rounded-2xl outline-none focus:border-blue-400 transition-all font-bold text-[#0A2540] shadow-inner placeholder:text-[#9CA3AF]" />
              </div>
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black text-[#0A2540] uppercase tracking-[0.3em] ml-1">Program Track</label>
                <select className="bg-blue-50/50 border-2 border-white p-5 rounded-2xl outline-none focus:border-blue-400 transition-all font-bold text-[#0A2540] shadow-inner">
                  <option>Select Program Unit</option>
                  {COURSES.map(c => <option key={c.id}>{c.title}</option>)}
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col space-y-3">
                <label className="text-[10px] font-black text-[#0A2540] uppercase tracking-[0.3em] ml-1">Career Goal Statement</label>
                <textarea required placeholder="Briefly describe your technical background..." rows={4} className="w-full bg-blue-50/50 border-2 border-white p-6 rounded-3xl outline-none focus:border-blue-400 transition-all font-bold text-[#0A2540] shadow-inner resize-none placeholder:text-[#9CA3AF]"></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="btn-primary w-full md:w-auto px-16 py-6 rounded-2xl font-black text-white shadow-2xl transition-all uppercase tracking-[0.2em] text-sm">
                  Transmit Application <ArrowRight className="inline ml-3" size={16} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      {selectedCourse && (
        <CourseLightbox 
          course={selectedCourse} 
          onClose={closeCourse} 
        />
      )}
    </div>
  );
};

export default CareersPage;