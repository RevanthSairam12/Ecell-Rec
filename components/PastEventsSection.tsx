'use client'

import EventsVideo from "../app/pages/EventsVideo";

const PastEventsSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Past Events & Highlights
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Celebrating our journey of fostering entrepreneurship and innovation at REC
          </p>
        </div>

        {/* Events Video Component */}
        <div className="relative">
          <EventsVideo />
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
