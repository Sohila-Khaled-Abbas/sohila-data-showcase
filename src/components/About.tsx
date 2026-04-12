import { motion } from "framer-motion";
import { ChartBar, Code, Award, Users } from "lucide-react";

const highlights = [
  { icon: ChartBar, text: "Created 10+ real-world dashboards for hiring, HR, sales, and social media" },
  { icon: Code, text: "Automated 5+ reporting tasks, cutting weekly manual work by 40%" },
  { icon: Award, text: "Recognized as Top 2 Data Science Creator in Egypt (Favikon)" },
  { icon: Users, text: "25,000+ followers reached via original dashboard insights" },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground leading-relaxed mb-6 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          I'm a self-taught data analyst who turns messy spreadsheets and complex datasets
          into dashboards people actually use. I focus on making reporting smoother, automating
          the boring stuff, and helping teams see what matters.
        </motion.p>

        <motion.blockquote
          className="border-l-4 border-primary pl-4 italic text-foreground/80 my-8 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          "Dashboards aren't just visuals — they're decisions waiting to happen."
        </motion.blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 neon-glow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <h.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-foreground text-sm">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
