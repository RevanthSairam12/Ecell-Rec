"use client";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Footer from "@/components/Footer";
import CurrentTeamMembers from "@/app/team-cmp/CurrentTeamData";
import PageHero from "@/components/PageHero";
import AppNavbar from "@/components/AppNavbar";


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.82, 1],
    },
  },
};

const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    y: -12,
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const wrapperVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function Team() {

  // Transform the imported team data to match the expected format
  const currentTeam = CurrentTeamMembers.map(member => ({
    name: member.name,
    role: member.role,
    subtitle: getSubtitleForRole(member.role),
    image: member.imageUrl,
    socialLinks: member.socialLinks
  }));
  function getSubtitleForRole(role: string): string {
    const subtitles: { [key: string]: string } = {
      "President": "Leading the entrepreneurial revolution at REC",
      "Vice President": "Driving strategic initiatives and startup culture",
      "Startup Assistance & program Head": "Guiding startups from ideation to execution",
      "Alumni & Community Relations Head": "Connecting past, present, and future entrepreneurs",
      "Web Tech Head": "Building digital solutions for entrepreneurs",
      "Designing & Branding Head": "Crafting visual identities that inspire",
      "Marketing & Outreach Head": "Amplifying entrepreneurial voices",
      "Events & Management Head": "Orchestrating memorable events",
      "Content & Social Media Head": "Creating engaging content and managing social presence",
      "Finance & Operations Head": "Managing resources and operational excellence",
      "Research & Development Head": "Exploring new frontiers in entrepreneurship"
    };
    return subtitles[role] || "Contributing to entrepreneurial excellence";
  }

  const teamSectionRef = useRef(null);
  const isTeamInView = useInView(teamSectionRef, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-slate-900">
      <AppNavbar />
      <PageHero
        title="Our"
        highlight="Team"
        description="Guiding Global Entrepreneurs. Building Tomorrow's Leaders."
        useWhiteBackground={true}
      />


      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-white text-base md:text-lg leading-relaxed text-center">
                The E-Cell is steered by a dynamic group of visionary leaders and business owners who have
                navigated the entrepreneurship journey themselves. Our global leadership team combines deep business acumen with a
                passion for fostering global connections and growth for entrepreneurs everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
              Global Board of Directors
            </h2>


            <div className="text-gray-700 text-base leading-relaxed">
              <p className="text-left">
                The <span className="font-semibold text-blue-600">Global Board of Directors</span> serves as the visionary backbone of E-Cell, steering our strategic course and ensuring sustainable growth. Comprising distinguished entrepreneurs and industry leaders, this body brings <span className="font-semibold">unparalleled expertise and insight</span> to amplify <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">E-Cell's global mission</span>, fostering an ecosystem where innovation thrives and future leaders are forged.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 px-6 bg-slate-900 pt-24">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Faculty Coordinator
            </h1>
          </div>


          <div className="flex justify-center mb-16">
            <div className="text-center max-w-xs">

              <div className="relative w-full aspect-[3/4] mb-4 rounded-2xl overflow-hidden">
                <Image
                  src="/kirankumar.png"
                  alt="Dr. G. Kiran Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>


              <div className="text-white">
                <h3 className="text-lg font-bold mb-1">
                  Dr. G. Kiran Kumar
                </h3>
                <p className="text-yellow-400 text-sm font-medium mb-1">
                  Faculty Coordinator
                </p>
                <p className="text-gray-300 text-xs">
                  Mentoring students in entrepreneurship and innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 px-6 bg-slate-900 pt-0">
        <div className="max-w-7xl mx-auto">


          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h1>
          </div>


          <motion.div
            ref={teamSectionRef}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
            variants={wrapperVariants}
            className="max-w-6xl mx-auto"
          >
            {(() => {

              const rows = [
                currentTeam.slice(0, 1),
                currentTeam.slice(1, 3),
                currentTeam.slice(3, 5),
                currentTeam.slice(5, 8),
                currentTeam.slice(8, 11),
                currentTeam.slice(11, 15)
              ];


              const AnimatedCard = (member: typeof currentTeam[number], index: number, rowIndex: number, rowLength: number) => {


                const totalCards = rowLength;
                const centerPosition = totalCards / 2 - 0.5;
                const distanceFromCenter = Math.abs(index - centerPosition);


                const delayMultiplier = distanceFromCenter * 0.05;

                return (
                  <motion.div
                    key={member.name}
                    variants={cardVariants}
                    custom={delayMultiplier}
                    transition={{
                      duration: 0.7,
                      delay: rowIndex * 0.15 + delayMultiplier,
                      ease: [0.23, 1, 0.82, 1],
                    }}
                    className="text-center group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]"
                  >
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      variants={cardHoverVariants}
                      className="relative w-full aspect-[3/4] mb-4 rounded-2xl overflow-hidden mx-auto bg-gray-800"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        priority={rowIndex < 2}
                      />
                      {member.socialLinks && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-black/70 flex items-center justify-center"
                        >
                          <div className="flex space-x-4">
                            {member.socialLinks.map((link, linkIndex) => (
                              <motion.a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                              >
                                {link.platform === 'Twitter' ? (
                                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                  </svg>
                                ) : link.platform === 'LinkedIn' ? (
                                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                  </svg>
                                ) : null}
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                      <p className="text-yellow-400 text-sm font-medium mb-1">{member.role}</p>
                      <p className="text-gray-300 text-xs">{member.subtitle}</p>
                    </div>
                  </motion.div>
                );
              };

              return (
                <div className="flex flex-col gap-8">
                  {rows.map((rowMembers, rowIndex) => (
                    <motion.div
                      key={rowIndex}
                      variants={rowVariants}
                      className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mx-auto px-4"
                    >
                      {rowMembers.map((member, index) => AnimatedCard(member, index, rowIndex, rowMembers.length))}
                    </motion.div>
                  ))}
                </div>
              );
            })()}
          </motion.div>

        </div>
      </section>


      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <Image
                src="/group/group1.jpg"
                alt="Former Team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
            </div>

            {/* Content Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-wide drop-shadow-md">
                Meet our Former Team
              </h2>

              <Link href="/former-team">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
                  Former Team
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}