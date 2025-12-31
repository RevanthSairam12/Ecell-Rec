'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { Download, FileText, Book, DollarSign, Users, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import AppNavbar from "@/components/AppNavbar";

// Motion Text Roll Component
const MotionTextRoll = ({
  texts,
  className = "",
  style = {},
  interval = 4000
}: {
  texts: string[],
  className?: string,
  style?: React.CSSProperties,
  interval?: number
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const currentText = texts[currentIndex];

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ ...style, perspective: '1000px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="flex justify-center flex-wrap"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {currentText.split('').map((letter, index) => (
            <motion.span
              key={`${currentIndex}-${index}`}
              className="inline-block"
              style={{
                transformStyle: 'preserve-3d',
                display: letter === ' ' ? 'inline' : 'inline-block',
                minWidth: letter === ' ' ? '0.3em' : 'auto'
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  rotateX: -90,
                  y: 15,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: index * 0.02,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                },
                exit: {
                  opacity: 0,
                  rotateX: 90,
                  y: -15,
                  transition: {
                    duration: 0.25,
                    delay: index * 0.015,
                    ease: [0.55, 0.06, 0.68, 0.19]
                  }
                }
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function Resources() {
  const subtitleTexts = ["Your Startup Toolkit", "Templates & Expert Guides", "Everything You Need to Scale"];
  const [suggestion, setSuggestion] = useState("");

  const resourceCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Users,
      resources: [
        {
          title: "Roadmap",
          description: "Complete roadmap from idea to startup",
          type: "PDF",
          size: "2 MB",
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
      id: "enterpenuer-handbook",
      title: "Enterpenuer's Handbook",
      icon: Book,
      resources: [
        {
          title: "Enterpenuer knowledge series",
          description: "Basic knowledge that enterpenuer has to be know to begin",
          type: "PDF",
          size: "9.5 MB",
          downloads: 356
        }, {
          title: "Investor Playbook 7 Essential Rules No One Teaches you",
          description: "Startup founders must know guide for pitching investors with clarity, credibility, and traction.",
          type: "PDF",
          size: "23 KB",
          downloads: 234
        }, {
          title: "Getting Started with Entrepreneurship",
          description: "A foundational guide outlining the initial steps and key concepts for aspiring entrepreneurs.",
          type: "PDF",
          size: "182 KB",
          downloads: 859
        }, {
          title: "Startup Playbook",
          description: "This PDF details benefits for DPIIT-recognised startups in India.",
          type: "PDF",
          size: "3.7 MB",
          downloads: 304
        }, {
          title: "Top mistakes I made as an early enterpenuer",
          description: "Mistakes that successful enterpenuers did in their past",
          type: "PDF",
          size: "571 KB",
          downloads: 272
        }, {
          title: "The Lean Startup",
          description: "Startups grow by rapidly testing, learning, and adapting to customer needs.",
          type: "PDF",
          size: "571 KB",
          downloads: 493
        }
      ]
    },
    // {
    //   id: "pitch-decks",
    //   title: "Pitch Deck Templates",
    //   icon: FileText,
    //   resources: [
    //     {
    //       title: "Investor Pitch Template",
    //       description: "Professional template for investor presentations",
    //       type: "PPTX",
    //       size: "3.1 MB",
    //       downloads: 2100
    //     },
    //     {
    //       title: "Demo Day Template",
    //       description: "Optimized for 5-minute demo presentations",
    //       type: "PPTX",
    //       size: "2.8 MB",
    //       downloads: 1650
    //     },
    //     {
    //       title: "Product Pitch Guide",
    //       description: "Step-by-step guide to creating compelling pitches",
    //       type: "PDF",
    //       size: "1.8 MB",
    //       downloads: 1420
    //     }
    //   ]
    // },
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
        }, {
          title: "AI terms related to enterpenuership",
          description: "40 AI techniques to grow up in Enterpenuership ecosystem",
          type: "Link",
          size: "External",
          downloads: 3500
        }, {
          title: "The Lean startup",
          description: "Startups grow by rapidly testing, learning, and adapting to customer needs.",
          type: "Link",
          size: "External",
          downloads: 2100
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
      <AppNavbar />
      {/* <Header /> */}  {/* Old Header */}

      <PageHero
        title="Our"
        highlight="Resources"
        description="Your Startup Toolkit. Templates & Expert Guides. Everything You Need to Scale."
      />

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
            <path d="M10,50 Q30,20 50,50 T90,50" strokeLinecap="round" />
            <path d="M15,60 Q35,30 55,60 T95,60" strokeLinecap="round" />
          </svg>

          {/* Bottom right squiggly line */}
          <svg
            className="absolute bottom-10 right-10 w-24 h-24 text-pink-400"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M10,30 Q30,10 50,30 T90,30" strokeLinecap="round" />
            <path d="M5,45 Q25,25 45,45 T85,45" strokeLinecap="round" />
            <path d="M15,60 Q35,40 55,60 T95,60" strokeLinecap="round" />
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
            <path d="M10,50 Q30,20 50,50 T90,50" strokeLinecap="round" />
            <path d="M15,60 Q35,30 55,60 T95,60" strokeLinecap="round" />
          </svg>

          {/* Bottom right squiggly line */}
          <svg className="absolute bottom-10 right-10 w-24 h-24 text-pink-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M10,30 Q30,10 50,30 T90,30" strokeLinecap="round" />
            <path d="M5,45 Q25,25 45,45 T85,45" strokeLinecap="round" />
            <path d="M15,60 Q35,40 55,60 T95,60" strokeLinecap="round" />
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
