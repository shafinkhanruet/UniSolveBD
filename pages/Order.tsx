import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { UploadCloud, Check, AlertCircle } from 'lucide-react';

export const Order: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4 transition-colors duration-300">
        <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 text-center border border-gray-100 dark:border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <Check className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 font-bangla">অর্ডার রিসিভ হয়েছে!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 font-bangla text-lg leading-relaxed">
            ধন্যবাদ! আমাদের টিম আপনার ফাইল চেক করছে। ৩০ মিনিটের মধ্যে আমরা যোগাযোগ করছি।
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline" fullWidth className="dark:bg-transparent dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50">নতুন অর্ডার করুন</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-24 transition-colors duration-300 bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-bangla mb-4">
            ফ্রি কোটেশন নিন
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-bangla">
            আপনার অ্যাসাইনমেন্টের বিস্তারিত জানান, আমরা দ্রুত প্রাইস জানিয়ে দিব।
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden relative">
          {/* Top Gradient */}
          <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500"></div>

          <form onSubmit={handleSubmit} className="p-8 md:p-16 space-y-10">
            
            {/* Section 1 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center font-bangla border-b border-gray-100 dark:border-gray-800 pb-4">
                <span className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm font-bold mr-3">01</span>
                ব্যক্তিগত তথ্য
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">নাম</label>
                  <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-orange-500 dark:focus:border-orange-500 rounded-xl outline-none transition-all dark:text-white font-medium" placeholder="আপনার নাম লিখুন" />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">ইমেইল</label>
                   <input required type="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-orange-500 dark:focus:border-orange-500 rounded-xl outline-none transition-all dark:text-white font-medium" placeholder="আপনার ইমেইল এড্রেস" />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">WhatsApp</label>
                   <input required type="tel" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-orange-500 dark:focus:border-orange-500 rounded-xl outline-none transition-all dark:text-white font-medium" placeholder="017XXXXXXXX" />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">বিশ্ববিদ্যালয়</label>
                   <input type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-orange-500 dark:focus:border-orange-500 rounded-xl outline-none transition-all dark:text-white font-medium" placeholder="বিশ্ববিদ্যালয়ের নাম (অপশনাল)" />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center font-bangla border-b border-gray-100 dark:border-gray-800 pb-4">
                <span className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold mr-3">02</span>
                কাজের বিবরণ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">বিষয়</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-red-500 dark:focus:border-red-500 rounded-xl outline-none transition-all dark:text-white font-medium appearance-none cursor-pointer">
                      <option>Business / Management</option>
                      <option>Engineering (CSE/EEE)</option>
                      <option>Law / Humanities</option>
                      <option>Mathematics</option>
                      <option>Frontend Dev</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">ডেডলাইন</label>
                  <input required type="date" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-red-500 dark:focus:border-red-500 rounded-xl outline-none transition-all dark:text-white font-medium" />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">বিস্তারিত নির্দেশনা</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-red-500 dark:focus:border-red-500 rounded-xl outline-none transition-all dark:text-white font-medium resize-none" placeholder="কাজের ধরণ এবং বিশেষ কোনো রিকোয়ারমেন্ট থাকলে লিখুন..."></textarea>
              </div>

              {/* Enhanced File Upload */}
              <div className="mt-8">
                 <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">ফাইল আপলোড</label>
                 <div 
                   className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${dragActive ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' : 'border-gray-300 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                   onDragEnter={handleDrag} 
                   onDragLeave={handleDrag} 
                   onDragOver={handleDrag} 
                   onDrop={handleDrag}
                 >
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <div className="pointer-events-none">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mx-auto mb-3">
                        <UploadCloud className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOCX, PPT, JPG (Max 10MB)</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="pt-6">
              <Button type="submit" size="lg" fullWidth variant="gradient" className="h-14 text-lg font-bold shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-1 transition-all rounded-xl">
                সাবমিট করুন
              </Button>
              <div className="flex items-center justify-center mt-4 text-xs text-gray-500 dark:text-gray-400 gap-2">
                <AlertCircle className="h-3 w-3" />
                <span>আপনার তথ্য ১০০% সুরক্ষিত এবং কনফিডেন্সিয়াল</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};