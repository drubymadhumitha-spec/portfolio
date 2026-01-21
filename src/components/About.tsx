import React from 'react';
import { motion } from 'framer-motion';
import { skills, internships } from '../data/portfolioData';
import { FiCode, FiDatabase, FiLayers, FiStar } from 'react-icons/fi';

const About = () => {
  const skillIcons = [FiCode, FiDatabase, FiLayers, FiStar];
  
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-rose-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-8">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
                About <span className="text-purple-600 relative">
                  Me
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                </span>
              </h2>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-200 rounded-full opacity-70"></div>
            </div>
            
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-3 w-2 h-2 bg-pink-400 rounded-full"></div>
                <p className="text-xl text-gray-700 leading-relaxed pl-4">
                  A creative technologist with a completed <span className="text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded">5-year Integrated MSc in Software Systems (2020-2025)</span>. 
                  I blend technical expertise with artistic vision to create compelling digital experiences.
                </p>
              </div>
              
              <div className="relative bg-gradient-to-r from-white to-pink-50 rounded-2xl p-6 border border-pink-100 shadow-lg shadow-pink-100/50">
                <div className="absolute -top-3 left-8 bg-white px-4 py-1 rounded-full border border-pink-200 text-sm text-purple-600 font-medium">
                  My Philosophy
                </div>
                <blockquote className="italic text-lg text-gray-700 pl-4 border-l-4 border-purple-300">
                  "I approach motion design with a developer's precision — combining structure, performance, and elegance to bring stories to life."
                </blockquote>
                {/* <span className="absolute bottom-4 right-4 text-pink-300 text-xl">✨</span> */}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-xl shadow-purple-100/30 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-12 translate-x-12"></div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  Internship Journey
                </h3>
                <div className="space-y-6 relative z-10">
                  {internships.map((internship, index) => (
                    <motion.div
                      key={internship.company}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-pink-50 rounded-xl border border-pink-100 hover:border-purple-300 transition-all duration-300 group"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
                          <span className="font-bold text-white">{index + 1}</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-pink-300 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{internship.company}</h4>
                          {/* <span className="text-sm px-3 py-1 bg-purple-50 text-purple-600 rounded-full">{internship.period}</span> */}
                        </div>
                        <p className="text-purple-700 font-medium mb-1">{internship.role}</p>
                        <p className="text-sm text-gray-600">{internship.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-24">
              <h3 className="text-3xl font-bold mb-10 text-center lg:text-left text-gray-800">
                My Creative <span className="relative">
                  Toolbox
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                </span>
              </h3>

              <div className="space-y-6">
                {skills.map((skillCategory, index) => {
                  const Icon = skillIcons[index] || FiStar;
                  return (
                    <motion.div
                      key={skillCategory.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 bg-white rounded-2xl border border-purple-100 shadow-lg shadow-purple-100/30 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                            <Icon className="text-purple-600 text-xl" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-300 rounded-full"></div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800">{skillCategory.category}</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {skillCategory.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-200 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-gray-700 hover:text-purple-700 hover:scale-105 shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <FiStar className="text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Creative Philosophy</h4>
                </div>
                <p className="text-gray-600">
                  Each project is a blend of technical precision and artistic expression, 
                  where code meets creativity to build memorable experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;