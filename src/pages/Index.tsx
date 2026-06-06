import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Community from "@/components/Community";
import Credibility from "@/components/Credibility";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Sohila Khaled Abbas — BI Developer & Data Analytics Portfolio"
        description="BI dashboards, data engineering projects, and analytics work by Sohila Khaled Abbas — SQL, Python, Power BI, and scalable data architectures."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Community />
        <Credibility />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
