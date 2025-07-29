"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Features", href: "#" },
  {
    name: "Learn",
    href: "#",
    dropdown: [
      { name: "Blog", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
  {
    name: "Explore",
    href: "#",
    dropdown: [
      { name: "Dapps", href: "#" },
      { name: "NFTs", href: "#" },
      { name: "DeFi", href: "#" },
    ],
  },
  {
    name: "Company",
    href: "#",
    dropdown: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
  { name: "About", href: "#link" },
];

export const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        menuState ? "bg-white/80 dark:bg-black/80 backdrop-blur-sm" : ""
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <Link href="/" className="z-50 flex items-center gap-1">
          
          <img src="/blueberry-logo.png" alt="Blueberry Logo" width={56} height={56}  />
          <span className="text-2xl font-bold text-purple-900">BlueBerry</span>
        </Link>
        <div
          className={cn(
            "hidden lg:flex items-center gap-2 p-2 rounded-full transition-all duration-300",
            isScrolled
              ? "bg-white/60 backdrop-blur-lg border border-gray-200/80"
              : ""
          )}
        >
          <ul className="flex items-center gap-2">
            {menuItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="rounded-full bg-white/50 hover:bg-white/80"
          >
            <Link href="#">Support</Link>
          </Button>
        </div>
        
        {/* Desktop Download Button */}
        <div className="hidden lg:flex">
          <Button
            asChild
            className="rounded-full bg-purple-500 hover:bg-purple-800 text-white font-semibold px-7 py-6"
          >
            <Link href="#">Download</Link>
          </Button>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden z-50">
          <button onClick={() => setMenuState(!menuState)}>
            {menuState ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuState && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-black/95 backdrop-blur-lg lg:hidden pt-24 px-8"
            >
              <ul className="flex flex-col gap-6 text-xl">
                {menuItems.map((item) => (
                  <li key={item.name} className="border-b border-gray-200 pb-4">
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="font-semibold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="border-b border-gray-200 pb-4">
                  <Link
                    href="#"
                    onClick={() => setMenuState(false)}
                    className="font-semibold"
                  >
                    Support
                  </Link>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="w-full mt-8 rounded-full bg-purple-500 hover:bg-purple-800 text-white font-semibold"
              >
                <Link href="#">Download</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const NavItem = ({ item }: { item: (typeof menuItems)[0] }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200/60 transition-colors"
      >
        {item.name}
        {item.dropdown && <ChevronDown size={16} className="text-gray-500" />}
      </Link>
      <AnimatePresence>
        {isHovered && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200/80 overflow-hidden">
              <ul>
                {item.dropdown.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
