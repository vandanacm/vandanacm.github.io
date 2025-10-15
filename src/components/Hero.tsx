import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePic from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        {/* Profile Picture */}
        <div className="flex justify-center mb-8 animate-slide-up">
          <Avatar className="w-48 h-48 border-4 border-primary/20 shadow-elegant">
            <AvatarImage src={profilePic} alt="Vandana" />
            <AvatarFallback className="text-4xl font-bold bg-primary/10 text-primary">V</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="animate-fade-in">
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              AI/ML Enthusiast
            </span>
            <br />
            <span className="text-primary inline-block hover:scale-105 transition-transform duration-300">
              & Full Stack Engineer
            </span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up font-light">
          MS in ECE @ UC Davis
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-hover hover:scale-105 transition-all duration-300 group"
          >
            View My Work
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-elegant hover:shadow-hover hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="text-muted-foreground w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
