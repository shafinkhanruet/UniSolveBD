import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Code, Presentation, Briefcase, Sigma, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="h-8 w-8" />,
  PenTool: <PenTool className="h-8 w-8" />,
  Code: <Code className="h-8 w-8" />,
  Presentation: <Presentation className="h-8 w-8" />,
  Briefcase: <Briefcase className="h-8 w-8" />,
  Sigma: <Sigma className="h-8 w-8" />,
};

const gradients = [
  'from-orange-500 to-red-500',
  'from-amber-500 to-orange-500',
  'from-red-500 to-pink-500',
  'from-orange-400 to-amber-500',
  'from-red-600 to-orange-600',
  'from-pink-500 to-rose-500',
];

export const Services: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Add scroll listener with passive option for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-[#0B1120] pb-20 transition-colors duration-300 overflow-hidden">
      
      {/* Background Animated Elements with Parallax */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Blob 1 - Faster parallax */}
        <div 
          className="absolute -top-[10%] -left-[10%] transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.4}px, 0)` }}
        >
          <div className="w-[40rem] h-[40rem] bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
        </div>

        {/* Blob 2 - Medium parallax */}
        <div 
          className="absolute top-[20%] -right-[10%] transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
        >
          <div className="w-[35rem] h-[35rem] bg-red-500/10 dark:bg-red-500/5 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Blob 3 - Slower parallax */}
        <div 
          className="absolute -bottom-[20%] left-[20%] transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
        >
          <div className="w-[45rem] h-[45rem] bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="relative z-10 bg-white/70 dark:bg-[#0f1629]/80 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="text-orange-600 dark:text-orange-400 font-bold tracking-wider text-sm uppercase mb-2 block animate-fade-in-up">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-bangla mb-6">আমাদের সার্ভিসসমূহ</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-bangla leading-relaxed">
            আপনার একাডেমিক প্রয়োজেনে আমরা দিচ্ছি কমপ্লিট সল্যুশন। ইঞ্জিনিয়ারিং, আর্টস কিংবা বিজনেস - সব বিষয়েই এক্সপার্ট সাপোর্ট।
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="relative group card-3d-hover cursor-default">
              {/* Main Card Content */}
              <div className="relative bg-white dark:bg-[#1e293b] rounded-[2rem] p-8 h-full flex flex-col border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
                
                {/* Icon with Animation */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-white mb-6 shadow-md transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg relative z-10`}>
                  {iconMap[service.iconName]}
                </div>

                {/* Title with Color Transition */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-bangla relative z-10">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-bangla flex-grow relative z-10">
                  {service.description}
                </p>
                
                {/* Footer Section */}
                <div className="border-t border-gray-100 dark:border-gray-700 pt-6 mt-auto relative z-10">
                  <ul className="space-y-3 mb-8 text-sm text-gray-500 dark:text-gray-400 font-bangla">
                    <li className="flex items-center">
                       <div className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${gradients[index % gradients.length]}`}></div> কনসেপ্ট ক্লিয়ারিং
                    </li>
                    <li className="flex items-center">
                       <div className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${gradients[index % gradients.length]}`}></div> হাই কোয়ালিটি রিসোর্স
                    </li>
                  </ul>
                  
                  <Link to="/order">
                    <Button variant="outline" fullWidth className="group/btn border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white hover:border-transparent hover:text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 dark:hover:from-orange-500 dark:hover:to-red-500 transition-all duration-300 shadow-sm hover:shadow-lg rounded-xl">
                      অর্ডার করুন
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subjects Banner */}
        <div className="mt-20 bg-[#111827] dark:bg-[#0f1629] rounded-[2.5rem] p-12 text-center shadow-2xl relative overflow-hidden border border-gray-800 dark:border-gray-700 group">
           {/* Animated Background Orbs */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-1000 group-hover:bg-orange-500/20 group-hover:scale-110"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -ml-32 -mb-32 transition-all duration-1000 group-hover:bg-red-500/20 group-hover:scale-110"></div>
           
           <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-bangla text-white">স্পেশাল কোনো রিকোয়ারমেন্ট আছে?</h2>
            <p className="mb-10 text-gray-400 text-lg font-bangla max-w-2xl mx-auto">
              আমাদের টিম ৫০+ সাবজেক্টে দক্ষ। আপনার সাবজেক্ট লিস্টে না থাকলেও সমস্যা নেই, আমাদের সাথে যোগাযোগ করুন।
            </p>
            <Link to="/contact">
              <Button variant="gradient" className="border-none shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 font-bold px-10 h-14 rounded-2xl text-lg">
                সরাসরি কথা বলুন
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};