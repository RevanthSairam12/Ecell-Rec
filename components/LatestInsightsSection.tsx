'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LatestInsightsSection = () => {
  const insights = [
  {
    id: 1,
    image: "/innv2startup.jpeg",
    title: "E-Cell REC Kicks Off 2025 with ‘Innovation to Startup’",
    description: "After a year of building and dreaming behind the scenes, E-Cell REC is back with a fresh team and bigger ambitions for 2025! The year begins with our flagship event, ‘Innovation to Startup,’ a deep-dive session that takes students from idea to execution. Alongside the main event, the inauguration of the new core team and a graduation ceremony for the outgoing members marked this exciting new chapter for E-Cell REC.",
    date: "July 19, 2025"
  },
  {
    id: 2,
    image: "/erk.png",
    title: "Eureka! 2025 – College Pitching Competition",
    description: "E-Cell REC successfully hosted ‘Eureka! 2025,’ the annual college pitching competition where 20 shortlisted teams pitched their startup ideas before a panel of mentors and judges. The event witnessed bold innovations, high-energy pitches, and valuable feedback from industry experts. Winning teams now advance to the Eureka! Zonals in Delhi, Mumbai, and Bengaluru, marking an inspiring step forward for student entrepreneurship at REC.",
    date: "August 23, 2025"
  },
  {
    id: 3,
    image: "/trdng.jpeg",
    title: "Basics of Investing & Riding the Market Rollercoaster",
    description: "E-Cell REC hosted an engaging session on ‘Basics of Investing & Riding the Market Rollercoaster,’ led by capital markets expert Jay Mehta. The session covered market cycles, investment strategies, and fundraising essentials for startups. Students gained hands-on experience through paper trading, while also learning about pitch decks, valuations, and equity management. The event successfully bridged financial literacy with entrepreneurial skills, empowering students to think like investors and founders alike.",
    date: "August 25, 2025"
  },{
    id:4,
    image: "/youngprenuerFest.png",
    title: "Youngprenuer Fest'25",
    description: "Youngpreneur Fest is the flagship initiative crafted to ignite the entrepreneurial spark among first-year students. The event offered a hands-on introduction to the world of startups through interactive workshops, real-world startup simulation games, and direct engagement with accomplished industry leaders. A highlight of the fest was the exclusive session by a distinguished jury member from IIM, who shared his personal journey, startup insights, and lessons on innovation and leadership. Students gained exposure to idea validation",
    date: "October 12, 2025"
  },{
    id:5,
    image: "/hackverse.jpg",
    description:"Hackverse 1.0 was the first-ever state-wide 24-hour hackathon hosted by Raghu Engineering College, organized by GDG On Campus REC and E-CELL REC Visakhapatnam. The event brought together over 400 innovators who turned ideas into working prototypes in domains like AI, web, mobile, and automation. Students experienced the thrill of building, collaborating, and pitching under real-world pressure, guided by expert mentors and judged by an esteemed jury. It was a celebration of creativity, teamwork, and the spirit of innovation that defined the next generation of builders at REC.",
    date: "October 18-19, 2025"
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
