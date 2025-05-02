
import React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Courses = () => {
  // Define course categories and their respective courses
  const coursesByCategory = {
    "Data Analysis & Visualization": [
      { title: "Data Analytics Essentials", provider: "Cisco" },
      { title: "Power BI Fundamentals", provider: "DataCamp" },
      { title: "Design in Power BI", provider: "DataCamp" },
      { title: "Time Intelligent Functions Using DAX in Power BI", provider: "Udemy" },
      { title: "Data Visualization in Python", provider: "DataCamp" }
    ],
    "SQL & Databases": [
      { title: "Transact SQL Queries", provider: "MaharaTech" },
      { title: "SQL Fundamentals", provider: "DataCamp" },
      { title: "SQL Server Fundamentals", provider: "DataCamp" },
      { title: "SQL for Business Analysts", provider: "DataCamp" },
      { title: "Associate Data Analyst in SQL", provider: "DataCamp" },
      { title: "Associate Data Engineer in SQL", provider: "DataCamp" }
    ],
    "Python & Programming": [
      { title: "Python Programming", provider: "DataCamp" },
      { title: "Python Programming Fundamentals", provider: "DataCamp" },
      { title: "Web Scraping in Python", provider: "DataCamp" },
      { title: "Data Manipulation in Python", provider: "DataCamp" },
      { title: "Python Data Fundamentals", provider: "DataCamp" },
      { title: "Time Series in Python", provider: "DataCamp" },
      { title: "Applied Statistics in Python", provider: "DataCamp" },
      { title: "Data Analyst in Python", provider: "DataCamp" },
      { title: "Associate Data Scientist in Python", provider: "DataCamp" }
    ],
    "Career & Data Foundations": [
      { title: "Data Literacy Foundations", provider: "Maven Analytics" },
      { title: "Data Literacy Professional", provider: "DataCamp" },
      { title: "Building Your Personal Brand", provider: "Maven Analytics" },
      { title: "Networking & Applying for Jobs", provider: "Maven Analytics" },
      { title: "Optimizing Your Resume", provider: "Maven Analytics" },
      { title: "Thinking Like an Analyst", provider: "Maven Analytics" },
      { title: "Acing the Analyst Interview", provider: "Maven Analytics" },
      { title: "Google Data Analytics Professional Certificate", provider: "Coursera" },
      { title: "Finding Your Path in Data", provider: "Maven Analytics" },
      { title: "Introduction to Data & Data Science", provider: "IBM" },
      { title: "Understanding Data Visualization", provider: "DataCamp" },
      { title: "Understanding Cloud Computing", provider: "DataCamp" }
    ]
  };

  // Function to get the appropriate icon for each category
  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case 'Data Analysis & Visualization':
        return '📊';
      case 'SQL & Databases':
        return '💻';
      case 'Python & Programming':
        return '🐍';
      case 'Career & Data Foundations':
        return '🌐';
      default:
        return '📚';
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
      <Header />
      <section className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Courses & Learning Journey</h1>
        
        <p className="text-lg mb-10 max-w-3xl">
          These are the courses and certifications I've completed across data analytics, dashboarding, programming, and career development. You can view my certificate folder at the bottom of this page.
        </p>

        {/* Courses By Category */}
        <div className="space-y-12">
          {Object.entries(coursesByCategory).map(([category, courses]) => (
            <div key={category} className="mb-8">
              <h2 className="flex items-center gap-3 text-2xl font-semibold mb-6">
                <span>{getCategoryIcon(category)}</span>
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <Card key={index} className="bg-surface dark:bg-[#1A1A1A] border border-secondary/30 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="text-base font-semibold text-primary dark:text-primary-dark">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{course.provider}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <div className="flex justify-center mt-16">
          <a 
            href="https://drive.google.com/drive/folders/19SefDOOSqbmVOyTOyOD-qFWSH7JULXRU" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-primary dark:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-colors"
          >
            View All Certificates on Google Drive
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
