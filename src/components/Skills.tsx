import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";

const skillDomains = [
  {
    icon: Code2,
    title: "AI/ML Engineering",
    skills: [
      { name: "TensorFlow & Keras", level: 90 },
      { name: "PyTorch & Deep Learning", level: 85 },
      { name: "RAG & LLM Integration", level: 88 },
      { name: "OpenAI GPT APIs", level: 92 },
      { name: "Computer Vision", level: 80 },
    ],
  },
  {
    icon: Palette,
    title: "Full-Stack Development",
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "Java & Spring Boot", level: 88 },
      { name: "Python & FastAPI", level: 90 },
      { name: "GraphQL & REST APIs", level: 92 },
      { name: "TypeScript", level: 93 },
    ],
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EKS, S3, CloudFront)", level: 87 },
      { name: "Docker & Kubernetes", level: 85 },
      { name: "Terraform & IaC", level: 82 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Azure Services", level: 80 },
    ],
  },
  {
    icon: Smartphone,
    title: "Data & Security",
    skills: [
      { name: "SQL & Database Design", level: 90 },
      { name: "ChromaDB & Vector DBs", level: 85 },
      { name: "HIPAA Compliance", level: 88 },
      { name: "Blockchain & Smart Contracts", level: 82 },
      { name: "IoT Systems", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-12" />
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillDomains.map((domain, domainIndex) => (
            <Card 
              key={domainIndex}
              className="group hover:shadow-hover transition-all duration-500 border-border bg-gradient-card backdrop-blur-sm hover:border-primary/30"
              style={{ animationDelay: `${domainIndex * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-hero rounded-lg shadow-tech-glow group-hover:scale-110 transition-transform duration-500">
                    <domain.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {domain.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {domain.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group/skill space-y-2 animate-fade-in"
                    style={{ animationDelay: `${(domainIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-card-foreground group-hover/skill:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 group-hover/skill:h-3 transition-all duration-300"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
