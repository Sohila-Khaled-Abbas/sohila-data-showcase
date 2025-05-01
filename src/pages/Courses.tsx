
import React, { useState, useMemo } from "react";
import { ExternalLink, Loader2, Search, Filter, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase, Course } from "@/lib/supabase";
import { groupBy, uniq, flatten } from "lodash";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

  // Extract all unique tags from courses
  const allTags = useMemo(() => {
    if (!courses) return [];
    
    // Handle both array tags and string tags (comma separated)
    const tagLists = courses.map(course => {
      if (!course.tags) return [];
      return Array.isArray(course.tags) ? course.tags : course.tags.split(',').map(tag => tag.trim());
    });
    
    return uniq(flatten(tagLists)).sort();
  }, [courses]);

  // Filter courses based on search and selected tags
  const filteredCourses = useMemo(() => {
    if (!courses) return [];
    
    return courses.filter(course => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === "" || 
        course.title.toLowerCase().includes(searchLower) ||
        course.provider.toLowerCase().includes(searchLower) ||
        course.category.toLowerCase().includes(searchLower);

      // Tags filter
      let courseTags: string[] = [];
      if (course.tags) {
        courseTags = Array.isArray(course.tags) ? course.tags : course.tags.split(',').map(tag => tag.trim());
      }
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => courseTags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [courses, searchQuery, selectedTags]);

  // Group courses by category
  const groupedCourses = useMemo(() => {
    if (!filteredCourses.length) return {};
    return groupBy(filteredCourses, 'category');
  }, [filteredCourses]);

  // Function to toggle a tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

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

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search by course, provider, or topic..." 
              className="pl-10 w-full bg-surface dark:bg-[#1A1A1A] border-secondary/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Tags Filtering */}
          {allTags.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filter by tags:</span>
                {selectedTags.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs h-7" 
                    onClick={clearFilters}
                  >
                    Clear <X className="ml-1 h-3 w-3" />
                  </Button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge 
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

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
          <>
            {/* No Results Message */}
            {Object.keys(groupedCourses).length === 0 && (
              <div className="p-8 text-center rounded-lg bg-muted dark:bg-muted-dark">
                <p className="text-lg font-medium mb-2">No courses match your filters</p>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
                <Button onClick={clearFilters} className="mt-4">Clear Filters</Button>
              </div>
            )}
            
            {/* Courses By Category */}
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
                          
                          {/* Course Tags */}
                          {course.tags && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {(Array.isArray(course.tags) ? course.tags : course.tags.split(',').map(t => t.trim())).map((tag, index) => (
                                <span 
                                  key={index} 
                                  className="inline-flex items-center text-xs px-1.5 py-0.5 rounded-sm bg-secondary/20 text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
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
          </>
        )}

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
