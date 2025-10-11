import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-secondary text-center text-muted-foreground">
        <p>© 2025 Portfolio. Crafted with passion and code.</p>
      </footer>
    </div>
  );
};

export default Index;
