import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const projects = [
  {
    title: "Clinical Intelligent System",
    description: "RAG-based clinical Q&A system using OpenAI GPT-4o mini with ChromaDB vector database for semantic search, delivering factually accurate medical responses",
    image: project1,
    tags: ["OpenAI", "RAG", "ChromaDB", "Python"],
    year: "2025"
  },
  {
    title: "SQLbot - NLP to SQL Converter",
    description: "Rasa-Core NLP module converting plain English to SQL queries, with rasa-action-server connecting to databases for intelligent query execution",
    image: project2,
    tags: ["Rasa", "NLP", "SQL", "Python"],
    year: "2022"
  },
  {
    title: "Medical Chain - EHR System",
    description: "Blockchain-integrated Electronic Health Record system with UNet lung segmentation (92-95% accuracy), IPFS storage, and Ethereum smart contracts for COVID-19 management",
    image: project3,
    tags: ["Blockchain", "Deep Learning", "IPFS", "React"],
    year: "2022"
  },
  {
    title: "Highway Drowsiness Detection",
    description: "Real-time CNN-based drowsiness detection deployed on Raspberry Pi with 95% accuracy, using OpenCV and 7000 eye data images for highway driver safety",
    image: project4,
    tags: ["CNN", "OpenCV", "Raspberry Pi", "TensorFlow"],
    year: "2021"
  },
  {
    title: "Intruder ReID and Tracking",
    description: "Individual re-identification system for surveillance using ResNet50 and YOLOv3 on Market1501 and COCO datasets, with visual tracking and detection mapping",
    image: project5,
    tags: ["ResNet50", "YOLOv3", "Computer Vision", "Python"],
    year: "2021"
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
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="font-playfair text-card-foreground">{project.title}</CardTitle>
                  <span className="text-xs text-muted-foreground font-medium">{project.year}</span>
                </div>
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
