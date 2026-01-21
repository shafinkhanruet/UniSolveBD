import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, Twitter, Instagram, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              {!logoError ? (
                <img 
                  src="https://ik.imagekit.io/w5jfq695r/logo.png.png" 
                  alt="UniSolve BD" 
                  className="h-16 w-auto" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-md">
                     <GraduationCap className="h-7 w-7" />
                  </div>
                  <span className="text-3xl font-bold font-bangla text-gray-900 dark:text-white tracking-tight">
                    Uni<span className="text-orange-600 dark:text-orange-500">Solve</span>
                  </span>
                </div>
              )}
            </Link>
            <p className="text-sm leading-relaxed mb-6 font-bangla">
              ২০২১ সাল থেকে বাংলাদেশী ছাত্রদের একাডেমিক সাফল্যের বিশ্বস্ত সঙ্গী। আমরা কোয়ালিটি এবং সময়ের ব্যাপারে আপোষহীন।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-sm"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all shadow-sm"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-sm"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-6">ন্যাভিগেশন</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-orange-600 dark:hover:text-orange-400 transition-colors">হোম</Link></li>
              <li><Link to="/services" className="text-sm hover:text-orange-600 dark:hover:text-orange-400 transition-colors">সার্ভিসসমূহ</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-orange-600 dark:hover:text-orange-400 transition-colors">প্রাইসিং</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-orange-600 dark:hover:text-orange-400 transition-colors">যোগাযোগ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-6">জনপ্রিয় সার্ভিস</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Assignment Writing</Link></li>
              <li><Link to="/services" className="text-sm hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Frontend Projects</Link></li>
              <li><Link to="/services" className="text-sm hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Thesis Help</Link></li>
              <li><Link to="/services" className="text-sm hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Presentation Slides</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-6">অফিস</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 shrink-0" />
                <span>গুলশান-১, ঢাকা-১২১২<br/>(শুধুমাত্র অ্যাপয়েন্টমেন্ট)</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-5 w-5 mr-3 text-orange-500 shrink-0" />
                <span>+880 1XXX-XXXXXX</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="h-5 w-5 mr-3 text-orange-500 shrink-0" />
                <span>support@unisolvebd.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} UniSolve BD. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};