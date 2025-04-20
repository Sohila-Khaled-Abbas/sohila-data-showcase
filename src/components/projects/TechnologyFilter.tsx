
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TechnologyFilterProps {
  technologies: string[];
  selectedTechnology: string;
  setSelectedTechnology: (tech: string) => void;
}

const TechnologyFilter = ({ technologies, selectedTechnology, setSelectedTechnology }: TechnologyFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 max-w-7xl mx-auto">
      {technologies.map((tech, index) => (
        <Badge 
          key={index} 
          variant={selectedTechnology === tech ? "default" : "outline"}
          className={`
            cursor-pointer text-xs px-3 py-1 rounded-full
            ${selectedTechnology === tech ? 
              'bg-primary dark:bg-primary-dark text-white' : 
              'bg-secondary/20 dark:bg-secondary/30 hover:bg-secondary/40'}
          `}
          onClick={() => setSelectedTechnology(selectedTechnology === tech ? "" : tech)}
        >
          {tech}
        </Badge>
      ))}
      {selectedTechnology && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setSelectedTechnology("")}
          className="text-xs h-6 px-2"
        >
          Clear filter
        </Button>
      )}
    </div>
  );
};

export default TechnologyFilter;
