import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'yurajisurinda@gmail.com',
      href: 'mailto:yurajisurinda@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '070 20 49 145',
      href: 'tel:0702049145'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: '33/2, Temple Road, Opanayaka, Ratnapura',
      href: '#'
    }
  ];

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

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or interesting projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Contact Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="text-blue-600 dark:text-blue-400" size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h4>
                  {info.href === '#' ? (
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  ) : (
                    <a
                      href={info.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Connect with me
              </h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;