import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Award, Microscope, Globe, BookOpen, Plane, Megaphone, GraduationCap, Building2, HandHeart, Shield, FileSearch, Compass } from "lucide-react";

const leadershipRoles = [
  {
    title: "Chairperson",
    organization: "Ayuda NGO, VIT",
    period: "2020-2021",
    description: "Organized Social Entrepreneurship Event at Riviera 2020 and facilitated educational outreach programs. 'Smile and Spread Smiles' captures my passion for making a positive contribution to society. My experience at 'Ayuda' has convinced me that even the smallest acts of kindness combined with individual efforts can significantly impact anyone in need.",
    icon: Heart
  },
  {
    title: "Undergraduate Research Assistant",
    organization: "SENSE School, VIT",
    period: "2019-2022",
    description: "Collaboration under the guidance of Professor R. Sujatha in the areas of Blockchain, Internet of Things, Deep Learning, Image processing, and Healthcare Systems",
    icon: Microscope
  },
  {
    title: "Founding Member & Head of Public Relations",
    organization: "DigitSquad-VIT",
    period: "2019-2021",
    description: "Played key role in creation of DigitSquad-VIT, supervised publicity and outreach, organized tech hackathons and guest seminars",
    icon: Megaphone
  },
  {
    title: "Chairperson",
    organization: "Kannada Literary Association, VIT",
    period: "2019-2021",
    description: "Organized literary and cultural activities including AIKYA cultural event at Riviera featuring Karnataka traditional dances",
    icon: BookOpen
  },
  {
    title: "Documentation Head",
    organization: "Team Curtiss R/C, SAE-VIT",
    period: "2019-2021",
    description: "Documented team's work and budget, participated in technical discussions, managed raw materials requirements and raised sponsorships",
    icon: Plane
  },
  {
    title: "Technical Team Member",
    organization: "IEEE Microwave Theory and Technology Society, VIT",
    period: "2019-2021",
    description: "Conducted technical workshops and quizzes",
    icon: Award
  },
  {
    title: "Technical Mentor & Blog Writer",
    organization: "IoThinc Club, VIT",
    period: "2019-2021",
    description: "Built IoT projects and wrote blogs on blockchain, crypto, and IoT",
    icon: Globe
  },
  {
    title: "Campus Coordinator",
    organization: "National Engineering Olympiad",
    period: "2020",
    description: "Coordinated campus activities and promoted participation in the olympiad",
    icon: Compass
  }
];

const volunteerActivities = [
  {
    title: "Community Volunteer",
    organization: "Optum",
    period: "2022-2025",
    description: "Volunteered with G.I.V.E and UCARE-Hyderabad events, organized events for school children, fostered educational opportunities and community engagement",
    icon: Building2
  },
  {
    title: "Graduate Student Member",
    organization: "Club of Female Electrical Engineers, UC Davis",
    period: "2025",
    description: "Active member contributing to diversity and inclusion in electrical engineering",
    icon: Users
  },
  {
    title: "Graduate Student Member",
    organization: "IEEE, UC Davis",
    period: "2025",
    description: "Active member contributing to science and technology initiatives. Mentoring undergraduate students in their assignments, projects and workshops",
    icon: Award
  },
  {
    title: "Graduate Student Member",
    organization: "Graduate Student Association, UC Davis",
    period: "2025",
    description: "Engaged in graduate student community and advocacy",
    icon: GraduationCap
  },
  {
    title: "Student Teaching Assistant",
    organization: "Ayuda NGO",
    period: "2018-2021",
    description: "Volunteered as teaching assistant at schools and orphanages in and around Vellore",
    icon: HandHeart
  },
  {
    title: "Event Coordinator",
    organization: "Ayuda NGO",
    period: "2019-2020",
    description: "Coordinator of Social Entrepreneurship Event and Ayuda Stall Coordinator at Riviera'20",
    icon: Heart
  },
  {
    title: "Student Volunteer",
    organization: "Vellore Institute of Technology",
    period: "2019",
    description: "Organized 2nd World Summit on Advances in Sciences, Engineering, and Technology at Indiana University-Purdue University (IUPUI), Indianapolis, USA",
    icon: Globe
  },
  {
    title: "Mentee",
    organization: "Cisco BOOST Program - Women in Cybersecurity",
    period: "2021",
    description: "Participated in Cisco Women in Cybersecurity mentorship program",
    icon: Shield
  },
  {
    title: "Reviewer",
    organization: "Asian Journal of Research in Computer Science",
    period: "2020-2021",
    description: "Reviewed research papers on IoT and Blockchain",
    icon: FileSearch
  },
  {
    title: "Student Member",
    organization: "IEEE",
    period: "2019-Present",
    description: "Active member contributing to science and technology initiatives",
    icon: Award
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Leadership & Volunteer Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-2" />
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Community engagement, leadership roles, and volunteer initiatives
          </p>

          {/* Leadership Roles */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="font-sans text-2xl font-bold text-foreground">Leadership Roles</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {leadershipRoles.map((role, index) => {
                const IconComponent = role.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border bg-gradient-card backdrop-blur-sm hover:border-primary/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {role.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">{role.title}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        {role.organization}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{role.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Volunteer Activities */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-primary" />
              <h3 className="font-sans text-2xl font-bold text-foreground">Volunteer Activities</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {volunteerActivities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border bg-gradient-card backdrop-blur-sm hover:border-primary/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {activity.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">{activity.title}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        {activity.organization}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;