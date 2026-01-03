'use client'

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { Download, FileText, Book, DollarSign, Users, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AppNavbar from "@/components/AppNavbar";

export default function Resources() {
  const handleDownload = (fileName: string) => {
    const link = document.createElement("a");
    link.href = `/resources/${encodeURIComponent(fileName)}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          downloads: 1250,
          fileName: "getting-started-roadmap.pdf"
        },
        {
          title: "Market Research Template",
          description: "Structured approach to understanding your target market",
          type: "PDF",
          size: "890 KB",
          downloads: 980,
          fileName: "getting-started-market-research.pdf"
        },
        {
          title: "Business Model Canvas",
          description: "Visual template for developing business models",
          type: "PDF",
          size: "1.2 MB",
          downloads: 1890,
          fileName: "getting-started-bussiness-canvas(1).pdf"
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
          downloads: 356,
          fileName: "E-Book-Knowledge-series.pdf"
        }, {
          title: "Investor Playbook 7 Essential Rules No One Teaches you",
          description: "Startup founders must know guide for pitching investors with clarity, credibility, and traction.",
          type: "PDF",
          size: "23 KB",
          downloads: 234,
          fileName: "EBook-Investor Playbook 7 Essential Rules No One Teaches You.pdf"
        }, {
          title: "Getting Started with Entrepreneurship",
          description: "A foundational guide outlining the initial steps and key concepts for aspiring entrepreneurs.",
          type: "PDF",
          size: "182 KB",
          downloads: 859,
          fileName: "getting-started-roadmap.pdf"
        }, {
          title: "Startup Playbook",
          description: "This PDF details benefits for DPIIT-recognised startups in India.",
          type: "PDF",
          size: "3.7 MB",
          downloads: 304,
          fileName: "EBook-Startup Playbook.pdf"
        }, {
          title: "Top mistakes I made as an early enterpenuer",
          description: "Mistakes that successful enterpenuers did in their past",
          type: "PDF",
          size: "571 KB",
          downloads: 272,
          fileName: "EBook-Top mistakes i made as an early Entrepreneur.pdf"
        }, {
          title: "The Lean Startup",
          description: "Startups grow by rapidly testing, learning, and adapting to customer needs.",
          type: "PDF",
          size: "2.1 MB",
          downloads: 493,
          fileName: "EBook-The Lean Startup - Erick Ries.pdf"
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
          size: "25 KB",
          downloads: 1340,
          fileName: "F-CheckList-Startup Incentives and Support Programs.pdf"
        },
        {
          title: "Government Schemes Guide",
          description: "Complete list of startup-friendly government programs",
          type: "PDF",
          size: "65 KB",
          downloads: 1780,
          fileName: "government-scheme-guides.pdf"
        },
        {
          title: "Term Sheet Template",
          description: "Standard term sheet template with explanations",
          type: "PDF",
          size: "130 KB",
          downloads: 890,
          fileName: "market-sheet-template.pdf"
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
          type: "PDF",
          size: "571 KB",
          downloads: 3200,
          fileName: "EBook-Top mistakes i made as an early Entrepreneur.pdf"
        }, {
          title: "AI terms related to enterpenuership",
          description: "40 AI techniques to grow up in Enterpenuership ecosystem",
          type: "PDF",
          size: "132 KB",
          downloads: 3500,
          fileName: "ai-terms-related-enterprenuership.pdf"
        }, {
          title: "The Lean startup",
          description: "Startups grow by rapidly testing, learning, and adapting to customer needs.",
          type: "PDF",
          size: "2.1 MB",
          downloads: 2100,
          fileName: "EBook-The Lean Startup - Erick Ries.pdf"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AppNavbar />

      <PageHero
        title="Our"
        highlight="Resources"
        description="Your Startup Toolkit. Templates & Expert Guides. Everything You Need to Scale."
      />

      {/* Blue Description Section - Matching Team/Events pages */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="text-center">
              <p className="text-base md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                Access our curated collection of startup resources, templates, and expert guides. 
                From business model canvases to funding checklists, we provide everything you need 
                to transform your ideas into successful ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Browse <span className="text-blue-600">Resources</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive library of startup resources
            </p>
          </div>

          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="flex flex-wrap w-full justify-center gap-3 mb-10 bg-transparent p-0 h-auto">
              {resourceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium text-sm transition-all duration-300 bg-white border-2 border-gray-200 text-gray-700 shadow-sm hover:border-blue-300 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:shadow-lg"
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {resourceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {category.resources.map((resource, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                          {resource.type === "PDF" && <FileText className="w-7 h-7 text-white" />}
                          {resource.type === "DOCX" && <FileText className="w-7 h-7 text-white" />}
                          {resource.type === "PPTX" && <FileText className="w-7 h-7 text-white" />}
                          {resource.type === "Link" && <ExternalLink className="w-7 h-7 text-white" />}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">{resource.type}</span>
                          <span className="text-xs text-gray-400">{resource.size}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{resource.title}</h3>
                      <p className="text-gray-500 mb-5 text-sm leading-relaxed line-clamp-2">{resource.description}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-400">
                          <Download className="w-4 h-4 mr-1" />
                          {resource.downloads.toLocaleString()} downloads
                        </div>
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                          onClick={() => resource.fileName && handleDownload(resource.fileName)}
                        >
                          {resource.type === "Link" ? "Visit" : "Download"}
                          {resource.type === "Link" ?
                            <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" /> :
                            <Download className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          }
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>



      {/* Quick Access Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Quick <span className="text-blue-600">Access</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Most popular resources to get you started on your entrepreneurial journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Startup Toolkit",
                description: "Complete package with all essential templates for launching your startup",
                icon: "🎯",
                downloads: "5.2K",
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "Funding Guide 2024",
                description: "Latest funding landscape, investor insights, and opportunities",
                icon: "💰",
                downloads: "3.8K",
                color: "from-emerald-500 to-teal-600"
              },
              {
                title: "Tech Stack Guide",
                description: "Best practices and tools for technical co-founders",
                icon: "⚡",
                downloads: "4.1K",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-white p-8 text-center rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 overflow-hidden hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 mb-5 text-sm leading-relaxed">{item.description}</p>
                  <div className="inline-flex items-center text-sm text-gray-400 mb-6 bg-gray-50 px-4 py-2 rounded-full">
                    <Download className="w-4 h-4 mr-2" />
                    {item.downloads} downloads
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => {
                      const fileName =
                        item.title === "Startup Toolkit" ? "EBook-Startup Playbook.pdf" :
                          item.title === "Funding Guide 2024" ? "government-scheme-guides.pdf" :
                            item.title === "Tech Stack Guide" ? "ai-terms-related-enterprenuership.pdf" :
                              "";
                      if (fileName) handleDownload(fileName);
                    }}
                  >
                    Download Now
                    <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Something Specific?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is constantly adding new resources based on your feedback.
          </p>
          <Button 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = '/join-ecell'}
          >
            Contact Us
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
