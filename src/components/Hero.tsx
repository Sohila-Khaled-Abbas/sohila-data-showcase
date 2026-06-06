import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/sohila-portrait.png.asset.json";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground border border-border px-3 py-1 rounded-full mb-6 bg-card"
          >
            BI Developer · Data Analytics Engineering
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-foreground mb-6"
          >
            Stop losing revenue to fragmented data.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            I engineer automated ETL pipelines and interactive BI ecosystems
            that turn chaotic spreadsheets into executive clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold shadow-sm"
              asChild
            >
              <a href="/intake">
                Book a Data Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary/70 text-foreground hover:bg-secondary/10 bg-transparent"
              asChild
            >
              <a href="#case-studies">View Case Studies</a>
            </Button>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-secondary/30 rounded-2xl blur-2xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[0_30px_80px_-30px_hsl(220_10%_15%/0.25)] bg-card">
              <img
                src={portrait.url}
                alt="Sohila Khaled Abbas — BI Developer and Data Analytics Engineer"
                width={520}
                height={520}
                fetchPriority="high"
                decoding="async"
                className="block w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
