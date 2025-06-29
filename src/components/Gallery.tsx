import React, { useState } from 'react';
import { X, Camera, Award, Users, Lightbulb, Cpu, Zap, Shield, Mic, Trophy, Star, Plane, Cog, Facebook, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  highlights?: Array<{
    icon: React.ComponentType<any>;
    title: string;
    subtitle: string;
    color: string;
  }>;
}

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      image: '/IMG-20250430-WA0050.jpg',
      title: 'TECHNOVATION 2025 Semi-Finals',
      description: 'We reached the semi-finals of Technovation organized by SLT Mobitel for our innovative Human Elephant Barrier Project featuring IoT, ML, Mobile App. This achievement represents months of dedicated work developing a comprehensive solution that combines Internet of Things sensors, Machine Learning algorithms, and a user-friendly mobile application to address the critical human-elephant conflict issue in Sri Lanka. Our interdisciplinary approach and innovative use of technology earned us recognition among the top teams in this prestigious national competition.',
      category: 'Achievement',
      highlights: [
        {
          icon: Lightbulb,
          title: 'Innovation',
          subtitle: 'IoT + ML Solution',
          color: 'text-yellow-600 dark:text-yellow-400'
        },
        {
          icon: Users,
          title: 'Teamwork',
          subtitle: 'Collaborative Effort',
          color: 'text-blue-600 dark:text-blue-400'
        },
        {
          icon: Award,
          title: 'Achievement',
          subtitle: 'Semi-Finalist',
          color: 'text-green-600 dark:text-green-400'
        }
      ]
    },
    {
      id: '2',
      image: '/IMG-20240103-WA0008.jpg',
      title: 'Mosquito Repeller - Best Hardware Project',
      description: 'Our innovative Mosquito Repeller project earned recognition as the "Best Project" in our ECD (Electronic Circuit Design) course. This full hardware project utilizes a 555 timer IC to generate precise ultrasonic frequencies that effectively repel mosquitoes without harmful chemicals. The sophisticated circuit design incorporates frequency modulation, power optimization, and environmental sensing capabilities. The system features adjustable frequency ranges, automatic activation based on ambient conditions, and robust hardware construction suitable for continuous operation. This project demonstrates mastery of analog circuit design, timer IC applications, oscillator circuits, and practical hardware implementation skills essential for embedded systems engineering.',
      category: 'Hardware',
      highlights: [
        {
          icon: Zap,
          title: '555 Timer',
          subtitle: 'Ultrasonic Generation',
          color: 'text-orange-600 dark:text-orange-400'
        },
        {
          icon: Cog,
          title: 'Circuit Design',
          subtitle: 'Hardware Engineering',
          color: 'text-purple-600 dark:text-purple-400'
        },
        {
          icon: Shield,
          title: 'Best Project',
          subtitle: 'ECD Course',
          color: 'text-emerald-600 dark:text-emerald-400'
        }
      ]
    },
    {
      id: '3',
      image: '/471204066_1071592384979662_352542326758531987_n.jpg',
      title: 'E-Week 2024 - Speaker & Debate Runner-up',
      description: 'Achieved runner-up position in the prestigious E-Week 2024 speaking and debate competition at the Faculty of Engineering, University of Jaffna. This accomplishment demonstrates exceptional communication skills, critical thinking abilities, and the capacity to articulate complex technical concepts to diverse audiences. The competition featured rigorous rounds of public speaking, technical presentations, and structured debates on contemporary engineering topics. My performance showcased not only technical knowledge but also leadership qualities, persuasive communication, and the ability to think on my feet under pressure. This achievement reflects my commitment to developing well-rounded professional skills beyond technical expertise.',
      category: 'Communication',
      highlights: [
        {
          icon: Mic,
          title: 'Public Speaking',
          subtitle: 'Excellent Communication',
          color: 'text-indigo-600 dark:text-indigo-400'
        },
        {
          icon: Trophy,
          title: 'Runner-up',
          subtitle: 'E-Week 2024',
          color: 'text-amber-600 dark:text-amber-400'
        },
        {
          icon: Star,
          title: 'Leadership',
          subtitle: 'Critical Thinking',
          color: 'text-rose-600 dark:text-rose-400'
        }
      ]
    },
    {
      id: '4',
      image: '/IMG-20241013-WA0021.jpg',
      title: 'Techno 2024 Exhibition - BMICH Colombo',
      description: 'Participated as an exhibitor at the prestigious Techno 2024 exhibition held at the Bandaranaike Memorial International Conference Hall (BMICH) in Colombo, showcasing our innovative project "Dragonfly" - an autonomous drone prototype designed for cargo delivery systems. This cutting-edge project demonstrates advanced capabilities in autonomous navigation, payload management, and intelligent flight control systems. The drone features GPS-guided navigation, obstacle avoidance algorithms, automated takeoff and landing sequences, and real-time telemetry monitoring. Our participation in this national-level exhibition provided valuable exposure to industry professionals, potential investors, and fellow innovators, highlighting our commitment to developing practical solutions for modern logistics challenges.',
      category: 'Innovation',
      highlights: [
        {
          icon: Plane,
          title: 'Autonomous Drone',
          subtitle: 'Dragonfly Project',
          color: 'text-sky-600 dark:text-sky-400'
        },
        {
          icon: Cog,
          title: 'Cargo Delivery',
          subtitle: 'Logistics Solution',
          color: 'text-teal-600 dark:text-teal-400'
        },
        {
          icon: Award,
          title: 'National Exhibition',
          subtitle: 'BMICH Colombo',
          color: 'text-violet-600 dark:text-violet-400'
        }
      ]
    }
  ];

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  const handleViewMorePhotos = () => {
    window.open('https://www.facebook.com/profile.php?id=100089557357164', '_blank');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Achievement':
        return Award;
      case 'Hardware':
        return Cpu;
      case 'Communication':
        return Mic;
      case 'Innovation':
        return Lightbulb;
      default:
        return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Achievement':
        return 'bg-blue-600';
      case 'Hardware':
        return 'bg-purple-600';
      case 'Communication':
        return 'bg-indigo-600';
      case 'Innovation':
        return 'bg-teal-600';
      default:
        return 'bg-green-600';
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Capturing moments of innovation, achievement, and collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {galleryItems.map((item, index) => {
            const CategoryIcon = getCategoryIcon(item.category);
            const categoryColor = getCategoryColor(item.category);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openModal(item)}
                className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                      item.id === '3' ? 'object-top' : ''
                    }`}
                    style={item.id === '3' ? { objectPosition: '50% 20%' } : {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-white text-xs font-semibold rounded-full flex items-center space-x-1 ${categoryColor}`}>
                      <CategoryIcon className="w-3 h-3" />
                      <span>{item.category}</span>
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">Click to view details</p>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {item.description.substring(0, 100)}...
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More Photos Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={handleViewMorePhotos}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Facebook className="w-5 h-5" />
            <span>View More Photos on Facebook</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
            Explore more moments and behind-the-scenes photos from my journey
          </p>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className={`w-full h-full object-cover ${
                        selectedItem.id === '3' ? 'object-top' : ''
                      }`}
                      style={selectedItem.id === '3' ? { objectPosition: '50% 20%' } : {}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center overflow-y-auto">
                    <div className="flex items-center space-x-2 mb-4">
                      {React.createElement(getCategoryIcon(selectedItem.category), {
                        className: `w-5 h-5 ${
                          selectedItem.category === 'Achievement' ? 'text-blue-600 dark:text-blue-400' :
                          selectedItem.category === 'Hardware' ? 'text-purple-600 dark:text-purple-400' :
                          selectedItem.category === 'Communication' ? 'text-indigo-600 dark:text-indigo-400' :
                          'text-teal-600 dark:text-teal-400'
                        }`
                      })}
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        selectedItem.category === 'Achievement' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                        selectedItem.category === 'Hardware' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                        selectedItem.category === 'Communication' ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200' :
                        'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200'
                      }`}>
                        {selectedItem.category}
                      </span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                      {selectedItem.title}
                    </h2>

                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                        {selectedItem.description}
                      </p>
                    </div>

                    {/* Achievement Highlights */}
                    {selectedItem.highlights && (
                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {selectedItem.highlights.map((highlight, index) => (
                          <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <highlight.icon className={`w-8 h-8 ${highlight.color} mx-auto mb-2`} />
                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{highlight.title}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{highlight.subtitle}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Social Media Link in Modal */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={handleViewMorePhotos}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                      >
                        <Facebook className="w-4 h-4" />
                        <span className="text-sm font-medium">View More Photos on Facebook</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;