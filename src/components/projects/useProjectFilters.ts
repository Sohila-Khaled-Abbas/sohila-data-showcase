
import { useState, useEffect } from "react";
import { Project } from "@/lib/supabase";

export function useProjectFilters(projects: Project[] | undefined) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTechnology, setSelectedTechnology] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [commonTechs, setCommonTechs] = useState<string[]>([]);
  
  // Extract unique technologies for filter badges
  const uniqueTechnologies = projects ? 
    [...new Set(projects.flatMap(project => project.technologies || []))] : 
    [];
  
  // Set common technologies for quick filtering
  useEffect(() => {
    if (projects) {
      const techCount = new Map<string, number>();
      projects.forEach(project => {
        project.technologies?.forEach(tech => {
          techCount.set(tech, (techCount.get(tech) || 0) + 1);
        });
      });
      
      // Get the most common technologies (those with more than 1 project)
      const common = Array.from(techCount.entries())
        .filter(([_, count]) => count > 1)
        .sort((a, b) => b[1] - a[1])
        .map(([tech]) => tech)
        .slice(0, 5); // Top 5 most common
      
      setCommonTechs(common);
    }
  }, [projects]);
  
  // Filter and sort projects
  useEffect(() => {
    if (!projects) return;
    
    // Apply filters
    let result = [...projects];
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      
      // Check if the search query exactly matches a technology name
      const exactTechMatch = uniqueTechnologies.find(
        tech => tech.toLowerCase() === query
      );
      
      if (exactTechMatch && !selectedTechnology) {
        // If there's an exact technology match, act as if it was selected in the tech filter
        result = result.filter(project => 
          project.technologies && project.technologies.includes(exactTechMatch)
        );
      } else {
        // Regular search behavior with improved tech matching
        result = result.filter(project => 
          project.title.toLowerCase().includes(query) || 
          (project.description && project.description.toLowerCase().includes(query)) ||
          (project.technologies && project.technologies.some(tech => 
            tech.toLowerCase().includes(query) || query.includes(tech.toLowerCase())
          ))
        );
      }
    }
    
    // Technology filter
    if (selectedTechnology) {
      result = result.filter(project => 
        project.technologies && project.technologies.includes(selectedTechnology)
      );
    }
    
    // Sorting
    switch(sortBy) {
      case "newest":
        result = result.sort((a, b) => 
          new Date(b.created_at || "").getTime() - new Date(a.created_at || "").getTime()
        );
        break;
      case "tech":
        result = result.sort((a, b) => {
          const techsA = a.technologies ? a.technologies.join('') : '';
          const techsB = b.technologies ? b.technologies.join('') : '';
          return techsA.localeCompare(techsB);
        });
        break;
      case "impact":
        // Placeholder for future impact sorting
        break;
      default:
        break;
    }
    
    setFilteredProjects(result);
  }, [projects, searchQuery, selectedTechnology, sortBy, uniqueTechnologies]);

  // Quick filter by technology
  const setQuickFilter = (tech: string) => {
    setSelectedTechnology(selectedTechnology === tech ? "" : tech);
    setSearchQuery("");
  };

  // Check if a technology matches the search query
  const highlightIfMatched = (technology: string): boolean => {
    if (!searchQuery) return false;
    return technology.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedTechnology,
    setSelectedTechnology,
    sortBy,
    setSortBy,
    filteredProjects,
    commonTechs,
    uniqueTechnologies,
    setQuickFilter,
    highlightIfMatched
  };
}
