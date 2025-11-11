import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "Integration of Deep learning and Blockchain technology for a Smart Healthcare Record Management System",
    publisher: "Elsevier",
    date: "September 2024",
    type: "Journal Article",
    url: "https://shop.elsevier.com/books/data-science-in-the-medical-field/kadry/978-0-443-24028-7",
  },
  {
    title: "Highway Drivers Drowsiness Detection System Model with R-Pi and CNN technique",
    publisher: "IEEE Xplore",
    date: "July 2021",
    type: "Conference Paper",
    url: "https://ieeexplore.ieee.org/document/9579613",
  },
  {
    title: "Deploying Complementary filter to avert gimbal lock in drones using Quaternion angles",
    publisher: "IEEE Xplore",
    date: "October 2020",
    type: "Conference Paper",
    url: "https://ieeexplore.ieee.org/document/9231126",
  },
  {
    title: "Smart Cane Design for Indoor and Outdoor Navigation: A cost-effective guide",
    publisher: "Springer, Singapore",
    date: "January 2020",
    type: "Book Chapter",
    url: "https://link.springer.com/chapter/10.1007/978-981-15-0146-3_49",
  },
  {
    title: "Hyperledger Sawtooth Blockchain-IoT e-provenance platform for pharmaceuticals",
    publisher: "IJEAT",
    date: "December 2019",
    type: "Journal Article",
    url: "https://www.ijeat.org/wp-content/uploads/papers/v9i1s3/A10511291S319.pdf",
  },
  {
    title: "Sensor selection for Indoor Navigation in IOT applications",
    publisher: "ICCEECCT 2018",
    date: "December 14, 2018",
    type: "Conference Paper",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Publications & Research
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-2" />
        <p className="text-center text-foreground/70 mb-12 text-lg">
          Contributing to academic research in AI, blockchain, and healthcare
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border bg-gradient-card backdrop-blur-sm hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-gradient-hero rounded-lg shadow-tech-glow group-hover:scale-110 transition-transform duration-500">
                    <FileText className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-sans text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {pub.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex flex-col gap-1">
                        <span className="font-medium">{pub.publisher}</span>
                        <span className="text-sm">{pub.date} • {pub.type}</span>
                      </div>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {pub.url && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="gap-2 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 border-primary/20"
                    asChild
                  >
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Publication
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
