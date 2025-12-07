import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";

const About = () => {
  const resumeUrl = "/resume.pdf";

  return (
    <section id="about" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-8" />
        
        {/* Location Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-foreground/70">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">From: <span className="text-foreground">Bangalore, India</span></span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Current: <span className="text-foreground">Davis, California</span></span>
          </div>
        </div>
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-border/50 shadow-card">
          <p>
            An Engineer with 3+ years of experience in full-stack development, REST APIs, GraphQL APIs, ML/AI pipeline 
            and Cloud infrastructure. Currently, pursuing my Master's in Electrical and Computer 
            Engineering at UC Davis, with a focus on scalable Intelligent systems. I am passionate about research 
            in ML and AI, leading to digital health innovation. I enjoy finding smarter ways to make tech accessible, 
            building scalable systems that are secure and impactful.
          </p>
          <p>
            Outside of work and studies, I enjoy tracking my nutrition, gardening, travelling to new places, volunteering, and capturing nature. Interested in ML/AI research, Technology, or Full-Stack collaboration? Let's connect—I am always open to new ideas and opportunities.
          </p>
          
          {/* Resume Download Button */}
          <div className="flex justify-center mt-8">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-tech-glow"
            >
              <a href={resumeUrl} download="resume.pdf">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
