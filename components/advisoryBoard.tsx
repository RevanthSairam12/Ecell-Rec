"use client";
import advisoryBoardMembers from "@/lib/advisoryBoard";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export default function AdvisoryBoardComponent() {
  return (
    <section className="py-16 px-6 bg-slate-900 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Advisory Board
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          {advisoryBoardMembers.slice(0, 3).map((member, index) => {
            const delay = 0.04 * index;

            return (
              <div key={member.name} className="group">
                <motion.div
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:shadow-2xl border border-slate-700/50"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.75, ease: "easeOut", delay }}
                >
                  <div className="relative w-full aspect-[3/4] mb-4 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority={index < 5}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-yellow-400 text-sm font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.subtitle}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {advisoryBoardMembers.slice(3, 5).map((member, index) => {
              const delay = 0.04 * (index + 3);

              return (
                <div key={member.name} className="group">
                  <motion.div
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:shadow-2xl border border-slate-700/50"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.75, ease: "easeOut", delay }}
                  >
                    <div className="relative w-full aspect-[3/4] mb-4 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        priority={index < 5}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-yellow-400 text-sm font-semibold mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {member.subtitle}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
