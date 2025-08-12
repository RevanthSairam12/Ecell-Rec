import { Target, Users, Zap } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission: Inspiring the
                <span className="block text-primary">Next Generation of Founders</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are more than just a college club. We are a community that nurtures innovation, 
                fosters entrepreneurial thinking, and provides the resources needed to turn your 
                boldest ideas into thriving businesses.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Expert Mentorship</h3>
                  <p className="text-muted-foreground">
                    Get guidance from successful entrepreneurs, industry experts, and our experienced alumni network.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-innovation/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-innovation" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Vibrant Community</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded peers, form founding teams, and build lasting professional relationships.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Real-World Impact</h3>
                  <p className="text-muted-foreground">
                    Work on projects that matter, participate in hackathons, and create solutions for real problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-hero-gradient opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose E-Cell REC?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <span className="font-medium">Startup Incubation Program</span>
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-innovation/5 rounded-lg">
                    <span className="font-medium">Industry Connect Events</span>
                    <span className="text-innovation font-bold">✓</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-success/5 rounded-lg">
                    <span className="font-medium">Funding Assistance</span>
                    <span className="text-success font-bold">✓</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <span className="font-medium">Skill Development Workshops</span>
                    <span className="text-primary font-bold">✓</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Student Satisfaction Rate</div>
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

export default Mission;