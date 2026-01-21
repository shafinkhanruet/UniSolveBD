import { ServiceItem, Testimonial, PricingTier, FaqItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Assignment Writing',
    description: 'Engineering, Business, Law বা Arts - যেকোনো সাবজেক্টের অ্যাসাইনমেন্ট সলিউশন।',
    iconName: 'PenTool',
  },
  {
    id: '2',
    title: 'Thesis & Research',
    description: 'রিসার্চ পেপার, থিসিস এবং প্রজেক্ট রিপোর্টের জন্য রাইটিং সাপোর্ট।',
    iconName: 'BookOpen',
  },
  {
    id: '3',
    title: 'Frontend Development',
    description: 'HTML, CSS, JavaScript, React ও Tailwind দিয়ে রেসপন্সিভ ওয়েবসাইট ডিজাইন।',
    iconName: 'Code',
  },
  {
    id: '4',
    title: 'Presentation Design',
    description: 'ডিফেন্স বা ক্লাস প্রেজেন্টেশনের জন্য প্রফেশনাল PowerPoint স্লাইড।',
    iconName: 'Presentation',
  },
  {
    id: '5',
    title: 'Case Study Solutions',
    description: 'ব্যবসায়িক কেস স্টাডি এনালাইসিস এবং সঠিক রেফারেন্সিং (APA, Harvard)।',
    iconName: 'Briefcase',
  },
  {
    id: '6',
    title: 'Math & Statistics',
    description: 'জটিল ম্যাথ এবং এক্সেল ডাটা এনালাইসিসে নির্ভুল সমাধান।',
    iconName: 'Sigma',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Fahad Ahmed',
    university: 'East West University',
    quote: 'আমি ফ্রন্টএন্ড প্রজেক্ট নিয়ে খুব প্যারায় ছিলাম। ভাইরা সুন্দর করে ডিজাইন করে দিয়েছে। কোডগুলোও ক্লিন ছিল।',
    rating: 5,
  },
  {
    id: '2',
    name: 'Nusrat Jahan',
    university: 'Daffodil International University',
    quote: 'মার্কেটিং অ্যাসাইনমেন্টটা খুব ভালো হয়েছে। সময়ের আগেই পেয়েছি। ধন্যবাদ UniSolve BD!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sakib Hassan',
    university: 'Independent University (IUB)',
    quote: 'খুবই হেল্পফুল সার্ভিস। রিপোর্ট রাইটিং নিয়ে টেনশন ছিল, ওরা ভালো সাপোর্ট দিয়েছে।',
    rating: 4,
  },
  {
    id: '4',
    name: 'Afrin Sultana',
    university: 'Brac University',
    quote: 'প্রেজেন্টেশন স্লাইডগুলো খুব প্রফেশনাল ছিল। ডিফেন্সে ভালো করেছি।',
    rating: 5,
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Basic',
    priceStart: '৳ ৮০০',
    features: [
      'স্ট্যান্ডার্ড ডেলিভারি (৫-৭ দিন)',
      'Undergraduate Level',
      'Basic Proofreading',
      'ফ্রি কভার পেজ',
    ],
  },
  {
    name: 'Standard',
    priceStart: '৳ ১৫০০',
    features: [
      'ফাস্ট ডেলিভারি (৩-৪ দিন)',
      'Masters/MBA Level',
      'Deep Research',
      'ফ্রি রিভিশন',
      'ইউনিক কন্টেন্ট',
    ],
    recommended: true,
  },
  {
    name: 'Express',
    priceStart: 'Contact Us',
    features: [
      'ইমার্জেন্সি ডেলিভারি (চেষ্টা করা হয়)',
      'Top Expert Writers',
      'WhatsApp সাপোর্ট',
      'ডিটেইলড ব্যাখ্যা',
      'ইউনিক কন্টেন্ট',
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "আমার তথ্য কি গোপন থাকবে?",
    answer: "অবশ্যই। আপনার নাম, ভার্সিটি বা কোনো ব্যক্তিগত তথ্য আমরা কারো সাথে শেয়ার করি না। ১০০% কনফিডেন্সিয়াল।"
  },
  {
    question: "কাজের কোয়ালিটি কেমন হবে?",
    answer: "আমরা প্রতিটি অ্যাসাইনমেন্ট যত্ন সহকারে লিখি এবং হিউম্যান-রিটেন কন্টেন্ট প্রদান করি।"
  },
  {
    question: "পেমেন্ট কীভাবে করব?",
    answer: "খুব সহজেই bKash, Nagad বা Rocket-এর মাধ্যমে পেমেন্ট করতে পারবেন।"
  },
  {
    question: "কাজের মান ভালো না হলে?",
    answer: "আমরা ফ্রি রিভিশন সুবিধা দেই। ইনস্ট্রাকশন অনুযায়ী কাজ না হলে আমরা ঠিক করে দিব।"
  }
];