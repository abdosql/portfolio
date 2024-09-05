import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiInfo, FiList, FiCode, FiLayers, FiStar, FiAward } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    if (project.media && project.media.length > 0) {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % project.media.length);
    }
  };

  const prevMedia = () => {
    if (project.media && project.media.length > 0) {
      setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + project.media.length) % project.media.length);
    }
  };

  const SectionTitle = ({ icon: Icon, title }) => (
    <h3 className="flex items-center font-semibold text-lg mb-3 text-[rgb(255,59,63)] dark:text-[rgb(255,59,63)]">
      <Icon className="mr-2" />
      {title}
    </h3>
  );

  const renderMedia = () => {
    const currentMedia = project.media[currentMediaIndex];
    if (currentMedia.type === 'video') {
      return (
        <motion.video
          key={currentMediaIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={currentMedia.src}
          controls
          className="w-full h-full object-contain rounded-lg shadow-md"
        />
      );
    } else {
      return (
        <motion.img
          key={currentMediaIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={currentMedia.src}
          alt={`${project.title} - Media ${currentMediaIndex + 1}`}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      );
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-[#1e1e1e] rounded-lg p-8 max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
            <FiX size={24} />
          </button>
          <h2 className="text-3xl font-bold mb-2 text-[rgb(255,59,63)] dark:text-[rgb(255,59,63)] border-b pb-2">{project.title}</h2>
          
          {project.media && project.media.length > 0 && (
            <motion.div 
              className="relative mb-6 aspect-video"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {renderMedia()}
              </AnimatePresence>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevMedia} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 dark:bg-[#1e1e1e] dark:bg-opacity-50 rounded-full p-2 transition-colors duration-300 hover:bg-opacity-75"
              >
                <FiChevronLeft size={24} className="text-gray-800 dark:text-gray-200" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextMedia} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 dark:bg-[#1e1e1e] dark:bg-opacity-50 rounded-full p-2 transition-colors duration-300 hover:bg-opacity-75"
              >
                <FiChevronRight size={24} className="text-gray-800 dark:text-gray-200" />
              </motion.button>
            </motion.div>
          )}

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            {project.date && <span className="mr-4">{project.date}</span>}
            {project.association && <span>Associated with {project.association}</span>}
          </div>
          
          <div className="text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <SectionTitle icon={FiInfo} title="Description" />
              <p>{project.description}</p>
            </div>
            
            {project.features && (
              <div>
                <SectionTitle icon={FiList} title="Key Features" />
                <ul className="list-disc list-inside">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.technologies && (
              <div>
                <SectionTitle icon={FiCode} title="Technologies" />
                <ul className="grid grid-cols-2 gap-2">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-[rgb(255,59,63)] rounded-full mr-2"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.architecture && (
              <div>
                <SectionTitle icon={FiLayers} title="Architecture & Design Patterns" />
                <ul className="list-disc list-inside">
                  {project.architecture.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.highlights && (
              <div>
                <SectionTitle icon={FiStar} title="Additional Highlights" />
                <ul className="list-disc list-inside">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.skills && (
              <div>
                <SectionTitle icon={FiAward} title="Skills" />
                <p className="italic">{project.skills}</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;