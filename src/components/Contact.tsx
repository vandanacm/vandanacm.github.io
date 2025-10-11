import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
          Let's Work Together
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Interested in ML/AI research, healthcare tech, or full-stack collaboration? Let's connect!
        </p>
        
        <Button 
          size="lg"
          className="bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-elegant mb-12"
          onClick={() => window.location.href = 'mailto:hello@example.com'}
        >
          <Mail className="w-5 h-5 mr-2" />
          Get In Touch
        </Button>

        <div className="flex justify-center gap-6">
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Twitter className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
