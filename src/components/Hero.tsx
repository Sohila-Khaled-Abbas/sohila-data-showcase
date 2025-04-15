
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Image Container */}
        <div className="w-full md:w-1/2 flex justify-center md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
              Photo Placeholder
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hello, I'm</span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Sohila Khaled Abbas
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Data Analyst & Top 5 Data Science Creator in Egypt
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <a href="#projects" className="inline-flex items-center">
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
