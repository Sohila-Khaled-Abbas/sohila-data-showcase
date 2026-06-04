import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, GraduationCap } from "lucide-react";

const metrics = [
  { icon: TrendingDown, value: "40%", label: "Manual Overhead Reduced" },
  { icon: AlertTriangle, value: "12%", label: "Revenue Leaks Identified" },
  { icon: GraduationCap, value: "50+", label: "Professionals Mentored" },
];

const MetricBanner = () => {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4 px-4 py-4 md:py-0 justify-center md:justify-start"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <m.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                  {m.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {m.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricBanner;
