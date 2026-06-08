import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Clock, Star, Quote, Linkedin, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const metrics = [
  { icon: TrendingUp, value: "200+", label: "Dashboard Users", desc: "Explored Wuzzuf Job Market Dashboard to identify hiring trends" },
  { icon: Clock, value: "40%", label: "Time Reduction", desc: "In reporting time through Python automation" },
  { icon: Star, value: "25%", label: "Speed Improvement", desc: "In SQL data retrieval performance" },
];

const testimonials = [
  { quote: "Sohila doesn't just build dashboards — she builds clarity.", author: "Freelance Client", role: "Operations Manager" },
  { quote: "She mixes technical expertise with storytelling. That's rare.", author: "Peer Data Analyst", role: "Senior BI Developer" },
];

const Credibility = () => {
  return (
    <section id="credibility" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Trusted by the Data Community</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">Measurable impact, community leadership, and proven results</p>

        {/* Prominent badges — LinkedIn + Favikon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <motion.div
            className="bg-card border border-border rounded-2xl p-8 neon-glow text-center flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Linkedin className="h-7 w-7 text-foreground" />
            </div>
            <p className="text-5xl md:text-6xl font-extrabold text-foreground font-mono tracking-tight">60K+</p>
            <p className="text-base font-semibold text-foreground mt-2">LinkedIn Followers</p>
            <p className="text-sm text-muted-foreground mt-1 max-w-xs">
              Engaging with dashboards, career tips, and Python use cases
            </p>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-2xl p-8 neon-glow text-center flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Trophy className="h-7 w-7 text-foreground" />
            </div>
            <Badge className="bg-primary text-primary-foreground mb-3 text-sm px-3 py-1">Favikon 2026</Badge>
            <p className="text-4xl md:text-5xl font-extrabold text-foreground font-mono tracking-tight">Top 2</p>
            <p className="text-base font-semibold text-foreground mt-2">Data Science Creator</p>
            <p className="text-sm text-muted-foreground mt-1 max-w-xs">
              Egypt — recognized for leading a 60K+ community focused on Power BI and analytics
            </p>
          </motion.div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-5 text-center neon-glow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <m.icon className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground font-mono">{m.value}</p>
              <p className="text-sm font-medium text-foreground mb-1">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-6 neon-glow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Quote className="h-5 w-5 text-primary mb-3" />
              <blockquote className="text-foreground italic mb-3">"{t.quote}"</blockquote>
              <div className="text-sm">
                <p className="font-medium text-foreground">{t.author}</p>
                <p className="text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badges */}
        <div className="text-center mt-10">
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge variant="outline" className="px-3 py-1 font-mono text-xs">6+ Hours Weekly Saved</Badge>
            <Badge variant="outline" className="px-3 py-1 font-mono text-xs">40% Faster Reporting</Badge>
            <Badge variant="outline" className="px-3 py-1 font-mono text-xs">60K+ Community</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
