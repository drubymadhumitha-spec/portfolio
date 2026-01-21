import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiBriefcase, FiFilm, FiUser, FiFileText, FiMail, FiAward } from 'react-icons/fi';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', icon: <FiHome /> },
    { label: 'About', href: '#about', icon: <FiUser /> },
    { label: 'Projects', href: '#projects', icon: <FiBriefcase /> },
    { label: 'Gallery', href: '#gallery', icon: <FiFilm /> },
    { label: 'Resume', href: '#resume', icon: <FiFileText /> },
    { label: 'Contact', href: '#contact', icon: <FiMail /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100 shadow-lg shadow-purple-100/20"
    >
      <div className="container-custom px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >

<div className="relative">
  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
    <FiUser className="text-white text-lg" />
  </div>
</div>

            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Ruby Madhumitha D</span>
              <p className="text-xs text-gray-500 mt-0.5">Creative Technologist</p>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center group-hover:from-purple-100 group-hover:to-pink-100 transition-colors">
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold shadow-lg shadow-purple-200 flex items-center gap-2"
            >
              <FiAward className="text-sm" />
              {/* View Reel */}
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 bg-white rounded-xl border border-purple-100 shadow-lg"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 py-3 px-4 text-gray-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all rounded-lg mx-2 my-1"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            <button className="w-full mx-2 mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold shadow-lg">
              <FiAward className="inline mr-2" />
              View Reel
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;