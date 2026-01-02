
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
            Industry <span className="text-transparent bg-clip-text gradient-primary">Programs.</span>
          </h1>
          <p className="text-xl text-[#6B7280] leading-relaxed max-w-2xl font-medium">
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
                className="reveal soft-card p-12 flex flex-col h-full border border-white group cursor-pointer" 
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={32} />
                  </div>
                  <div className="text-[10px] font-black text-[#4FACFE] bg-[#EAF6FF] px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {course.duration}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0A2540] mb-3 tracking-tight group-hover:text-[#4FACFE] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#6B7280] text-base leading-relaxed mb-10 font-medium flex-grow opacity-80">
                  {course.shortDesc}
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex flex-wrap gap-2">
                    {course.skills.slice(0, 3).map((skill, si) => (
                      <span key={si} className="text-[9px] font-black uppercase tracking-widest text-[#9CA3AF] border border-[#EAF6FF] px-3 py-1 rounded-lg">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-8 leading-tight tracking-tight">Enterprise-Ready Excellence.</h2>
            <p className="text-[#6B7280] text-lg mb-10 leading-relaxed font-medium">
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
                <div key={i} className="flex items-center space-x-4 text-[#0A2540] font-bold bg-white p-4 rounded-2xl border border-white shadow-sm">
                  <div className="p-1 bg-[#EAF6FF] rounded-full"><CheckCircle2 size={20} className="text-[#4FACFE]" /></div>
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative reveal active">
             <div className="absolute inset-0 gradient-primary opacity-10 blur-[100px] rounded-full -z-10"></div>
             <div className="grid grid-cols-2 gap-8">
               <div className="soft-card p-12 flex flex-col justify-center items-center text-center border border-white">
                 <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                   <Star size={32} />
                 </div>
                 <div className="text-4xl font-black text-[#0A2540] mb-2 tracking-tighter leading-none">200+</div>
                 <div className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.2em]">Industry Alumni</div>
               </div>
               <div className="soft-card p-12 flex flex-col justify-center items-center text-center mt-12 border border-white">
                 <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                   <Globe size={32} />
                 </div>
                 <div className="text-4xl font-black text-[#0A2540] mb-2 tracking-tighter leading-none">Global</div>
                 <div className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.2em]">Deployment Reach</div>
               </div>
             </div>
          </div>
        </div>

        {/* Application Form */}
        <section className="reveal active">
          <div className="soft-card p-10 md:p-24 border border-white/50 bg-white/70 backdrop-blur-xl">
            <SectionHeader title="Candidate Terminal" subtitle="Begin your professional synchronization with our engineering leads." align="left" />
            <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em] ml-1">Identity</label>
                <input required type="text" placeholder="Full Name" className="bg-[#EAF6FF]/30 border border-white p-5 rounded-2xl outline-none focus:border-[#4FACFE] focus:ring-4 focus:ring-[#4FACFE]/5 transition-all font-medium text-[#0A2540]" />
              </div>
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em] ml-1">Communication</label>
                <input required type="email" placeholder="active@email.com" className="bg-[#EAF6FF]/30 border border-white p-5 rounded-2xl outline-none focus:border-[#4FACFE] focus:ring-4 focus:ring-[#4FACFE]/5 transition-all font-medium text-[#0A2540]" />
              </div>
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em] ml-1">Mobile</label>
                <input required type="tel" placeholder="+91 00000 00000" className="bg-[#EAF6FF]/30 border border-white p-5 rounded-2xl outline-none focus:border-[#4FACFE] focus:ring-4 focus:ring-[#4FACFE]/5 transition-all font-medium text-[#0A2540]" />
              </div>
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em] ml-1">Program Track</label>
                <select className="bg-[#EAF6FF]/30 border border-white p-5 rounded-2xl outline-none focus:border-[#4FACFE] focus:ring-4 focus:ring-[#4FACFE]/5 transition-all font-bold text-[#0A2540]">
                  <option>Select Program Unit</option>
                  {COURSES.map(c => <option key={c.id}>{c.title}</option>)}
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col space-y-3">
                <label className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em] ml-1">Career Goal Statement</label>
                <textarea required placeholder="Briefly describe your technical background and why you want to join this program..." rows={4} className="w-full bg-[#EAF6FF]/30 border border-white p-6 rounded-3xl outline-none focus:border-[#4FACFE] focus:ring-4 focus:ring-[#4FACFE]/5 transition-all font-medium text-[#0A2540] resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full md:w-auto px-16 py-6 rounded-2xl font-black text-white gradient-primary shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] text-sm">
                  Transmit Application <ArrowRight className="inline ml-3" size={16} />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-40 reveal active">
          <SectionHeader title="Common Protocols" subtitle="Operational intelligence regarding our learning programs." />
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="group bg-white border border-white rounded-[2rem] overflow-hidden transition-all duration-300 shadow-sm">
              <summary className="flex justify-between items-center p-8 cursor-pointer font-bold text-[#0A2540] list-none group-open:bg-[#EAF6FF]/30 transition-colors">
                <span className="text-lg">What is the selection process?</span>
                <div className="p-2 rounded-xl bg-[#EAF6FF] group-open:rotate-180 transition-transform duration-300">
                  <ChevronRight size={20} className="text-[#4FACFE]" />
                </div>
              </summary>
              <div className="px-8 pb-8 text-[#6B7280] text-base leading-relaxed pt-6 font-medium">
                Candidates undergo an initial screening based on their application brief, followed by a technical assessment and a culture-fit interview with our engineering leads.
              </div>
            </details>
            <details className="group bg-white border border-white rounded-[2rem] overflow-hidden transition-all duration-300 shadow-sm">
              <summary className="flex justify-between items-center p-8 cursor-pointer font-bold text-[#0A2540] list-none group-open:bg-[#EAF6FF]/30 transition-colors">
                <span className="text-lg">Do programs include live project exposure?</span>
                <div className="p-2 rounded-xl bg-[#EAF6FF] group-open:rotate-180 transition-transform duration-300">
                  <ChevronRight size={20} className="text-[#4FACFE]" />
                </div>
              </summary>
              <div className="px-8 pb-8 text-[#6B7280] text-base leading-relaxed pt-6 font-medium">
                Yes, our programs are fundamentally practical. During the final phases, students are integrated into actual project workflows under senior technical oversight.
              </div>
            </details>
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
