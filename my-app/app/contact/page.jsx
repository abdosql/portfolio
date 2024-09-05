'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1400); // Match this duration with the stairs effect duration (1s delay + 0.4s duration)

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
      setError('Failed to send message. Please try again later.');
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <section className="h-full bg-white dark:bg-[#121212] py-12">
      {showContent && (
        <div className="container mx-auto px-4">
          <h1 className="h1 mb-12 text-center text-gray-900 dark:text-[#e5e7eb]">Get in Touch</h1>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="h2 mb-6 text-gray-900 dark:text-[#e5e7eb]">Contact Information</h2>
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
                  Oujda, Morocco
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="block mb-2 text-gray-900 dark:text-[#e5e7eb]">Name</label>
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
                  <label htmlFor="email" className="block mb-2 text-gray-900 dark:text-[#e5e7eb]">Email</label>
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
                  <label htmlFor="message" className="block mb-2 text-gray-900 dark:text-[#e5e7eb]">Message</label>
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
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
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
                  Message sent successfully!
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
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;