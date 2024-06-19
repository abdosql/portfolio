'use client'
import { delay, motion } from "framer-motion"
import { Repeat } from "lucide-react"
import Image from "next/image"
export const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 1 ,
                    transition:{ delay: 1.3, duration: 0.4, ease: 'easeIn' }
            }}
                exit={{ opacity: 0 }}
        >
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 1 ,
                    transition:{ delay: 1.7, duration: 0.4, ease: 'easeInOut' }
                    }}
                exit={{ opacity: 0 }}
                className="w-[298px] h-[298px] xl:w-[450px] xl:h-[430px] mix-blend-lighten absolute">
                <Image 
                    priority
                    src="/assets/images/3.png"
                    alt="Your image description"
                    quality={100} 
                    fill
                    className="object-contain"
                    />
            </motion.div>

            <motion.svg 
                className="w-[298px] xl:w-[450px] h-[298px] xl:h-[430px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
                >
                <motion.circle 
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#FF3B3F" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                    strokeDasharray: ["15 120 25 25", "16 25  92 72", "4 250 22 22"],
                    rotate: [120, 360]
                    }}
                    transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType:"reverse",

                    }}
                />
            </motion.svg>

        </motion.div>
    </div>
  )
}
