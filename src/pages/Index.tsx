import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Awards from "@/components/Awards";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Awards />
      <Resume />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-secondary/30 backdrop-blur-sm border-t border-border text-center text-muted-foreground">
        <p className="text-sm">© 2025 ML/AI Enthusiast & Full Stack Engineer. Built with React, TypeScript & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
