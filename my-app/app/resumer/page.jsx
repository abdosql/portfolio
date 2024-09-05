'use client';

import { useState, useEffect } from 'react';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const Resume = () => {
  const [showContent, setShowContent] = useState(false);

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
            <motion.h1 variants={itemVariants} className="h1 mb-8 text-center xl:text-left">My Resume</motion.h1>
            
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <h2 className="h2 mb-6 text-[rgb(255,59,63)] flex items-center">
                  <FaBriefcase className="mr-2" /> Experience
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-100 dark:bg-[#1e1e1e] p-6 rounded-lg">
                    <h3 className="h3 mb-2">PHP Developer Intern</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">SQLI | Oujda, Morocco | July 2024 - August 2024</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Developed an AI-enhanced Interview Management System using Symfony 7 and PHP 8.2</li>
                      <li>Integrated AI evaluation with LLM for real-time assistance and scoring</li>
                      <li>Implemented CQRS architecture for robust data management</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#1e1e1e] p-6 rounded-lg">
                    <h3 className="h3 mb-2">Full Stack Engineer (Remote Internship)</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">viby-z | Casablanca, Morocco | October 2023 - December 2023</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Participated in full stack development projects, integrating backend and frontend functionalities</li>
                      <li>Developed and implemented key features using Laravel and Flutter</li>
                      <li>Collaborated with multidisciplinary teams to develop robust and high-quality software solutions</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h2 className="h2 mb-6 text-[rgb(255,59,63)] flex items-center">
                  <FaGraduationCap className="mr-2" /> Education
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-100 dark:bg-[#1e1e1e] p-6 rounded-lg">
                    <h3 className="h3 mb-2">State Engineering Degree - Computer Engineering</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">School of Higher Engineering Studies, Oujda</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2022 - 2025</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#1e1e1e] p-6 rounded-lg">
                    <h3 className="h3 mb-2">Bachelor&apos;s Degree in Physics</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Bachelor&apos;s Degree in Computer Engineering | EHEI Oujda | 2019 - 2024</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mohammed First University Faculty of Sciences, Oujda</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2018 - 2022</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="h2 mb-4 text-[rgb(255,59,63)] flex items-center">
                <FaCertificate className="mr-2" /> Certifications
              </h2>
              <motion.ul variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.li variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">API Platform 3 - SymfonyCasts, March 2024</motion.li>
                <motion.li variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">Doctrine, Symfony and Databases - SymfonyCasts, March 2024</motion.li>
                <motion.li variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">Go Pro with Doctrine Queries - SymfonyCasts</motion.li>
                <motion.li variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">Harmonious Development with Symfony 6 - SymfonyCasts</motion.li>
                <motion.li variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">Symfony 6 Fundamentals: Services, Configuration and Environments - SymfonyCasts</motion.li>
              </motion.ul>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="h2 mb-4 text-[rgb(255,59,63)] flex items-center">
                <FaCode className="mr-2" /> Skills
              </h2>
              <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">PHP</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">Symfony</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">Laravel</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">JavaScript</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">React</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">MySQL</motion.div>
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-[#1e1e1e] p-4 rounded">API Development</motion.div>
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