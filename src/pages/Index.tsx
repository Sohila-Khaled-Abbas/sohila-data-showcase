import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Authority from "@/components/Authority";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Sohila Khaled Abbas — BI Developer & Data Analytics Portfolio"
        description="BI dashboards, automated ETL pipelines, and analytics work by Sohila Khaled Abbas — turning fragmented data into executive clarity."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <CaseStudies />
        <Authority />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
