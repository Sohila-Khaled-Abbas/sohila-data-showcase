
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Segmentation Analysis",
      description: "Utilized K-means clustering to segment customers based on purchasing behavior, resulting in targeted marketing strategies that increased customer engagement by 25%.",
      tools: ["Python", "Scikit-learn", "Matplotlib", "Pandas"],
      githubLink: "https://github.com/username/customer-segmentation",
      liveLink: "#",
    },
    {
      title: "Sales Forecast Dashboard",
      description: "Created an interactive Power BI dashboard for sales forecasting, incorporating time series analysis that helped improve inventory management and reduce costs by 15%.",
      tools: ["Power BI", "DAX", "SQL", "Excel"],
      githubLink: "https://github.com/username/sales-dashboard",
      liveLink: "#",
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Developed a natural language processing model to analyze customer sentiment from Twitter data, providing valuable insights for product development and customer service improvements.",
      tools: ["Python", "NLTK", "Tensorflow", "Tweepy"],
      githubLink: "https://github.com/username/twitter-sentiment",
      liveLink: "#",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg border-none hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-0">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="secondary" className="bg-gray-100">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center">
                    <Github className="mr-1 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Live Demo
                  </a>
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
