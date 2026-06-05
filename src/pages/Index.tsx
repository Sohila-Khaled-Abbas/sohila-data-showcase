import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldAlert, Workflow, Sparkles, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    icon: ShieldAlert,
    title: "Mitigating Operational Risk & Fraud",
    description:
      "Detected a 5% shipping anomaly rate using Z-score and IQR statistical methods, visualized in real-time for immediate risk mitigation.",
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

const authorityPoints = [
  "Founder of The Data Tea — a community shaping the next generation of data practitioners.",
  "Freelancing Coach at DEPI — mentoring 50+ professionals in SQL and BI.",
  "Recognized in the Top 200 Arabic-Speaking Influencers for Data Education.",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Sohila Khaled Abbas — BI Developer & Data Analytics Engineer"
        description="I engineer automated ETL pipelines and interactive BI ecosystems that turn chaotic spreadsheets into executive clarity."
        path="/"
      />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left */}
              <motion.div
                className="lg:col-span-7 order-2 lg:order-1"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                  style={{
                    backgroundColor: "hsl(var(--taupe-50))",
                    color: "hsl(var(--charcoal-soft))",
                    border: "1px solid hsl(var(--border))",
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  BI Developer & Data Analytics Engineer
                </div>

                <h1 className="display-text text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
                  Stop losing revenue to <br className="hidden md:block" />
                  fragmented data.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                  I engineer automated ETL pipelines and interactive BI ecosystems that turn chaotic spreadsheets into executive clarity.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-6 rounded-lg"
                  >
                    <a href="/intake">
                      Book a Data Audit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="h-12 px-6 rounded-lg border-2 bg-transparent hover:bg-secondary text-foreground"
                    style={{ borderColor: "hsl(var(--taupe-300))" }}
                  >
                    <a href="#case-studies">View Case Studies</a>
                  </Button>
                </div>
              </motion.div>

              {/* Right */}
              <motion.div
                className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="relative w-full max-w-md">
                  <div
                    className="absolute -inset-3 rounded-3xl -z-10"
                    style={{ backgroundColor: "hsl(var(--taupe-100))" }}
                  />
                  <div className="photo-frame bg-card">
                    <img
                      src={portrait.url}
                      alt="Sohila Khaled Abbas, BI Developer and Data Analytics Engineer"
                      className="w-full h-auto object-cover"
                      width={1024}
                      height={1024}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* METRIC BANNER */}
        <section
          aria-label="Key results"
          className="border-y"
          style={{ backgroundColor: "hsl(var(--taupe-50))" }}
        >
          <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="text-center md:border-l first:border-l-0 md:px-6"
                  style={{ borderColor: "hsl(var(--border))" }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                    {m.value}
                  </div>
                  <div className="mt-2 text-sm md:text-base text-muted-foreground font-medium">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-12">
              <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Case Studies
              </div>
              <h2 className="display-text text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Business Transformations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="h-full bg-card border-border neon-glow-hover rounded-2xl">
                      <CardHeader>
                        <div
                          className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                          style={{ backgroundColor: "hsl(var(--taupe-100))" }}
                        >
                          <Icon className="h-5 w-5 text-foreground" />
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground leading-snug">
                          {c.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-5">
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {c.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {c.tags.map((t) => (
                            <Badge
                              key={t}
                              variant="secondary"
                              className="bg-secondary text-secondary-foreground hover:bg-secondary font-medium rounded-md px-2.5 py-0.5 text-xs"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AUTHORITY */}
        <section
          className="py-20 md:py-28 border-y"
          style={{ backgroundColor: "hsl(var(--taupe-50))" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Authority
                </div>
                <h2 className="display-text text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  The Engineering Behind the Dashboards
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="text-lg text-foreground/85 leading-relaxed mb-8">
                  Bridging the gap between raw data chaos and strategic decision-making. Transitioning from Agricultural Sciences to Data Analytics Engineering required strict logical problem-solving — the exact framework I apply to business data.
                </p>

                <ul className="space-y-4">
                  {authorityPoints.map((point) => (
                    <li key={point} className="flex gap-3 items-start">
                      <CheckCircle2
                        className="h-5 w-5 mt-0.5 shrink-0"
                        style={{ color: "hsl(var(--taupe-500))" }}
                      />
                      <span className="text-base text-foreground/90 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="display-text text-3xl md:text-5xl font-bold leading-[1.1] mb-5">
                Is your data an asset or an operational burden?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Let's find out where your revenue is leaking.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 rounded-lg text-base"
              >
                <a href="/intake">
                  Schedule a 15-Minute Data Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
