
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Wuzzuf Job Market Analysis",
      description: "Analyzed job postings, hiring trends, salary distributions, and in-demand skills from Wuzzuf data.",
      tools: ["Power BI", "Python"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/Wuzzuf-Job-Market-Analysis",
    },
    {
      title: "Social Media Advertising Dashboard",
      description: "Built a dashboard resolving ROI data issues and highlighting a 35% click contribution from top channels.",
      tools: ["Power BI", "Python"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/Social-Media-Advertising-Dashboard",
    },
    {
      title: "Startup Expansion Analysis Dashboard",
      description: "Interactive dashboard analyzing a startup's revenue, ROI, and marketing efficiency across markets.",
      tools: ["Power BI", "Python"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/Startup-Expansion-Analysis-Dashboard",
    },
    {
      title: "Global Layoffs Analysis",
      description: "Used SQL to uncover layoff trends across industries, funding stages, and regions.",
      tools: ["SQL"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/global-layoffs-analysis",
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Analyzed hospital waitlists, patient demographics, and service usage trends.",
      tools: ["Power BI"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/healthcare-analytics-dashboard",
    },
    {
      title: "Python EDA Case Study",
      description: "Used EDA techniques to explore employee salary data and uncover insights.",
      tools: ["Python"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/Python_EDA_Case_Study",
    },
    {
      title: "HR Analytics Dashboard",
      description: "Designed an interactive HR dashboard with dynamic filters and insights on attendance and KPIs.",
      tools: ["Power BI", "DAX"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/HR-Analytics-Dashboard",
    },
    {
      title: "IMDB Top 250 Movies Dashboard",
      description: "Visualized cinema trends, ratings, and distributions based on the IMDB Top 250 dataset.",
      tools: ["Power BI"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/IMDB-Top250-Movies-Dashboard",
    },
    {
      title: "Emergency Room Dashboard",
      description: "Analyzed patient satisfaction and visit trends using advanced DAX in Power BI.",
      tools: ["Power BI", "DAX"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/Emergency-Room-Dashboard",
    },
    {
      title: "Regional Sales Dashboard",
      description: "Visualized sales trends to identify profitable regions and growth opportunities.",
      tools: ["Power BI"],
      githubUrl: "https://github.com/Sohila-Khaled-Abbas/regional-sales-dashboard",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full border shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold line-clamp-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={toolIndex} 
                      variant="secondary" 
                      className="bg-purple-50 text-purple-700 hover:bg-purple-100"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex items-center text-sm text-gray-600">
                  <Github className="h-4 w-4 mr-2" />
                  <span className="break-all">{project.githubUrl}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
