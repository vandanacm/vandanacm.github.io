const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-12" />
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-border/50 shadow-card">
          <p>
            I am Vandana, a software engineer with 3+ years of experience in full-stack development, REST APIs, 
            GraphQL APIs, and cloud infrastructure. Currently, pursuing my Master's in Electrical and Computer 
            Engineering at UC Davis, with a focus on scalable Intelligent systems. I am passionate about research 
            in ML and AI, leading to digital health innovation. I enjoy finding smarter ways to make tech accessible, 
            building scalable systems that are secure and impactful.
          </p>
          <p>
            Outside work and studies, I enjoy tracking my nutrition, hiking, travelling to new cities and capturing 
            nature. If you are interested in connecting over technology, AI, or digital health innovation, let's 
            talk—I am always open to new ideas and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
