const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
