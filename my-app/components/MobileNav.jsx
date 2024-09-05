'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { Button } from "./ui/button";

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resumer', path: '/resumer' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"></CiMenuFries>
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-white dark:bg-[#121212] text-gray-900 dark:text-[#e5e7eb]">
        <div className="mt-20 mb-20 text-center text-2xl">
          <Link href='/'>
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
              Saqqal <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex gap-8 flex-col justify-center items-center">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <Link
                href={link.path}
                key={index}
                className={`${isActive ? "text-accent border-b-2 border-accent" : "text-gray-900 dark:text-[#e5e7eb]"} capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact">
            <Button className="bg-[rgb(255,59,63)] text-white hover:bg-[rgb(200,47,50)] transition-colors duration-300">Hire me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;