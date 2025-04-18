
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ChartBar, Users, Award, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Photo Column */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="photo-frame aspect-square w-64 mx-auto md:w-full max-w-sm">
              <img 
                src="/mnt/data/DSC08315.jpg"
                alt="Sohila Khaled"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-2/3">
            {/* Intro Text */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-logo">
                <span className="gradient-text">About Me</span>
              </h2>
              <p className="text-foreground dark:text-foreground-dark text-lg leading-relaxed mb-6">
                I'm a self-taught data analyst who turns messy spreadsheets and complex datasets 
                into dashboards people actually use. I focus on making reporting smoother, automating 
                the boring stuff, and helping teams see what matters.
              </p>
              <blockquote className="border-l-4 border-accent dark:border-accent pl-4 italic text-foreground/80 dark:text-foreground-dark/80 my-8">
                "Dashboards aren't just visuals — they're decisions waiting to happen."
              </blockquote>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-card dark:bg-card-dark shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <ChartBar className="h-5 w-5 text-accent dark:text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground dark:text-foreground-dark">
                      Created 10+ real-world dashboards for hiring, HR, sales, and social media
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card dark:bg-card-dark shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Code className="h-5 w-5 text-accent dark:text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground dark:text-foreground-dark">
                      Automated 5+ reporting tasks, cutting weekly manual work by 40%
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card dark:bg-card-dark shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-5 w-5 text-accent dark:text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground dark:text-foreground-dark">
                      Recognized as a Top 5 Data Science Creator in Egypt (Favikon)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card dark:bg-card-dark shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-5 w-5 text-accent dark:text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground dark:text-foreground-dark">
                      10,000+ followers reached via original dashboard insights
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
