import React from 'react';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Articles: React.FC = () => {
  const articles = [
    {
      id: '1',
      title: 'Understanding Recurrent Neural Networks (RNNs)',
      description: 'Recurrent Neural Networks (RNNs) are a powerful class of deep learning models designed to handle sequential data, such as text, speech, and time series. Unlike traditional feedforward neural networks, RNNs incorporate memory to capture temporal dependencies, making them ideal for tasks where context and order matter. This article explores the architecture of RNNs, their training process, common challenges, and advanced variants like LSTMs and GRUs, along with practical applications such as text generation.',
      link: 'https://medium.com/@isurindadperera322/understanding-recurrent-neural-networks-rnns-1316dbe38177',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*SAWyqQIigbNMevUP',
      category: 'Deep Learning',
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'All About Clustering Algorithms',
      description: 'Clustering is a data science technique that belongs to unsupervised learning in machine learning. It involves the systematic grouping of similar data points into distinct clusters, enabling the discovery of inherent patterns and structures within unlabeled datasets. Each cluster is formed categorizing data points that are more similar to each other than to those in other clusters. Clustering algorithms group data points based on similarity metrics such as Euclidean Distance (for numerical data), Cosine Similarity (for text or high-dimensional data), Manhattan Distance, Jaccard Index etc. There are five major categories of clustering as centroid-based, hierarchical, density-based, distribution-based, and graph-based clustering.',
      link: 'https://medium.com/@isurindadperera/all-about-clustering-algorithms-8c2216652719',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*a292QxnY91Omf5Ev',
      category: 'Machine Learning',
      readTime: '10 min read'
    }
  ];

  const handleViewMoreArticles = () => {
    window.open('https://medium.com/@isurindadperera', '_blank');
  };

  return (
    <section id="articles" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights and knowledge sharing on AI, machine learning, and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => window.open(article.link, '_blank')}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${
                    article.category === 'Deep Learning' ? 'bg-blue-600' : 
                    article.category === 'Machine Learning' ? 'bg-purple-600' : 'bg-green-600'
                  }`}>
                    {article.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full">
                    <ExternalLink size={20} className="text-gray-700 dark:text-gray-300" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-md">
                    {article.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4 leading-relaxed">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300">
                    Read on Medium →
                  </span>
                  
                  <div className="p-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                    <BookOpen size={18} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More Articles Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={handleViewMoreArticles}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5" />
            <span>View More Articles on Medium</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
            Explore my complete collection of technical articles and insights
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;