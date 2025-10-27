'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// iic.png should be placed in public/images/iic.png and referenced by a public URL
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/advisory-board" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
    { name: "Startups", href: "/startups" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setIsScrolled(scrollTop > 10);
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(239, 245, 254, 0.85)' : 'rgba(239, 245, 254, 0.95)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
        borderBottom: isScrolled ? '1px solid rgba(203, 213, 225, 0.5)' : '1px solid rgba(226, 232, 240, 0.6)',
        boxShadow: isScrolled ? '0 1px 3px 0 rgba(99, 102, 241, 0.1), 0 1px 2px 0 rgba(59, 130, 246, 0.06)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Logo - Left side */}
          <Link href="/" className="flex items-center absolute left-0">
            <div className="relative w-40 h-10">
              <Image src="/icons/ecellverynew.png" alt="E-Cell REC" fill className="object-contain" />
            </div>
          </Link>

          {/* Navigation (centered) */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-indigo-600 text-sm font-semibold transition-all duration-200 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button - Right side */}
          <div className="md:hidden absolute right-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-all duration-300"
              style={{
                backgroundColor: isScrolled ? 'rgba(239, 245, 254, 0.9)' : 'rgba(239, 245, 254, 0.95)',
                backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
                WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
                borderTopColor: isScrolled ? 'rgba(203, 213, 225, 0.5)' : 'rgba(226, 232, 240, 0.6)'
              }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-indigo-600 block px-3 py-2 text-base font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Scroll Progress Bar */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-200/50">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;