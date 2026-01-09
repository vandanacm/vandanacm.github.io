import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const skills = [
  {
    icon: Code2,
    title: "AI/ML Engineering",
    description: "Python, PyTorch, NLTK, Hugging Face, NumPy, Pandas, RAG, LangChain, Machine Learning, NLP, Large Language Models (LLMs), Multimodal Model, Agentic AI, Prompt Engineering",
  },
  {
    icon: Palette,
    title: "Full-Stack Development",
    description: "Java, Springboot, GraphQL, REST APIs, Microservices, Maven, Gradle, Spring AI, Postman, React, Next.js",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    description: "Docker, Kubernetes, Terraform, API Gateway, CI/CD, ArgoCD, Github Actions, Automation, AWS EKS, S3, ASM, CloudFront, Azure, SonarQube, Grafana, Splunk, Datadog, Service Now",
  },
  {
    icon: Smartphone,
    title: "Data & Security",
    description: "SQL, ChromaDB, Prisma Compute, HIPAA Compliance, Blockchain, IoT Systems",
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const relativeScroll = window.scrollY - sectionRef.current.offsetTop + window.innerHeight;
        setParallaxY(relativeScroll * 0.08);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-12" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-3 border-border bg-gradient-card backdrop-blur-sm hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-4 bg-gradient-hero rounded-full shadow-tech-glow group-hover:scale-110 transition-transform duration-500">
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-sans text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
