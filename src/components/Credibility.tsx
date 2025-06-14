
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp, Clock, Star, Quote } from "lucide-react";

const Credibility = () => {
  const recognitions = [
    {
      title: "Top 5 Data Science Creator",
      location: "Egypt",
      source: "Favikon",
      date: "April 2025",
      description: "Recognized for leading a 20K+ follower community focused on impactful Power BI and analytics content"
    }
  ];

  const metrics = [
    {
      icon: Users,
      value: "20,000+",
      label: "LinkedIn Followers",
      description: "Engaging with dashboards, career tips, and Python use cases"
    },
    {
      icon: TrendingUp,
      value: "200+",
      label: "Dashboard Users",
      description: "Explored Wuzzuf Job Market Dashboard to identify hiring trends"
    },
    {
      icon: Clock,
      value: "40%",
      label: "Time Reduction",
      description: "In reporting time through Python automation"
    },
    {
      icon: Star,
      value: "25%",
      label: "Speed Improvement",
      description: "In SQL data retrieval performance"
    }
  ];

  const dashboardHighlights = [
    {
      title: "SMART Supply Chain Dashboard",
      description: "Used by logistics teams to track supplier reliability and performance"
    },
    {
      title: "Marketing A/B Testing Analysis",
      description: "Validated campaign ROI using statistical analysis in Python"
    },
    {
      title: "ER Dashboard",
      description: "Designed to uncover wait time issues in emergency departments",
      badge: "Coming Soon"
    }
  ];

  const testimonials = [
    {
      quote: "Sohila doesn't just build dashboards — she builds clarity.",
      author: "Freelance Client",
      role: "Operations Manager"
    },
    {
      quote: "She mixes technical expertise with storytelling. That's rare.",
      author: "Peer Data Analyst",
      role: "Senior BI Developer"
    }
  ];

  return (
    <section id="credibility" className="py-16 bg-muted/30 dark:bg-muted-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-logo">
            <span className="gradient-text">Trusted by the Data Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building credibility through measurable impact, community leadership, and proven results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Recognitions */}
          <Card className="bg-card dark:bg-card-dark">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Recognition & Awards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recognitions.map((recognition, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="default" className="bg-accent text-white">
                      {recognition.title}
                    </Badge>
                    <Badge variant="outline">
                      {recognition.location}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {recognition.source} • {recognition.date}
                    </span>
                  </div>
                  <p className="text-sm text-foreground dark:text-foreground-dark">
                    {recognition.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Community Impact Metrics */}
          <Card className="bg-card dark:bg-card-dark">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Community Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm font-medium text-foreground dark:text-foreground-dark mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Highlights */}
        <Card className="bg-card dark:bg-card-dark mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-accent" />
              Dashboards with Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dashboardHighlights.map((dashboard, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground dark:text-foreground-dark">
                      {dashboard.title}
                    </h4>
                    {dashboard.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {dashboard.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dashboard.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card dark:bg-card-dark">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Quote className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <blockquote className="text-foreground dark:text-foreground-dark italic mb-3">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-medium text-foreground dark:text-foreground-dark">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to work with a trusted data professional?
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline" className="px-3 py-1">
              6+ Hours Weekly Saved
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              40% Faster Reporting
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              20K+ Community
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
