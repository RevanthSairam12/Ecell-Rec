'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-b from-purple-100 to-white">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          In E-Cell, we belong, so we can become even more.
        </h2>

        {/* Advisory Team Button */}
        <div className="mb-12">
          <a href="/advisory-board">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-base flex items-center space-x-2 mx-auto">
              <span>Explore E-Cell</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Video Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              
              {/* Video Thumbnail/Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-blue-100 to-green-200">
                {/* Simulated video content - replace with actual video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full bg-cover bg-center" 
                       style={{
                         backgroundImage: `url('/group/group4.jpg')`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                       }}>
                    
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                        <Play className="w-6 h-6 md:w-8 md:h-8 text-gray-800 ml-1" fill="currentColor" />
                      </button>
                    </div>

                    {/* Video Controls Bar (bottom) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Play className="w-4 h-4 text-white" fill="currentColor" />
                        <div className="w-8 h-1 bg-white/30 rounded-full">
                          <div className="w-2 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <span className="text-white text-xs font-medium">vimeo</span>
                      </div>
                    </div>

                    {/* Video Icons (top right) */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2">
                      <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                        <div className="w-3 h-3 border border-white rounded-sm"></div>
                      </div>
                      <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                        <div className="w-3 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
