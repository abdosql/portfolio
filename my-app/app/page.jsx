'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/Photo";
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="h1 mb-4 text-gray-900 dark:text-[#e5e7eb]">
              Hi, I'm <span className="text-[rgb(255,59,63)]">Abdelaziz Saqqal</span>
            </h1>
            <p className="mb-6 text-gray-900 dark:text-[#e5e7eb]">
              A passionate software engineer specializing in web development with Symfony and full stack technologies.
            </p>
            <Button className="bg-[rgb(255,59,63)] text-white hover:bg-[rgb(200,47,50)] transition-colors duration-300">
              <FiDownload className="mr-2" />
              Download CV
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;