import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Users, ArrowRight, Star, Zap, BookOpen, Code, Award, PenTool, Calculator, Clock, FileText, GraduationCap, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SERVICES, TESTIMONIALS } from '../constants';

// --- Components for this page ---

const Typewriter = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["অ্যাসাইনমেন্ট", "থিসিস", "প্রেজেন্টেশন", "প্রজেক্ট", "রিসার্চ"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (isDeleting) {
        setTypingSpeed(50);
      } else {
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="text-orange-600 dark:text-orange-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const PriceEstimator = () => {
  const [level, setLevel] = useState(1.5); // 1 = HS, 1.5 = Undergrad, 2 = Master
  const [pages, setPages] = useState(5);
  const [deadline, setDeadline] = useState(3); // multiplier based on urgency
  
  // Base rate per page (250 words) in BDT
  const baseRate = 300; 

  const deadlineOptions = [
    { label: '7+ Days', value: 1 },
    { label: '3-5 Days', value: 1.2 },
    { label: '1-2 Days', value: 1.5 },
    { label: '12 Hours', value: 2.5 },
  ];

  const calculateTotal = () => {
    return Math.round(baseRate * pages * level * deadline);
  };

  return (
    <div className="bg-white dark:bg-[#1e293b] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-orange-500/10 transition-colors"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-bangla mb-4">
            স্মার্ট প্রাইস এস্টিমেটর <Calculator className="inline-block ml-2 h-8 w-8 text-orange-500" />
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-bangla">
            বাজেট নিয়ে টেনশন? এখনই দেখে নিন আপনার কাজের সম্ভাব্য খরচ কত হতে পারে।
          </p>

          <div className="space-y-6">
            {/* Level Selector */}
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">একাডেমিক লেভেল</label>
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                {[
                  { l: 'College', v: 1 }, 
                  { l: 'Undergrad', v: 1.5 }, 
                  { l: 'Masters', v: 2 }
                ].map((opt) => (
                  <button
                    key={opt.l}
                    onClick={() => setLevel(opt.v)}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${level === opt.v ? 'bg-white dark:bg-gray-700 text-orange-600 dark:text-orange-400 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-200'}`}
                  >
                    {opt.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Pages Slider */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Page / Words</label>
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{pages} Pages ({pages * 250} words)</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={pages} 
                onChange={(e) => setPages(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
            </div>

            {/* Deadline Selector */}
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">ডেডলাইন</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {deadlineOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setDeadline(opt.value)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${deadline === opt.value ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' : 'border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Total Display */}
        <div className="bg-gray-900 dark:bg-black rounded-3xl p-8 text-center text-white relative overflow-hidden flex flex-col justify-center h-full">
           <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
           <div className="relative z-10">
             <p className="text-orange-300 font-bold uppercase tracking-widest text-sm mb-2">আনুমানিক খরচ</p>
             <div className="text-5xl md:text-6xl font-black mb-2 tracking-tight">
               ৳ {calculateTotal()}
             </div>
             <p className="text-gray-400 text-sm mb-8">*বিষয়ভেদে কিছুটা পরিবর্তন হতে পারে</p>
             
             <Link to="/order">
              <Button fullWidth variant="gradient" className="h-14 text-lg shadow-lg hover:shadow-orange-500/50">
                অর্ডার কনফার্ম করুন
              </Button>
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

const WriterCard = ({ name, subject, rating, projects, image }: { name: string, subject: string, rating: string, projects: string, image: string }) => (
  <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center group">
    <div className="relative mb-4">
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md">
        <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white dark:border-gray-800 flex items-center">
        <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse"></div> Available
      </div>
    </div>
    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{name}</h4>
    <p className="text-orange-600 dark:text-orange-400 text-sm font-medium mb-3">{subject}</p>
    
    <div className="flex items-center justify-between w-full bg-gray-50 dark:bg-gray-800 rounded-xl p-3 mt-auto">
      <div className="flex items-center text-amber-400 font-bold text-sm">
        <Star className="w-4 h-4 fill-current mr-1" /> {rating}
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-xs font-semibold">
        {projects} Projects
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 dark:bg-[#0B1120] transition-colors duration-300 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-visible">
        {/* Clean Gradient Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-red-500/10 dark:bg-red-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-amber-500/10 dark:bg-amber-500/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
        </div>
        
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
          <div className="absolute top-40 left-[10%] perspective-1000 animate-float">
            <div className="w-20 h-20 glass-panel rounded-2xl flex items-center justify-center transform rotate-y-12 rotate-x-12 shadow-2xl backdrop-blur-md border border-white/40 dark:border-white/10">
               <Code className="h-10 w-10 text-orange-500" />
            </div>
          </div>
          <div className="absolute top-32 right-[10%] perspective-1000 animate-float-delayed">
             <div className="w-24 h-24 glass-panel rounded-2xl flex items-center justify-center transform -rotate-y-12 rotate-x-6 shadow-2xl backdrop-blur-md border border-white/40 dark:border-white/10">
               <BookOpen className="h-12 w-12 text-red-500" />
            </div>
          </div>
          <div className="absolute bottom-40 left-[15%] perspective-1000 animate-float" style={{animationDuration: '8s'}}>
             <div className="w-16 h-16 glass-panel rounded-2xl flex items-center justify-center transform rotate-y-6 -rotate-x-12 shadow-xl backdrop-blur-md border border-white/40 dark:border-white/10">
               <Zap className="h-8 w-8 text-amber-500" />
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/10 border border-orange-100 dark:border-white/10 shadow-lg backdrop-blur-xl mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-600 dark:text-gray-300 tracking-wide uppercase">
                Trusted by 5000+ Students
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-extrabold text-gray-900 dark:text-white mb-8 leading-[1.1] drop-shadow-sm min-h-[160px] md:min-h-[auto]">
              <span className="block font-bangla mb-2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>আপনার <Typewriter /></span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 dark:from-orange-400 dark:via-red-400 dark:to-orange-400 font-bangla animate-gradient-x bg-[length:200%_auto] pb-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                এখন আরও সহজ!
              </span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-bangla leading-relaxed max-w-3xl mx-auto animate-fade-in-up font-light" style={{animationDelay: '0.3s'}}>
              NSU, BRAC, DU এবং প্রাইভেট ভার্সিটির স্টুডেন্টদের জন্য <span className="font-semibold text-gray-900 dark:text-white">সবচেয়ে বিশ্বস্ত</span> সল্যুশন। ১০০% কনফিডেন্সিয়াল এবং প্রিমিয়াম কোয়ালিটি সাপোর্ট।
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Link to="/order">
                <Button size="lg" variant="gradient" className="font-bangla text-lg px-10 h-14 shadow-xl shadow-orange-600/20 rounded-2xl hover:scale-105 transition-all duration-300">
                  অর্ডার করুন <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="font-bangla text-lg h-14 px-10 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-gray-200 dark:border-white/10 hover:bg-white hover:border-white text-gray-700 dark:text-white dark:hover:bg-white/10">
                  সার্ভিস দেখুন
                </Button>
              </Link>
            </div>
        </div>
      </section>

      {/* Stats Floating Panel */}
      <section className="relative z-30 px-4 -mt-10 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-gray-200 dark:divide-white/10">
              {[
                { label: 'Completed Tasks', value: '5k+', icon: CheckCircle, color: 'text-green-500' },
                { label: 'Expert Writers', value: '50+', icon: Users, color: 'text-orange-500' },
                { label: 'Success Rate', value: '98%', icon: TrendingUp, color: 'text-red-500' },
                { label: 'Active Support', value: '24/7', icon: Zap, color: 'text-amber-500' },
              ].map((stat, i) => (
                <div key={i} className="px-4 group cursor-default">
                  <div className={`mb-3 inline-flex p-3 rounded-2xl bg-gray-50 dark:bg-white/5 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICE ESTIMATOR SECTION */}
      <section className="py-12 px-4 relative z-20">
        <div className="max-w-5xl mx-auto">
          <PriceEstimator />
        </div>
      </section>

      {/* Services Preview - Redesigned */}
      <section className="py-24 bg-gray-50 dark:bg-[#0B1120] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
           <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <span className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest text-sm mb-3 block">Expert Solutions</span>
             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-bangla mb-6">আমাদের টপ-রেটেড সার্ভিসসমূহ</h2>
             <p className="text-gray-600 dark:text-gray-400 text-lg font-bangla">
               গত ৩ বছরে আমরা ৫০০০+ স্টুডেন্টকে এই সার্ভিসগুলো দিয়েছি। আপনার প্রয়োজন কোনটি?
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, i) => (
              <div key={service.id} className="group relative bg-white dark:bg-[#1e293b] rounded-[2.5rem] p-2 transition-all duration-300 hover:-translate-y-2">
                {/* Gradient Border Effect via Container Padding */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-[2.5rem] -z-10 group-hover:from-orange-500 group-hover:to-red-600 transition-all duration-500"></div>
                
                <div className="h-full bg-white dark:bg-[#151c2f] rounded-[2rem] p-8 relative overflow-hidden flex flex-col items-start">
                   {/* Background Pattern */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:from-orange-500/10"></div>
                   
                   {/* Icon Box */}
                   <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                     {i === 0 && <PenTool className="h-8 w-8" />}
                     {i === 1 && <BookOpen className="h-8 w-8" />}
                     {i === 2 && <Code className="h-8 w-8" />}
                   </div>

                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-bangla pr-4">{service.title}</h3>
                   <p className="text-gray-600 dark:text-gray-400 mb-8 font-bangla leading-relaxed flex-grow">
                     {service.description}
                   </p>

                   <Link to="/services" className="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                     বিস্তারিত দেখুন <div className="ml-2 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors"><ArrowRight className="h-4 w-4" /></div>
                   </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link to="/services">
                <Button variant="outline" className="rounded-full px-8 py-4 border-2 font-bold hover:bg-orange-50 dark:hover:bg-orange-900/20">
                  সব সার্ভিস দেখুন <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Writers Section */}
      <section className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest text-sm mb-2 block">The Best Minds</span>
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white font-bangla mb-4">আমাদের সেরা রাইটারগন</h2>
              <div className="w-20 h-1.5 bg-orange-600 dark:bg-orange-500 mx-auto rounded-full"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <WriterCard 
                name="Tanvir H." 
                subject="Computer Science" 
                rating="5.0" 
                projects="120+" 
                image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
              />
              <WriterCard 
                name="Sarah K." 
                subject="Business Admin" 
                rating="4.9" 
                projects="98+" 
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
              />
              <WriterCard 
                name="Rafiqul I." 
                subject="Mathematics" 
                rating="4.9" 
                projects="150+" 
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
              />
              <WriterCard 
                name="Nusrat J." 
                subject="English Lit." 
                rating="5.0" 
                projects="85+" 
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
              />
           </div>
        </div>
      </section>

      {/* Why Choose Us - 3D Cards */}
      <section className="py-24 bg-white dark:bg-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white font-bangla mb-4">কেন আমরা সেরা?</h2>
            <div className="w-20 h-1.5 bg-orange-600 dark:bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: ShieldCheck, 
                title: '১০০% ইউনিক', 
                desc: 'প্রতিটি কাজ আমরা স্ক্র্যাচ থেকে করি। কোনো কপি-পেস্ট বা AI জেনারেটেড কন্টেন্ট আমরা দেই না।',
                color: 'bg-orange-500',
                glow: 'bg-orange-500'
              },
              { 
                icon: Clock, 
                title: 'সুপার ফাস্ট ডেলিভারি', 
                desc: 'আপনার ডেডলাইনের আগেই কাজ বুঝিয়ে দেওয়া আমাদের প্রতিশ্রুতি। ইমার্জেন্সি সাপোর্ট এভেইলেবল।',
                color: 'bg-amber-500',
                glow: 'bg-amber-500'
              },
              { 
                icon: Award, 
                title: 'ভেরিফাইড এক্সপার্ট', 
                desc: 'টপ-টায়ার ভার্সিটির গ্রাজুয়েটদের দ্বারা আপনার কাজ সম্পন্ন করা হয়, তাই কোয়ালিটি নিয়ে নিশ্চিত থাকুন।',
                color: 'bg-red-500',
                glow: 'bg-red-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative h-full perspective-1000">
                {/* 3D Card Structure */}
                <div className="relative h-full bg-gray-50 dark:bg-[#111827] rounded-[2rem] p-8 pt-16 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 card-3d-hover">
                  
                  {/* Subtle Glow Behind */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 ${item.glow} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700 rounded-full pointer-events-none`}></div>

                  {/* Floating Icon Cap */}
                  <div className={`absolute -top-8 left-8 w-16 h-16 rounded-2xl ${item.color} shadow-lg shadow-${item.color}/30 flex items-center justify-center text-white transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 z-10`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-bangla">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-bangla leading-relaxed">{item.desc}</p>
                  
                  {/* Bottom Gradient Line */}
                  <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-t-full ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Cards Lifting Off */}
      <section className="py-32 bg-gray-50 dark:bg-[#0f1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white font-bangla">সহজ ৩ টি ধাপ</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
               {/* Connector Line */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 -z-10"></div>

               {[
                 { step: '01', title: 'ফাইল আপলোড', desc: 'অর্ডার ফর্মে আপনার রিকোয়ারমেন্ট দিন', color: 'bg-orange-500', icon: FileText },
                 { step: '02', title: 'পেমেন্ট করুন', desc: 'বিকাশ/নগদে পেমেন্ট কনফার্ম করুন', color: 'bg-red-500', icon: CheckCircle },
                 { step: '03', title: 'ডেলিভারি নিন', desc: 'মেইলে আপনার সল্যুশন বুঝে নিন', color: 'bg-green-500', icon: GraduationCap }
               ].map((item, i) => (
                 <div key={i} className="group perspective-1000">
                    <div className="relative bg-white dark:bg-[#1F2937] p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 transform group-hover:-translate-y-4 group-hover:rotate-x-2 flex flex-col items-center text-center h-full z-10">
                       <div className={`w-16 h-16 rounded-2xl ${item.color} shadow-lg shadow-${item.color}/40 flex items-center justify-center text-white text-xl font-bold mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                         <item.icon className="h-8 w-8" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-bangla">{item.title}</h3>
                       <p className="text-gray-500 dark:text-gray-400 font-bangla">{item.desc}</p>
                    </div>
                    {/* Shadow underneath to simulate lifting */}
                    <div className="absolute top-full left-4 right-4 h-4 bg-black/10 dark:bg-black/50 rounded-[100%] blur-md mt-4 transition-all duration-500 group-hover:scale-x-90 group-hover:opacity-60"></div>
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white font-bangla mb-16">হ্যাপি স্টুডেন্টস</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 dark:bg-[#1e293b] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                <div className="flex items-center mb-6">
                   <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-sm">
                     {t.name.charAt(0)}
                   </div>
                   <div className="ml-3">
                     <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
                     <p className="text-xs text-gray-500 dark:text-gray-400">{t.university}</p>
                   </div>
                </div>
                <div className="mb-4 text-amber-400 flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic font-bangla text-sm leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f1629]">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-1000 group-hover:scale-105"></div>
             
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 opacity-20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>

             <div className="relative px-8 py-20 md:px-24 text-center">
               <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-bangla">
                 রেডি অ্যাসাইনমেন্ট সল্যুশন?
               </h2>
               <p className="text-orange-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-bangla">
                 টেনশন ফ্রি একাডেমিক লাইফ এনজয় করতে আজই আমাদের সাথে কানেক্টেড হন।
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/order">
                    <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50 border-none font-bold text-lg px-10 h-14 rounded-2xl shadow-xl hover:scale-105 transition-all">
                      অর্ডার করুন
                    </Button>
                  </Link>
               </div>
             </div>
           </div>
         </div>
      </section>
    </div>
  );
};