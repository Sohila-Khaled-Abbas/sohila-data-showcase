
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <p className="text-lg text-muted-foreground mb-8 print:hidden">
            I'm a results-driven Data Analyst with a passion for automating workflows, 
            building interactive dashboards, and sharing insights with a community of 
            20,000+ professionals. Below is my full résumé, which you can explore online, 
            download as a PDF, or print directly.
          </p>

          {/* Controls */}
          <div className="flex justify-center flex-wrap gap-4 mb-8 print:hidden">
            <Button asChild>
              <a 
                href="https://drive.google.com/file/d/1if0J_RnboOnE2s9ZKIKUD3DbKVad9lrs/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                View PDF
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a 
                href="/Sohila_Khaled_Abbas_Resume.pdf" 
                download
                className="inline-flex items-center"
              >
                Download
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline"
              onClick={handlePrint}
              className="inline-flex items-center"
            >
              Print
              <Printer className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Resume Content */}
          <div className="bg-white dark:bg-background-dark shadow-md rounded-lg p-6 md:p-10 print:shadow-none print:p-0">
            {/* Header/Contact Info */}
            <div className="mb-6 print:mb-4">
              <h1 className="text-3xl font-bold text-center mb-2 gradient-text">SOHILA KHALED ABBAS</h1>
              <div className="text-center text-muted-foreground">
                <p>Damietta, Egypt (Open to Remote & Hybrid Roles) | (+2) 01114919021 | sohilakhaled811@gmail.com</p>
                <p className="mt-1">
                  <a href="https://linkedin.com/in/sohilakabbas" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/sohilakabbas</a> | 
                  <a href="https://github.com/Sohila-Khaled-Abbas" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">github.com/Sohila-Khaled-Abbas</a> | 
                  <a href="/#projects" className="text-primary hover:underline ml-2">Portfolio</a>
                </p>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6 print:mb-4">
              <h2 className="text-xl font-semibold border-b border-muted pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
              <p>
                Results-driven Data Analyst with expertise in transforming raw data into actionable business insights through interactive dashboards and automated reporting. 
                Proficient in SQL, Python, Power BI, and Excel with demonstrated success in reducing reporting time by 40% and improving data accuracy by 25%. 
                Recognized among Egypt's Top 5 Data Science Creators with 20K+ followers. Seeking an entry-level Data Analyst or Business Intelligence Analyst role.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-6 print:mb-4">
              <h2 className="text-xl font-semibold border-b border-muted pb-1 mb-3">SKILLS</h2>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <p><span className="font-semibold">Technical:</span> SQL, Python, R, Power BI, Tableau, Excel (Pivot Tables, Macros), ETL, Data Modeling, DAX</p>
                </div>
                <div>
                  <p><span className="font-semibold">Analysis:</span> Dashboard Design, KPI Tracking, A/B Testing, Statistical Analysis, Data Cleaning, EDA</p>
                </div>
                <div>
                  <p><span className="font-semibold">Libraries:</span> Pandas, NumPy, Matplotlib, Seaborn, BeautifulSoup, Selenium, SciPy, StatsModels</p>
                </div>
                <div>
                  <p><span className="font-semibold">Soft Skills:</span> Data Storytelling, Communication, Analytical Thinking, Problem-solving</p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-6 print:mb-4">
              <h2 className="text-xl font-semibold border-b border-muted pb-1 mb-3">WORK EXPERIENCE</h2>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="font-semibold text-lg">Freelance Data Analyst</h3>
                  <span className="text-muted-foreground">December 2024 - Present</span>
                </div>
                <ul className="list-disc pl-5">
                  <li>Designed and deployed 10+ interactive Power BI dashboards, increasing reporting efficiency by 30%</li>
                  <li>Automated reporting workflows using Python scripts, reducing task completion time by 40%</li>
                  <li>Developed SQL queries to extract and transform data, improving retrieval speed by 25%</li>
                  <li>Created Excel reporting templates with pivot tables and macros, saving clients 6+ hours weekly</li>
                  <li>Implemented custom DAX measures to enhance analytical capabilities and provide deeper insights</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-6 print:mb-4">
              <h2 className="text-xl font-semibold border-b border-muted pb-1 mb-3">PROJECTS</h2>
              
              {/* Project 1 */}
              <div className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 className="font-semibold">SMART Supply Chain Insights Dashboard</h3>
                  <span className="text-muted-foreground">May 2025</span>
                </div>
                <p className="text-sm text-primary italic mb-1">Tools: Power BI, Python, Excel, DAX</p>
                <ul className="list-disc pl-5">
                  <li>Developed a comprehensive dashboard to monitor logistics efficiency and supplier reliability KPIs</li>
                  <li>Integrated Python and Excel for data preprocessing across multiple supply chain sources</li>
                  <li>Visualized insights using Power BI with DAX-driven metrics for optimization opportunities</li>
                </ul>
              </div>
              
              {/* Project 2 */}
              <div className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 className="font-semibold">Marketing Data A/B Testing Project</h3>
                  <span className="text-muted-foreground">May 2025</span>
                </div>
                <p className="text-sm text-primary italic mb-1">Tools: Python (Pandas, SciPy), SQL, Excel</p>
                <ul className="list-disc pl-5">
                  <li>Conducted A/B testing analysis using statistical methods to validate marketing campaign effectiveness</li>
                  <li>Applied chi-square testing to confirm statistical significance, providing actionable insights</li>
                </ul>
              </div>
              
              {/* Project 3 */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 className="font-semibold">Wuzzuf Job Market Analysis Dashboard</h3>
                  <span className="text-muted-foreground">March 2025</span>
                </div>
                <p className="text-sm text-primary italic mb-1">Tools: Power BI, Python (BeautifulSoup, Selenium)</p>
                <ul className="list-disc pl-5">
                  <li>Scraped and analyzed 200+ job postings, extracting patterns in role requirements</li>
                  <li>Developed an interactive dashboard used by 200+ users to explore job market trends</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-6 print:mb-4">
              <h2 className="text-xl font-semibold border-b border-muted pb-1 mb-3">EDUCATION</h2>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 className="font-semibold">Damietta University</h3>
                  <span className="text-muted-foreground">October 2020 - July 2024</span>
                </div>
                <p>Bachelor of Science in Agricultural Sciences</p>
                <p className="text-muted-foreground">Relevant Coursework: Statistics and Probability, Research Methodology, Economics</p>
              </div>
            </div>

            {/* Certifications & Recognition */}
            <div>
              <h2 className="text-xl font-semibold border-b border-muted pb-1 mb-3">CERTIFICATIONS & RECOGNITION</h2>
              <ul className="list-disc pl-5">
                <li>SQL Certifications (Basic, Intermediate, Advanced) — HackerRank</li>
                <li>Data Analytics Essentials — Cisco</li>
                <li>Data Literacy Certificate — DataCamp</li>
                <li>Associate Data Scientist in Python - Career Track</li>
                <li>Top 5 Data Science Creator – Egypt | Favikon (April 2025)</li>
                <li>Built a community of 20K+ data professionals</li>
                <li>Demonstrated thought leadership in data visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
      
      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          body {
            font-size: 11pt;
            color: black;
            background-color: white;
          }
          
          h1 {
            font-size: 18pt !important;
          }
          
          h2 {
            font-size: 14pt !important;
          }
          
          a {
            text-decoration: none;
            color: #000;
          }
          
          @page {
            margin: 1.5cm;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
