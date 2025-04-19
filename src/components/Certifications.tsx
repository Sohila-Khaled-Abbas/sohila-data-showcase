
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Literacy Certificate",
      issuer: "DataCamp",
      link: "https://www.datacamp.com/skill-verification/DL0036111502330",
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/156c52c3c5eb",
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/69fcd8d44d04",
    },
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/b39216ae474c",
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco",
      link: "https://www.credly.com/badges/42868f31-690d-423e-b812-c7c92024a5b5/public_url",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-muted dark:bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-logo">
          <span className="gradient-text">
            Certifications
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-sm border-secondary/20 dark:border-secondary/40 transition-colors hover:bg-background/80 dark:hover:bg-[#1F1F1F]/80 bg-background dark:bg-[#1F1F1F]">
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <div>
                  <CardTitle className="text-lg text-primary dark:text-white">{cert.title}</CardTitle>
                  <p className="text-foreground/80 dark:text-white/70 text-sm">{cert.issuer}</p>
                </div>
                <Button variant="ghost" size="sm" asChild className="ml-2 text-primary dark:text-white hover:text-accent dark:hover:text-accent-dark">
                  <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center">
                    View Certificate
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
