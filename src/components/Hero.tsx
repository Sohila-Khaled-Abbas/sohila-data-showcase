
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background dark:bg-[#121212] pt-20">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 photo-frame animate-fade-in">
            <img 
              src="/lovable-uploads/98f8a1b2-d5ee-4733-bd96-8484ec844805.png" 
              alt="Sohila Khaled Abbas" 
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            <span className="block">Hello, I'm</span>
            <span className="font-logo gradient-text">
              Sohila Khaled Abbas
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-3 animate-fade-in-delay-1">
            Data Analyst
          </p>
          <p className="text-lg text-accent dark:text-accent mb-8 animate-fade-in-delay-2">
            Turning Data Into Insights That Matter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-delay-3">
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
                href="https://docs.google.com/document/d/1fy26XlddpG7fY5YXNJllNesmu-oA1PBC/edit?rtpof=true&sd=true&tab=t.0" 
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
