'use client'

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Download, FileText, Book, DollarSign, Users, Send, ExternalLink } from "lucide-react";

export default function Resources() {
  const [suggestion, setSuggestion] = useState("");

  const resourceCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Users,
      resources: [
        {
          title: "Entrepreneur's Handbook",
          description: "Complete guide to starting your entrepreneurial journey",
          type: "PDF",
          size: "2.5 MB",
          downloads: 1250
        },
        {
          title: "Market Research Template",
          description: "Structured approach to understanding your target market",
          type: "DOCX",
          size: "890 KB",
          downloads: 980
        },
        {
          title: "Business Model Canvas",
          description: "Visual template for developing business models",
          type: "PDF",
          size: "1.2 MB",
          downloads: 1890
        }
      ]
    },
    {
      id: "pitch-decks",
      title: "Pitch Deck Templates",
      icon: FileText,
      resources: [
        {
          title: "Investor Pitch Template",
          description: "Professional template for investor presentations",
          type: "PPTX",
          size: "3.1 MB",
          downloads: 2100
        },
        {
          title: "Demo Day Template",
          description: "Optimized for 5-minute demo presentations",
          type: "PPTX",
          size: "2.8 MB",
          downloads: 1650
        },
        {
          title: "Product Pitch Guide",
          description: "Step-by-step guide to creating compelling pitches",
          type: "PDF",
          size: "1.8 MB",
          downloads: 1420
        }
      ]
    },
    {
      id: "funding",
      title: "Funding Checklists",
      icon: DollarSign,
      resources: [
        {
          title: "Funding Readiness Checklist",
          description: "Ensure you're prepared before approaching investors",
          type: "PDF",
          size: "950 KB",
          downloads: 1340
        },
        {
          title: "Government Schemes Guide",
          description: "Complete list of startup-friendly government programs",
          type: "PDF",
          size: "2.2 MB",
          downloads: 1780
        },
        {
          title: "Term Sheet Template",
          description: "Standard term sheet template with explanations",
          type: "DOCX",
          size: "650 KB",
          downloads: 890
        }
      ]
    },
    {
      id: "recommended-reads",
      title: "Recommended Reads",
      icon: Book,
      resources: [
        {
          title: "Lean Startup Methodology",
          description: "Essential reading on building sustainable startups",
          type: "Link",
          size: "External",
          downloads: 3200
        },
        {
          title: "The Hard Thing About Hard Things",
          description: "Building a business when there are no easy answers",
          type: "Link", 
          size: "External",
          downloads: 2800
        },
        {
          title: "Zero to One",
          description: "Notes on startups and building the future",
          type: "Link",
          size: "External",
          downloads: 3100
        }
      ]
    }
  ];

  const handleSuggestion = () => {
    if (suggestion.trim()) {
      // Handle suggestion submission
      setSuggestion("");
      // Show success toast
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Matching home page style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/group/group1.jpg"
            alt="Resources Hub - E-Cell REC"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Resources Hub
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light max-w-3xl mx-auto mb-8">
              Everything you need to build and scale your startup - from templates to expert guides
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center space-x-8 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-white/80">Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-white/80">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-white/80">Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section - Matching home page gray section style */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        {/* Pink decorative squiggly lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top left squiggly line */}
          <svg
            className="absolute top-10 left-10 w-20 h-20 text-pink-400"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M10,50 Q30,20 50,50 T90,50" strokeLinecap="round"/>
            <path d="M15,60 Q35,30 55,60 T95,60" strokeLinecap="round"/>
          </svg>

          {/* Bottom right squiggly line */}
          <svg
            className="absolute bottom-10 right-10 w-24 h-24 text-pink-400"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M10,30 Q30,10 50,30 T90,30" strokeLinecap="round"/>
            <path d="M5,45 Q25,25 45,45 T85,45" strokeLinecap="round"/>
            <path d="M15,60 Q35,40 55,60 T95,60" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white rounded-xl shadow-sm">
              {resourceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {resourceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          {resource.type === "PDF" && <FileText className="w-6 h-6 text-blue-600" />}
                          {resource.type === "DOCX" && <FileText className="w-6 h-6 text-green-600" />}
                          {resource.type === "PPTX" && <FileText className="w-6 h-6 text-orange-600" />}
                          {resource.type === "Link" && <ExternalLink className="w-6 h-6 text-blue-600" />}
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>{resource.type}</div>
                          <div>{resource.size}</div>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Download className="w-4 h-4 mr-1" />
                          {resource.downloads.toLocaleString()} downloads
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300">
                          {resource.type === "Link" ? "Visit" : "Download"}
                          {resource.type === "Link" ?
                            <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" /> :
                            <Download className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          }
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>



      {/* Quick Access Section - Matching home page gray section style */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        {/* Pink decorative squiggly lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top left squiggly line */}
          <svg className="absolute top-10 left-10 w-20 h-20 text-pink-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M10,50 Q30,20 50,50 T90,50" strokeLinecap="round"/>
            <path d="M15,60 Q35,30 55,60 T95,60" strokeLinecap="round"/>
          </svg>

          {/* Bottom right squiggly line */}
          <svg className="absolute bottom-10 right-10 w-24 h-24 text-pink-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M10,30 Q30,10 50,30 T90,30" strokeLinecap="round"/>
            <path d="M5,45 Q25,25 45,45 T85,45" strokeLinecap="round"/>
            <path d="M15,60 Q35,40 55,60 T95,60" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quick Access
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Most popular resources to get you started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Startup Toolkit",
                description: "Complete package with all essential templates",
                icon: "🎯",
                downloads: "5.2K"
              },
              {
                title: "Funding Guide 2024",
                description: "Latest funding landscape and opportunities",
                icon: "💰",
                downloads: "3.8K"
              },
              {
                title: "Tech Stack Guide",
                description: "Best practices for technical co-founders",
                icon: "⚡",
                downloads: "4.1K"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  {item.downloads} downloads
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300">
                  Download
                  <Download className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
