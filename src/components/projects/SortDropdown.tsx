
import { Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SortDropdownProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const SortDropdown = ({ sortBy, setSortBy }: SortDropdownProps) => {
  return (
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="w-full md:w-48 bg-background dark:bg-[#1F1F1F] border-secondary/30">
        <Filter className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="tech">Tech Stack</SelectItem>
        <SelectItem value="impact">Business Impact</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortDropdown;
