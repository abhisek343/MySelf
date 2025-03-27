import React from 'react';
import { motion } from 'framer-motion';
import { projectsData, Project } from '../data/projects';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="my-8 pt-16">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My Projects
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project: Project) => (
          <motion.div 
            key={project.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Live Demo
                  </motion.a>
                )}
                {project.repoUrl && (
                  <motion.a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    GitHub
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects; 