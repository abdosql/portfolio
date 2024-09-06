'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { useTranslation } from "@/translations";

const Contact = () => {
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const t = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        'service_4bu6fha',
        'template_wlh89tf',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'Z663djFjmynkKN4r2'
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setError(t('messageSendError'));
      setIsSubmitting(false);
    }
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

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation className="z-0" />
      <div className="relative z-10 container mx-auto py-12 px-4">
        {showContent && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row justify-between items-start gap-12"
          >
            <motion.div variants={itemVariants} className="w-full lg:w-1/2">
              <h2 className="h2 mb-6 text-gray-900 dark:text-[#e5e7eb]">{t('contactInformation')}</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-900 dark:text-[#e5e7eb]">
                  <FaPhone className="mr-3 text-[rgb(255,59,63)]" />
                  +212708083110
                </p>
                <p className="flex items-center text-gray-900 dark:text-[#e5e7eb]">
                  <FaEnvelope className="mr-3 text-[rgb(255,59,63)]" />
                  seqqal.abdelaziz@gmail.com
                </p>
                <p className="flex items-center text-gray-900 dark:text-[#e5e7eb]">
                  <FaMapMarkerAlt className="mr-3 text-[rgb(255,59,63)]" />
                  {t('location')}
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="block mb-2 text-gray-900 dark:text-[#e5e7eb]">{t('name')}</label>
                  <FaUser className="absolute top-[3.5rem] left-3 text-gray-900 dark:text-[#e5e7eb]" />
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 pl-10 bg-gray-100 dark:bg-[#1e1e1e] text-gray-900 dark:text-[#e5e7eb] rounded"
                    required
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block mb-2 text-gray-900 dark:text-[#e5e7eb]">{t('email')}</label>
                  <FaEnvelope className="absolute top-[3.5rem] left-3 text-gray-900 dark:text-[#e5e7eb]" />
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 pl-10 bg-gray-100 dark:bg-[#1e1e1e] text-gray-900 dark:text-[#e5e7eb] rounded"
                    required
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="message" className="block mb-2 text-gray-900 dark:text-[#e5e7eb]">{t('message')}</label>
                  <FaCommentAlt className="absolute top-[3.5rem] left-3 text-gray-900 dark:text-[#e5e7eb]" />
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-2 pl-10 bg-gray-100 dark:bg-[#1e1e1e] text-gray-900 dark:text-[#e5e7eb] rounded"
                    required
                    whileFocus="focus"
                    variants={inputVariants}
                  ></motion.textarea>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[rgb(255,59,63)] text-white hover:bg-[rgb(200,47,50)] transition-colors duration-300 w-full ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? t('sending') : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      {t('sendMessage')}
                    </>
                  )}
                </Button>
              </form>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-4 text-green-500 text-center"
                >
                  {t('messageSentSuccess')}
                </motion.div>
              )}
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-4 text-red-500 text-center"
                >
                  {error}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Contact;