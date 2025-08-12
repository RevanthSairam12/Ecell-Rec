'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LatestInsightsSection = () => {
  const insights = [
    {
      id: 1,
      image: "/group/group1.jpg",
      title: "E-Cell REC Student Selected as Outstanding Entrepreneur of the Year 2025",
      description: "Student entrepreneur Sriram Vishal Epu, a dedicated E-Cell REC member, is recognized for exceptional leadership and innovation in the entrepreneurial ecosystem.",
      date: "July 19, 2025"
    },
    {
      id: 2,
      image: "/group/group2.jpg", 
      title: "REC Student Named Champion in National Student Entrepreneur Awards",
      description: "E-Cell REC member Aamuktha Malyadha earned the top spot in the national student entrepreneur competition, showcasing innovative solutions and leadership skills.",
      date: "July 17, 2025"
    },
    {
      id: 3,
      image: "/group/group3.jpg",
      title: "E-Cell REC Launches New Innovation Hub Connecting Student Entrepreneurs",
      description: "The new E-Cell REC Innovation Hub brings together diverse student entrepreneurs from various departments, fostering collaboration and innovation across the campus.",
      date: "July 3, 2025"
    }
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with blue angled banner */}
        <div className="relative mb-16">
          {/* Blue angled banner */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-12 py-4 font-bold text-xl md:text-2xl text-center"
            style={{
              clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
              minWidth: '300px'
            }}
          >
            Latest Insights
          </div>
          <div className="h-16"></div> {/* Spacer for the banner */}
        </div>

        {/* Insights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight) => (
            <div key={insight.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-white text-lg font-semibold mb-3 leading-tight">
                  {insight.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {insight.description}
                </p>
                <p className="text-gray-400 text-xs">
                  {insight.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Resources Button */}
        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium text-sm flex items-center space-x-2 mx-auto">
            <span>Explore All Resources</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;
