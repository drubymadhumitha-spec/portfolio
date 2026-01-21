import React from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiExternalLink } from 'react-icons/fi';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
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
          <span className="text-sm px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full border border-purple-200">
            {project.role}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
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
  );
};

export default ProjectCard;