
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/supabase";

interface ProjectPreviewModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProject: Project | null;
}

const ProjectPreviewModal = ({ isOpen, onOpenChange, selectedProject }: ProjectPreviewModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[90vw] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            {selectedProject?.title} - Dashboard Preview
          </DialogTitle>
        </DialogHeader>
        
        {selectedProject?.powerbi_url && (
          <div className="relative w-full pt-[56.25%]">
            <iframe 
              src={selectedProject.powerbi_url} 
              className="absolute top-0 left-0 w-full h-full rounded-xl border border-secondary/30 dark:border-secondary/50"
              allowFullScreen
            />
          </div>
        )}
        
        <div className="flex justify-end mt-4">
          <DialogClose asChild>
            <Button variant="outline" className="mr-2">Close</Button>
          </DialogClose>
          <Button 
            variant="default"
            onClick={() => {
              window.open(selectedProject?.powerbi_url, '_blank');
              onOpenChange(false);
            }}
          >
            Open in New Tab
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPreviewModal;
