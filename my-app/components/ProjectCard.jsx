import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/translations";
import AnimatedText from '@/components/AnimatedText';

const ProjectCard = ({ titleKey, dateKey, descriptionKey, image, link, onViewDetails }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-[#1e1e1e] rounded-lg shadow-md overflow-hidden transition-colors duration-300 flex flex-col h-full">
      <img src={image} alt={t(titleKey)} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[rgb(255,59,63)] dark:text-[rgb(255,59,63)] transition-colors duration-300">
            <AnimatedText textKey={titleKey} />
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300 line-clamp-3">
            <AnimatedText textKey={descriptionKey} />
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button 
            onClick={onViewDetails} 
            className="bg-[rgb(255,59,63)] text-white hover:bg-[rgb(200,47,50)] dark:bg-[rgb(255,59,63)] dark:text-white dark:hover:bg-[rgb(200,47,50)] transition-colors duration-300"
          >
            <AnimatedText textKey='viewDetails' />
          </Button>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 dark:text-blue-300 hover:underline transition-colors duration-300"
          >
            <AnimatedText textKey='visitProject' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard
