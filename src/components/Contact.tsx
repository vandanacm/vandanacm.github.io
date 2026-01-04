import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import researchGateLogo from "@/assets/logo-researchgate.png";
import googleScholarLogo from "@/assets/logo-google-scholar.png";
import orcidLogo from "@/assets/logo-orcid.png";
import handshakeLogo from "@/assets/logo-handshake.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link and directly trigger it
    const mailtoLink = `mailto:vandanacmansur@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client should open shortly.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Let's Collaborate!
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-12" />
        
        <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Name</Label>
              <Input
                id="name"
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">Subject</Label>
            <Input
              id="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className="bg-muted/50 border-border focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or just say hello!"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="bg-muted/50 border-border focus:border-primary resize-none"
            />
          </div>
          
          <Button 
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-hover transition-all duration-300"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </Button>
        </form>

        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-tech-glow transition-all duration-300 border-2"
            asChild
          >
            <a href="https://github.com/vandanacm/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-tech-glow transition-all duration-300 border-2"
            asChild
          >
            <a href="https://www.linkedin.com/in/vandana-mansur/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full h-12 w-12 hover:scale-110 hover:shadow-tech-glow transition-all duration-300 border-2 overflow-hidden p-0"
            asChild
          >
            <a href="https://app.joinhandshake.com/profiles/vandana-mansur" target="_blank" rel="noopener noreferrer" aria-label="Handshake">
              <img src={handshakeLogo} alt="Handshake" className="w-full h-full object-cover" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-tech-glow transition-all duration-300 border-2"
            asChild
          >
            <a href="https://medium.com/@vandanacmansur" target="_blank" rel="noopener noreferrer" aria-label="Medium">
              <span className="text-lg font-bold">M</span>
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full h-12 w-12 hover:scale-110 hover:shadow-tech-glow transition-all duration-300 border-2 overflow-hidden p-0"
            asChild
          >
            <a href="https://scholar.google.com/citations?user=HisA-Z8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
              <img src={googleScholarLogo} alt="Google Scholar" className="w-8 h-8 object-contain" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full h-12 w-12 hover:scale-110 hover:shadow-tech-glow transition-all duration-300 border-2 overflow-hidden p-0"
            asChild
          >
            <a href="https://www.researchgate.net/profile/Vandana-Mansur" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate">
              <img src={researchGateLogo} alt="ResearchGate" className="w-full h-full object-cover" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full h-12 w-12 hover:scale-110 hover:shadow-tech-glow transition-all duration-300 border-2 overflow-hidden p-0"
            asChild
          >
            <a href="https://orcid.org/0000-0002-8438-5475" target="_blank" rel="noopener noreferrer" aria-label="ORCID">
              <img src={orcidLogo} alt="ORCID" className="w-full h-full object-cover" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
