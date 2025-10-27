import RetroGrid from "@/components/ui/retro-grid";
import CloseBtn from "@/app/News/close.svg";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type NewsItem = {
  title: string;
  description: string;
  linkUrl: string;
  type: "announcement" | "important" | "update";
};

const newsData: NewsItem[] = [
  {
    title: "New Beginnings at E-Cell REC: Team Inauguration & Launch of 'Ideation to Startup'",
    description: "E-Cell REC kicks off 2025 with the inauguration of its new core team and the launch of 'Ideation to Startup', a flagship initiative to help students transform ideas into real ventures through guided mentorship and workshops.",
    linkUrl: "",
    type: "announcement",
  },
  {
    title: "E-Summit dates announced",
    description: "E-SUMMIT'25 REC happening in 1st and 2nd March 2025.",
    linkUrl: "",
    type: "update",
  },
  {
    title: "E-Summit website launched",
    description: "E-SUMMIT'25 REC website is now live. Check it out now.",
    linkUrl: "https://esummit-rec.vercel.app/",
    type: "important",
  }
];

const News: React.FC = () => {
  const typeStyles = {
    announcement: "bg-green-200 text-green-700",
    important: "bg-red-200 text-red-700",
    update: "bg-blue-200 text-blue-700",
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
                News & Updates
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-800 mb-4 font-semibold tracking-wide" style={{ fontFamily: '"Lato", system-ui, sans-serif', letterSpacing: '0.02em' }}>
              Stay Informed
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Lato", system-ui, sans-serif', fontWeight: 400 }}>
              Stay updated with the latest announcements and happenings at E-Cell REC
            </p>
          </div>
        </div>
      </section>

      {/* News Content Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col items-center space-y-6">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="w-full p-6 border rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 relative"
              >
                <span
                  className={`absolute top-4 right-4 px-4 py-1.5 text-sm font-medium rounded-full ${
                    typeStyles[news.type]
                  }`}
                >
                  {news.type}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-3 pr-24">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.description}</p>
                { 
                  news.linkUrl === "" ? null : 
                  <a href={news.linkUrl} className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                    Link To Page
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                }
              </div>
            ))}
          </div>
        </div>
        <RetroGrid />
      </section>

      <Footer />
    </div>
  );
};

export default News;
