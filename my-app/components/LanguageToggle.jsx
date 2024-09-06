'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaLanguage } from 'react-icons/fa';

const LanguageToggle = () => {
  const router = useRouter();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <FaLanguage className="text-xl" />
    </button>
  );
};

export default LanguageToggle;