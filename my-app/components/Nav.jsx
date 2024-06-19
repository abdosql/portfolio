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
            className={`${isActive ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
        <Link href="/contact">
            <Button>Hire me</Button>
        </Link>
    </nav>
  );
};

export default Nav;
