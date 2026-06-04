import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetricBanner from "@/components/MetricBanner";
import CaseStudies from "@/components/CaseStudies";
import Authority from "@/components/Authority";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <MetricBanner />
      <CaseStudies />
      <Authority />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
