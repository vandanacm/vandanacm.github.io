import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization and insights",
    image: project1,
    tags: ["React", "TypeScript", "Chart.js"],
  },
  {
    title: "E-Commerce Platform",
    description: "Modern online shopping experience with seamless checkout and inventory management",
    image: project2,
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Fitness Tracker App",
    description: "Mobile-first fitness tracking application with goal setting and progress monitoring",
    image: project3,
    tags: ["React Native", "Firebase", "UI/UX"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          A selection of my recent work
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  <Button size="sm" variant="secondary" className="shadow-lg">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="secondary" className="shadow-lg">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-playfair text-card-foreground">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
