
import { useState } from "react";
import { useProjects } from "@/hooks/use-supabase-data";
import { Project } from "@/lib/supabase";
import ProjectCard from "./projects/ProjectCard";
import ProjectFilters from "./projects/ProjectFilters";
import ProjectPreviewModal from "./projects/ProjectPreviewModal";
import ProjectsLoading from "./projects/ProjectsLoading";
import { useProjectFilters } from "./projects/useProjectFilters";
import { fallbackProjects } from "./projects/projectsData";

const Projects = () => {
  const { data: projects, isLoading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const {
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
  } = useProjectFilters(projects);

  // Preview modal handler
  const openPreviewModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Loading state
  if (isLoading) {
    return (
      <section id="projects" className="py-16 bg-background dark:bg-[#121212]">
        <ProjectsLoading />
      </section>
    );
  }

  if (error) {
    console.error('Error loading projects:', error);
  }

  const displayProjects = filteredProjects.length > 0 
    ? filteredProjects 
    : projects?.length 
      ? projects 
      : fallbackProjects;

  return (
    <section id="projects" className="py-16 bg-background dark:bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-logo">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        {/* Search and Filter UI */}
        <ProjectFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedTechnology={selectedTechnology}
          setSelectedTechnology={setSelectedTechnology}
          uniqueTechnologies={uniqueTechnologies}
          commonTechs={commonTechs}
          setQuickFilter={setQuickFilter}
          highlightIfMatched={highlightIfMatched}
        />
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayProjects.length > 0 ? (
            displayProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                openPreviewModal={openPreviewModal}
                highlightIfMatched={highlightIfMatched}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No projects match your search criteria.</p>
              <button 
                className="text-primary underline mt-2"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTechnology("");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Modal for Power BI Preview */}
      <ProjectPreviewModal 
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        selectedProject={selectedProject}
      />
    </section>
  );
};

export default Projects;
