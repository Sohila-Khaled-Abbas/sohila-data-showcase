
import React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Courses = () => {
  const courseCategories = [
    {
      title: "Data Analysis & BI",
      icon: "📊",
      courses: [
        "Data Analytics Essentials – Cisco",
        "Power BI Fundamentals – DataCamp",
        "Design in Power BI – DataCamp",
        "Time Intelligent Functions Using DAX in Power BI – Udemy",
        "Storytelling with Data – FreeCodeCamp",
        "Data Visualization in Python – DataCamp",
      ],
    },
    {
      title: "SQL & Databases",
      icon: "💻",
      courses: [
        "SQL (Basic, Intermediate, Advanced) – HackerRank",
        "Transact SQL Queries – MaharaTech",
        "SQL Fundamentals – DataCamp",
        "SQL Server Fundamentals – DataCamp",
        "SQL for Business Analysts – DataCamp",
        "Associate Data Analyst in SQL – DataCamp",
        "Associate Data Engineer in SQL – DataCamp",
      ],
    },
    {
      title: "Python & Programming",
      icon: "🐍",
      courses: [
        "Python Programming – DataCamp",
        "Python Programming Fundamentals – DataCamp",
        "Web Scraping in Python – DataCamp",
        "Data Manipulation in Python – DataCamp",
        "Python Data Fundamentals – DataCamp",
        "Time Series in Python – DataCamp",
        "Applied Statistics in Python – DataCamp",
        "Data Analyst in Python – DataCamp",
        "Associate Data Scientist in Python – DataCamp",
      ],
    },
    {
      title: "Data Literacy & Career",
      icon: "🌐",
      courses: [
        "Data Literacy Foundations – Maven Analytics",
        "Data Literacy Professional – DataCamp",
        "Building Your Personal Brand – Maven Analytics",
        "Networking & Applying for Jobs – Maven Analytics",
        "Optimizing Your Resume – Maven Analytics",
        "Thinking Like an Analyst – Maven Analytics",
        "Acing the Analyst Interview – Maven Analytics",
        "Google Data Analytics Professional Certificate – Coursera",
        "Finding Your Path in Data – Maven Analytics",
        "Introduction to Data & Data Science – IBM",
        "Understanding Data Visualization – DataCamp",
        "Understanding Cloud Computing – DataCamp",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
      <Header />
      <section className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Courses & Learning Journey</h1>
        
        <p className="text-lg mb-10 max-w-3xl">
          These are the courses and learning tracks that helped me build real-world data analysis and dashboarding skills. 
          You can view my certificate folder at the bottom of the page.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courseCategories.map((category, index) => (
            <Card key={index} className="border bg-card dark:bg-card shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span>{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start">
                      <span className="mr-2 text-primary dark:text-primary-dark">•</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

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
