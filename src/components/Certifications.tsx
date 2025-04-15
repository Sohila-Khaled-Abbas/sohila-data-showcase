
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2023",
      link: "https://www.coursera.org/professional-certificates/google-data-analytics",
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "2022",
      link: "https://www.coursera.org/professional-certificates/ibm-data-science",
    },
    {
      title: "Advanced SQL for Data Scientists",
      issuer: "DataCamp",
      date: "2022",
      link: "https://www.datacamp.com/courses/advanced-sql",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford Online & DeepLearning.AI",
      date: "2021",
      link: "https://www.coursera.org/specializations/machine-learning-introduction",
    },
    {
      title: "Data Visualization with Tableau",
      issuer: "Tableau",
      date: "2021",
      link: "https://www.tableau.com/learn/training/elearning",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-md border-none">
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-3 text-purple-600" />
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </div>
                <Button variant="ghost" size="sm" asChild className="ml-2">
                  <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <div className="flex justify-between text-gray-600">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
