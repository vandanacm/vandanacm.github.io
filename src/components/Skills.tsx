import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "AI/ML Engineering",
    description: "TensorFlow, Keras, RAG, OpenAI GPT, Pytorch, Deep Learning",
  },
  {
    icon: Palette,
    title: "Full-Stack Development",
    description: "React, Next.js, Java, Springboot, Python, GraphQL, REST APIs",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    description: "AWS EKS, S3, ASM, CloudFront, Azure, Docker, Kubernetes, Terraform, API Gateway, CI/CD",
  },
  {
    icon: Smartphone,
    title: "Data & Security",
    description: "SQL, ChromaDB, Prisma Compute, HIPAA Compliance, Blockchain, IoT Systems",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
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
                <h3 className="font-playfair text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
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
