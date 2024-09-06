'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { useTranslation } from "@/translations";
import AnimatedText from '@/components/AnimatedText';

const Work = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation();  // Correctly destructure t from useTranslation

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    { 
      id: 1, 
      title: 'sqliProjectTitle', 
      date: 'sqliProjectDate',
      association: "SQLI",
      description: 'sqliProjectDescription',
      media: [
        { type: 'image', src: "/path/to/interview-system-image1.jpg" },
        { type: 'image', src: "/path/to/interview-system-image2.jpg" },
      ],
      link: '#',
      features: 'sqliProjectFeatures',
      technologies: 'sqliProjectTechnologies',
      architecture: 'sqliProjectArchitecture',
      highlights: 'sqliProjectHighlights',
      skills: 'sqliProjectSkills',
    },
    { 
      id: 2, 
      title: 'recommendationSystemTitle', 
      date: 'recommendationSystemDate',
      description: 'recommendationSystemDescription',
      media: [
        { type: 'image', src: "/path/to/recommendation-system-image1.jpg" },
        { type: 'image', src: "/path/to/recommendation-system-image2.jpg" },
      ],
      link: '#',
      features: 'recommendationSystemFeatures',
      skills: 'recommendationSystemSkills',
    },
    { 
      id: 3, 
      title: 'faceguardProjectTitle', 
      date: 'faceguardProjectDate',
      association: "EHEI Oujda",
      description: 'faceguardProjectDescription',
      media: [
        { type: 'image', src: "/path/to/faceguard-image1.jpg" },
        { type: 'image', src: "/path/to/faceguard-image2.jpg" },
        { type: 'video', src: "/path/to/faceguard-demo-video.mp4" }
      ],
      link: '#',
      features: 'faceguardProjectFeatures',
      technologies: 'faceguardProjectTechnologies',
      results: 'faceguardProjectResults',
      futurePlans: 'faceguardProjectFuturePlans',
      skills: 'faceguardProjectSkills',
    },
    { 
      id: 4, 
      title: 'searchEngineProjectTitle', 
      date: 'searchEngineProjectDate',
      association: "EHEI Oujda",
      description: 'searchEngineProjectDescription',
      media: [
        { type: 'image', src: "/path/to/search-engine-image1.jpg" },
        { type: 'image', src: "/path/to/search-engine-image2.jpg" },
        { type: 'image', src: "/path/to/Parametre.png" },
        { type: 'image', src: "/path/to/Homepage.png" },
      ],
      link: '#',
      features: 'searchEngineProjectFeatures',
      technologies: 'searchEngineProjectTechnologies',
      skills: 'searchEngineProjectSkills',
    },
    { 
      id: 5, 
      title: 'anhFrameworkProjectTitle', 
      date: 'anhFrameworkProjectDate',
      description: 'anhFrameworkProjectDescription',
      media: [
        { type: 'image', src: "/path/to/anh-framework-image1.jpg" },
        { type: 'image', src: "/path/to/anh-framework-image2.jpg" },
      ],
      link: '#',
      features: 'anhFrameworkProjectFeatures',
      impact: 'anhFrameworkProjectImpact',
      skills: 'anhFrameworkProjectSkills',
    },
    { 
      id: 6, 
      title: 'restaurantSystemProjectTitle', 
      description: 'restaurantSystemProjectDescription',
      media: [
        { type: 'image', src: "/path/to/restaurant-system-image1.jpg" },
        { type: 'image', src: "/path/to/restaurant-system-image2.jpg" },
      ],
      link: '#',
      components: 'restaurantSystemProjectComponents',
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
            <motion.h1 variants={itemVariants} className="h1 mb-8 text-center xl:text-left text-gray-900 dark:text-[#e5e7eb]">
              <AnimatedText textKey='myWork' />
            </motion.h1>
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard 
                    {...project} 
                    title={t(project.title)}
                    date={t(project.date)}
                    description={t(project.description)}
                    onViewDetails={() => openModal(project)} 
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
      {selectedProject && (
        <ProjectModal 
          project={{
            ...selectedProject,
            title: t(selectedProject.title),
            date: t(selectedProject.date),
            description: t(selectedProject.description),
            features: t(selectedProject.features)?.split('|') ?? [],
            technologies: t(selectedProject.technologies)?.split('|') ?? [],
            architecture: t(selectedProject.architecture)?.split('|') ?? [],
            highlights: t(selectedProject.highlights)?.split('|') ?? [],
            skills: t(selectedProject.skills) ?? '',
            components: t(selectedProject.components)?.split('|') ?? [],
            results: t(selectedProject.results) ?? '',
            futurePlans: t(selectedProject.futurePlans) ?? '',
            impact: t(selectedProject.impact) ?? '',
          }} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default Work;