import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-panel shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
              {!logoError ? (
                <img 
                  src="https://ik.imagekit.io/w5jfq695r/logo.png.png" 
                  alt="UniSolve" 
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                     <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold font-bangla text-gray-900 dark:text-white tracking-tight">
                    Uni<span className="text-orange-600 dark:text-orange-500">Solve</span>
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isActive(link.path) 
                    ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/10' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-all focus:outline-none hover:rotate-12 active:scale-95"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Link to="/order">
              <Button size="md" variant="gradient" className="ml-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-0.5">Order Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-orange-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-gray-100 dark:border-gray-800 absolute w-full shadow-2xl z-50 animate-fade-in-up">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 hover:bg-gray-50 dark:hover:text-orange-400 dark:hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-1">
              <Link to="/order" onClick={closeMenu}>
                <Button fullWidth variant="gradient" className="w-full">Order Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};