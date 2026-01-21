import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FAQS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-orange-600 dark:bg-orange-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-4 text-orange-100 text-lg">
            We are here to help you 24/7. Reach out via WhatsApp, Email or Phone.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="col-span-1 space-y-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start border border-gray-100 dark:border-gray-700">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
                  <MessageCircle className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Instant response usually.</p>
                <p className="text-orange-600 dark:text-orange-400 font-medium mt-2">+880 1XXX-XXXXXX</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start border border-gray-100 dark:border-gray-700">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Send us your files directly.</p>
                <p className="text-orange-600 dark:text-orange-400 font-medium mt-2">support@unisolvebd.com</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start border border-gray-100 dark:border-gray-700">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Office</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Visit us (Appointment Only)</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium mt-2">Gulshan-1, Dhaka-1212</p>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="col-span-1 lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white dark:bg-gray-700 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white dark:bg-gray-700 dark:text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white dark:bg-gray-700 dark:text-white"></textarea>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};