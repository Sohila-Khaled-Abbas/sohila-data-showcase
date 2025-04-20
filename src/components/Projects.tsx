
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/use-supabase-data";
import { Project } from "@/lib/supabase";
import SearchBar from "./projects/SearchBar";
import TechnologyFilter from "./projects/TechnologyFilter";
import SortDropdown from "./projects/SortDropdown";
import ProjectCard from "./projects/ProjectCard";
import ProjectsSkeleton from "./projects/ProjectsSkeleton";
import { filterProjects, sortProjects } from "@/utils/projectFilters";

const Projects = () => {
  const { data: projects, isLoading, error } = useProjects();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTechnology, setSelectedTechnology] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const uniqueTechnologies = projects ? 
    [...new Set(projects.flatMap(project => project.technologies || []))] : 
    [];
  
  useEffect(() => {
    if (!projects) return;
    const filtered = filterProjects(projects, searchQuery, selectedTechnology);
    const sorted = sortProjects(filtered, sortBy);
    setFilteredProjects(sorted);
  }, [projects, searchQuery, selectedTechnology, sortBy]);

  const openPreviewModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <section id="projects" className="py-16 bg-background dark:bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-logo">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <ProjectsSkeleton />
        </div>
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
      : [];

  return (
    <section id="projects" className="py-16 bg-background dark:bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-logo">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-7xl mx-auto">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        
        <TechnologyFilter 
          technologies={uniqueTechnologies}
          selectedTechnology={selectedTechnology}
          setSelectedTechnology={setSelectedTechnology}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayProjects.length > 0 ? (
            displayProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onPreviewClick={openPreviewModal}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No projects match your search criteria.</p>
              <Button 
                variant="link" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTechnology("");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[90vw] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              {selectedProject?.title} - Dashboard Preview
            </DialogTitle>
          </DialogHeader>
          
          {selectedProject?.powerbi_url && (
            <div className="relative w-full pt-[56.25%]">
              <iframe 
                src={selectedProject.powerbi_url} 
                className="absolute top-0 left-0 w-full h-full rounded-xl border border-secondary/30 dark:border-secondary/50"
                allowFullScreen
              />
            </div>
          )}
          
          <div className="flex justify-end mt-4">
            <DialogClose asChild>
              <Button variant="outline" className="mr-2">Close</Button>
            </DialogClose>
            <Button 
              variant="default"
              onClick={() => {
                window.open(selectedProject?.powerbi_url, '_blank');
                setIsModalOpen(false);
              }}
            >
              Open in New Tab
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
