import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiPlay, FiAward } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-purple-50 to-white">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container-custom px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <FiAward className="text-pink-500" />
            <span className="text-sm font-medium text-purple-700">Welcome to My Creative Space</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
            Hi, I'm <span className="relative">
              <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                Ruby Madhumitha D
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </span>
          </h1>

          {/* <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-700">
            I Craft Immersive 3D Animations & Motion Graphics
          </h2> */}

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            An <span className="text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded">MSc Software Systems graduate</span> leveraging backend development expertise to build technically sophisticated visual experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold text-lg flex items-center gap-3 shadow-lg shadow-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <FiPlay className="text-2xl" />
              View My Motion Reel
            </motion.button> */}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="./public/resume.pdf"
              download
              className="px-8 py-4 border-2 border-purple-200 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-full font-semibold text-lg flex items-center gap-3 transition-all text-gray-700 shadow-sm"
            >
              <FiDownload className="text-2xl" />
              Download My Resume
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {['Java', 'Python', 'MySQL', 'MongoDB'].map((skill) => (
              <div key={skill} className="bg-white rounded-xl p-4 border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300">
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

   
      </div>
    </section>
  );
};

export default Hero;