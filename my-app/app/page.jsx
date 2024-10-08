'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { useTranslation } from "@/translations";
import AnimatedText from '@/components/AnimatedText';
import Script from 'next/script';

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = '/files/Abdelaziz_Saqqal_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Abdelaziz_Saqqal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen overflow-hidden"
    >
      <BackgroundAnimation className="z-0" />
      <div className="relative z-10 container mx-auto py-12">
        {showContent && (
          <div className="flex-col flex xl:flex-row items-center justify-between xl:pt-6 xl:pb-24">
            <motion.div 
              className="text-center xl:text-left order-2 xl:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <AnimatedText 
                textKey='softwareEngineer'
                className="text-xl text-gray-900 dark:text-[#e5e7eb]"
                bottomPadding={2}
              />
              <h1 className="h1">
                <AnimatedText textKey='greeting' />
              </h1>
              <h1 className="h1 mb-6">
                <AnimatedText 
                  textKey="Abdelaziz Saqqal" 
                  className="text-accent"
                />
              </h1>
              <AnimatedText 
                textKey='homeDescription'
                className="max-w-[500px] text-gray-700 dark:text-[#e5e7eb]/80"
                bottomPadding={50}
              />
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase text-gray-900 dark:text-[#e5e7eb]" onClick={handleDownloadCV}>
                  <AnimatedText textKey='downloadCV' />
                  <FiDownload className="text-xl" />
                </Button>
              </div>
            </motion.div>
            <div className="order-1 xl:order-2 mb-8 xl:mb-0">
              <motion.div
                className="relative w-[298px] h-[298px] xl:w-[450px] xl:h-[430px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.svg 
                  className="w-full h-full absolute top-0 left-0" 
                  fill="transparent" 
                  viewBox="0 0 506 506" 
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <circle cx="253" cy="253" r="250" stroke="#FF3B3F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="13.16757 78.10813 75.47747 60.19819" transform-origin="253px 253px" style={{ transform: 'rotate(302.743deg)', transformOrigin: '253px 253px' }}></circle>
                </motion.svg>
                <motion.div 
                  className="w-full h-full absolute top-0 left-0 mix-blend-lighten"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <Image
                    alt="Profile image"
                    src="/assets/images/3.png"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdelaziz Saqqal",
            "url": "https://seqqal.vercel.app",
            "jobTitle": "Software Engineer",
            "description": "Fifth-year computer engineering student at EHEI Oujda, passionate about web development with Symfony. Experienced in tutoring math and physics, and full stack development.",
            "image": "https://seqqal.vercel.app/assets/images/3.png",
            "sameAs": [
              "https://github.com/abdosql/",
              "https://www.linkedin.com/in/saqqal-abdelaziz"
            ]
          })
        }}
      />
    </motion.section>
  );
}

export default Home;