import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/sohila-hero-new.png.asset.json";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="absolute top-32 -left-24 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-[32rem] h-[32rem] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="md:col-span-7 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Freelance BI Developer · Data Analytics Engineer
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-foreground">Stop losing revenue to </span>
              <span className="gradient-text">fragmented data.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I engineer automated ETL pipelines and interactive BI ecosystems
              that turn chaotic spreadsheets into executive clarity.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 h-12 px-6"
                asChild
              >
                <a href="/intake">
                  <CalendarCheck2 className="mr-2 h-5 w-5" />
                  Book a Data Audit
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 border-border hover:bg-muted text-foreground"
                asChild
              >
                <a href="#case-studies">
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="md:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl" />
              <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-3xl overflow-hidden border border-border bg-card shadow-2xl">
                <img
                  src={heroPhoto.url}
                  alt="Sohila Khaled Abbas — BI Developer & Data Analytics Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg hidden md:block">
                <div className="text-xs text-muted-foreground font-mono">Available for</div>
                <div className="text-sm font-semibold text-foreground">Q3 · Q4 Engagements</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
