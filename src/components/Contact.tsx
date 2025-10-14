import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, BookOpen } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
          Let's Work Together
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-6" />
        <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
          Interested in ML/AI research, healthcare tech, or full-stack collaboration? Let's connect!
        </p>
        
        <Button 
          size="lg"
          className="bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-elegant hover:shadow-hover hover:scale-105 transition-all duration-300 mb-12 group"
          asChild
        >
          <a href="mailto:vandanacmansur@gmail.com">
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Get In Touch
          </a>
        </Button>

        <div className="flex justify-center gap-4">
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
            className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-tech-glow transition-all duration-300 border-2"
            asChild
          >
            <a href="https://medium.com/@vandanacmansur" target="_blank" rel="noopener noreferrer" aria-label="Medium">
              <BookOpen className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
