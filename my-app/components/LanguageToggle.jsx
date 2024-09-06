'use client';

import { FaLanguage } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "@/translations";

const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <FaLanguage className="text-xl" />
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default LanguageToggle;