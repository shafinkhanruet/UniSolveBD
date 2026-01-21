import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PRICING_TIERS } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen pb-20 transition-colors duration-300 bg-grid-pattern relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -mt-20 -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] -mb-20 -ml-20"></div>

      {/* Header */}
      <div className="relative pt-24 pb-20 text-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange-600 dark:text-orange-400 font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">Flexible Plans</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white font-bangla mb-6 animate-fade-in-up">
            সেরা প্রাইসিং প্ল্যান
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-bangla max-w-2xl mx-auto animate-fade-in-up">
            আপনার বাজেট এবং ডেডলাইনের সাথে মানানসই প্যাকেজ বেছে নিন।
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PRICING_TIERS.map((tier, index) => (
            <div 
              key={tier.name} 
              className={`relative group transition-all duration-300 ${tier.recommended ? 'scale-105 md:-mt-8 z-20' : 'hover:-translate-y-2'}`}
            >
              {/* Card Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-b ${tier.recommended ? 'from-red-500 via-orange-500 to-amber-500' : 'from-orange-300 to-red-300 dark:from-orange-800 dark:to-red-800'} rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500`}></div>
              
              <div className="relative bg-white dark:bg-gray-900 rounded-[22px] h-full flex flex-col overflow-hidden">
                {tier.recommended && (
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-2 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                    <Sparkles className="h-4 w-4" /> Most Popular
                  </div>
                )}
                
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium font-bangla">শুরু</span>
                    <span className={`text-4xl font-black ${tier.recommended ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600' : 'text-gray-900 dark:text-white'} font-bangla tracking-tight`}>{tier.priceStart}</span>
                  </div>
                  
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-6"></div>

                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${tier.recommended ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'}`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <p className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 font-bangla leading-tight">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <Link to="/order">
                    <Button 
                      fullWidth 
                      variant={tier.recommended ? 'gradient' : 'outline'} 
                      className={`h-12 rounded-xl text-base ${!tier.recommended ? 'border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500' : 'shadow-lg shadow-orange-500/40'}`}
                    >
                      Choose {tier.name}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-24 text-center pb-12 opacity-60 hover:opacity-100 transition-opacity">
           <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">Accepted Payment Methods</p>
           <div className="flex justify-center gap-6 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-bold text-pink-600 text-xl">bKash</span>
              <span className="font-bold text-orange-600 text-xl">Nagad</span>
              <span className="font-bold text-purple-600 text-xl">Rocket</span>
           </div>
        </div>
      </div>
    </div>
  );
};