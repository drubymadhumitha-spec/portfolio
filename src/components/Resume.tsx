import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiCalendar, FiAward, FiBook } from 'react-icons/fi';

const Resume = () => {
  const education = [
    {
      degree: "MSc Software Systems (5-year Integrated)",
      institution: "PSG College of Arts & Science, Coimbatore",
      period: "2020 - 2025",
      description: "Specialized in software engineering, database systems, and advanced programming concepts"
    },
     {
      degree: "HSC",
      institution: "SFS Matriculation Higher Secondary School",
      period: "2019 - 2020",
      description: "Higher Level Concept focuses on learning, creativity, and understanding ideas better."
    },
     {
      degree: "SSLC",
      institution: "SFS Matriculation Higher Secondary School",
      period: "2017 - 2018",
      description: "A record of my learning, skills, and achievements."
    }
  ];

  const certifications = [
    "Study Section - Python",
    "Hacker Rank - SQL, Python",
    "Accenture - Developer Virtual Experience Program",
  ];

  return (
    <section id="resume" className="section-padding bg-gradient-to-b from-white to-purple-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <FiAward className="text-pink-500" />
            <span className="text-sm font-medium text-purple-700">Qualifications & Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Credentials & <span className="relative">
              <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                Expertise
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining formal education in software systems with specialized training in 3D animation and motion design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 rounded-2xl bg-white border border-purple-100 shadow-xl shadow-purple-100/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <FiBook className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>

            {education.map((edu, index) => (
              <div key={index} className="mb-8 last:mb-0 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-ping"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                    <div className="flex items-center gap-2 text-gray-500 mt-1">
                      <FiCalendar />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mt-1">
                      <FiCalendar />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 pl-7">{edu.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white border border-purple-100 shadow-xl shadow-purple-100/30"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <FiAward className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 shadow-xl shadow-purple-100/30">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Download Complete Resume</h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Detailed work experience, project case studies, and technical proficiency breakdown.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="./public/resume.pdf"
              download
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold text-lg flex items-center gap-3 mx-auto shadow-lg shadow-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <FiDownload className="text-2xl" />
              Download Resume (PDF)
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;