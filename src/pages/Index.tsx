import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Database, ShieldCheck, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Community from "@/components/Community";
import Credibility from "@/components/Credibility";
import Certifications from "@/components/Certifications";
import portrait from "@/assets/sohila-portrait.png.asset.json";

const metrics = [
  { value: "40%", label: "Manual Overhead Reduced" },
  { value: "12%", label: "Revenue Leaks Identified" },
  { value: "50+", label: "Professionals Mentored" },
];

const caseStudies = [
  {
    icon: BarChart3,
    title: "Recovering 12% Revenue Leaks in Retail",
    description:
      "Processed 472,000+ orders to uncover hidden losses. Architected a Star Schema data model that reduced report refresh time by 50%.",
    tags: ["Power BI", "DAX", "SQL"],
  },
  {
    icon: ShieldCheck,
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
        title="Sohila Khaled Abbas — Data & Analytics Engineer for B2B Teams"
        description="Automated ETL pipelines and interactive BI ecosystems that turn chaotic spreadsheets into executive clarity. Case studies, dashboards, and data engineering work."
        path="/"
      />
      <Header />

      <main>
        {/* HERO */}
        <section id="hero" className="pt-32 pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground border border-border mb-6">
                  Data &amp; Analytics Engineering
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6">
                  Stop losing revenue to <span className="text-foreground/90">fragmented data.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  I am a Data &amp; Analytics Engineer building automated ETL pipelines and interactive BI ecosystems that turn chaotic spreadsheets into executive clarity.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="btn-cta font-semibold">
                    <Link to="/intake">
                      Book a Data Audit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary"
                  >
                    <a href="#projects">View All Projects</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="flex justify-center md:justify-end"
              >
                <div className="relative">
                  <div className="absolute -inset-3 bg-secondary rounded-2xl" aria-hidden="true" />
                  <img
                    src={portrait.url}
                    alt="Sohila Khaled Abbas — Data and Analytics Engineer"
                    width={480}
                    height={480}
                    className="relative w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-2xl border border-border shadow-sm"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* METRIC BANNER */}
        <section className="border-y border-border bg-secondary/40">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED CASE STUDIES */}
        <section id="case-studies" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Featured Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Business Transformations
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {caseStudies.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border border-border bg-card hover:shadow-md transition-shadow rounded-xl">
                    <CardContent className="p-7 flex flex-col h-full">
                      <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-5">
                        <c.icon className="h-5 w-5 text-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                        {c.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-foreground border border-border"
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

        {/* AUTHORITY */}
        <section className="py-20 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Database className="h-8 w-8 text-foreground mx-auto mb-5" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                The Engineering Edge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Bridging the gap between raw data chaos and strategic decision-making. Transitioning from Agricultural Sciences to Data Analytics Engineering required strict logical problem-solving — the exact framework I apply to corporate business data.
              </p>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-background">
                <a href="#about">Read My Story</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Existing in-page sections preserved for navigation */}
        <About />
        <Skills />
        <Projects />
        <Community />
        <Credibility />
        <Certifications />

        {/* BOTTOM CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center border border-border rounded-2xl p-10 md:p-14 bg-secondary/40">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Is your data an asset or an operational burden?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's find out where your revenue is leaking.
              </p>
              <Button asChild size="lg" className="btn-cta font-semibold">
                <Link to="/intake">
                  Schedule a 15-Minute Data Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
