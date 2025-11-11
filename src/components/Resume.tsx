import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  // Place your resume.pdf in the public folder
  const resumeUrl = "/resume.pdf";

  return (
    <section id="resume" className="py-20 bg-secondary/30 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Resume
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-2" />
        <p className="text-center text-foreground/70 mb-12 text-lg">
          Download my complete professional resume
        </p>

        <div className="max-w-2xl mx-auto">
          <Card className="group hover:shadow-hover transition-all duration-500 border-border bg-gradient-card backdrop-blur-sm">
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-hero rounded-lg shadow-tech-glow">
                  <FileText className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-sans text-xl font-bold text-card-foreground mb-1">
                    Professional Resume
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete details of experience, skills, and achievements
                  </p>
                </div>
              </div>
              
              <Button 
                asChild
                size="lg"
                className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-tech-glow"
              >
                <a href={resumeUrl} download="resume.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Note:</strong> To add your resume, place a file named{" "}
              <code className="px-2 py-1 bg-background rounded text-primary">resume.pdf</code> in the{" "}
              <code className="px-2 py-1 bg-background rounded text-primary">public</code> folder of your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
