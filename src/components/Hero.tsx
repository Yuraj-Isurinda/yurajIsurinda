import React from 'react';
import { Github, Linkedin, Mail, Phone, FileText, ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Yuraj-Isurinda',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/yuraj-isurinda-125b4127b',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Medium',
      icon: FileText,
      url: 'https://medium.com/@isurindadperera',
      color: 'hover:text-green-600'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'yurajisurinda@gmail.com',
      href: 'mailto:yurajisurinda@gmail.com'
    },
    {
      icon: Phone,
      text: '070 20 49 145',
      href: 'tel:0702049145'
    }
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const headerHeight = 80;
      const targetPosition = projectsSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 80;
      const targetPosition = contactSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const downloadCV = () => {
    window.open('https://drive.google.com/drive/folders/1g42qDTN98zPcI2khmNofkfmsTZiv1f4M?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orb */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/60 to-blue-300/40 dark:from-blue-900/30 dark:to-blue-800/20 rounded-full blur-3xl" />
        
        {/* Secondary floating orb */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-200/60 to-teal-300/40 dark:from-teal-900/30 dark:to-teal-800/20 rounded-full blur-3xl" />
        
        {/* Accent orb */}
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-bl from-indigo-200/50 to-indigo-300/30 dark:from-indigo-900/25 dark:to-indigo-800/15 rounded-full blur-3xl" />

        {/* Additional smaller orbs for depth */}
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-100/40 to-teal-100/40 dark:from-blue-800/20 dark:to-teal-800/20 rounded-full blur-2xl" />

        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-l from-indigo-100/40 to-blue-100/40 dark:from-indigo-800/20 dark:to-blue-800/20 rounded-full blur-2xl" />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-40 ${
              i % 3 === 0 ? 'w-3 h-3 bg-blue-400 dark:bg-blue-500' :
              i % 3 === 1 ? 'w-2 h-2 bg-teal-400 dark:bg-teal-500' :
              'w-1 h-1 bg-indigo-400 dark:bg-indigo-500'
            }`}
            style={{
              left: `${15 + (i * 7)}%`,
              top: `${20 + (i * 6)}%`,
            }}
          />
        ))}

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-4"
          >
            <p className="text-sm md:text-base font-light text-gray-400 dark:text-gray-500 tracking-wide uppercase">
              Welcome to my Portfolio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
                Yuraj Isurinda
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Software Engineer & AI Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Building intelligent, real-world solutions. Skilled in Java, Python, and AI, with a proactive mindset, 
              leadership experience, and a drive to solve problems and create meaningful impact through collaboration.
            </p>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
              </a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
          >
            <button
              onClick={handleGetInTouch}
              className="flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
            
            <button 
              onClick={downloadCV}
              className="flex items-center space-x-2 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8"
          >
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <contact.icon size={20} />
                <span>{contact.text}</span>
              </a>
            ))}
          </motion.div>

          {/* Education Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-2 mb-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              <strong>University:</strong> Computer Engineering, University of Jaffna, Sri Lanka
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Expected Graduation:</strong> April 2026 | <strong>GPA:</strong> 3.5/4.0
            </p>
          </motion.div>

          {/* Scroll Down Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToProjects}
            className="animate-bounce p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-colors duration-200"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;