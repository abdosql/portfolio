'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { useTranslation } from "@/translations";

const Work = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const t = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    { 
      id: 1, 
      title: t('sqliProjectTitle'), 
      date: t('sqliProjectDate'),
      association: "SQLI",
      description: t('sqliProjectDescription'),
      media: [
        { type: 'image', src: "/path/to/interview-system-image1.jpg" },
        { type: 'image', src: "/path/to/interview-system-image2.jpg" },
      ],
      link: '#',
      features: t('sqliProjectFeatures').split('|'),
      technologies: t('sqliProjectTechnologies').split('|'),
      architecture: t('sqliProjectArchitecture').split('|'),
      highlights: t('sqliProjectHighlights').split('|'),
      skills: t('sqliProjectSkills'),
    },
    { 
      id: 2, 
      title: t('recommendationSystemTitle'), 
      date: t('recommendationSystemDate'),
      description: t('recommendationSystemDescription'),
      media: [
        { type: 'image', src: "/path/to/recommendation-system-image1.jpg" },
        { type: 'image', src: "/path/to/recommendation-system-image2.jpg" },
      ],
      link: '#',
      features: t('recommendationSystemFeatures').split('|'),
      skills: t('recommendationSystemSkills'),
    },
    { 
      id: 3, 
      title: t('faceguardProjectTitle'), 
      date: t('faceguardProjectDate'),
      association: "EHEI Oujda",
      description: t('faceguardProjectDescription'),
      media: [
        { type: 'image', src: "/path/to/faceguard-image1.jpg" },
        { type: 'image', src: "/path/to/faceguard-image2.jpg" },
        { type: 'video', src: "/path/to/faceguard-demo-video.mp4" }
      ],
      link: '#',
      features: t('faceguardProjectFeatures').split('|'),
      technologies: t('faceguardProjectTechnologies').split('|'),
      results: t('faceguardProjectResults'),
      futurePlans: t('faceguardProjectFuturePlans'),
      skills: t('faceguardProjectSkills'),
    },
    { 
      id: 4, 
      title: t('searchEngineProjectTitle'), 
      date: t('searchEngineProjectDate'),
      association: "EHEI Oujda",
      description: t('searchEngineProjectDescription'),
      media: [
        { type: 'image', src: "/path/to/search-engine-image1.jpg" },
        { type: 'image', src: "/path/to/search-engine-image2.jpg" },
        { type: 'image', src: "/path/to/Parametre.png" },
        { type: 'image', src: "/path/to/Homepage.png" },
      ],
      link: '#',
      features: t('searchEngineProjectFeatures').split('|'),
      technologies: t('searchEngineProjectTechnologies').split('|'),
      skills: t('searchEngineProjectSkills'),
    },
    { 
      id: 5, 
      title: t('anhFrameworkProjectTitle'), 
      date: t('anhFrameworkProjectDate'),
      description: t('anhFrameworkProjectDescription'),
      media: [
        { type: 'image', src: "/path/to/anh-framework-image1.jpg" },
        { type: 'image', src: "/path/to/anh-framework-image2.jpg" },
      ],
      link: '#',
      features: t('anhFrameworkProjectFeatures').split('|'),
      impact: t('anhFrameworkProjectImpact'),
      skills: t('anhFrameworkProjectSkills'),
    },
    { 
      id: 6, 
      title: t('restaurantSystemProjectTitle'), 
      description: t('restaurantSystemProjectDescription'),
      media: [
        { type: 'image', src: "/path/to/restaurant-system-image1.jpg" },
        { type: 'image', src: "/path/to/restaurant-system-image2.jpg" },
      ],
      link: '#',
      components: t('restaurantSystemProjectComponents').split('|'),
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
            <motion.h1 variants={itemVariants} className="h1 mb-8 text-center xl:text-left text-gray-900 dark:text-[#e5e7eb]">{t('myWork')}</motion.h1>
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard {...project} onViewDetails={() => openModal(project)} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Work;