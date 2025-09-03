'use client'

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
    { name: "Startups", href: "/startups" },
    { name: "Contact", href: "/join" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 ">
              <Image src="/icons/whitelogo.png" alt="photo" width={250} height={50} />
            </div>
            <p className="text-background/80 leading-relaxed">
              Empowering the next generation of entrepreneurs at Raghu Engineering College.
              Join us in building tomorrow's innovative solutions today.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-background/60" />
                <span className="text-background/80">
                  Raghu Engineering College<br />
                  Visakhapatnam, Andhra Pradesh
                </span>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-background/60" />
                <a
                  href="mailto:ecell@rec.edu.in"
                  className="text-background/80 hover:text-white transition-colors"
                >
                  ecell@rec.edu.in
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-background/60" />
                <a
                  href="tel:+919154971659"
                  className="text-background/80 hover:text-white transition-colors"
                >
                  +91 9154971659
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-background/80 mb-4">
              Subscribe to our newsletter for the latest updates on events, opportunities, and startup stories.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 E-Cell REC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
