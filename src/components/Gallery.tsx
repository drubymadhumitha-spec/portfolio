import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiPlay, FiHeart } from 'react-icons/fi';
import { galleryItems } from '../data/portfolioData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <FiHeart className="text-pink-500" />
            <span className="text-sm font-medium text-purple-700">Visual Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Motion <span className="relative">
              Gallery
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated collection of my 3D animations, motion graphics, and creative visual experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="relative overflow-hidden rounded-2xl cursor-pointer group"
  >
    <div className="relative h-72 overflow-hidden rounded-2xl">
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />

      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <h3 className="font-bold text-gray-800 mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
))}

        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-3xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-3 rounded-full shadow-2xl transition-all"
                onClick={() => setSelectedImage(null)}
              >
                <FiX />
              </button>

              <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <motion.img
  key={selectedImage}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  src={galleryItems[selectedImage].src}
  alt={galleryItems[selectedImage].title}
  className="w-full rounded-2xl shadow-2xl"
/>

                
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                  <button
                    onClick={() => setSelectedImage((selectedImage - 1 + galleryItems.length) % galleryItems.length)}
                    className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                  >
                    <FiChevronLeft className="text-2xl text-white" />
                  </button>
                  <button
                    onClick={() => setSelectedImage((selectedImage + 1) % galleryItems.length)}
                    className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                  >
                    <FiChevronRight className="text-2xl text-white" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <span className="text-gray-800 font-medium">
                    {selectedImage + 1} / {galleryItems.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;