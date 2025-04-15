
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, BarChart2, Wrench, MessageCircle } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming",
      icon: <Code className="h-6 w-6 text-purple-600" />,
      skills: ["Python", "SQL", "R", "JavaScript", "HTML/CSS"],
    },
    {
      name: "Visualization",
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "D3.js"],
    },
    {
      name: "Tools",
      icon: <Wrench className="h-6 w-6 text-emerald-600" />,
      skills: ["Excel", "Google Analytics", "Jupyter Notebook", "Git", "MongoDB", "PostgreSQL"],
    },
    {
      name: "Soft Skills",
      icon: <MessageCircle className="h-6 w-6 text-amber-600" />,
      skills: ["Data Storytelling", "Problem Solving", "Communication", "Presentation", "Team Collaboration", "Critical Thinking"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-md overflow-hidden border-none">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100"
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
