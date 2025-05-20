
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, X, Filter } from "lucide-react";

interface ProjectFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  selectedTechnology: string;
  setSelectedTechnology: (tech: string) => void;
  uniqueTechnologies: string[];
  commonTechs: string[];
  setQuickFilter: (tech: string) => void;
  highlightIfMatched: (technology: string) => boolean;
}

const ProjectFilters = ({ 
  searchQuery, 
  setSearchQuery, 
  sortBy, 
  setSortBy,
  selectedTechnology,
  setSelectedTechnology,
  uniqueTechnologies,
  commonTechs,
  setQuickFilter,
  highlightIfMatched
}: ProjectFiltersProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-7xl mx-auto">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects by name or technology (e.g. Power BI, Python)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background dark:bg-[#1F1F1F] border-secondary/30"
          />
          {searchQuery && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
        
        {/* Sort Dropdown */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-48 bg-background dark:bg-[#1F1F1F] border-secondary/30">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="tech">Tech Stack</SelectItem>
            <SelectItem value="impact">Business Impact</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Quick filter technology buttons */}
      <div className="flex flex-wrap gap-2 mb-4 max-w-7xl mx-auto">
        {commonTechs.map((tech, index) => (
          <Button
            key={index}
            variant={tech === selectedTechnology ? "default" : "outline"}
            size="sm"
            className={`
              text-xs py-1 h-8 transition-colors
              ${tech === selectedTechnology ? 
                'bg-primary dark:bg-primary-dark text-white' : 
                'bg-secondary/10 hover:bg-secondary/20 dark:bg-secondary/20 hover:dark:bg-secondary/30'}
            `}
            onClick={() => setQuickFilter(tech)}
          >
            {tech}
          </Button>
        ))}
      </div>
      
      {/* Technology filter badges */}
      <div className="flex flex-wrap gap-2 mb-8 max-w-7xl mx-auto">
        {uniqueTechnologies.map((tech, index) => (
          <Badge 
            key={index} 
            variant={selectedTechnology === tech ? "default" : 
              highlightIfMatched(tech) ? "secondary" : "outline"}
            className={`
              cursor-pointer text-xs px-3 py-1 rounded-full
              ${selectedTechnology === tech ? 
                'bg-primary dark:bg-primary-dark text-white' : 
                highlightIfMatched(tech) ?
                'bg-secondary/40 dark:bg-secondary/60 dark:text-white font-medium' :
                'bg-secondary/20 dark:bg-secondary/30 hover:bg-secondary/40'}
            `}
            onClick={() => setSelectedTechnology(selectedTechnology === tech ? "" : tech)}
          >
            {tech}
          </Badge>
        ))}
        {(selectedTechnology || searchQuery) && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => {
              setSelectedTechnology("");
              setSearchQuery("");
            }}
            className="text-xs h-6 px-2"
          >
            Clear filters
          </Button>
        )}
      </div>
    </>
  );
};

export default ProjectFilters;
