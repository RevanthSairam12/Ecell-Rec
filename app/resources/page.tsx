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
      <section className="relative h-screen flex items-center justify-start overflow-hidden pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-blue-100/30 to-indigo-100/40"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-200/20 to-transparent"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Partner Logos bar just below header */}
        <div className="absolute top-16 left-0 right-0 z-20">
          {/* Desktop layout: left and right logos */}
          <div className="hidden md:flex justify-between items-center px-6 max-w-7xl mx-auto">
            <div className="relative w-36 h-16">
              <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
            </div>
            <div className="relative w-36 h-16">
              <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
            </div>
          </div>
          {/* Mobile layout: two logos */}
          <div className="md:hidden px-5">
            <div className="flex justify-between items-center">
              <div className="relative w-20 h-12">
                <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
              </div>
              <div className="relative w-20 h-12">
                <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8 md:mt-12">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.01em' }}>
                Resources Hub
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-800 mb-4 font-semibold tracking-wide" style={{ fontFamily: '"Lato", system-ui, sans-serif', letterSpacing: '0.02em' }}>
              Your Startup Toolkit
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: '"Lato", system-ui, sans-serif', fontWeight: 400 }}>
              Everything you need to build and scale your startup - from templates to expert guides
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center space-x-8 text-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-slate-600">Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-slate-600">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-slate-600">Free</div>
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
