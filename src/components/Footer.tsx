import React from 'react';
import { Heart, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Made with
            </span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              and lots of coffee
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            © {currentYear} Yuraj Isurinda. All rights reserved.
          </p>
          
          <p className="text-gray-500 dark:text-gray-500 text-xs italic">
            Trust me, I'm an engineer 🔧
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;