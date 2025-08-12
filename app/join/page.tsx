'use client'

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Heart, Building, CheckCircle, ArrowRight, Zap } from "lucide-react";

export default function JoinUs() {
  const [membershipType, setMembershipType] = useState("member");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
    year: "",
    experience: "",
    motivation: ""
  });

  const membershipOptions = [
    {
      id: "member",
      title: "Student Member",
      description: "Perfect for students wanting to explore entrepreneurship",
      icon: Users,
      color: "text-primary bg-primary/10",
      benefits: [
        "Access to all workshops and events",
        "Networking opportunities",
        "Mentorship sessions",
        "Resource library access",
        "Community support"
      ]
    },
    {
      id: "volunteer",
      title: "Core Team Volunteer", 
      description: "For dedicated students ready to lead and organize",
      icon: Heart,
      color: "text-innovation bg-innovation/10",
      benefits: [
        "Leadership experience",
        "Event organization skills",
        "Direct mentor access",
        "Priority project selection",
        "Certificate of recognition"
      ]
    },
    {
      id: "partner",
      title: "Industry Partner",
      description: "For organizations wanting to support student entrepreneurs",
      icon: Building,
      color: "text-success bg-success/10",
      benefits: [
        "Brand visibility at events",
        "Access to talented students",
        "Speaking opportunities",
        "Recruitment pipeline",
        "CSR partnership"
      ]
    }
  ];

  const domains = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Event Management",
    "Content Creation",
    "Business Development",
    "Data Analytics",
    "Artificial Intelligence",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { membershipType, ...formData });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Build startups. Build your network. Build yourself.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="opacity-80">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="opacity-80">Events Yearly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="opacity-80">Startups Launched</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the membership type that best fits your goals and interests
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {membershipOptions.map((option) => (
              <Card 
                key={option.id} 
                className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  membershipType === option.id 
                    ? 'ring-2 ring-primary shadow-lg scale-105' 
                    : 'hover:scale-105'
                }`}
                onClick={() => setMembershipType(option.id)}
              >
                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <option.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>

                <div className="space-y-3 mb-6">
                  {option.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    membershipType === option.id 
                      ? 'border-primary bg-primary' 
                      : 'border-muted-foreground'
                  } flex items-center justify-center`}>
                    {membershipType === option.id && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Application Form
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below to join our community as a {membershipOptions.find(opt => opt.id === membershipType)?.title}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  {membershipType !== "partner" && (
                    <div>
                      <Label htmlFor="year">Academic Year</Label>
                      <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1st">1st Year</SelectItem>
                          <SelectItem value="2nd">2nd Year</SelectItem>
                          <SelectItem value="3rd">3rd Year</SelectItem>
                          <SelectItem value="4th">4th Year</SelectItem>
                          <SelectItem value="mtech">M.Tech</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="domain">Area of Interest/Domain *</Label>
                  <Select value={formData.domain} onValueChange={(value) => handleInputChange("domain", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your domain of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {domains.map((domain) => (
                        <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience">Previous Experience (Optional)</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    placeholder="Tell us about any relevant experience, projects, or achievements"
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="motivation">Why do you want to join E-Cell REC? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="Share your motivation and what you hope to achieve"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-hero-gradient hover:opacity-90 text-lg py-6"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You'll Gain
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a community that's committed to your entrepreneurial growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Network",
                description: "Connect with like-minded entrepreneurs and industry experts"
              },
              {
                icon: Zap,
                title: "Skills",
                description: "Develop technical and business skills through hands-on projects"
              },
              {
                icon: Heart,
                title: "Mentorship",
                description: "Get guidance from successful entrepreneurs and alumni"
              },
              {
                icon: Building,
                title: "Opportunities",
                description: "Access to internships, jobs, and funding opportunities"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
