// Header.jsx

import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/'>
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
            Saqqal <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;