import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiInfo, FiList, FiCode, FiLayers, FiStar, FiAward } from 'react-icons/fi';
import { useTranslation } from "@/translations";

const SectionTitle = ({ icon: Icon, title }) => (
  <h3 className="flex items-center font-semibold text-lg mb-3 text-[rgb(255,59,63)] dark:text-[rgb(255,59,63)]">
    <Icon className="mr-2" />
    {t(title)}
  </h3>
);

const ProjectModal = ({ project, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const { t } = useTranslation();

  const nextMedia = useCallback(() => {
    if (project.media && project.media.length > 0) {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % project.media.length);
    }
  }, [project.media]);

  const prevMedia = useCallback(() => {
    if (project.media && project.media.length > 0) {
      setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + project.media.length) % project.media.length);
    }
  }, [project.media]);

  const renderMedia = useCallback(() => {
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
          alt={`${t(project.titleKey)} - Media ${currentMediaIndex + 1}`}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      );
    }
  }, [currentMediaIndex, project.media, project.titleKey, t]);

  const modalContent = useMemo(() => (
    <>
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
        <FiX size={24} />
      </button>
      <h2 className="text-3xl font-bold mb-2 text-[rgb(255,59,63)] dark:text-[rgb(255,59,63)] border-b pb-2">
        {t(project.titleKey)}
      </h2>
      
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
        {project.dateKey && <span className="mr-4">{t(project.dateKey)}</span>}
        {project.associationKey && <span>{t(project.associationKey)}</span>}
      </div>
      
      <div className="text-gray-700 dark:text-gray-300 space-y-6">
        <div>
          <SectionTitle icon={FiInfo} title="Description" />
          <p>{t(project.descriptionKey)}</p>
        </div>
        
        {project.featuresKey && (
          <div>
            <SectionTitle icon={FiList} title="Key Features" />
            <ul className="list-disc list-inside">
              {t(project.featuresKey).split('|').map((feature, index) => (
                <li key={index}>{feature.trim()}</li>
              ))}
            </ul>
          </div>
        )}
        
        {project.technologiesKey && (
          <div>
            <SectionTitle icon={FiCode} title="Technologies" />
            <ul className="grid grid-cols-2 gap-2">
              {t(project.technologiesKey).split('|').map((tech, index) => (
                <li key={index}>{tech.trim()}</li>
              ))}
            </ul>
          </div>
        )}
        
        {project.architectureKey && (
          <div>
            <SectionTitle icon={FiLayers} title="Architecture & Design Patterns" />
            <ul className="list-disc list-inside">
              {t(project.architectureKey).split('|').map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        )}
        
        {project.highlightsKey && (
          <div>
            <SectionTitle icon={FiStar} title="Additional Highlights" />
            <ul className="list-disc list-inside">
              {t(project.highlightsKey).split('|').map((highlight, index) => (
                <li key={index}>{highlight.trim()}</li>
              ))}
            </ul>
          </div>
        )}
        
        {project.skillsKey && (
          <div>
            <SectionTitle icon={FiAward} title="Skills" />
            <p className="italic">{t(project.skillsKey)}</p>
          </div>
        )}
      </div>
    </>
  ), [project, t, renderMedia, nextMedia, prevMedia, onClose]);

  ProjectModal.displayName = 'ProjectModal';

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
          {modalContent}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;