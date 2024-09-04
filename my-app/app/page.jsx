'use client';

import { Button } from "@/components/ui/button"
import { Photo } from "@/components/ui/Photo"
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  const handleDownloadCV = () => {
    const cvUrl = '/files/Abdelaziz_Saqqal_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Abdelaziz_Saqqal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
        <div className="container mx-auto">
          <div className="flex-col flex xl:flex-row items-center justify-between xl:pt-6 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-1">
              <span className="text-xl">Software Engineer</span>
              <h1 className="h1 mb-6">Hello I&apos;m  <br /> <span className="text-accent">Abdelaziz Saqqal</span></h1>
              <p className="max-w-[500px] pb-8 text-white/80">
              Fifth-year computer engineering student at EHEI Oujda, passionate about web development with Symfony. Experienced in tutoring math and physics, and full stack development. Certified in Symfony, Doctrine, and API Platform.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase" onClick={handleDownloadCV}>
                  <span>Download CV</span>
                  <FiDownload className="text-xl"></FiDownload>
                </Button>
              </div>
          </div>
          <div className="order-1 xl:order-2 mb-8 xl:mb-0">
            <Photo/>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Home