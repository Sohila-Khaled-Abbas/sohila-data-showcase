
import { Project } from "@/lib/supabase";

export const filterProjects = (
  projects: Project[],
  searchQuery: string,
  selectedTechnology: string
): Project[] => {
  let result = [...projects];
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    result = result.filter(project => 
      project.title.toLowerCase().includes(query) || 
      (project.technologies && project.technologies.some(tech => 
        tech.toLowerCase().includes(query)
      ))
    );
  }
  
  if (selectedTechnology) {
    result = result.filter(project => 
      project.technologies && project.technologies.includes(selectedTechnology)
    );
  }
  
  return result;
};

export const sortProjects = (projects: Project[], sortBy: string): Project[] => {
  const sorted = [...projects];
  
  switch(sortBy) {
    case "newest":
      return sorted.sort((a, b) => 
        new Date(b.created_at || "").getTime() - new Date(a.created_at || "").getTime()
      );
    case "tech":
      return sorted.sort((a, b) => {
        const techsA = a.technologies ? a.technologies.join('') : '';
        const techsB = b.technologies ? b.technologies.join('') : '';
        return techsA.localeCompare(techsB);
      });
    case "impact":
      // Placeholder for future impact sorting
      return sorted;
    default:
      return sorted;
  }
};
