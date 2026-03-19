import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import aromeImg from "@/assets/project-arome-loreal.png";
import musicVaeImg from "@/assets/project-music-vae.jpg";
import clinicalAiImg from "@/assets/project-clinical-ai.jpg";
import sqlbotImg from "@/assets/project-sqlbot.jpg";
import medicalChainImg from "@/assets/project-medical-chain.jpg";
import colorizationImg from "@/assets/project-colorization.jpg";
import drowsinessImg from "@/assets/project-drowsiness.jpg";
import arteasyImg from "@/assets/project-arteasy.jpg";
import intruderReidImg from "@/assets/project-intruder-reid.jpg";
import resumeClassifierImg from "@/assets/project-resume-classifier.jpg";
import hospitalSchedulingImg from "@/assets/project-hospital-scheduling.jpg";

const projects = [
  {
    title: "Arome – AI Fragrance Blueprint Engine",
    description: "Engineered Arome for L'Oréal Brandstorm 2026 — a full-stack AI chatbot that translates user memories into personalized luxury fragrance blueprints using a hybrid GraphRAG + LLM pipeline built on Neo4j, Weaviate, FastAPI, and Redis. Designed brand-agnostic architecture targeting the €7.5B exception fragrance market, with inline safety guardrails ensuring no medical or therapeutic claims reach consumer-facing output.",
    image: aromeImg,
    tags: ["GraphRAG", "Neo4j", "Weaviate", "FastAPI", "Redis", "LLM"],
    year: "2026",
    githubUrl: "https://github.com/vandanacm/memoire-de-parfum"
  },
  {
    title: "Unsupervised Music Representation Learning with β-VAE",
    description: "Developed an unsupervised β-VAE system for music representation learning, compressing mel spectrograms into a structured 128-dim latent space that reveals genre clusters without any label supervision (GMM NMI = 0.28). Extended the model with contrastive auxiliary loss, disentanglement scoring, and conditional genre-guided generation as part of a 9-improvement research pipeline.",
    image: musicVaeImg,
    tags: ["β-VAE", "Deep Learning", "Mel Spectrograms", "GMM", "Python"],
    year: "2026"
  },
  {
    title: "Resume Classification using DistilBERT",
    description: "End-to-end resume classification model using DistilBERT transformer, comparing performance against traditional ML models including SVM, XGBoost, and Naive Bayes for automated resume categorization",
    image: resumeClassifierImg,
    tags: ["DistilBERT", "NLP", "SVM", "XGBoost", "Python"],
    year: "2025",
    githubUrl: "https://github.com/vandanacm/resume-classifier"
  },
  {
    title: "Hospital Patient Flow Optimization",
    description: "Applied Flexible Job Shop Scheduling Problem (FJSP) framework with MILP optimization for hospital patient processing. Achieved 16.9% improvement over unscheduled operations and outperformed genetic algorithm approaches",
    image: hospitalSchedulingImg,
    tags: ["MILP", "Optimization", "Healthcare", "Python"],
    year: "2025",
    githubUrl: "https://github.com/vandanacm/fjsp-patient-processing"
  },
  {
    title: "Clinical Intelligent System",
    description: "RAG-based clinical Q&A system using OpenAI GPT-4o mini with ChromaDB vector database for semantic search, delivering factually accurate medical responses",
    image: clinicalAiImg,
    tags: ["OpenAI", "RAG", "ChromaDB", "Python"],
    year: "2025",
    githubUrl: "https://github.com/vandanacm/rag-clinical-qa-system"
  },
  {
    title: "SQLbot - NLP to SQL Converter",
    description: "Rasa-Core NLP module converting plain English to SQL queries, with rasa-action-server connecting to databases for intelligent query execution",
    image: sqlbotImg,
    tags: ["Rasa", "NLP", "SQL", "Python"],
    year: "2022"
  },
  {
    title: "Medical Chain - EHR System",
    description: "Blockchain-integrated Electronic Health Record system with UNet lung segmentation (92-95% accuracy), IPFS storage, and Ethereum smart contracts for COVID-19 management",
    image: medicalChainImg,
    tags: ["Blockchain", "Deep Learning", "IPFS", "React"],
    year: "2022",
    demoUrl: "https://vimeo.com/705705822",
    githubUrl: "https://github.com/vandanacm/medical-chain-final"
  },
  {
    title: "Automatic Colorization Using Auto-Encoders",
    description: "Designed an Autoencoder model for the conversion of black and white images to colored images without human intervention. Feed-forward pass to CNN implemented using Cifar10 dataset",
    image: colorizationImg,
    tags: ["AutoEncoder", "CNN", "Deep Learning", "Python"],
    year: "2021"
  },
  {
    title: "Highway Drowsiness Detection",
    description: "Real-time CNN-based drowsiness detection deployed on Raspberry Pi with 95% accuracy, using OpenCV and 7000 eye data images for highway driver safety",
    image: drowsinessImg,
    tags: ["CNN", "OpenCV", "Raspberry Pi", "TensorFlow"],
    year: "2021"
  },
  {
    title: "ARTEASY - A Store With Purpose",
    description: "Arteasy believes in handmade products supporting collaborative and sustainable design. Breaching the gap between online market and crafts of artisans from indigenous communities to help reach financial independence",
    image: arteasyImg,
    tags: ["E-commerce", "Social Impact", "Web Development"],
    year: "2020"
  },
  {
    title: "Intruder ReID and Tracking",
    description: "Re-identifying persons and plotting detection locations for surveillance application using Market1501 and COCO datasets. Implemented with ResNet50 and YOLOv3 algorithms",
    image: intruderReidImg,
    tags: ["ResNet50", "YOLOv3", "Computer Vision", "Python"],
    year: "2020"
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-2" />
        <p className="text-center text-foreground/70 mb-12 text-lg">
          A selection of my recent work
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border bg-gradient-card backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4 gap-2">
                  {project.demoUrl && (
                    <Button size="sm" variant="secondary" className="shadow-lg" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="secondary" className="shadow-lg">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="font-sans text-card-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <span className="text-xs text-muted-foreground font-medium px-2 py-1 bg-secondary/50 rounded-md">{project.year}</span>
                </div>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary border border-primary/20 rounded-full hover:bg-primary/10 transition-colors duration-300"
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
