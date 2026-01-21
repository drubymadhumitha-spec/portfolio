import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { FiDownload, FiAward, FiChevronDown, FiStar } from 'react-icons/fi';
import resumepdf from '../assets/resume.pdf'
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const floatingControls = useAnimation();
  const textRevealControls = useAnimation();
  
  // Motion values for interactive effects
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorXSpring = useSpring(cursorX, { stiffness: 300, damping: 30 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startAnimations();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startAnimations = async () => {
    // Start floating animations
    await floatingControls.start({
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });

    // Text reveal sequence
    await textRevealControls.start({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    });

    // Main container animation
    await controls.start({
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    });
  };

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

  const textRevealVariants = {
    hidden: { 
      opacity: 0,
      filter: "blur(10px)",
      y: 30 
    },
    visible: { 
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatVariants = (delay = 0) => ({
    float: {
      y: [0, -25, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      },
    },
  });

  const gradientFlowVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const waveVariants = {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      {/* Animated cursor effect */}
      <motion.div
        className="fixed pointer-events-none z-0 w-64 h-64 rounded-full mix-blend-multiply"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          background: `radial-gradient(circle at center, rgba(168, 85, 247, 0.08) 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Enhanced floating decorative elements with depth */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          variants={floatVariants(i * 0.3)}
          animate="float"
          className={`absolute rounded-full blur-3xl ${
            i % 3 === 0 
              ? 'bg-gradient-to-br from-purple-200 to-pink-200' 
              : i % 3 === 1 
              ? 'bg-gradient-to-br from-pink-200 to-rose-200' 
              : 'bg-gradient-to-br from-purple-300 to-pink-300'
          }`}
          style={{
            width: `${80 + i * 30}px`,
            height: `${80 + i * 30}px`,
            left: `${10 + i * 10}%`,
            top: `${20 + i * 5}%`,
            opacity: 0.2 + (i * 0.05),
          }}
        />
      ))}

      {/* Dynamic particle system */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                null,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                null,
                Math.random() * window.innerHeight - 100,
                Math.random() * window.innerHeight,
              ],
              rotate: 360,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <div 
              className={`w-2 h-2 rounded-full ${
                i % 4 === 0 ? 'bg-purple-400' :
                i % 4 === 1 ? 'bg-pink-400' :
                i % 4 === 2 ? 'bg-purple-300' : 'bg-pink-300'
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Interactive mouse gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: `radial-gradient(800px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(168, 85, 247, 0.15), 
            rgba(236, 72, 153, 0.1), 
            transparent)`,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 30,
          mass: 0.5 
        }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            className="text-purple-300"
            animate={{
              x: [0, 80, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      <div className="container-custom px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Animated welcome badge with sparkles */}
          <motion.div
            variants={textRevealVariants}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-200 shadow-sm"
            whileHover={{ 
              scale: 1.08,
              y: -2,
              boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.2)',
            }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <FiAward className="text-pink-500" />
            </motion.div>
            <motion.span
              className="text-sm font-medium text-purple-700 relative"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: 'linear-gradient(90deg, #9333ea, #ec4899, #9333ea)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Welcome to My Creative Space
            </motion.span>
            <motion.div
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.5 
              }}
              className="ml-1"
            >
              <FiChevronDown className="text-purple-400" size={12} />
            </motion.div>
          </motion.div>

          {/* Enhanced main heading with wave effect */}
          <motion.div
            variants={textRevealVariants}
            className="relative mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800"
              // variants={waveVariants}
              animate="animate"
            >
              <span className="inline-block">Hi, I'm</span>
              <br />
              <motion.span
                className="relative inline-block mt-2"
                whileHover={{ scale: 1.03 }}
              >
                <motion.span
                  // variants={gradientFlowVariants}
                  animate="animate"
                  className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] bg-clip-text"
                >
                  Ruby Madhumitha D
                </motion.span>
                <motion.div
                  className="absolute -bottom-4 left-0 w-full h-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                >
                  <svg width="100%" height="100%">
                    <motion.path
                      d="M 0,10 Q 50,20 100,10"
                      stroke="url(#underline-gradient)"
                      strokeWidth="4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                {/* Glowing effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-2xl opacity-0"
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Animated description */}
          <motion.div
            variants={textRevealVariants}
            className="mb-12"
          >
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto"
            >
              An{' '}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.08 }}
              >
                <motion.span
                  className="text-purple-600 font-semibold bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full border border-purple-200"
                  animate={{
                    boxShadow: [
                      '0 4px 14px 0 rgba(168, 85, 247, 0.1)',
                      '0 6px 20px 0 rgba(236, 72, 153, 0.2)',
                      '0 4px 14px 0 rgba(168, 85, 247, 0.1)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  MSc Software Systems graduate
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-0 -z-10"
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </motion.span>{' '}
              leveraging backend development expertise to build technically sophisticated visual experiences.
            </motion.p>
          </motion.div>

          {/* Enhanced buttons with ripple effects */}
          <motion.div
            variants={textRevealVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {/* Primary button */}
            <motion.a
              href={resumepdf}
              download
              className="relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white rounded-full font-semibold text-lg flex items-center gap-3 overflow-hidden group"
              style={{
                backgroundSize: '200% auto',
              }}
              whileHover={{ 
                scale: 1.08,
                y: -3,
                boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Pulsing dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${20 + i * 20}%`,
                    top: '50%',
                  }}
                />
              ))}
              
              <FiDownload className="text-2xl relative z-10" />
              <span className="relative z-10">Download My Resume</span>
            </motion.a>

            {/* Secondary button */}
            <motion.a
              href="#projects"
              className="relative px-8 py-4 border-2 border-purple-200 rounded-full font-semibold text-lg flex items-center gap-3 text-gray-700 overflow-hidden group"
              whileHover={{ 
                scale: 1.08,
                y: -3,
                borderColor: '#9333ea',
                backgroundColor: 'rgba(243, 232, 255, 0.3)',
                boxShadow: '0 10px 30px -10px rgba(168, 85, 247, 0.2)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <FiChevronDown className="text-2xl" />
              </motion.div>
              <span>View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>

          {/* Enhanced skills grid with 3D effect */}
          <motion.div
            variants={textRevealVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
          >
            {['Java', 'Python', 'MySQL', 'MongoDB'].map((skill, index) => (
              <motion.div
                key={skill}
                custom={index}
                variants={staggerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-white rounded-2xl p-6 border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="relative z-10">
                  <motion.span
                    className="text-gray-700 font-bold text-lg"
                    animate={{ 
                      color: ['#4b5563', '#9333ea', '#4b5563']
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {skill}
                  </motion.span>
                </div>
                
                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                
                {/* Floating star */}
                <motion.div
                  className="absolute -top-2 -right-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FiStar />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            variants={textRevealVariants}
            className="relative"
          >
            <motion.div
              className="flex flex-col items-center gap-3"
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <span className="text-sm text-gray-500 font-medium tracking-wider">
                EXPLORE PORTFOLIO
              </span>
              <div className="relative">
                <motion.div
                  className="w-10 h-16 border-2 border-purple-300 rounded-full flex justify-center overflow-hidden"
                  variants={pulseVariants}
                  animate="pulse"
                >
                  <motion.div
                    className="absolute w-1.5 h-6 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full top-4"
                    animate={{ 
                      y: [0, 24, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                </motion.div>
                {/* Outer ring */}
                <motion.div
                  className="absolute -inset-2 border border-purple-200 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated border with flowing gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.2)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
            </linearGradient>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="none"
            stroke="url(#border-gradient)"
            strokeWidth="2"
            strokeDasharray="10 5"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;