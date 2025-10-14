import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    company: "Optum, UnitedHealth Group",
    location: "Hyderabad, India",
    role: "Full Stack Engineer",
    period: "September 2024 – September 2025",
    achievements: [
      "Engineered HIPAA-compliant GraphQL APIs for healthcare data exchange, elevating API performance by 30% with reactive Java",
      "Developed and maintained modern, scalable web interfaces (React, Next.js) for member portals serving 50M+ users across four business lines",
      "Optimized member coverage and benefits journeys to enhance user engagement, informed decision-making, and accessibility",
      "Independently managed a legacy Java service for Medicare and Retirement group members, resolving critical production issues and ensuring uninterrupted system reliability",
      "Developed GraphQL APIs for the UHC Store e-commerce platform and architected API Gateway solutions. Designed Docker images and deployed on-premises instances for Kubernetes-based application deployment",
      "Automated deployment pipelines and managed AWS EKS, S3, and CloudFront configurations to ensure robust, high-availability releases",
    ],
  },
  {
    type: "work",
    company: "Optum, UnitedHealth Group",
    location: "Hyderabad, India",
    role: "Software Engineer",
    period: "June 2024 – September 2024",
    achievements: [
      "Developed secure REST APIs in Java and Springboot with HIPAA compliance for healthcare data exchange, boosting API performance by 20%",
      "Integrated CareMemo with EMR systems, including Pathway, using bi-directional API communication",
      "Streamlined onboarding through Pathway Invite Enhancements, removing clinician login dependencies",
      "Automated After Visit Summary (AVS) notifications for all visit types with email alerts and direct CareMemo links",
      "Supported CareMemo expansion across multiple markets, including Arizona, Wisconsin, Ohio, Missouri, and Pennsylvania-Delaware",
      "Reduced QA process turnaround time by 70% and improved code quality coverage to 90%",
      "Streamlined centralized CI/CD pipeline for automated deployments by caching dependencies, reducing deployment time by 60%",
      "Built workflows migrating 35 projects from Jenkins to GitHub Actions, saving 40% on operational costs",
      "Designed and implemented infrastructure for private cloud application management with 0% downtime and high availability",
      "Configured and managed serverless infrastructure on HCC Kubernetes and Microsoft Azure",
      "Automated application build prechecks, reducing 60% build time, proactively resolving 100% of security vulnerabilities",
      "Qualified as a top 10 finalist in Home & Community Hackathon 2024",
      "Championed team collaboration, mentoring, and technical debt reviews to support ongoing process and product improvement",
    ],
  },
];

const education = [
  {
    school: "University of California, Davis",
    location: "Davis, California",
    degree: "Master of Science, Electrical and Computer Engineering",
    period: "2025 - Present",
    activities: ["Club of Female Electrical Engineers", "IEEE", "Graduate Student Association"],
  },
  {
    school: "Vellore Institute of Technology",
    location: "Vellore, India",
    degree: "Bachelor of Technology, Electronics & Communication Engineering",
    gpa: "GPA: 8.85/10",
    period: "2018 - 2022",
    activities: ["Chairperson of Ayuda NGO", "Technical Team Member of IEEE-MTTS", "IoThinc", "Founding Member & Head of Public Relations, Digit Squad-VIT", "Documentation Head of Curtiss R/C, SAE-VIT", "Chairperson of KLA", "Stalls Coordinator - Ayuda, Riviera 2020", "Sales Team, Riviera 2020", "Undergraduate Researcher"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-2" />
        <p className="text-center text-foreground/70 mb-12 text-lg">
          Building intelligent healthcare systems at scale
        </p>

        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="font-playfair text-2xl font-bold text-foreground">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border bg-gradient-card backdrop-blur-sm hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="font-playfair text-card-foreground group-hover:text-primary transition-colors duration-300">{exp.role}</CardTitle>
                        <CardDescription className="text-base font-medium mt-1">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">{exp.period}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="font-playfair text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border bg-gradient-card backdrop-blur-sm hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="font-playfair text-card-foreground group-hover:text-primary transition-colors duration-300">{edu.school}</CardTitle>
                        <CardDescription className="text-base font-medium mt-1">
                          {edu.degree} {edu.gpa && <span className="text-primary">• {edu.gpa}</span>}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">{edu.period}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </CardHeader>
                  {edu.activities && (
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {edu.activities.map((activity, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs bg-primary/5 text-primary border border-primary/20 rounded-full hover:bg-primary/10 transition-colors duration-300"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
