import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiHeart, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "8667870307",
      href: "tel:+918667870307"
    },
    {
      icon: <FiMail />,
      title: "Email",
      value: "rubymadumitha@gmail.com",
      href: "mailto:rubymadumitha@gmail.com"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Coimbatore, Tamil Nadu",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/ruby-madhumitha-a66399259", label: "LinkedIn", color: "from-blue-100 to-purple-100 text-blue-600 hover:from-blue-200 hover:to-purple-200" },
    { icon: <FiGithub />, href: "https://github.com/rubymadumitha", label: "GitHub", color: "from-purple-100 to-pink-100 text-purple-600 hover:from-purple-200 hover:to-pink-200" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconHover = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: { scale: 0.98 }
  };

  const pulse = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const float = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const gradientFlow = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating hearts */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400/30 text-2xl"
          style={{
            left: `${15 + i * 20}%`,
            top: `${25 + i * 10}%`,
          }}
          variants={float}
          animate="animate"
          transition={{ delay: i * 0.5 }}
        >
          <FiHeart />
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-200 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FiHeart className="text-pink-500" />
            </motion.div>
            <span className="text-sm font-medium text-purple-700">Let's Connect</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-800"
          >
            Let's Create{' '}
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text"
                style={{ backgroundSize: '200% auto' }}
                variants={gradientFlow}
                animate="animate"
              >
                Magic
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              />
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ready to collaborate on something extraordinary? Let's bring your vision to life with creativity and precision.
          </motion.p>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
            >
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <FiCheckCircle className="text-3xl text-green-500" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-green-800">Message Sent!</h4>
                    <p className="text-green-600 text-sm">I'll get back to you soon.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                variants={slideInLeft}
                custom={index}
                whileHover="hover"
                className="block group"
              >
                <motion.div
                  variants={cardHover}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="relative">
                    <motion.div
                      variants={iconHover}
                      whileHover="hover"
                      className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200"
                    >
                      <div className="text-2xl text-white">{info.icon}</div>
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-pink-400 rounded-full border-4 border-white shadow-lg"
                      variants={pulse}
                      animate="animate"
                    />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-sm text-gray-500 font-medium mb-1">{info.title}</h4>
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <motion.div
                    className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight className="text-xl text-purple-500" />
                  </motion.div>
                </motion.div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              variants={slideInLeft}
              custom={3}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={cardHover}
                className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  animate={{
                    background: [
                      'linear-gradient(90deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)',
                      'linear-gradient(90deg, rgba(236,72,153,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2 relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiHeart className="text-pink-500" />
                  </motion.div>
                  Connect With Me
                </h4>
                <div className="flex gap-4 relative z-10">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                      aria-label={social.label}
                    >
                      <span className="text-2xl">{social.icon}</span>
                      {/* Hover shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="lg:col-span-2 relative"
          >
            <motion.form
              onSubmit={handleSubmit}
              whileHover="hover"
              className="relative"
            >
              <motion.div
                variants={cardHover}
                className="p-8 rounded-3xl bg-white border border-purple-100 shadow-2xl shadow-purple-100/30 relative overflow-hidden"
              >
                {/* Top gradient line */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Animated decorative elements */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full"
                  variants={pulse}
                  animate="animate"
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full"
                  variants={pulse}
                  animate="animate"
                  transition={{ delay: 0.5 }}
                />

                {/* Form fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name field */}
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Your Name</label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all placeholder-gray-400"
                        placeholder="Enter your name"
                        required
                      />
                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-300 rounded-full"
                        variants={pulse}
                        animate="animate"
                      />
                    </motion.div>
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="relative"
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all placeholder-gray-400"
                        placeholder="your@email.com"
                        required
                      />
                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-300 rounded-full"
                        variants={pulse}
                        animate="animate"
                        transition={{ delay: 0.3 }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Message field */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2 text-gray-700">Your Message</label>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="relative"
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-5 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all resize-none placeholder-gray-400"
                      placeholder="Share your vision with me..."
                      required
                    />
                    <motion.div
                      className="absolute bottom-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full"
                      variants={pulse}
                      animate="animate"
                      transition={{ delay: 0.6 }}
                    />
                  </motion.div>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg flex items-center gap-3 shadow-lg shadow-purple-200 hover:shadow-xl transition-all duration-300 mx-auto overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundSize: '200% auto' }}
                  animate={{
                    backgroundPosition: isSubmitting ? ['0% 50%', '100% 50%'] : ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Loading animation */}
                  {isSubmitting ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      <FiSend className="text-xl relative z-10" />
                      <span className="relative z-10">Send Your Message</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiHeart className="text-xl relative z-10" />
                      </motion.div>
                    </>
                  )}

                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute -inset-1 border-2 border-purple-400/30 rounded-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;