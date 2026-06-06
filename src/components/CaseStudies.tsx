import { motion } from "framer-motion";

const cases = [
  {
    title: "Recovering 12% Revenue Leaks in Retail",
    description:
      "Processed 472,000+ orders to uncover hidden losses. Architected a Star Schema data model that reduced report refresh time by 50%.",
    tags: ["Power BI", "DAX", "SQL"],
  },
  {
    title: "Mitigating Operational Risk & Fraud",
    description:
      "Detected a 5% shipping anomaly rate using Z-score and IQR statistical methods, visualized in real-time for immediate risk mitigation.",
    tags: ["Python", "PostgreSQL"],
  },
  {
    title: "Automating Reporting Pipelines",
    description:
      "Replaced days of manual Excel work by syncing disparate API data into a centralized PostgreSQL architecture, reducing overhead by 40%.",
    tags: ["ETL", "APIs", "Databricks"],
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Business Transformations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col bg-card border border-border rounded-2xl p-7 hover:border-secondary transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {c.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-foreground/80 border border-border"
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
