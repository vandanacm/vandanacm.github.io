import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypeWriter from "@/components/TypeWriter";
import profilePic from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0 animate-slide-up">
            <Avatar className="w-64 h-64 border-4 border-primary/30 shadow-elegant bg-black">
              <AvatarImage src={profilePic} alt="Vandana" className="mix-blend-normal" loading="eager" />
              <AvatarFallback className="text-4xl font-bold bg-black text-primary">V</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Text content */}
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                <span className="inline-block">
                  <TypeWriter text="Hey, I'm " speed={60} delay={300} />
                </span>
                <span className="inline-block">
                  <span className="animate-text-shimmer bg-gradient-to-r from-primary via-primary/60 to-primary bg-[length:200%_100%] bg-clip-text text-transparent">
                    <TypeWriter text="Vandana Mansur!" speed={80} delay={800} />
                  </span>
                </span>
              </h1>
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-2 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
              AI/ML Enthusiast & <span className="text-primary">Full Stack Engineer</span>
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-2xl mx-auto animate-fade-in opacity-0 font-light" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              MS in ECE @ UC Davis
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 mb-4 max-w-2xl mx-auto animate-fade-in opacity-0 font-light" style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
              Building intelligent systems with AI and scalable cloud architecture
            </p>
            <p className="text-lg md:text-xl text-primary font-medium mb-2 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
              Actively looking for Summer'26 Internships!
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '2.6s', animationFillMode: 'forwards' }}>
              Graduation Date: March 2027 (Expected) | Open to Relocation
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
