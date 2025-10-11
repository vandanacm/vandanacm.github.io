import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "AI/ML Engineering",
    description: "TensorFlow, Keras, RAG, OpenAI GPT, Computer Vision, Deep Learning",
  },
  {
    icon: Palette,
    title: "Full-Stack Development",
    description: "React, Next.js, Java, Springboot, Python, GraphQL, REST APIs",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    description: "AWS EKS, S3, CloudFront, Azure, Docker, Kubernetes, CI/CD",
  },
  {
    icon: Smartphone,
    title: "Data & Security",
    description: "SQL, ChromaDB, HIPAA Compliance, Blockchain, IoT Systems",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-4 bg-gradient-hero rounded-full">
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2 text-card-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
