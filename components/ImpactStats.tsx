'use client'

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Calendar, Award } from "lucide-react";

const ImpactStats = () => {
  const [counts, setCounts] = useState({
    startups: 0,
    members: 0,
    events: 0,
    funding: 0
  });

  const finalCounts = {
    startups: 75,
    members: 15000,
    events: 550,
    funding: 25
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervals = [];

    Object.keys(finalCounts).forEach((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts];
      const increment = finalValue / (duration / 50);
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(interval);
        }
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, 50);

      intervals.push(interval);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: `${counts.startups}+`,
      label: "Degrees last researched",
      description: "Ideas transformed into businesses",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      value: `${counts.members.toLocaleString()}+`,
      label: "Individuals engaged",
      description: "Active community members",
      color: "text-innovation",
      bgColor: "bg-innovation/10"
    },
    {
      icon: Calendar,
      value: `${counts.events}+`,
      label: "Members in inaugural year",
      description: "Workshops and events conducted",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Award,
      value: `₹${counts.funding}L+`,
      label: "Our partners & supporters",
      description: "Funding secured for startups",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Numbers speak for themselves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our impact in the entrepreneurship ecosystem continues to grow with each passing day.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border bg-card group hover:scale-105"
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Partner Logos Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Our partners & supporters
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Partner Logo Placeholders */}
            {[
              "NSIC", "MSME", "IIIT", "TiE", "NASSCOM", "Startup India"
            ].map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 bg-muted/30 rounded-lg hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-lg font-semibold text-muted-foreground">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;