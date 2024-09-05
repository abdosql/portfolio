"use client";

// Nav.jsx

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resumer', path: '/resumer' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8" role="navigation">
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
  );
};

export default Nav;
