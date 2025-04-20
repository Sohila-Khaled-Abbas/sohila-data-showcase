import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Github, BarChart3, Search, X, Filter } from "lucide-react";
import { useProjects } from "@/hooks/use-supabase-data";
import { Skeleton } from "@/components/ui/skeleton";
import { Project } from "@/lib/supabase";

const Projects = () => {
  const { data: projects, isLoading, error } = useProjects();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTechnology, setSelectedTechnology] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Extract unique technologies for filter badges
  const uniqueTechnologies = projects ? 
    [...new Set(projects.flatMap(project => project.technologies || []))] : 
    [];
  
  // Filter and sort projects
  useEffect(() => {
    if (!projects) return;
    
    // Apply filters
    let result = [...projects];
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        (project.technologies && project.technologies.some(tech => 
          tech.toLowerCase().includes(query)
        ))
      );
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
  }, [projects, searchQuery, selectedTechnology, sortBy]);

  // Preview modal handler
  const openPreviewModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Loading state
  if (isLoading) {
    return (
      <section id="projects" className="py-16 bg-background dark:bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-logo">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          
          {/* Skeleton for filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Skeleton className="h-10 w-full md:w-64" />
            <Skeleton className="h-10 w-full md:w-48" />
          </div>
          
          {/* Skeleton for technologies filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-full" />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="flex flex-col h-full border border-secondary/20">
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent className="flex-grow pb-2">
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, j) => (
                      <Skeleton key={j} className="h-6 w-16" />
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex-col">
                  <Skeleton className="h-10 w-full mb-2" />
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading projects:', error);
  }

  const fallbackProjects = [
    {
      title: "Wuzzuf Job Market Analysis",
      description: "Analyzed job postings, hiring trends, salary distributions, and in-demand skills.",
      technologies: ["Power BI", "Python"],
      github_url: "https://github.com/Sohila-Khaled-Abbas/Wuzzuf-Job-Market-Analysis",
      powerbi_url: "https://app.powerbi.com/view?r=eyJrIjoiMGNjZmFlOWItMWU3My00ZjM4LTlhYjQtMWY5N2QzOGQwMTAyIiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9",
    },
    {
      title: "Social Media Advertising Dashboard",
      description: "Delivered a dashboard resolving ROI data issues and highlighting a 35% click contribution from top channels.",
      technologies: ["Power BI", "Python"],
      github_url: "https://github.com/Sohila-Khaled-Abbas/Social-Media-Advertising-Dashboard",
      powerbi_url: "https://app.powerbi.com/view?r=eyJrIjoiMTRlM2M4OWQtMTcyYy00YzhjLWE3NDAtZGNmMDkxNTUwYzIwIiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9",
    },
    {
      title: "Startup Expansion Analysis Dashboard",
      description: "Interactive dashboard analyzing revenue, ROI, and marketing efficiency for startup growth.",
      technologies: ["Power BI", "Python"],
      github_url: "https://github.com/Sohila-Khaled-Abbas/Startup-Expansion-Analysis-Dashboard",
      powerbi_url: "https://app.powerbi.com/view?r=eyJrIjoiZTFiMTFjOWQtNjI5Ni00YzRiLWEwNzQtZmVlZjM2OGQwZGZlIiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9",
    },
    {
      title: "Global Layoffs Analysis",
      description: "Used SQL to reveal workforce reduction trends by industry, region, and funding stage.",
      technologies: ["SQL"],
      github_url: "https://github.com/Sohila-Khaled-Abbas/global-layoffs-analysis",
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Explored hospital waitlists, patient flow, and demographic trends in an interactive dashboard.",
      technologies: ["Power BI"],
      github_url: "https://github.com/Sohila-Khaled-Abbas/healthcare-analytics-dashboard",
      powerbi_url: "https://app.powerbi.com/view?r=eyJrIjoiNDI1ODE0MmYtODk0YS00ZjcxLTgwZTgtODM1NzA0NThjZjEwIiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9",
    },
    {
      title: "Python EDA Case Study",
      description: "Conducted exploratory data analysis on employee salary data to extract insights.",
      technologies: ["Python"],
      github_url: "https://github.com/Sohila-Khaled-Abbas/Python_EDA_Case_Study",
    },
    {
      title: "HR Analytics Dashboard",
      description: "Built an HR dashboard with dynamic filters and detailed KPIs to track employee metrics.",
      technologies: ["Power BI", "DAX"],
      github_url: "https://github.com/Sohila-Khaled-Abbas/HR-Analytics-Dashboard",
      powerbi_url: "https://app.powerbi.com/view?r=eyJrIjoiMTgxZTY2NmMtNzA5ZS00Y2FlLWIxNzgtMDM2MWY0ZTIzZjczIiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9",
    },
    {
      title: "IMDB Top 250 Movies Dashboard",
      description: "Visualized movie ratings and trends using IMDB's top-ranked titles.",
      technologies: ["Power BI"],
      github_url: "https://github.com/Sohila-Khaled-Abbas/IMDB-Top250-Movies-Dashboard",
      powerbi_url: "https://app.powerbi.com/view?r=eyJrIjoiMWJlYmY2ODgtYzQwOS00NzY5LWJmZWItMWI0N2Q0MTJkYmI1IiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9",
    },
    {
      title: "Emergency Room Dashboard",
      description: "Assessed patient satisfaction and ER visit patterns with advanced DAX measures.",
      technologies: ["Power BI", "DAX"],
      github_url: "https://github.com/Sohila-Khaled-Abbas/Emergency-Room-Dashboard",
      powerbi_url: "https://app.powerbi.com/view?r=eyJrIjoiZjNmNjEwMzMtYzM3OS00OWM5LTkzYTUtNjJhODU2NTcxNzU3IiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9",
    },
    {
      title: "Regional Sales Dashboard",
      description: "Monitored regional sales performance, spotting trends and growth opportunities.",
      technologies: ["Power BI"],
      github_url: "https://github.com/Sohila-Khaled-Abbas/regional-sales-dashboard",
      powerbi_url: "https://app.powerbi.com/view?r=eyJrIjoiYWM3NmU2MjgtYjY5Yy00YzczLTg0MDItZjNiMTJlNDUzODhmIiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9",
    },
  ];

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
        <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-7xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects by name, tool, or tag"
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
        
        {/* Technology filter badges */}
        <div className="flex flex-wrap gap-2 mb-8 max-w-7xl mx-auto">
          {uniqueTechnologies.map((tech, index) => (
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
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayProjects.length > 0 ? (
            displayProjects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full border border-secondary/20 dark:border-secondary/40 shadow-md hover:shadow-lg transition-shadow rounded-xl bg-background dark:bg-[#1F1F1F]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-primary dark:text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pb-2">
                  <p className="text-foreground dark:text-white/90 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies && project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-secondary/10 dark:bg-secondary/20 text-primary dark:text-white border-none text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex flex-col gap-2">
                  <Button 
                    variant="default" 
                    className="w-full bg-primary dark:bg-primary-dark hover:bg-primary/90 dark:hover:bg-primary-dark/90 text-white flex items-center justify-center"
                    onClick={() => window.open(project.github_url, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                  
                  {project.powerbi_url && (
                    <>
                      {/* Preview button with modal */}
                      <Button 
                        variant="outline"
                        className="w-full border-secondary/30 dark:border-secondary/50 hover:bg-secondary/10 dark:hover:bg-secondary/20"
                        onClick={() => openPreviewModal(project)}
                      >
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Preview Dashboard
                      </Button>
                    </>
                  )}
                </CardFooter>
              </Card>
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
      
      {/* Modal for Power BI Preview */}
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
