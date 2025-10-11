import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "Integration of Deep learning and Blockchain technology for a Smart Healthcare Record Management System",
    publisher: "Elsevier",
    date: "September 2024",
    type: "Journal Article",
  },
  {
    title: "Highway Drivers Drowsiness Detection System Model with R-Pi and CNN technique",
    publisher: "IEEE Xplore",
    date: "July 2021",
    type: "Conference Paper",
  },
  {
    title: "Deploying Complementary filter to avert gimbal lock in drones using Quaternion angles",
    publisher: "IEEE Xplore",
    date: "October 2020",
    type: "Conference Paper",
  },
  {
    title: "Smart Cane Design for Indoor and Outdoor Navigation: A cost-effective guide",
    publisher: "Springer, Singapore",
    date: "January 2020",
    type: "Book Chapter",
  },
  {
    title: "Hyperledger Sawtooth Blockchain-IoT e-provenance platform for pharmaceuticals",
    publisher: "IJEAT",
    date: "December 2019",
    type: "Journal Article",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Publications & Research
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Contributing to academic research in AI, blockchain, and healthcare
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-gradient-hero rounded-lg">
                    <FileText className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-playfair text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors">
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
                <Button 
                  size="sm" 
                  variant="outline"
                  className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Publication
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
