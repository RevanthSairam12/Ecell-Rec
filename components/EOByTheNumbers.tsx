'use client'

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";

const ECellByTheNumbers = () => {
  const [counts, setCounts] = useState({
    members: 639,
    chapters: 2,
    countries: 7,
    sales: 5
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const finalCounts = {
    members: 639,
    chapters: 2,
    countries: 7,
    sales: 5
  };

  // Intersection Observer to detect when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('ECellByTheNumbers component is now visible, starting animation...');
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation effect that runs when component becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000; // 3 seconds for better visibility
    const intervals: NodeJS.Timeout[] = [];

    // Reset counts to 0 before starting animation
    setCounts({
      members: 0,
      chapters: 0,
      countries: 0,
      sales: 0
    });

    // Add a small delay before starting the animation
    const startAnimation = () => {
      Object.keys(finalCounts).forEach((key) => {
        const finalValue = finalCounts[key as keyof typeof finalCounts];
        const steps = 60; // Number of animation steps
        const increment = finalValue / steps;
        let currentValue = 0;
        let step = 0;

        const interval = setInterval(() => {
          step++;
          currentValue += increment;

          if (step >= steps || currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(interval);
          }

          setCounts(prev => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }));
        }, duration / steps);

        intervals.push(interval);
      });
    };

    // Start animation after a short delay
    const timeout = setTimeout(startAnimation, 500);

    return () => {
      clearTimeout(timeout);
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  const stats = [
    {
      icon: (
        <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      ),
      value: counts.members.toLocaleString(),
      label: "Active Members",
      color: "text-pink-600"
    },
    {
      icon: (
        <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
          </div>
        </div>
      ),
      value: counts.chapters.toString(),
      label: "Chapter",
      color: "text-yellow-600"
    },
    {
      icon: (
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
        </div>
      ),
      value: counts.countries.toString(),
      label: "Connected E-Cells",
      color: "text-orange-600"
    },
    {
      icon: (
        <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
        </div>
      ),
      value: `₹${counts.sales}Lakhs`,
      label: "Funds Raised",
      color: "text-teal-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            E-Cell REC by the Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border bg-card group hover:scale-105"
            >
              {stat.icon}
              
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ECellByTheNumbers;
