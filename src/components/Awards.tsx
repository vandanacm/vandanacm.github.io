import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star, Medal } from "lucide-react";

const awards = [
  {
    icon: Award,
    title: "8x Diamond Recognition",
    organization: "Optum, UnitedHealth Group",
    description: "For Performance, Innovation, Collaboration and Compassion",
    period: "2022-2025",
  },
  {
    icon: Trophy,
    title: "Best Performers Award",
    organization: "Optum, UnitedHealth Group",
    description: "Outstanding performance and contributions to team success",
    period: "February 2023",
  },
  {
    icon: Star,
    title: "Chancellor's Achiever Award",
    organization: "VIT",
    description: "First place in Technical Presentation at Aero SAE",
    period: "August 2021",
  },
  {
    icon: Medal,
    title: "Chancellor's Special Achiever Award",
    organization: "VIT",
    description: "Best Paper Award at international conference",
    period: "August 2020",
  },
  {
    icon: Award,
    title: "Best Paper Award",
    organization: "Indiana-Purdue University",
    description: "Outstanding research presentation at Indianapolis, USA",
    period: "October 2019",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Awards & Achievements
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Recognition for excellence in engineering and research
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <CardContent className="p-6 relative">
                <div className="mb-4 inline-flex p-3 bg-gradient-hero rounded-lg">
                  <award.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                  {award.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-1">{award.organization}</p>
                <p className="text-sm text-muted-foreground mb-3">{award.description}</p>
                <span className="inline-block px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                  {award.period}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
