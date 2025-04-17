
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-secondary/50 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center text-primary font-medium">
              Photo Placeholder
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hello, I'm</span>
            <span className="font-logo bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sohila Khaled Abbas
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-8">
            Data Analyst & Top 5 Data Science Creator in Egypt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <a href="#projects" className="inline-flex items-center">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a 
                href="https://drive.google.com/file/d/1UULl32bLOY1ZVSxvLM875v6E69MqiLpi/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
