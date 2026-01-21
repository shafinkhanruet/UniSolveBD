import React from 'react';

export const About: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About UniSolve BD</h1>
      <div className="prose prose-orange dark:prose-invert text-gray-600 dark:text-gray-300">
        <p className="mb-4">
          UniSolve BD was founded with a single mission: to help Bangladeshi university students achieve their academic goals without the stress of overwhelming deadlines.
        </p>
        <p className="mb-4">
          We understand the pressure of balancing studies, part-time jobs, and family commitments. That's why we've assembled a team of expert writers and researchers from top institutions to provide high-quality academic assistance.
        </p>
        <p>
          Whether you need help with a complex engineering thesis or a simple English essay, our team is here to support you 24/7.
        </p>
      </div>
    </div>
  </div>
);

export const Terms: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms & Conditions</h1>
      <div className="prose prose-orange dark:prose-invert text-gray-600 dark:text-gray-300">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-2">1. Service Usage</h3>
        <p className="mb-4">Our services are provided for research and reference purposes only. Students should not submit our work as their own without proper modification or citation.</p>
        
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-2">2. Refunds</h3>
        <p className="mb-4">We offer a refund if the work delivered fails to meet the initial requirements after revisions.</p>

        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-2">3. Privacy</h3>
        <p className="mb-4">We respect your privacy. We do not share your personal information with third parties or academic institutions.</p>
      </div>
    </div>
  </div>
);