import Link from "next/link";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'


const socials = [
  { icon: <FaGithub/>, path: "https://github.com/abdosql" },
  { icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/saqqal-abdelaziz/" },
  { icon: <FaWhatsapp/>, path: "https://wa.me/qr/R35WIQPHUALXO1" },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
          return (
            <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
            </Link>
          )
      })}
    </div>
  )
}

export default Social