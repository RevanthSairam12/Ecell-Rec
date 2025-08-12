'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Users, Heart } from "lucide-react";

const JoinCommunity = () => {
  const membershipPlans = [
    {
      title: "Member",
      price: "₹0",
      period: "/year",
      description: "Perfect for students getting started",
      features: [
        "Access to all development workshops",
        "Networking opportunities",
        "Free pizza & expert discussions",
        "Startup mentorship sessions",
        "Access to our blog & resources"
      ],
      buttonText: "Start for free",
      popular: false,
      icon: Users
    },
    {
      title: "Core Team",
      price: "₹7,99",
      period: "/year",
      description: "For dedicated entrepreneurs & leaders",
      features: [
        "Startup development & support",
        "One-on-one mentor sessions",
        "One-on-one expert session per",
        "Exclusive discounts & offers",
        "Everything in club pack"
      ],
      buttonText: "Join the core",
      popular: true,
      icon: Heart
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join our community today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the membership that best fits your entrepreneurial journey and start building your future today.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-primary shadow-lg bg-primary/5' 
                  : 'border-border bg-card hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                  Popular
                </div>
              )}

              {/* Plan Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                plan.popular ? 'bg-primary/20' : 'bg-muted'
              }`}>
                <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>

              {/* Plan Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-primary' : 'text-success'
                    }`} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                } transition-all duration-300 group`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.buttonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to start your entrepreneurial journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of students who are already building the next generation of innovative startups.
            </p>
            <Button size="lg" className="bg-hero-gradient hover:opacity-90 text-lg px-8 py-6">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;