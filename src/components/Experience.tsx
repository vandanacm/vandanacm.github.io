import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import logoOptum from "@/assets/logo-optum.png";
import logoUCDavis from "@/assets/logo-ucdavis.png";
import logoVIT from "@/assets/logo-vit.png";

const experiences = [
  {
    type: "work",
    company: "Optum, UnitedHealth Group",
    location: "Hyderabad, India",
    role: "Full Stack Engineer",
    period: "September 2024 – September 2025",
    logo: logoOptum,
    achievements: [
      "Built and deployed a clinical question-answering assistant using a RAG architecture (OpenAI GPT-4o mini, ChromaDB, OpenAI textembedding-3-small), implementing backend retrieval workflows integrated with LLM prompts to deliver accurate, context-aware medical query responses",
      "Developed and maintained modern, scalable web interfaces (React, Next.js) for member portals serving 50M+ users across four business lines. Optimized member coverage and benefits journeys to enhance user engagement, informed decision-making, and accessibility",
      "Redesigned legacy SOAP API architecture at the protocol and data modeling level by implementing modern GraphQL endpoints. Refactored request/response handling, optimized payload serialization, and reduced network overhead, resulting in a 30% improvement in API performance. Enhanced data access efficiency by enabling precise, client-driven queries and improved scalability through modular resolver design and effective resource management for core applications",
      "Developed GraphQL APIs for the UHC Store e-commerce platform and architected API Gateway solutions. Designed Docker images and deployed on-premises instances for Kubernetes-based application deployment",
      "Automated deployment pipelines and led seamless migration from on-premises to AWS (EKS, ASM, S3, CloudFront), ensuring robust, high-availability releases and improved scalability",
    ],
  },
  {
    type: "work",
    company: "Optum, UnitedHealth Group",
    location: "Hyderabad, India",
    role: "Software Engineer",
    period: "June 2022 – September 2024",
    logo: logoOptum,
    achievements: [
      "Delivered secure REST APIs in Java and Springboot with HIPAA compliance, boosting API performance by cutting database call latency by 20% for clinical workflows",
      "Integrated CareMemo with EMR systems via bi-directional APIs, automating onboarding, After Visit Summary and message notifications, while streamlining clinician workflows and scaling platform expansion across multiple Senior Community Care markets",
      "Architected DevOps Infrastructure for new applications, implementing automated CI/CD pipelines that reduced build cycles by 60% across 35 projects and QA process turnaround time by 70%, while improving code quality coverage to 90%. Enabled zero downtime and high availability, managed API gateway, created unified dashboards to monitor performance, achieved 100% vulnerability resolution, and saved 30% on cloud operations costs",
      "Qualified as a top 10 finalist in Home & Community Hackathon 2024",
      "Championed team collaboration, mentoring, and technical debt reviews to support ongoing process and product improvement",
    ],
  },
];

const education = [
  {
    school: "University of California, Davis",
    location: "Davis, California",
    degree: "Master of Science, Electrical and Computer Engineering (ML Track)",
    period: "2025 - Present",
    logo: logoUCDavis,
    coursework: ["Big Data & High Performance Statistical Computing", "Modeling & Optimization in Computer Engineering"],
    activities: ["Club of Female Electrical Engineers", "IEEE", "Graduate Student Association"],
  },
  {
    school: "Vellore Institute of Technology",
    location: "Vellore, India",
    degree: "Bachelor of Technology, Electronics & Communication Engineering",
    period: "2018 - 2022",
    logo: logoVIT,
    activities: ["Undergraduate Researcher", "Chairperson of Ayuda NGO", "Technical Team Member of IEEE-MTTS", "IoThinc", "Founding Member & Head of Public Relations, Digit Squad-VIT", "Documentation Head of Curtiss R/C, SAE-VIT", "Chairperson of KLA", "Stalls Coordinator - Ayuda, Riviera 2020", "Sales Team, Riviera 2020"],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const relativeScroll = window.scrollY - sectionRef.current.offsetTop + window.innerHeight;
        setParallaxY(relativeScroll * 0.06);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-12" />

        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="font-sans text-2xl font-bold text-foreground">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border bg-gradient-card backdrop-blur-sm hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-background rounded-lg p-2 flex items-center justify-center border border-border">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                          <div>
                            <CardTitle className="font-sans text-card-foreground group-hover:text-primary transition-colors duration-300">{exp.role}</CardTitle>
                            <CardDescription className="text-base font-medium mt-1">{exp.company}</CardDescription>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">{exp.period}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
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
              <h3 className="font-sans text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border bg-gradient-card backdrop-blur-sm hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-background rounded-lg p-2 flex items-center justify-center border border-border">
                        <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                          <div>
                            <CardTitle className="font-sans text-card-foreground group-hover:text-primary transition-colors duration-300">{edu.school}</CardTitle>
                            <CardDescription className="text-base font-medium mt-1">
                              {edu.degree}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">{edu.period}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {edu.coursework && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Relevant Coursework:</h4>
                        <ul className="space-y-1">
                          {edu.coursework.map((course, i) => (
                            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="text-primary">•</span>
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {edu.activities && (
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
                    )}
                  </CardContent>
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
