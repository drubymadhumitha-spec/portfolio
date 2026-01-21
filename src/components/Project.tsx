import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';
import { FiTarget, FiCode, FiLayers, FiZap, FiChevronRight } from 'react-icons/fi';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const titleScale = useTransform(scaleProgress, [0, 0.3], [0.8, 1]);
  const titleOpacity = useTransform(scaleProgress, [0, 0.2], [0, 1]);

  const processItems = [
    { 
      step: "01", 
      title: "Concept & Planning", 
      desc: "Software requirements mapping to visual concepts",
      icon: FiTarget
    },
    { 
      step: "02", 
      title: "Development", 
      desc: "Building scalable structures & animations",
      icon: FiCode
    },
    { 
      step: "03", 
      title: "Integration", 
      desc: "Merging code efficiency with creative visuals",
      icon: FiLayers
    },
    { 
      step: "04", 
      title: "Optimization", 
      desc: "Performance tuning & final polish",
      icon: FiZap
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -12,
      rotateX: 5,
      boxShadow: "0 32px 64px -12px rgba(168, 85, 247, 0.3)",
      borderColor: "#9333ea",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const numberVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      // ref={sectionRef}
      id="projects" 
      className="section-padding bg-gradient-to-b from-purple-50 via-white to-pink-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl ${
              i % 4 === 0 
                ? 'bg-gradient-to-br from-purple-100 to-pink-100' 
                : i % 4 === 1 
                ? 'bg-gradient-to-br from-pink-100 to-purple-100' 
                : i % 4 === 2
                ? 'bg-gradient-to-br from-purple-50 to-pink-50'
                : 'bg-gradient-to-br from-pink-50 to-purple-50'
            }`}
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              left: `${(i * 20) % 100}%`,
              top: `${10 + (i * 15) % 80}%`,
              opacity: 0.1,
            }}
            animate={{
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Animated title section */}
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="text-center mb-16 relative"
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FiLayers className="text-pink-500" />
            </motion.div>
            <span className="text-sm font-medium text-purple-700">
              Creative Portfolio
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-1"
            >
              <FiChevronRight className="text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Main title with gradient animation */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            Featured{' '}
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Projects
              </motion.span>
              <motion.div
                className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              />
            </motion.span>
          </motion.h2>

          {/* Animated description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Showcasing my work in 3D animation and motion graphics,{' '}
            <motion.span
              className="text-purple-600 font-semibold relative"
              whileHover={{ scale: 1.05 }}
            >
              powered by software engineering expertise.
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Projects grid with enhanced animations */}
        <div ref={containerRef} className="relative">
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
                whileHover="hover"
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Project connection lines (desktop only) */}
                {index < projects.length - 2 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-purple-300/50 to-pink-300/50 transform translate-x-1/2 -translate-y-1/2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                  />
                )}

                <ProjectCard 
                  project={project} 
                  index={index}
                  // Add any additional props needed for enhanced animations
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Creative Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-50/90 to-pink-50/90 border border-purple-200/50 shadow-2xl shadow-purple-100/20 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, 50, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/10 to-purple-200/10 rounded-full blur-3xl"
              animate={{
                x: [0, 60, 0],
                y: [0, -40, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Section title with animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-4">
                <motion.span
                  className="w-3 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
                  animate={{
                    scaleY: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative">
                  My Creative Process
                  <motion.div
                    className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    variants={lineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                </span>
              </h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 text-lg mt-4 ml-7 max-w-2xl"
              >
                A systematic approach blending technical precision with creative vision
              </motion.p>
            </motion.div>

            {/* Process cards with enhanced animations */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {processItems.map((item, index) => (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  custom={index}
                  whileHover="hover"
                  className="relative group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="h-full text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-purple-100/70 hover:border-purple-300 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Card shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Animated step number */}
                    <motion.div
                      className="text-5xl font-bold mb-6"
                      variants={numberVariants}
                      animate="pulse"
                      style={{
                        background: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.step}
                    </motion.div>

                    {/* Animated icon */}
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 flex items-center justify-center group-hover:border-purple-400 transition-colors"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <item.icon className="text-2xl text-purple-600" />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Bottom indicator */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      initial={{ scaleX: 0.3 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Connection arrows (desktop only) */}
                  {index < processItems.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-purple-300/50 to-pink-300/50 transform translate-x-1/2 -translate-y-1/2"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                    >
                      <motion.div
                        className="absolute right-0 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform translate-x-1/2 -translate-y-1/2"
                        animate={{
                          x: [0, 8, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Animated progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="hidden lg:block mt-12 relative"
            >
              <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 transform -translate-y-1/2 rounded-full" />
              <motion.div
                className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-y-1/2"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
              />
              
              {/* Animated progress dots */}
              {processItems.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 transform -translate-y-1/2"
                  style={{ left: `${(index / (processItems.length - 1)) * 100}%` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 400 }}
                >
                  <div className="w-5 h-5 bg-white border-2 border-purple-500 rounded-full relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;