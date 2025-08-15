'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LatestInsightsSection = () => {
  const insights = [
    {
      id: 1,
      image: "/group/group1.jpg",
      title: "E-Cell REC Hosts Successful Innovation Workshop Series",
      description: "E-Cell REC organized a comprehensive workshop series focusing on startup fundamentals, innovation methodologies, and entrepreneurial skill development for aspiring student entrepreneurs.",
      date: "July 19, 2025"
    },
    {
      id: 2,
      image: "/group/group2.jpg",
      title: "E-Cell REC Launches New Startup Incubation Program",
      description: "The entrepreneurship cell introduces an innovative incubation program designed to support student startups with mentorship, resources, and networking opportunities.",
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

        {/* Explore All Events Button */}
        <div className="text-center">
          <a href="/events">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium text-sm flex items-center space-x-2 mx-auto">
              <span>Explore All Events</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;
