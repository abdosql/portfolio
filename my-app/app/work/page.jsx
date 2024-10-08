'use client';

import { useState, useCallback, useMemo, Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "@/translations";
import AnimatedText from '@/components/AnimatedText';
import { useDelayedRender } from '@/hooks/useDelayedRender';

// Lazy load components
const LoadingCard = () => (
  <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
);

const ProjectCard = dynamic(() => import('@/components/ProjectCard'), { 
  loading: () => <LoadingCard />,
  ssr: false 
});

const ProjectModal = dynamic(() => import('@/components/ProjectModal'), { ssr: false });
const BackgroundAnimation = dynamic(() => import('@/components/BackgroundAnimation'), { ssr: false });

// Move projects array outside of component to prevent unnecessary re-renders
const projects = [
  { 
    id: 1, 
    title: 'sqliProjectTitle', 
    date: 'sqliProjectDate',
    association: "SQLI",
    description: 'sqliProjectDescription',
    media: [
      { type: 'image', src: "/files/projectCards/one.jpeg" },
      { type: 'video', src: "/files/projectCards/LinkedinProject.mp4" },
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
      { type: 'image', src: "/files/projectCards/two.jpg" },
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
      { type: 'image', src: "/files/projectCards/three.jpeg" },
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
      { type: 'image', src: "/files/projectCards/foor.jpeg" },
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
      { type: 'image', src: "/files/projectCards/five.jpeg" },
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
      { type: 'image', src: "/files/projectCards/six.jpeg" },
      { type: 'image', src: "/files/projectCards/seven.jpeg" },
      { type: 'image', src: "/files/projectCards/eight.jpeg" },
      { type: 'image', src: "/files/projectCards/nine.jpeg" },
      { type: 'image', src: "/files/projectCards/teen.jpeg" },
      { type: 'image', src: "/files/projectCards/elvn.jpeg" },
      { type: 'image', src: "/files/projectCards/1719357974919.jpeg" },
      { type: 'image', src: "/files/projectCards/1719358276461.jpeg" },
      { type: 'image', src: "/files/projectCards/1719360404885.jpeg" },
      { type: 'image', src: "/files/projectCards/1719362083296.jpeg" },
      { type: 'image', src: "/files/projectCards/1719368984856.jpeg" },
    ],
    link: '#',
    components: 'restaurantSystemProjectComponents',
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation();
  const showContent = useDelayedRender(1500); // Increase delay to match stairs effect duration
  const [InView, setInView] = useState(null);

  useEffect(() => {
    import('react-intersection-observer').then((mod) => {
      setInView(() => mod.InView);
    });
  }, []);

  // Optimize useCallback dependencies
  const openModal = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Memoize variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.2 }
    }
  }), []);

  // Optimize ProjectItem component
  const ProjectItem = useCallback(({ project }) => {
    if (!InView) return null;

    // Get the first image from the media array
    const firstImage = project.media && project.media.length > 0 ? project.media[0].src : null;

    return (
      <InView triggerOnce rootMargin="200px 0px" threshold={0.1}>
        {({ inView, ref }) => (
          <motion.div ref={ref} variants={itemVariants} layout>
            {inView && (
              <ProjectCard 
                {...project} 
                titleKey={project.title}
                dateKey={project.date}
                descriptionKey={project.description}
                image={firstImage} // Pass the first image here
                onViewDetails={() => openModal(project)} 
              />
            )}
          </motion.div>
        )}
      </InView>
    );
  }, [InView, itemVariants, openModal]);

  // Memoize renderProjects
  const renderProjects = useMemo(() => (
    projects.map(project => (
      <ProjectItem key={project.id} project={project} />
    ))
  ), [ProjectItem]);

  if (!InView) {
    return null; // Return null instead of a loading indicator
  }

  return (
    <section className="relative min-h-screen">
      <div className="relative z-10 container mx-auto py-12">
        <AnimatePresence>
          {showContent && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 variants={itemVariants} className="h1 mb-8 text-center xl:text-left text-gray-900 dark:text-[#e5e7eb]">
                <AnimatedText textKey='myWork' />
              </motion.h1>
              <motion.div 
                variants={containerVariants} 
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                {renderProjects}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={{
              ...selectedProject,
              titleKey: selectedProject.title,
              dateKey: selectedProject.date,
              descriptionKey: selectedProject.description,
              featuresKey: selectedProject.features,
              technologiesKey: selectedProject.technologies,
              architectureKey: selectedProject.architecture,
              highlightsKey: selectedProject.highlights,
              skillsKey: selectedProject.skills,
              componentsKey: selectedProject.components,
              resultsKey: selectedProject.results,
              futurePlansKey: selectedProject.futurePlans,
              impactKey: selectedProject.impact,
            }} 
            onClose={closeModal} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;