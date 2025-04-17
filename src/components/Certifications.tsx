
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Literacy Certificate",
      issuer: "DataCamp",
      date: "2024",
      link: "https://www.datacamp.com/skill-verification/DL0036111502330",
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "2023",
      link: "https://www.hackerrank.com/certificates/156c52c3c5eb",
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "2023",
      link: "https://www.hackerrank.com/certificates/69fcd8d44d04",
    },
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      date: "2023",
      link: "https://www.hackerrank.com/certificates/b39216ae474c",
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco",
      date: "2023",
      link: "https://www.credly.com/badges/42868f31-690d-423e-b812-c7c92024a5b5/public_url",
    },
    {
      title: "Introduction to Python",
      issuer: "DataCamp",
      date: "2022",
      link: "#",
    },
    {
      title: "Dashboard Design",
      issuer: "Power BI Academy",
      date: "2022",
      link: "#",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-logo">
          <span className="gradient-text">
            Certifications
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-sm border-secondary/20 transition-colors hover:bg-background/80 bg-background">
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <CardTitle className="text-lg text-primary">{cert.title}</CardTitle>
                </div>
                <Button variant="ghost" size="sm" asChild className="ml-2 text-primary hover:text-accent">
                  <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <div className="flex justify-between text-foreground/80">
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
