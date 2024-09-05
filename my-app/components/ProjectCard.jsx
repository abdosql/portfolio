import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-white dark:bg-[#1e1e1e] rounded-lg overflow-hidden shadow-md">
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="h3 mb-2 text-[rgb(255,59,63)]">{title}</h3>
        <p className="text-gray-700 dark:text-[#e5e7eb] mb-4">{description}</p>
        <Link href={link} passHref>
          <Button className="bg-[rgb(255,59,63)] text-white hover:bg-[rgb(200,47,50)] transition-colors duration-300">
            View Project
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
