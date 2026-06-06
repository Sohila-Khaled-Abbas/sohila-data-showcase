import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, ShieldAlert, Workflow, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const metrics = [
  { value: "40%", label: "Manual Overhead Reduced" },
  { value: "12%", label: "Revenue Leaks Identified" },
  { value: "50+", label: "Professionals Mentored" },
];

const caseStudies = [
  {
    icon: TrendingDown,
    title: "Recovering 12% Revenue Leaks in Retail",
    description:
      "Processed 472,000+ orders to uncover hidden losses. Architected a Star Schema data model that reduced report refresh time by 50%.",
    tags: ["Power BI", "DAX", "SQL"],
  },
  {
    icon: ShieldAlert,
    title: "Mitigating Operational Risk & Fraud",
    description:
      "Detected a 5% shipping anomaly rate using custom ML models in Workbench and statistical methods (Z-score / IQR), visualized for immediate risk mitigation.",
    tags: ["Python", "PostgreSQL"],
  },
  {
    icon: Workflow,
    title: "Automating Reporting Pipelines",
    description:
      "Replaced days of manual Excel work by syncing disparate API data into a centralized PostgreSQL architecture, reducing overhead by 40%.",
    tags: ["ETL", "APIs", "Databricks"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Sohila Khaled Abbas — Data & Analytics Engineer"
        description="Data & Analytics Engineer building automated ETL pipelines and interactive BI ecosystems that turn fragmented data into executive clarity."
        path="/"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="outline" className="mb-6 border-secondary text-muted-foreground font-mono text-xs">
                  Data & Analytics Engineering
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                  Stop losing revenue to fragmented data.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  I am a Data &amp; Analytics Engineer building automated ETL pipelines and interactive BI
                  ecosystems that turn chaotic spreadsheets into executive clarity.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild className="font-semibold">
                    <a href="/intake">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Data Audit
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-secondary text-foreground hover:bg-muted">
                    <a href="/#projects">
                      View All Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="absolute -inset-4 bg-muted rounded-2xl -z-10" />
                <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <img
                    src="/images/sohila-hero.png"
                    alt="Sohila Khaled Abbas — Data & Analytics Engineer"
                    className="w-full h-full object-cover"
                    width={640}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metric Banner */}
        <section className="bg-muted/60 border-b border-border">
          <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  className="text-center sm:text-left sm:border-l sm:first:border-l-0 sm:border-border sm:pl-8 sm:first:pl-0"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-4xl md:text-5xl font-extrabold text-foreground font-mono tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section id="case-studies" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Featured Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Business Transformations
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((cs, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-foreground/30 transition-colors duration-300 bg-card">
                    <CardContent className="p-7 flex flex-col h-full">
                      <cs.icon className="h-6 w-6 text-foreground mb-5" />
                      <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                        {cs.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {cs.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {cs.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2 py-1 rounded bg-muted text-foreground/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Authority */}
        <section className="py-24 bg-muted/60 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
                The Engineering Edge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Bridging the gap between raw data chaos and strategic decision-making. Transitioning
                from Agricultural Sciences to Data Analytics Engineering required strict logical
                problem-solving — the exact framework I apply to corporate business data.
              </p>
              <Button variant="outline" asChild className="border-secondary text-foreground hover:bg-background">
                <a href="/#about">
                  Read My Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-28">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.h2
              className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Is your data an asset or an operational burden?
            </motion.h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's find out where your revenue is leaking.
            </p>
            <Button size="lg" asChild className="font-semibold h-12 px-8 text-base">
              <a href="/intake">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a 15-Minute Data Audit
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
