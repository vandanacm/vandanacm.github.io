import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in">
          ML/AI Engineer
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            & Full Stack Developer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          MS in ECE @ UC Davis | Building intelligent healthcare systems with AI and scalable cloud architecture
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-white/10 text-white border-2 border-white/20 hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 shadow-elegant"
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary hover:bg-white/90 border-0 shadow-elegant"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="text-primary-foreground w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
