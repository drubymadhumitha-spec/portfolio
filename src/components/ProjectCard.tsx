import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiExternalLink, FiX, FiGithub, FiGlobe, FiFilm } from 'react-icons/fi';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl bg-white border border-purple-100 hover:border-purple-300 shadow-lg shadow-purple-100/30 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300"
      >
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"></div>
          
          {project.videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                <FiPlay className="text-2xl text-white ml-1" />
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">{project.title}</h3>
            <span className="text-sm font-medium px-3 py-1 bg-purple-50 text-purple-600 rounded-full">
              {project.role}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-gray-700 rounded-full border border-purple-200 hover:border-purple-400 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          <motion.button
            onClick={openModal}
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-purple-600 hover:text-pink-600 transition-colors font-medium group"
          >
            <span>View Project Details</span>
            <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        
        <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          <span className="text-white font-bold text-sm">{index + 1}</span>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <FiX className="text-xl text-gray-700" />
                </button>

                {/* Modal Content */}
                <div className="relative">
                  {/* Hero Image */}
                  <div className="relative h-96 overflow-hidden rounded-t-2xl">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {project.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          onClick={() => window.open(project.videoUrl, '_blank')}
                          className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
                        >
                          <FiPlay className="text-3xl text-white ml-2 group-hover:text-4xl transition-all" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                        <span className="text-lg font-semibold px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full border border-purple-200">
                          {project.role}
                        </span>
                      </div>
                      
                      {/* Project Links */}
                      {(project.liveUrl || project.githubUrl || project.videoUrl) && (
                        <div className="flex flex-wrap gap-3 mb-6">
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                            >
                              <FiGlobe />
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                            >
                              <FiGithub />
                              View Code
                            </a>
                          )}
                          {project.videoUrl && (
                            <a 
                              href={project.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                            >
                              <FiFilm />
                              Watch Video
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Detailed Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2">
                        <div className="prose prose-lg max-w-none">
                          {project.longDescription ? (
                            <p className="text-gray-700 leading-relaxed mb-6">
                              {project.longDescription}
                            </p>
                          ) : (
                            <p className="text-gray-700 leading-relaxed mb-6">
                              {project.description}
                            </p>
                          )}

                          {/* Key Features */}
                          {project.features && (
                            <div className="mb-8">
                              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                              <ul className="space-y-3">
                                {project.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technologies Used */}
                          {project.technologies && (
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies & Tools</h3>
                              <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                  <span 
                                    key={tech}
                                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full border border-purple-200 hover:border-purple-400 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Sidebar */}
                      <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>
                          
                          {/* Timeline */}
                          {project.timeline && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-gray-700 mb-2">Timeline</h4>
                              <p className="text-gray-600">{project.timeline}</p>
                            </div>
                          )}

                          {/* Category */}
                          {project.category && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-gray-700 mb-2">Category</h4>
                              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                {project.category}
                              </span>
                            </div>
                          )}

                          {/* Tags */}
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span 
                                  key={tag}
                                  className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-purple-200"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Images/Gallery */}
                    {project.galleryImages && project.galleryImages.length > 0 && (
                      <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Project Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {project.galleryImages.map((img, idx) => (
                            <div 
                              key={idx}
                              className="rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                              onClick={() => window.open(img, '_blank')}
                            >
                              <img 
                                src={img} 
                                alt={`${project.title} - Gallery ${idx + 1}`}
                                className="w-full h-48 object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;

