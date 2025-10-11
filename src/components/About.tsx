const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a graduate student at UC Davis pursuing my Master's in Electrical and Computer Engineering, 
            specializing in Machine Learning and AI. Previously, I worked as a Full Stack Engineer at Optum, 
            UnitedHealth Group, where I engineered HIPAA-compliant healthcare solutions serving 50M+ users.
          </p>
          <p>
            My expertise spans across AI/ML (RAG systems, deep learning, computer vision), cloud infrastructure 
            (AWS, Kubernetes, Docker), and full-stack development (React, Next.js, Java, Python). I've delivered 
            systems that improved API performance by 30%, reduced deployment time by 60%, and maintained 90% code coverage.
          </p>
          <p>
            Beyond engineering, I'm passionate about research—I've published 5 papers on blockchain-healthcare integration, 
            drowsiness detection, and IoT systems. I've earned 8 Diamond Recognition awards at Optum and won international 
            Best Paper awards. I thrive on solving complex problems at the intersection of AI, healthcare, and scalable systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
