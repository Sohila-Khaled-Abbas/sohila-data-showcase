
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-logo">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <Card className="max-w-4xl mx-auto shadow-sm border-secondary/20">
          <CardContent className="pt-6">
            <p className="text-lg text-foreground leading-relaxed">
              I am an entry-level Data Analyst with a passion for translating complex data into meaningful insights. 
              Recognized as one of the Top 5 Data Science Creators in Egypt, I combine technical skills with strong 
              communication abilities to present data-driven stories. My expertise includes data visualization, 
              statistical analysis, and programming, with experience in Python, SQL, and various data analysis tools. 
              I am committed to continuous learning and leveraging data to drive strategic decision-making.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
