import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-b from-purple-50 to-white border-t border-purple-100 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container-custom px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Ruby Madhumitha</span>
                <p className="mt-1 text-sm text-gray-600">Where Code Meets Creativity</p>
              </div>
            </div>
            <p className="text-gray-600 max-w-md">
              3D Animation • Motion Graphics • Creative Development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
              <FiHeart className="text-pink-500" />
              <span className="text-sm font-medium text-purple-700">Stay Inspired</span>
            </div>
            <p className="text-gray-600">
              © {currentYear} Ruby Madhumitha. All dreams reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center gap-2">
              Built with React, TypeScript & Creative Energy
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-purple-100 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
            Open to freelance magic and full-time creative adventures
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;