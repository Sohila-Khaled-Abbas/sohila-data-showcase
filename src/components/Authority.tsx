import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Founder of The Data Tea — building an Arabic-first data education community.",
  "Freelancing Coach at DEPI, mentoring 50+ professionals across SQL and BI tracks.",
  "Recognized in the Top 200 Arabic-Speaking Influencers for Data Education.",
];

const Authority = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card border-y border-border">
      <div className="container mx-auto px-4 grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="md:col-span-5">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Authority & Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
            The Engineering Behind the Dashboards
          </h2>
        </div>

        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Bridging the gap between raw data chaos and strategic decision-making.
            Transitioning from Agricultural Sciences to Data Analytics Engineering
            required strict logical problem-solving — the exact framework I apply
            to business data.
          </motion.p>

          <ul className="space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-secondary/30 border border-secondary flex items-center justify-center">
                  <Check className="w-3 h-3 text-foreground" strokeWidth={3} />
                </span>
                <span className="text-foreground/90 leading-relaxed">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Authority;
