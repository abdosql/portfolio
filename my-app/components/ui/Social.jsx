import Link from "next/link";
import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub/>, path: "https://github.com/abdosql/" },
  { icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/saqqal-abdelaziz" },
  { icon: <FaWhatsapp/>, path: "https://wa.me/212708083110" },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return (
          <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social