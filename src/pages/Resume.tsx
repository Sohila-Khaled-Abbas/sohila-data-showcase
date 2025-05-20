
import React from "react";
import { FileText, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          <span className="font-logo gradient-text">Professional Resume</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
          I approach data analysis through structured, insight-driven workflows that blend storytelling and visualization. Here's my full professional resume — you can browse it online, download a PDF, or print it.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <a 
              href="https://drive.google.com/file/d/1if0J_RnboOnE2s9ZKIKUD3DbKVad9lrs/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <FileText className="mr-2 h-4 w-4" /> View as PDF
            </a>
          </Button>
          <Button 
            variant="secondary" 
            className="bg-secondary text-black hover:bg-secondary/80"
          >
            <a 
              href="https://drive.google.com/uc?export=download&id=1if0J_RnboOnE2s9ZKIKUD3DbKVad9lrs" 
              download="Sohila_Khaled_Abbas_Resume.pdf"
              className="inline-flex items-center"
            >
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </a>
          </Button>
          <Button 
            onClick={handlePrint}
            className="bg-accent text-black hover:bg-accent/80"
          >
            <Printer className="mr-2 h-4 w-4" /> Print Resume
          </Button>
        </div>

        {/* Harvard-style Resume Content */}
        <div className="resume-container bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-4xl mx-auto print:shadow-none print:p-0 print:max-w-none">
          <div className="header text-center mb-8">
            <h1 className="text-3xl font-bold">SOHILA KHALED ABBAS</h1>
            <p className="mt-2">Data Analyst</p>
            <div className="contact-info flex flex-wrap justify-center gap-x-4 mt-3 text-sm">
              <span>Egypt, Cairo</span>
              <span>+201010295401</span>
              <span><a href="mailto:sohila.khaled.abbas@gmail.com" className="underline">sohila.khaled.abbas@gmail.com</a></span>
              <span><a href="https://github.com/Sohila-Khaled-Abbas" className="underline" target="_blank" rel="noopener noreferrer">github.com/Sohila-Khaled-Abbas</a></span>
              <span><a href="https://www.linkedin.com/in/sohila-khaled-abbas/" className="underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/sohila-khaled-abbas</a></span>
            </div>
          </div>

          <div className="section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">EDUCATION</h2>
            
            <div className="entry mb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                <span className="font-semibold">Alexandria University</span>
                <span className="text-right">September 2015 - July 2019</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="italic">Bachelor's degree, Industrial and Management Engineering</span>
                <span className="text-right">GPA: 3.73/4.0</span>
              </div>
            </div>
          </div>

          <div className="section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">WORK EXPERIENCE</h2>
            
            <div className="entry mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                <span className="font-semibold">Data Analyst</span>
                <span className="text-right">March 2022 - Present</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <span className="italic">Egyptian Gaming</span>
                <span className="text-right">Cairo, Egypt</span>
              </div>
              <ul className="list-disc ml-5 space-y-1">
                <li>Conducted comprehensive analysis of 150K+ player data points, identifying key trends in gaming behavior.</li>
                <li>Developed real-time dashboards in Power BI that enabled tracking of player retention, improving engagement metrics by 23%.</li>
                <li>Automated data extraction and processing workflows using Python, reducing weekly reporting time by 70%.</li>
                <li>Established robust data quality protocols that decreased data errors by 35%, improving decision accuracy.</li>
              </ul>
            </div>
            
            <div className="entry mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                <span className="font-semibold">Business Intelligence Analyst</span>
                <span className="text-right">January 2020 - February 2022</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <span className="italic">Tech Solutions Inc.</span>
                <span className="text-right">Cairo, Egypt</span>
              </div>
              <ul className="list-disc ml-5 space-y-1">
                <li>Designed and implemented ETL processes that consolidated data from 6 disparate sources into a centralized data warehouse.</li>
                <li>Created advanced SQL queries and stored procedures that optimized reporting performance by 45%.</li>
                <li>Collaborated with cross-functional teams to translate business requirements into analytical solutions.</li>
                <li>Delivered monthly executive presentations highlighting KPIs and actionable insights for business growth.</li>
              </ul>
            </div>

            <div className="entry mb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                <span className="font-semibold">Data Analysis Intern</span>
                <span className="text-right">May 2019 - December 2019</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <span className="italic">Alexandria Data Services</span>
                <span className="text-right">Alexandria, Egypt</span>
              </div>
              <ul className="list-disc ml-5 space-y-1">
                <li>Assisted in data collection and preprocessing for market research projects.</li>
                <li>Created visualizations and reports using Excel and Tableau for client presentations.</li>
                <li>Conducted statistical analysis to identify market trends and consumer preferences.</li>
              </ul>
            </div>
          </div>

          <div className="section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">SKILLS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div>
                <h3 className="font-semibold">Data Analysis</h3>
                <p>Statistical Analysis, Data Mining, Predictive Modeling, A/B Testing</p>
              </div>
              <div>
                <h3 className="font-semibold">Programming</h3>
                <p>Python, SQL, R, DAX</p>
              </div>
              <div>
                <h3 className="font-semibold">Visualization & BI</h3>
                <p>Power BI, Tableau, Excel, Google Data Studio</p>
              </div>
              <div>
                <h3 className="font-semibold">Data Management</h3>
                <p>ETL, Data Modeling, Data Quality, Database Management</p>
              </div>
              <div>
                <h3 className="font-semibold">Tools</h3>
                <p>MySQL, PostgreSQL, Google Analytics, SPSS</p>
              </div>
              <div>
                <h3 className="font-semibold">Soft Skills</h3>
                <p>Communication, Problem-solving, Project Management, Teamwork</p>
              </div>
            </div>
          </div>

          <div className="section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">CERTIFICATIONS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="entry">
                <p className="font-semibold">Google Data Analytics Professional Certificate</p>
                <p className="italic">Google - 2021</p>
              </div>
              <div className="entry">
                <p className="font-semibold">Microsoft Power BI Data Analyst</p>
                <p className="italic">Microsoft - 2022</p>
              </div>
              <div className="entry">
                <p className="font-semibold">Python for Data Science</p>
                <p className="italic">DataCamp - 2020</p>
              </div>
              <div className="entry">
                <p className="font-semibold">SQL for Data Analysis</p>
                <p className="italic">Udacity - 2020</p>
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">PROJECTS</h2>
            
            <div className="entry mb-3">
              <p className="font-semibold">SMART Supply Chain Insights Dashboard</p>
              <p className="italic mb-1">Python, Excel, Power BI</p>
              <p>Developed a comprehensive dashboard to monitor logistics efficiency, supplier reliability, and fulfillment KPIs. Integrated Python and Excel for data preprocessing, and visualized insights using Power BI with DAX-driven metrics.</p>
            </div>
            
            <div className="entry mb-3">
              <p className="font-semibold">A/B Testing for Marketing Conversion</p>
              <p className="italic mb-1">Python, Excel</p>
              <p>Conducted A/B testing on marketing campaigns to optimize conversion rates, resulting in a 27% increase in click-through rates and 15% improvement in overall conversion.</p>
            </div>
            
            <div className="entry">
              <p className="font-semibold">Customer Segmentation Analysis</p>
              <p className="italic mb-1">Python, R, Tableau</p>
              <p>Applied clustering algorithms to segment 50,000+ customers based on purchasing behavior, demographics, and engagement metrics, enabling personalized marketing strategies.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print styles - only visible when printing */}
      <style jsx global>{`
        @media print {
          header, .flex, footer, button, .container > h1, .container > p {
            display: none !important;
          }
          
          .resume-container {
            margin: 0;
            padding: 0;
            box-shadow: none;
            max-width: 100% !important;
          }
          
          body, html {
            background: white;
            font-size: 12pt;
          }
          
          a {
            text-decoration: none;
            color: black;
          }
          
          .container {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }
          
          .py-24 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Resume;
