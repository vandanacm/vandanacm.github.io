import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import clinicalAiImg from "@/assets/project-clinical-ai.jpg";
import sqlbotImg from "@/assets/project-sqlbot.jpg";
import medicalChainImg from "@/assets/project-medical-chain.jpg";
import wasteMonitoringImg from "@/assets/project-waste-monitoring.jpg";
import colorizationImg from "@/assets/project-colorization.jpg";
import drowsinessImg from "@/assets/project-drowsiness.jpg";
import arteasyImg from "@/assets/project-arteasy.jpg";
import intruderReidImg from "@/assets/project-intruder-reid.jpg";
import breathMonitorImg from "@/assets/project-breath-monitor.jpg";
import droneGimbalImg from "@/assets/project-drone-gimbal.jpg";
import smartCaneImg from "@/assets/project-smart-cane.jpg";
import miniOsImg from "@/assets/project-mini-os.jpg";

import smartGardenImg from "@/assets/project-smart-garden.jpg";
import resumeClassifierImg from "@/assets/project-resume-classifier.jpg";

const projects = [
  {
    title: "Resume Classification using DistilBERT",
    description: "End-to-end resume classification model using DistilBERT transformer, comparing performance against traditional ML models including SVM, XGBoost, and Naive Bayes for automated resume categorization",
    image: resumeClassifierImg,
    tags: ["DistilBERT", "NLP", "SVM", "XGBoost", "Python"],
    year: "2025"
  },
  {
    title: "Clinical Intelligent System",
    description: "RAG-based clinical Q&A system using OpenAI GPT-4o mini with ChromaDB vector database for semantic search, delivering factually accurate medical responses",
    image: clinicalAiImg,
    tags: ["OpenAI", "RAG", "ChromaDB", "Python"],
    year: "2025"
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
    demoUrl: "https://vimeo.com/705705822"
  },
  {
    title: "Smart City Waste Monitoring System",
    description: "Hardware prototype integrated with load cell and HX711 module with Arduino and NodeMCU. Integrated with ThingSpeak for analytics and data collection of waste type and weight to maintain a balance credit system for individuals",
    image: wasteMonitoringImg,
    tags: ["Arduino", "NodeMCU", "IoT", "ThingSpeak"],
    year: "2021"
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
  {
    title: "Smart Breath Monitor at Home",
    description: "Designed hardware using MAX30100 sensor and ESP8266 controller. IBM cloud for data collection. ML model using Regression to analyze and predict pulse rate and SpO2 for normal and Covid/respiratory disorder patients",
    image: breathMonitorImg,
    tags: ["IoT", "ML", "ESP8266", "IBM Cloud"],
    year: "2020"
  },
  {
    title: "Complementary Filter for Drone Gimbal Lock",
    description: "Designed a complementary filter to avoid gimbal lock in drones by converting Euler angles of raw, pitch, yaw axes to quaternion angles",
    image: droneGimbalImg,
    tags: ["Drones", "Quaternion", "Embedded Systems"],
    year: "2020"
  },
  {
    title: "Smart Cane for Blind",
    description: "Designed Smart Cane for the Blind. The prototype was presented as a paper and exhibited at a conference",
    image: smartCaneImg,
    tags: ["IoT", "Assistive Technology", "Hardware"],
    year: "2019"
  },
  {
    title: "Mini Operating System",
    description: "Developed a mini operating system implementing core OS functionalities and concepts",
    image: miniOsImg,
    tags: ["OS", "C", "System Programming"],
    year: "2019"
  },
  {
    title: "Smart Gardening System",
    description: "Automatic sensing of temperature, humidity, soil moisture content. Based on soil moisture value, land gets automatically irrigated by controlling the motor. Designed user android system using Bluetooth module to display parameters and motor status",
    image: smartGardenImg,
    tags: ["Arduino", "IoT", "Android", "Automation"],
    year: "2019"
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
