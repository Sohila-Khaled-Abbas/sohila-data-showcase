
import React from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { groupBy } from "lodash";

type Course = {
  id: number;
  title: string;
  provider: string;
  category: string;
  cert_link?: string;
  completed: boolean;
  order: number;
};

const Courses = () => {
  const { data: courses, isLoading, error } = useQuery({
    queryKey: ['courses'],
    queryFn: async (): Promise<Course[]> => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('completed', true)
        .order('category', { ascending: true })
        .order('order', { ascending: true });
      
      if (error) throw error;
      return data || [];
    },
  });

  // Group courses by category
  const groupedCourses = React.useMemo(() => {
    if (!courses) return {};
    return groupBy(courses, 'category');
  }, [courses]);

  // Function to get the appropriate icon for each category
  const getCategoryIcon = (category: string): string => {
    switch (category.toLowerCase()) {
      case 'sql & databases':
        return '💻';
      case 'python & programming':
        return '🐍';
      case 'data analysis & bi':
        return '📊';
      case 'data literacy & career':
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
          These are the courses and certifications I've completed across data analytics, dashboarding, programming, and career development. View full certification proof below.
        </p>

        {isLoading && (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary dark:text-primary-dark" />
          </div>
        )}

        {error && (
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
            <p>Error loading courses. Please try again later.</p>
          </div>
        )}

        {courses && !isLoading && (
          <div className="space-y-12">
            {Object.entries(groupedCourses).map(([category, coursesInCategory]) => (
              <div key={category} className="mb-8">
                <h2 className="flex items-center gap-3 text-2xl font-semibold mb-6">
                  <span>{getCategoryIcon(category)}</span>
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(coursesInCategory as Course[]).map((course) => (
                    <Card key={course.id} className="bg-surface dark:bg-[#1A1A1A] border border-secondary/30 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h3 className="text-base font-semibold text-primary dark:text-primary-dark">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{course.provider}</p>
                        {course.cert_link && (
                          <a 
                            href={course.cert_link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="mt-2 inline-flex items-center text-xs text-accent dark:text-accent-dark hover:underline"
                          >
                            View Certificate
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {courses && courses.length === 0 && !isLoading && (
          <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400">
            <p>No courses found.</p>
          </div>
        )}

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
