import ProjectCard from '@/components/ProjectCard'
import { Button } from "@/components/ui/button"

const Work = () => {
  const projects = [
    { 
      id: 1, 
      title: "AI-Enhanced Interview Management System", 
      description: "Development of an interview management system with AI for real-time assistance and evaluation using Symfony 7, PHP 8.2, and CQRS architecture.", 
      image: "/path/to/interview-system-image.jpg", 
      link: '#' 
    },
    { 
      id: 2, 
      title: "Personalized Product Recommendation System", 
      description: "Development of a personalized recommendation system using Symfony for the backend and Flask for the recommendation engine, utilizing cosine similarity for collaborative filtering.", 
      image: "/path/to/recommendation-system-image.jpg", 
      link: '#' 
    },
    { 
      id: 3, 
      title: "FaceGuard School Management System", 
      description: "Development of an intuitive user interface and a high-performance backend system with Arduino and RFID integration for attendance management.", 
      image: "/path/to/faceguard-image.jpg", 
      link: '#' 
    },
    { 
      id: 4, 
      title: "Advanced Web Search Engine with Symfony and BERT", 
      description: "Integration of BERT for word encoding, providing relevant search results, and development of a Python script for data processing and similarity calculation.", 
      image: "/path/to/search-engine-image.jpg", 
      link: '#' 
    },
    { 
      id: 5, 
      title: "Robust MVC Framework for PHP (ANH Framework)", 
      description: "Development of a custom MVC framework to simplify PHP application development.", 
      image: "/path/to/anh-framework-image.jpg", 
      link: '#' 
    },
    { 
      id: 6, 
      title: "Restaurant Management System", 
      description: "Development of a restaurant website, a console application for order management, and a desktop application for operations management.", 
      image: "/path/to/restaurant-system-image.jpg", 
      link: '#' 
    },
  ]

  return (
    <section className="h-full bg-white dark:bg-[#121212]">
      <div className="container mx-auto py-12">
        <h1 className="h1 mb-8 text-center xl:text-left text-gray-900 dark:text-[#e5e7eb]">My Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="mt-12 text-center xl:text-left">
          <Button className="bg-[rgb(255,59,63)] text-white hover:bg-[rgb(200,47,50)] transition-colors duration-300">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Work