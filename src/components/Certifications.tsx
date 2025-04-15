
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Literacy Certificate",
      issuer: "DataCamp",
      date: "2024",
      link: "https://www.datacamp.com/certificate/data-literacy",
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "2023",
      link: "https://www.hackerrank.com/certificates/basic-sql",
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "2023",
      link: "https://www.hackerrank.com/certificates/intermediate-sql",
    },
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      date: "2023",
      link: "https://www.hackerrank.com/certificates/advanced-sql",
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco",
      date: "2023",
      link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/data-analytics.html",
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

        <div className="max-w-4xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-md border-none transition-colors hover:bg-gray-50">
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
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
