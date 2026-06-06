import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
            Is your data an asset or an operational burden?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's find out where your revenue is leaking.
          </p>
          <Button
            size="lg"
            className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold px-8 shadow-sm"
            asChild
          >
            <a href="/intake">
              Schedule a 15-Minute Data Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
