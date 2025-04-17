
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-logo">
          <span className="gradient-text">
            About Me
          </span>
        </h2>
        
        <Card className="max-w-4xl mx-auto shadow-sm border-secondary/20">
          <CardContent className="pt-6 space-y-6">
            <div className="flex items-start gap-4">
              <Briefcase className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Professional Summary</h3>
                <p className="text-foreground leading-relaxed">
                  I am an entry-level Data Analyst with a passion for translating complex data into meaningful insights. 
                  Recognized as one of the Top 5 Data Science Creators in Egypt, I combine technical skills with strong 
                  communication abilities to present data-driven stories. My expertise includes data visualization, 
                  statistical analysis, and programming, with experience in Python, SQL, and various data analysis tools. 
                  I am committed to continuous learning and leveraging data to drive strategic decision-making.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <GraduationCap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Education</h3>
                <p className="text-foreground">
                  <strong>Bachelor of Commerce (Business Information Systems)</strong><br />
                  Damietta University, Egypt<br />
                  GPA: 3.95/4.0 (Excellent with Honors)<br />
                  2019 - 2023
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Achievements</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground">
                  <li>Top 5 Data Science Content Creator in Egypt (2023)</li>
                  <li>Scholarship recipient for academic excellence</li>
                  <li>Data Analytics Hackathon finalist</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
