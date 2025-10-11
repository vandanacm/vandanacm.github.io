const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate developer and designer with a keen eye for creating beautiful, 
            functional web experiences. My journey in tech has been driven by curiosity and 
            a love for solving complex problems with elegant solutions.
          </p>
          <p>
            With expertise spanning modern frontend frameworks, UI/UX design, and full-stack 
            development, I bring ideas to life through clean code and thoughtful design. 
            I believe that great digital products are born at the intersection of aesthetics 
            and functionality.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new design trends, contributing to 
            open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
