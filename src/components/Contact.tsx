
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-logo">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-md border-secondary/20">
            <CardHeader>
              <CardTitle className="text-primary">Send Me a Message</CardTitle>
              <CardDescription className="text-foreground/80">
                I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input 
                    required 
                    id="name" 
                    name="name" 
                    placeholder="Your full name" 
                    className="bg-muted border-secondary/30"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    required 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-muted border-secondary/30"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    required 
                    id="message" 
                    name="message" 
                    placeholder="Your message" 
                    rows={5} 
                    className="bg-muted border-secondary/30"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-md border-secondary/20 bg-gradient-to-br from-primary to-secondary text-white">
            <CardHeader>
              <CardTitle className="text-white">Contact Information</CardTitle>
              <CardDescription className="text-white text-opacity-90">
                Let's connect! I'm open to opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:sohilakhaled811@gmail.com" className="hover:underline">
                  sohilakhaled811@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+201114919021" className="hover:underline">
                  (+2) 01114919021
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Damietta, Egypt (Remote & Hybrid)</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 flex-shrink-0" />
                <a href="https://www.linkedin.com/in/sohilakabbas" target="_blank" rel="noreferrer" className="hover:underline">
                  linkedin.com/in/sohilakabbas
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 flex-shrink-0" />
                <a href="https://github.com/Sohila-Khaled-Abbas" target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/Sohila-Khaled-Abbas
                </a>
              </div>

              <div className="pt-6">
                <p>
                  Looking forward to collaborating on data-driven projects or discussing how I can help your organization leverage data for better decision making.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
