
import { Github, BarChart3 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/supabase";

interface ProjectCardProps {
  project: Project;
  onPreviewClick: (project: Project) => void;
}

const ProjectCard = ({ project, onPreviewClick }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full border border-secondary/20 dark:border-secondary/40 shadow-md hover:shadow-lg transition-shadow rounded-xl bg-background dark:bg-[#1F1F1F]">
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
          <Button 
            variant="outline"
            className="w-full border-secondary/30 dark:border-secondary/50 hover:bg-secondary/10 dark:hover:bg-secondary/20"
            onClick={() => onPreviewClick(project)}
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Preview Dashboard
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
