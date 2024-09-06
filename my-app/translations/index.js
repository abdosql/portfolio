import { useState, useEffect, createContext, useContext } from 'react';
import { translations } from './translations';
import { projectTranslations } from './projectTranslations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const t = (key) => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    if (projectTranslations[language] && projectTranslations[language][key]) {
      return projectTranslations[language][key];
    }
    return key; // Return the key if no translation is found
  };

  return { t, language, setLanguage };
};