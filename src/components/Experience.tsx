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
      "Developed modern, scalable web interfaces (React, Next.js) for UHC member portals serving 50M+ users across four business lines",
      "Automated deployment pipelines and managed AWS EKS, S3, CloudFront configurations for high-availability releases",
    ],
  },
  {
    type: "work",
    company: "Optum, UnitedHealth Group",
    location: "Hyderabad, India",
    role: "Software Engineer",
    period: "June 2024 – September 2024",
    achievements: [
      "Delivered secure REST APIs with HIPAA compliance, boosting API performance by 20% for clinical workflows",
      "Led migration of 35 projects from Jenkins to GitHub Actions, reducing deployment time by 60%",
      "Designed private cloud infrastructure with 0% downtime; managed on-prem APIs via Stargate API Gateway",
      "Automated security checks, resolving 80% vulnerabilities and increasing code coverage to 90%",
      "Top 10 finalist in Home & Community Hackathon 2024",
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
    activities: ["Chairperson of Ayuda NGO", "Technical Team Member of IEEE-MTTS", "IoThinc", "Founding Member & Head of Public Relations, Digit Squad-VIT"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Experience & Education
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
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
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="font-playfair text-card-foreground">{exp.role}</CardTitle>
                        <CardDescription className="text-base font-medium mt-1">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="w-fit">{exp.period}</Badge>
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
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="font-playfair text-card-foreground">{edu.school}</CardTitle>
                        <CardDescription className="text-base font-medium mt-1">
                          {edu.degree} {edu.gpa && <span className="text-primary">• {edu.gpa}</span>}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="w-fit">{edu.period}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </CardHeader>
                  {edu.activities && (
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {edu.activities.map((activity, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
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
