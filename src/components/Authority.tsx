import { motion } from "framer-motion";
import { Coffee, Users, Award, Check } from "lucide-react";

const bullets = [
  {
    icon: Coffee,
    title: "Founder of The Data Tea",
    desc: "An Arabic-speaking community demystifying BI and analytics for the next generation of data professionals.",
  },
  {
    icon: Users,
    title: "Freelancing Coach at DEPI",
    desc: "Mentoring 50+ professionals across SQL, Power BI, and modern analytics workflows.",
  },
  {
    icon: Award,
    title: "Top 200 Arabic-Speaking Influencer",
    desc: "Recognized for impact in data education across the MENA region.",
  },
];

const Authority = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Background
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              The Engineering Behind the Dashboards
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Bridging the gap between raw data chaos and strategic decision-making.
              Transitioning from Agricultural Sciences to Data Analytics Engineering
              required strict logical problem-solving — the exact framework I apply
              to business data.
            </p>

            <ul className="space-y-5">
              {bullets.map((b, i) => (
                <motion.li
                  key={b.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 p-5 bg-card border border-border rounded-xl"
                >
                  <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{b.title}</h3>
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
