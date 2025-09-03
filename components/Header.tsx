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
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
    { name: "Startups", href: "/startups" },
    { name: "Advisory Board", href: "/advisory-board" },
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
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 1)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(229, 231, 235, 0.5)' : '1px solid rgb(229, 231, 235)',
        boxShadow: isScrolled ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="transition-transform duration-200 hover:scale-105">
              <div className="relative w-32 h-12">
                <Image
                  src="/icons/ecellverynew.png"
                  alt="E-Cell REC"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <Link href="/" className="transition-transform duration-200 hover:scale-105">
              <div className="relative w-32 h-12">
                <Image
                  src="/icons/iic.png"
                  alt="IIC"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Navigation (centered) */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 z-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-all duration-200 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-all duration-300"
              style={{
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderTopColor: isScrolled ? 'rgba(229, 231, 235, 0.5)' : 'rgb(229, 231, 235)'
              }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
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
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200/50">
          <div
            className="h-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;