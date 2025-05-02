
import React, { useState } from "react";
import { Badge, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CountUp from "react-countup";

const LearningJourney = () => {
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

  // Define stat cards data
  const stats = [
    { label: "Learning Hours", value: 400 },
    { label: "Completed Courses", value: 35 },
    { label: "LinkedIn Followers", value: 10000 },
    { label: "Top 5 Creator (Egypt)", value: 5, suffix: " (Favikon)" },
  ];

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

  // Calculate category percentages for the chart
  const categoryData = Object.entries(coursesByCategory).map(([category, courses]) => ({
    name: category,
    value: courses.length,
  }));

  // Chart colors
  const COLORS = ['#9b87f5', '#1A1F2C', '#D6BCFA', '#E5DEFF'];

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (category: string) => {
    setActiveFilter(activeFilter === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
      <Header />
      <section className="pt-24 pb-16 container mx-auto px-4">
        {/* Hero Section with Dynamic Headline */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark text-center mb-4">
            I Turned <span className="text-accent dark:text-accent-dark">400+ Hours</span> of Learning into Real-World Dashboards —
            <br className="hidden sm:inline" /> and Shared it with <span className="text-accent dark:text-accent-dark">10,000+ LinkedIn Followers</span>
          </h1>
          
          <p className="text-lg mb-8 text-muted-foreground dark:text-muted-foreground">
            My journey of continuous learning and growth in data analytics and visualization
          </p>
        </div>

        {/* Animated Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center mt-8 mb-16">
          {stats.map(stat => (
            <div key={stat.label} className="p-6 bg-surface dark:bg-[#1A1A1A] rounded-xl shadow-md border border-secondary/30 hover:shadow-lg transition-shadow duration-300">
              <p className="text-3xl font-bold text-primary dark:text-primary-dark">
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix || '+'} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Course Distribution Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">My Learning Distribution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 lg:col-span-1">
              <div className="h-64 w-full">
                <ChartContainer
                  config={{
                    dataAnalysis: { color: COLORS[0] },
                    sqlDatabases: { color: COLORS[1] },
                    pythonProgramming: { color: COLORS[2] },
                    careerFoundations: { color: COLORS[3] },
                  }}
                >
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartLegend>
                      <ChartLegendContent 
                        payload={categoryData.map((item, index) => ({
                          value: item.name,
                          color: COLORS[index % COLORS.length],
                        }))}
                      />
                    </ChartLegend>
                  </PieChart>
                </ChartContainer>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(coursesByCategory).map(([category, courses]) => (
                  <div key={category} className="flex flex-col items-center justify-center p-6 rounded-lg bg-surface/50 dark:bg-[#1A1A1A]/50 border border-secondary/30">
                    <div className="text-2xl mb-2">{getCategoryIcon(category)}</div>
                    <h3 className="font-semibold text-center">{category}</h3>
                    <div className="mt-2 flex items-center">
                      <span className="text-xl font-bold mr-2">{courses.length}</span>
                      <span className="text-sm text-muted-foreground">courses</span>
                    </div>
                    <button 
                      onClick={() => handleFilterClick(category)}
                      className={`mt-3 px-3 py-1 text-xs rounded-full transition-colors ${activeFilter === category ? 'bg-primary dark:bg-primary-dark text-white' : 'bg-secondary/30 dark:bg-secondary-dark/30'}`}
                    >
                      {activeFilter === category ? 'Show All' : 'Filter'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(coursesByCategory).map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === category
                  ? 'bg-primary dark:bg-primary-dark text-white'
                  : 'bg-secondary/30 dark:bg-secondary-dark/30 hover:bg-secondary/50 dark:hover:bg-secondary-dark/50'
              }`}
            >
              {getCategoryIcon(category)} {category}
            </button>
          ))}
          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              className="px-4 py-2 rounded-full text-sm bg-muted dark:bg-muted-dark hover:bg-secondary/50 dark:hover:bg-secondary-dark/50 transition-colors"
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* Courses By Category */}
        <div className="space-y-12">
          {Object.entries(coursesByCategory)
            .filter(([category]) => activeFilter === null || category === activeFilter)
            .map(([category, courses]) => (
            <div key={category} className="mb-8 animate-fade-in">
              <h2 className="flex items-center gap-3 text-2xl font-semibold mb-6">
                <span>{getCategoryIcon(category)}</span>
                {category}
                <span className="text-sm bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark px-2 py-1 rounded-full">
                  {courses.length} courses
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <Card key={index} className="bg-surface dark:bg-[#1A1A1A] border border-secondary/30 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-base font-semibold text-primary dark:text-primary-dark">{course.title}</h3>
                        {course.provider === "DataCamp" && (
                          <Badge className="h-5 w-5 text-accent dark:text-accent-dark" />
                        )}
                        {course.provider === "Coursera" && (
                          <Medal className="h-5 w-5 text-accent dark:text-accent-dark" />
                        )}
                      </div>
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
            <Badge className="h-5 w-5" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LearningJourney;
