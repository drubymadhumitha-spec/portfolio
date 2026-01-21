import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-purple-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <span className="text-sm font-medium text-purple-700">Creative Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Featured <span className="relative">
              <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                Projects
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my work in 3D animation and motion graphics, powered by software engineering expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 shadow-xl shadow-purple-100/30"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            My Creative Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Concept & Planning", desc: "Software requirements mapping to visual concepts" },
              { step: "02", title: "Development", desc: "Building scalable structures & animations" },
              { step: "03", title: "Integration", desc: "Merging code efficiency with creative visuals" },
              { step: "04", title: "Optimization", desc: "Performance tuning & final polish" }
            ].map((process) => (
              <div key={process.step} className="text-center p-6 bg-white rounded-xl border border-purple-100 hover:shadow-lg hover:border-purple-300 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">{process.step}</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{process.title}</h4>
                <p className="text-sm text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;