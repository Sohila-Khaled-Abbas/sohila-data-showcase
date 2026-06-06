import { motion } from "framer-motion";

const metrics = [
  { value: "40%", label: "Manual Overhead Reduced" },
  { value: "12%", label: "Revenue Leaks Identified" },
  { value: "50+", label: "Professionals Mentored" },
];

const Stats = () => {
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-6 py-6 sm:py-2 text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-foreground font-mono tracking-tight">
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
  );
};

export default Stats;
