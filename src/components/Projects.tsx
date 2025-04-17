
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Wuzzuf Job Market Analysis",
      description: "Analyzed job postings, hiring trends, salary distributions, and in-demand skills.",
      tools: ["Power BI", "Python"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/Wuzzuf-Job-Market-Analysis",
    },
    {
      title: "Social Media Advertising Dashboard",
      description: "Delivered a dashboard resolving ROI data issues and highlighting a 35% click contribution from top channels.",
      tools: ["Power BI", "Python"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/Social-Media-Advertising-Dashboard",
    },
    {
      title: "Startup Expansion Analysis Dashboard",
      description: "Interactive dashboard analyzing revenue, ROI, and marketing efficiency for startup growth.",
      tools: ["Power BI", "Python"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/Startup-Expansion-Analysis-Dashboard",
    },
    {
      title: "Global Layoffs Analysis",
      description: "Used SQL to reveal workforce reduction trends by industry, region, and funding stage.",
      tools: ["SQL"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/global-layoffs-analysis",
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Explored hospital waitlists, patient flow, and demographic trends in an interactive dashboard.",
      tools: ["Power BI"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/healthcare-analytics-dashboard",
    },
    {
      title: "Python EDA Case Study",
      description: "Conducted exploratory data analysis on employee salary data to extract insights.",
      tools: ["Python"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/Python_EDA_Case_Study",
    },
    {
      title: "HR Analytics Dashboard",
      description: "Built an HR dashboard with dynamic filters and detailed KPIs to track employee metrics.",
      tools: ["Power BI", "DAX"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/HR-Analytics-Dashboard",
    },
    {
      title: "IMDB Top 250 Movies Dashboard",
      description: "Visualized movie ratings and trends using IMDB's top-ranked titles.",
      tools: ["Power BI"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/IMDB-Top250-Movies-Dashboard",
    },
    {
      title: "Emergency Room Dashboard",
      description: "Assessed patient satisfaction and ER visit patterns with advanced DAX measures.",
      tools: ["Power BI", "DAX"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/Emergency-Room-Dashboard",
    },
    {
      title: "Regional Sales Dashboard",
      description: "Monitored regional sales performance, spotting trends and growth opportunities.",
      tools: ["Power BI"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/regional-sales-dashboard",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-logo">
          <span className="gradient-text">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full border border-secondary/20 shadow-md hover:shadow-lg transition-shadow rounded-xl bg-background">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pb-2">
                <p className="text-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={toolIndex} 
                      variant="secondary" 
                      className="bg-secondary/10 text-primary border-none"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button 
                  variant="default" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
