import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart } from "lucide-react";

// Import logos
import logoAyuda from "@/assets/logo-ayuda.jpeg";
import logoDigitsquad from "@/assets/logo-digitsquad.jpeg";
import logoKla from "@/assets/logo-kla.jpeg";
import logoIeeeMtts from "@/assets/logo-ieee-mtts.png";
import logoIothinc from "@/assets/logo-iothinc.webp";
import logoNeo from "@/assets/logo-neo.jpeg";
import logoOptum from "@/assets/logo-optum.png";
import logoIeeeUcdavis from "@/assets/logo-ieee-ucdavis.png";
import logoGsa from "@/assets/logo-gsa.png";
import logoRiviera from "@/assets/logo-riviera.jpeg";
import logoIupui from "@/assets/logo-iupui.jpeg";
import logoVit from "@/assets/logo-vit.png";
import logoCoffee from "@/assets/logo-coffee.jpeg";
import logoIeee from "@/assets/logo-ieee.png";
import logoCisco from "@/assets/logo-cisco.jpeg";
import logoSocial from "@/assets/logo-social.png";
import logoAsianJournal from "@/assets/logo-asian-journal.jpeg";
import logoGive from "@/assets/logo-give.jpg";
import logoCurtiss from "@/assets/logo-curtiss.jpeg";
import logoVitSeal from "@/assets/logo-vit-seal.png";

interface RoleItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  logo?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const leadershipRoles: RoleItem[] = [
  {
    title: "Chairperson",
    organization: "Ayuda NGO, VIT",
    period: "2020-2021",
    description: "Organized Social Entrepreneurship Event at Riviera 2020 and facilitated educational outreach programs. 'Smile and Spread Smiles' captures my passion for making a positive contribution to society. My experience at 'Ayuda' has convinced me that even the smallest acts of kindness combined with individual efforts can significantly impact anyone in need.",
    logo: logoAyuda
  },
  {
    title: "Undergraduate Research Assistant",
    organization: "SENSE School, VIT",
    period: "2019-2022",
    description: "Collaboration under the guidance of Professor R. Sujatha in the areas of Blockchain, Internet of Things, Deep Learning, Image processing, and Healthcare Systems",
    logo: logoVitSeal
  },
  {
    title: "Founding Member & Head of Public Relations",
    organization: "DigitSquad-VIT",
    period: "2019-2021",
    description: "Played key role in creation of DigitSquad-VIT, supervised publicity and outreach, organized tech hackathons and guest seminars",
    logo: logoDigitsquad
  },
  {
    title: "Chairperson",
    organization: "Kannada Literary Association, VIT",
    period: "2019-2021",
    description: "Organized literary and cultural activities including AIKYA cultural event at Riviera featuring Karnataka traditional dances",
    logo: logoKla
  },
  {
    title: "Documentation Head",
    organization: "Team Curtiss R/C, SAE-VIT",
    period: "2019-2021",
    description: "Documented team's work and budget, participated in technical discussions, managed raw materials requirements and raised sponsorships",
    logo: logoCurtiss
  },
  {
    title: "Technical Team Member",
    organization: "IEEE Microwave Theory and Technology Society, VIT",
    period: "2019-2021",
    description: "Conducted technical workshops and quizzes",
    logo: logoIeeeMtts
  },
  {
    title: "Technical Mentor & Blog Writer",
    organization: "IoThinc Club, VIT",
    period: "2019-2021",
    description: "Built IoT projects and wrote blogs on blockchain, crypto, and IoT",
    logo: logoIothinc
  },
  {
    title: "Campus Coordinator",
    organization: "National Engineering Olympiad",
    period: "2020",
    description: "Coordinated campus activities and promoted participation in the olympiad",
    logo: logoNeo
  }
];

const volunteerActivities: RoleItem[] = [
  {
    title: "Community Volunteer",
    organization: "Optum GIVE",
    period: "2022-2025",
    description: "Volunteered with G.I.V.E and UCARE-Hyderabad events, organized events for school children, fostered educational opportunities and community engagement",
    logo: logoGive
  },
  {
    title: "Graduate Student Member",
    organization: "Club of Female Electrical Engineers, UC Davis",
    period: "2025-2027",
    description: "Active member contributing to diversity and inclusion in electrical engineering",
    logo: logoCoffee
  },
  {
    title: "Graduate Student Member",
    organization: "IEEE, UC Davis",
    period: "2025-2027",
    description: "Active member contributing to science and technology initiatives. Mentoring undergraduate students in their assignments, projects and workshops",
    logo: logoIeee
  },
  {
    title: "Graduate Student Member",
    organization: "Graduate Student Association, UC Davis",
    period: "2025-2027",
    description: "Engaged in graduate student community and advocacy",
    logo: logoGsa
  },
  {
    title: "Sales Team Member",
    organization: "Riviera, VIT",
    period: "2019-2020",
    description: "Worked in sales team for proshows tickets at Riviera, the Annual International Sports and Cultural Carnival of VIT Vellore - a 4-day international event with 30,000+ attendees from 650+ colleges",
    logo: logoRiviera
  },
  {
    title: "Student Teaching Assistant",
    organization: "Ayuda NGO",
    period: "2018-2021",
    description: "Volunteered as teaching assistant at schools and orphanages in and around Vellore",
    logo: logoAyuda
  },
  {
    title: "Event Coordinator",
    organization: "Ayuda NGO",
    period: "2019-2020",
    description: "Coordinator of Social Entrepreneurship Event and Ayuda Stall Coordinator at Riviera'20",
    logo: logoSocial
  },
  {
    title: "Student Volunteer",
    organization: "VIT - IUPUI",
    period: "2019",
    description: "Volunteered at the 2nd World Summit on Advances in Sciences, Engineering, and Technology at Indiana University-Purdue University (IUPUI), Indianapolis, USA",
    logo: logoIupui
  },
  {
    title: "Mentee",
    organization: "Cisco BOOST Program - Women in Cybersecurity",
    period: "2021",
    description: "Participated in Cisco Women in Cybersecurity mentorship program",
    logo: logoCisco
  },
  {
    title: "Reviewer",
    organization: "Asian Journal of Research in Computer Science",
    period: "2020-2021",
    description: "Reviewed research papers on IoT and Blockchain",
    logo: logoAsianJournal
  },
  {
    title: "Student Member",
    organization: "IEEE",
    period: "2019-Present",
    description: "Active member contributing to science and technology initiatives",
    logo: logoIeee
  }
];

const Leadership = () => {
  const renderCard = (item: RoleItem, index: number) => {
    return (
      <Card 
        key={index} 
        className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border bg-gradient-card backdrop-blur-sm hover:border-primary/20"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors duration-300">
              {item.logo ? (
                <img 
                  src={item.logo} 
                  alt={item.organization} 
                  className="w-10 h-10 object-contain"
                />
              ) : item.icon ? (
                <item.icon className="w-6 h-6 text-primary" />
              ) : null}
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {item.period}
            </Badge>
          </div>
          <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">{item.title}</CardTitle>
          <CardDescription className="text-base font-medium">
            {item.organization}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    );
  };

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
              {leadershipRoles.map((role, index) => renderCard(role, index))}
            </div>
          </div>

          {/* Volunteer Activities */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-primary" />
              <h3 className="font-sans text-2xl font-bold text-foreground">Volunteer Activities</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {volunteerActivities.map((activity, index) => renderCard(activity, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
