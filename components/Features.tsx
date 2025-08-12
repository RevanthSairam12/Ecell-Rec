'use client'

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Handshake, 
  Rocket,
  ArrowRight 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Transform your ideas into viable business solutions with our comprehensive ideation workshops and brainstorming sessions.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Users,
      title: "Networking Events",
      description: "Connect with industry leaders, successful entrepreneurs, and like-minded peers through our exclusive networking events.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: TrendingUp,
      title: "Business Mentorship",
      description: "Get personalized guidance from experienced mentors who have successfully built and scaled their own ventures.",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Enhance your entrepreneurial skills through workshops on business planning, marketing, finance, and technology.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Handshake,
      title: "Industry Partnerships",
      description: "Leverage our strong industry connections to find co-founders, investors, and potential customers for your startup.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Rocket,
      title: "Startup Incubation",
      description: "Access our incubation program with funding opportunities, workspace, and comprehensive support for your startup journey.",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to build your{' '}
            <span className="bg-hero-gradient bg-clip-text text-transparent">startup</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From ideation to execution, we provide comprehensive support to help you turn your entrepreneurial dreams into reality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card group hover:scale-105"
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to start your entrepreneurial journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our community and get access to all these amazing features and more.
            </p>
            <Button size="lg" className="bg-hero-gradient hover:opacity-90 group">
              Join E-Cell Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
