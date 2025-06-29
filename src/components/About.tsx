import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Users, Code, Calendar, MapPin, Mail, Phone, Trophy, Brain } from 'lucide-react';

const About: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    'Programming Languages': ['Java', 'Python', 'C++', 'SQL', 'JavaScript', 'MATLAB'],
    'Frontend': ['React.js', 'Bootstrap', 'Tailwind CSS', 'HTML5', 'CSS3'],
    'Backend': ['Express.js', 'Node.js', 'Spring Boot', 'Flask', '.NET'],
    'Databases': ['MongoDB', 'MySQL', 'Firebase'],
    'AI/ML': ['TensorFlow', 'Keras', 'OpenCV', 'Jupyter Notebook'],
    'Tools': ['Git', 'Docker', 'VS Code', 'Cursor'],
    'Testing': ['JUnit', 'Jest']
  };

  const achievements = [
    'Semi-finalist in TECHNOVATION 2025 - SLTMobitel',
    'AlgoXplore 1.0 - Local rank 16',
    'Google exploreCSR Summer School on Machine Intelligence',
    'Multiple Kaggle certifications in Machine Learning and Computer Vision'
  ];

  const certifications = [
    'Diploma in Software Engineering - SUSL (Awaiting results)',
    'Computer Vision - Kaggle',
    'Machine Learning Explainability - Kaggle',
    'Introduction to Deep Learning - Kaggle',
    'Introduction to Machine Learning - Kaggle'
  ];

  const leadership = [
    'Co Editor, Rotaract Club of Ratnapura (Jun 2025 - Present)',
    'Assistant Secretary, Computer Engineering Society (Oct 2024 - Present)',
    'Executive Committee Vice President, Engineering Students Union (Jan 2024 - Present)',
    'Initiative Group Vice President (IGVP) for oGV in AIESEC Jaffna (Aug 2023 - Dec 2023)'
  ];

  const contactInfo = {
    name: 'Yuraj Isurinda',
    role: 'Software Engineer & AI Enthusiast',
    email: 'yurajisurinda@gmail.com',
    phone: '070 20 49 145',
    location: '33/2, Temple Road, Opanayaka, Ratnapura'
  };

  const aboutInfo = {
    photo: '/IMG-20250430-WA0069.jpg',
    fullBio: 'Passionate about crafting intelligent, real-world solutions through innovation and efficiency. Computer Engineering undergraduate with strong skills in Java, Python, and Artificial Intelligence. A proactive leader who thrives in collaborative environments and embraces challenges as opportunities to grow, solve problems, and drive impact.',
    education: {
      degree: 'Bachelor of Science in Computer Engineering',
      university: 'University of Jaffna',
      location: 'Sri Lanka',
      graduationDate: 'April 2026',
      gpa: '3.5/4.0',
      diploma: {
        degree: 'Diploma in Software Engineering',
        university: 'Sabaragamuwa University of Sri Lanka',
        location: 'Sri Lanka',
        status: 'Awaiting Results'
      },
      previousEducation: {
        level: 'G.C.E. Advanced Level',
        school: 'R/Sivali Central College',
        location: 'Ratnapura',
        year: '2021',
        grades: 'Physics: B | Chemistry: B | Combined Mathematics: B'
      }
    }
  };

  return (
    <div id="about" className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Sticky Header */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={aboutInfo.photo}
                    alt={contactInfo.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{contactInfo.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{contactInfo.role}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>Ratnapura, Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <img
              src={aboutInfo.photo}
              alt={contactInfo.name}
              className="w-32 h-32 rounded-full object-cover mx-auto shadow-2xl border-4 border-white dark:border-gray-800"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-teal-500/20"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              About {contactInfo.name}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            {aboutInfo.fullBio}
          </p>

          {/* Compact Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{contactInfo.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Graduating {aboutInfo.education.graduationDate}</span>
            </div>
          </div>
        </motion.div>

        {/* Section Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-16"></div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Current Education
              </h3>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {aboutInfo.education.degree}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {aboutInfo.education.university}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {aboutInfo.education.location}
                </p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Expected Graduation: {aboutInfo.education.graduationDate}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    GPA: {aboutInfo.education.gpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Diploma Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Diploma
              </h3>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                  {aboutInfo.education.diploma.degree}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {aboutInfo.education.diploma.university}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {aboutInfo.education.diploma.location}
                </p>
                <div className="pt-4">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                    {aboutInfo.education.diploma.status}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Previous Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Previous Education
              </h3>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-teal-600 dark:text-teal-400">
                  {aboutInfo.education.previousEducation.level}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {aboutInfo.education.previousEducation.school}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {aboutInfo.education.previousEducation.location}
                </p>
                <div className="pt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Year: {aboutInfo.education.previousEducation.year}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {aboutInfo.education.previousEducation.grades}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-16"></div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-16"></div>

        {/* Achievements & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h2>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((certification, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">{certification}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-16"></div>

        {/* Leadership & Volunteering */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Leadership & Volunteering</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">{activity}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;