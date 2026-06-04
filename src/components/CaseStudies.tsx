import { motion } from "framer-motion";
import { ArrowUpRight, LineChart, ShieldAlert, Workflow } from "lucide-react";

const cases = [
  {
    icon: LineChart,
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

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Case Studies
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Business Transformations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Measurable outcomes from real engagements — not screenshots of toy datasets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col p-7 bg-card border border-border rounded-2xl neon-glow-hover hover:border-primary/40"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <c.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-foreground leading-snug mb-3">
                {c.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {c.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
