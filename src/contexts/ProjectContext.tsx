import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Omit<Project, 'id'>) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

interface ProjectProviderProps {
  children: ReactNode;
}

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Student Lab Booking Portal',
    description: 'Full-stack web application for the University of Jaffna, streamlining lab reservations and equipment lending with real-time scheduling and admin oversight.',
    fullDescription: 'A comprehensive web-based platform developed for the University of Jaffna Computer Engineering Department. This system revolutionizes how students book laboratory sessions and borrow equipment. Features include real-time availability checking, automated booking confirmations, equipment tracking, user authentication, and comprehensive admin dashboards for managing resources and monitoring usage patterns.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JUnit'],
    images: [
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    githubUrl: 'https://github.com/Yuraj-Isurinda/Lab_Management_System',
    category: 'Full Stack Development'
  },
  {
    id: '2',
    title: 'Student Feedback Management System',
    description: 'Web-based platform for collecting, managing, and analyzing student feedback on courses and faculty with secure submissions and structured reporting.',
    fullDescription: 'A sophisticated feedback management system designed specifically for the Department of Computer Engineering at University of Jaffna. The platform enables students to provide anonymous feedback on courses, instructors, and facilities while giving administrators powerful tools to analyze trends, generate reports, and make data-driven improvements to the educational experience.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'Bootstrap'],
    images: [
      'https://images.pexels.com/photos/7688123/pexels-photo-7688123.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    githubUrl: 'https://github.com/Yuraj-Isurinda/Student_management_system',
    category: 'Web Development'
  },
  {
    id: '3',
    title: 'Image Caption Generator',
    description: 'Deep learning application that generates contextually relevant captions for images using CNN for feature extraction and LSTM for sequence generation.',
    fullDescription: 'An advanced deep learning project that combines Convolutional Neural Networks (CNN) and Long Short-Term Memory (LSTM) networks to automatically generate descriptive captions for images. The system uses transfer learning with pre-trained CNN models for feature extraction and LSTM networks for natural language generation. Trained on large datasets and evaluated using standard metrics like BLEU scores.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Jupyter Notebook', 'OpenCV'],
    images: [
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    githubUrl: 'https://github.com/Yuraj-Isurinda/Social_Caption',
    category: 'Machine Learning'
  },
  {
    id: '4',
    title: 'Key Tracker Mobile App',
    description: 'Cross-platform mobile app for roommates to track and share key locations in real-time with user authentication and push notifications.',
    fullDescription: 'A React Native mobile application designed to solve the common problem of tracking shared keys among roommates. The app features real-time location updates, push notifications for key movements, user authentication, and a clean, intuitive interface. Built with Firebase for backend services including authentication, real-time database, and cloud messaging.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Cloud Messaging'],
    images: [
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    githubUrl: 'https://github.com/Yuraj-Isurinda/Key_holder',
    category: 'Mobile Development'
  },
  {
    id: '5',
    title: 'RAG-Based Document Question Answering',
    description: 'This project implements a Retrieval-Augmented Generation (RAG) system using HuggingFace\'s Mixtral-8x7B and LangChain to enable intelligent question answering over PDF documents.',
    fullDescription: 'An advanced RAG (Retrieval-Augmented Generation) system that combines the power of large language models with document retrieval capabilities. The system uses HuggingFace\'s Mixtral-8x7B model and LangChain framework to process PDF documents, create vector embeddings, and provide accurate, context-aware answers to user questions. Features include document chunking, semantic search, and intelligent response generation with source attribution.',
    technologies: ['Python', 'LangChain', 'HuggingFace', 'Mixtral-8x7B', 'Vector Database', 'PDF Processing'],
    images: [
      'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    githubUrl: 'https://github.com/Yuraj-Isurinda/RAG_QnA_Application',
    category: 'AI/ML'
  }
];

export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const saveProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString()
    };
    const updatedProjects = [...projects, newProject];
    saveProjects(updatedProjects);
  };

  const updateProject = (id: string, project: Omit<Project, 'id'>) => {
    const updatedProjects = projects.map(p => 
      p.id === id ? { ...project, id } : p
    );
    saveProjects(updatedProjects);
  };

  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    saveProjects(updatedProjects);
  };

  const getProject = (id: string): Project | undefined => {
    return projects.find(p => p.id === id);
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      addProject,
      updateProject,
      deleteProject,
      getProject
    }}>
      {children}
    </ProjectContext.Provider>
  );
};