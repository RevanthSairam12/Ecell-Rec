'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import TeamRender from "../app/team-cmp/TeamRender";

const TeamSection = () => {
  const [showFoundingTeam, setShowFoundingTeam] = useState(false);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate students and alumni driving entrepreneurial excellence at REC
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <Button
            variant={!showFoundingTeam ? "default" : "outline"}
            onClick={() => setShowFoundingTeam(false)}
            className="w-full sm:w-auto"
          >
            Current Team
          </Button>
          <Button
            variant={showFoundingTeam ? "default" : "outline"}
            onClick={() => setShowFoundingTeam(true)}
            className="w-full sm:w-auto"
          >
            Founding Team
          </Button>
        </div>

        {/* Team Content */}
        <motion.div
          key={showFoundingTeam ? 'founding' : 'current'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f1f4f9] rounded-lg overflow-hidden"
        >
          <TeamRender TeamContainer={showFoundingTeam ? "FormerTeam" : "CurrentTeam"} />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
