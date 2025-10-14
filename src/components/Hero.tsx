import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
        {/* Profile Picture */}
        <div className="flex justify-center mb-8 animate-slide-up">
          <Avatar className="w-40 h-40 border-4 border-white/30 shadow-elegant">
            <AvatarImage src="/placeholder.svg" alt="Vandana" />
            <AvatarFallback className="text-4xl font-bold bg-white/20 text-white">V</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6">
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              AI/ML Enthusiast
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-white/80 inline-block hover:scale-105 transition-transform duration-300">
              & Full Stack Engineer
            </span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-slide-up font-light">
          MS in ECE @ UC Davis | Building intelligent healthcare systems with AI and scalable cloud architecture
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-white/10 text-white border-2 border-white/20 hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 shadow-elegant hover:shadow-hover hover:scale-105 group"
          >
            View My Work
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary hover:bg-white/90 border-0 shadow-elegant hover:shadow-hover hover:scale-105 transition-all duration-300"
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
