import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiInstagram, FiHeart } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
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
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/ruby-madhumitha-a66399259", label: "LinkedIn", color: "bg-blue-100 text-blue-600 hover:bg-blue-200" },
    { icon: <FiGithub />, href: "https://github.com/rubymadumitha", label: "GitHub", color: "bg-purple-100 text-purple-600 hover:bg-purple-200" },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <FiHeart className="text-pink-500" />
            <span className="text-sm font-medium text-purple-700">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Let's Create <span className="relative">
              Magic
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on something extraordinary? Let's bring your vision to life with creativity and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">
                    <div className="text-2xl text-white">{info.icon}</div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-pink-400 rounded-full border-4 border-white"></div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 font-medium mb-1">{info.title}</h4>
                  <p className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <FiHeart className="text-pink-500" />
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-14 h-14 ${social.color} rounded-2xl flex items-center justify-center border border-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 p-8 rounded-3xl bg-white border border-purple-100 shadow-2xl shadow-purple-100/30 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-gray-700">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all placeholder-gray-400"
                    placeholder="Enter your name"
                    required
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-300 rounded-full"></div>
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all placeholder-gray-400"
                    placeholder="your@email.com"
                    required
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-300 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-2 text-gray-700">Your Message</label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-5 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all resize-none placeholder-gray-400"
                  placeholder="Share your vision with me..."
                  required
                />
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full"></div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl font-semibold text-lg flex items-center gap-3 shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300 mx-auto"
            >
              <FiSend className="text-xl" />
              Send Your Message
              <FiHeart className="text-xl" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;