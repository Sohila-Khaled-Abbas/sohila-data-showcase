
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
      icon: <Code className="h-6 w-6 text-purple-600" />,
      skills: ["SQL", "Python", "R"],
    },
    {
      name: "Data Visualization",
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      skills: ["Excel (Pivot Tables, Charts, Macros)", "Power BI", "Tableau"],
    },
    {
      name: "Databases",
      icon: <Database className="h-6 w-6 text-green-600" />,
      skills: ["PostgreSQL", "MySQL", "SQL Server", "Google BigQuery"],
    },
    {
      name: "Libraries & Frameworks",
      icon: <Library className="h-6 w-6 text-amber-600" />,
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
      icon: <Terminal className="h-6 w-6 text-pink-600" />,
      skills: ["Jupyter Notebook", "Git", "Docker"],
    },
    {
      name: "Other Technical Skills",
      icon: <Wrench className="h-6 w-6 text-indigo-600" />,
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
      icon: <Users className="h-6 w-6 text-cyan-600" />,
      skills: ["Data Storytelling", "Analytical Thinking", "Collaboration"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-md overflow-hidden border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
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
