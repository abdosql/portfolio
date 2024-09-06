'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { useTranslation } from "@/translations";

const Services = () => {
  const [showContent, setShowContent] = useState(false);
  const t = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    { id: 1, title: t('webDevelopment'), description: t('webDevelopmentDesc') },
    { id: 2, title: t('backendDevelopment'), description: t('backendDevelopmentDesc') },
    { id: 3, title: t('apiDevelopment'), description: t('apiDevelopmentDesc') },
    { id: 4, title: t('databaseDesign'), description: t('databaseDesignDesc') },
    { id: 5, title: t('fullStackDevelopment'), description: t('fullStackDevelopmentDesc') },
    { id: 6, title: t('aiIntegration'), description: t('aiIntegrationDesc') },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative min-h-screen">
      <BackgroundAnimation className="fixed inset-0 z-0" />
      <div className="relative z-10 container mx-auto py-12 px-4">
        {showContent && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="h1 mb-8 text-center xl:text-left">{t('myServices')}</motion.h1>
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service => (
                <motion.div key={service.id} variants={itemVariants} className="bg-gray-100/80 dark:bg-[#1e1e1e]/80 p-6 rounded-lg">
                  <h3 className="h3 mb-4 text-[rgb(255,59,63)]">{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Services