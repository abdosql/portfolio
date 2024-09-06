'use client';

import { useState, useEffect } from 'react';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { useTranslation } from "@/translations";

const Resume = () => {
  const [showContent, setShowContent] = useState(false);
  const t = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

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
      <div className="relative z-10 container mx-auto py-12">
        {showContent && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="h1 mb-8 text-center xl:text-left">{t('myResume')}</motion.h1>
            
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <h2 className="h2 mb-6 text-[rgb(255,59,63)] flex items-center">
                  <FaBriefcase className="mr-2" /> {t('experience')}
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-100 dark:bg-[#1e1e1e] p-6 rounded-lg">
                    <h3 className="h3 mb-2">{t('phpDeveloperIntern')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{t('sqliInternship')}</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>{t('sqliInternshipTask1')}</li>
                      <li>{t('sqliInternshipTask2')}</li>
                      <li>{t('sqliInternshipTask3')}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#1e1e1e] p-6 rounded-lg">
                    <h3 className="h3 mb-2">{t('fullStackEngineer')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{t('vibyInternship')}</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>{t('vibyInternshipTask1')}</li>
                      <li>{t('vibyInternshipTask2')}</li>
                      <li>{t('vibyInternshipTask3')}</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h2 className="h2 mb-6 text-[rgb(255,59,63)] flex items-center">
                  <FaGraduationCap className="mr-2" /> {t('education')}
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-100 dark:bg-[#1e1e1e] p-6 rounded-lg">
                    <h3 className="h3 mb-2">{t('engineeringDegree')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('eheiOujda')}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2022 - 2025</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#1e1e1e] p-6 rounded-lg">
                    <h3 className="h3 mb-2">{t('bachelorDegree')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{t('bachelorComputerEngineering')}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('mohammedFirstUniversity')}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2018 - 2022</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="h2 mb-4 text-[rgb(255,59,63)] flex items-center">
                <FaCertificate className="mr-2" /> {t('certifications')}
              </h2>
              <motion.ul variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.li variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">{t('apiPlatformCert')}</motion.li>
                <motion.li variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">{t('doctrineCert')}</motion.li>
                <motion.li variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">{t('doctrineQueriesCert')}</motion.li>
                <motion.li variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">{t('symfony6Cert')}</motion.li>
                <motion.li variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">{t('symfony6FundamentalsCert')}</motion.li>
              </motion.ul>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="h2 mb-4 text-[rgb(255,59,63)] flex items-center">
                <FaCode className="mr-2" /> {t('skills')}
              </h2>
              <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">PHP</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">Symfony</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">Laravel</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">JavaScript</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">React</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">MySQL</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">{t('apiDevelopment')}</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">Git</motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Resume