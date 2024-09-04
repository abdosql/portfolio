import React from 'react';
import Social from "@/components/ui/Social"

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#e5e7eb] py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Abdelaziz Saqqal. All rights reserved.</p>
          </div>
          <div>
            <Social containerStyles={"flex gap-4"} iconStyles={"w-8 h-8 border border-[rgb(255,59,63)] rounded-full flex justify-center items-center text-[rgb(255,59,63)] text-base hover:bg-[rgb(255,59,63)] hover:text-[#121212] transition-all duration-300"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
