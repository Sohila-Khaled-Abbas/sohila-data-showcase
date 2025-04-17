
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  BarChart2, 
  Database, 
  Library, 
  Terminal, 
  Wrench, 
  Users 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming & Querying",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["SQL", "Python", "R"],
    },
    {
      name: "Data Visualization",
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      skills: ["Excel (Pivot Tables, Charts, Macros)", "Power BI", "Tableau"],
    },
    {
      name: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["PostgreSQL", "MySQL", "SQL Server", "Google BigQuery"],
    },
    {
      name: "Libraries & Frameworks",
      icon: <Library className="h-6 w-6 text-primary" />,
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "BeautifulSoup",
        "Selenium",
        "Scrapy"
      ],
    },
    {
      name: "Tools & Technologies",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: ["Jupyter Notebook", "Git", "Docker"],
    },
    {
      name: "Other Technical Skills",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: [
        "Data Cleaning",
        "Data Validation",
        "EDA",
        "Dashboarding",
        "Reporting Automation"
      ],
    },
    {
      name: "Soft Skills",
      icon: <Users className="h-6 w-6 text-primary" />,
      skills: ["Data Storytelling", "Analytical Thinking", "Collaboration"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-logo">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-secondary/20 shadow-sm bg-background rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-primary">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="bg-secondary/10 text-primary border-secondary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
