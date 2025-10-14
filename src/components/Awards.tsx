import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star, Medal } from "lucide-react";

const awards = [
  {
    icon: Award,
    title: "8x Diamond Recognition",
    organization: "Optum, UnitedHealth Group",
    description: "For Performance, Innovation, Collaboration and Compassion",
    period: "June 2022 - September 2025",
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
    <section id="awards" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Awards & Achievements
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-2" />
        <p className="text-center text-foreground/70 mb-12 text-lg">
          Recognition for excellence in engineering and research
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border bg-gradient-card backdrop-blur-sm relative overflow-hidden hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <CardContent className="p-6 relative">
                <div className="mb-4 inline-flex p-3 bg-gradient-hero rounded-lg shadow-tech-glow group-hover:scale-110 transition-transform duration-500">
                  <award.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-1">{award.organization}</p>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{award.description}</p>
                <span className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full">
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
