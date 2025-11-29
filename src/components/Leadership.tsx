import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart } from "lucide-react";

const leadershipRoles = [
  {
    title: "Chairperson",
    organization: "Ayuda NGO, VIT",
    period: "2020-2021",
    description: "Organized Social Entrepreneurship Event at Riviera 2020 and facilitated educational outreach programs. 'Smile and Spread Smiles' captures my passion for making a positive contribution to society. My experience at 'Ayuda' has convinced me that even the smallest acts of kindness combined with individual efforts can significantly impact anyone in need.",
    type: "Leadership"
  },
  {
    title: "Undergraduate Research Assistant",
    organization: "SENSE School, VIT",
    period: "2019-2022",
    description: "Collaboration under the guidance of Professor R. Sujatha in the areas of Blockchain, Internet of Things, Deep Learning, Image processing, and Healthcare Systems",
    type: "Leadership"
  },
  {
    title: "Founding Member & Head of Public Relations",
    organization: "DigitSquad-VIT",
    period: "2019-2021",
    description: "Played key role in creation of DigitSquad-VIT, supervised publicity and outreach, organized tech hackathons and guest seminars",
    type: "Leadership"
  },
  {
    title: "Chairperson",
    organization: "Kannada Literary Association, VIT",
    period: "2019-2021",
    description: "Organized literary and cultural activities including AIKYA cultural event at Riviera featuring Karnataka traditional dances",
    type: "Leadership"
  },
  {
    title: "Documentation Head",
    organization: "Team Curtiss R/C, SAE-VIT",
    period: "2019-2021",
    description: "Documented team's work and budget, participated in technical discussions, managed raw materials requirements and raised sponsorships",
    type: "Leadership"
  },
  {
    title: "Technical Team Member",
    organization: "IEEE Microwave Theory and Technology Society, VIT",
    period: "2019-2021",
    description: "Conducted technical workshops and quizzes",
    type: "Leadership"
  },
  {
    title: "Technical Mentor & Blog Writer",
    organization: "IoThinc Club, VIT",
    period: "2019-2021",
    description: "Built IoT projects and wrote blogs on blockchain, crypto, and IoT",
    type: "Leadership"
  },
  {
    title: "Campus Coordinator",
    organization: "National Engineering Olympiad",
    period: "2020",
    description: "Coordinated campus activities and promoted participation in the olympiad",
    type: "Leadership"
  }
];

const volunteerActivities = [
  {
    title: "Community Volunteer",
    organization: "Optum",
    period: "2022-2025",
    description: "Volunteered with G.I.V.E and UCARE-Hyderabad events, organized events for school children, fostered educational opportunities and community engagement",
    type: "Volunteer"
  },
  {
    title: "Graduate Student Member",
    organization: "Club of Female Electrical Engineers, UC Davis",
    period: "2025",
    description: "Active member contributing to diversity and inclusion in electrical engineering",
    type: "Volunteer"
  },
  {
    title: "Graduate Student Member",
    organization: "IEEE, UC Davis",
    period: "2025",
    description: "Advising and mentoring undergraduate students in science and technology initiatives",
    type: "Volunteer"
  },
  {
    title: "Graduate Student Member",
    organization: "Graduate Student Association, UC Davis",
    period: "2025",
    description: "Engaged in graduate student community and advocacy",
    type: "Volunteer"
  },
  {
    title: "Student Teaching Assistant",
    organization: "Ayuda NGO",
    period: "2018-2021",
    description: "Volunteered as teaching assistant at schools and orphanages in and around Vellore",
    type: "Volunteer"
  },
  {
    title: "Event Coordinator",
    organization: "Ayuda NGO",
    period: "2019-2020",
    description: "Coordinator of Social Entrepreneurship Event and Ayuda Stall Coordinator at Riviera'20",
    type: "Volunteer"
  },
  {
    title: "Student Volunteer",
    organization: "Vellore Institute of Technology",
    period: "2019",
    description: "Organized 2nd World Summit on Advances in Sciences, Engineering, and Technology at Indiana University-Purdue University (IUPUI), Indianapolis, USA",
    type: "Volunteer"
  },
  {
    title: "Mentee",
    organization: "Cisco BOOST Program - Women in Cybersecurity",
    period: "2021",
    description: "Participated in Cisco Women in Cybersecurity mentorship program",
    type: "Volunteer"
  },
  {
    title: "Reviewer",
    organization: "Asian Journal of Research in Computer Science",
    period: "2020-2021",
    description: "Reviewed research papers on IoT and Blockchain",
    type: "Volunteer"
  },
  {
    title: "Student Member",
    organization: "IEEE",
    period: "2019-Present",
    description: "Active member contributing to science and technology initiatives",
    type: "Volunteer"
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Leadership & Volunteer Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              Community engagement, leadership roles, and volunteer initiatives
            </p>
          </div>

          {/* Leadership Roles */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Leadership Roles</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {leadershipRoles.map((role, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-border/50 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="mb-2">
                        {role.period}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{role.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground/80">
                      {role.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Volunteer Activities */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Volunteer Activities</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {volunteerActivities.map((activity, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-border/50 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="mb-2">
                        {activity.period}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground/80">
                      {activity.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{activity.description}</p>
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

export default Leadership;
