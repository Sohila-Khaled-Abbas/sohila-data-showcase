
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectsSkeleton = () => {
  return (
    <>
      {/* Skeleton for filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Skeleton className="h-10 w-full md:w-64" />
        <Skeleton className="h-10 w-full md:w-48" />
      </div>
      
      {/* Skeleton for technologies filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-8 w-20 rounded-full" />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="flex flex-col h-full border border-secondary/20">
            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent className="flex-grow pb-2">
              <Skeleton className="h-20 w-full mb-4" />
              <div className="flex flex-wrap gap-2">
                {[...Array(3)].map((_, j) => (
                  <Skeleton key={j} className="h-6 w-16" />
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-2 flex-col">
              <Skeleton className="h-10 w-full mb-2" />
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProjectsSkeleton;
