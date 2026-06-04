import { motion } from "framer-motion";
import { CalendarCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-foreground to-foreground/95 dark:from-card dark:to-secondary/40 p-10 md:p-16 text-center"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-background dark:text-foreground leading-tight mb-5">
              Is your data an asset or an operational burden?
            </h2>
            <p className="text-lg md:text-xl text-background/70 dark:text-muted-foreground mb-10">
              Let's find out where your revenue is leaking.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-base shadow-xl shadow-primary/30"
              asChild
            >
              <a href="/intake">
                <CalendarCheck2 className="mr-2 h-5 w-5" />
                Schedule a 15-Minute Data Audit
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
