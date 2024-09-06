'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from "@/translations";

const AnimatedText = ({ textKey, className, bottomPadding = 0 }) => {
  const { t, language } = useTranslation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [language]);

  const text = t(textKey);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.005,
        delayChildren: 0.025,
        staggerDirection: 1,
        when: "beforeChildren"
      } 
    },
    exit: { 
      opacity: 0, 
      transition: { 
        staggerChildren: 0.005, 
        staggerDirection: -1,
        when: "afterChildren"
      } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 2 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.05 } 
    },
    exit: { 
      opacity: 0, 
      y: -2, 
      transition: { duration: 0.05 } 
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={key}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className={`${className} block`}
        style={{ paddingBottom: bottomPadding }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
};

export default AnimatedText;