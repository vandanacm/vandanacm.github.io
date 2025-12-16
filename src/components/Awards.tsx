import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star, Medal } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const awards = [
  {
    icon: Trophy,
    title: "Top 10 Finale Innovators",
    organization: "Optum, UnitedHealth Group",
    description: "Qualified as a top 10 finalist innovator in the Home & Community Hackathon",
    period: "October 2024",
  },
  {
    icon: Award,
    title: "8x Diamond Bravo",
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
    icon: Medal,
    title: "Second Place - YESIST'12 2022",
    organization: "IEEE NKSS",
    description: "Innovation Challenge Track for Medical Chain: Deep Learning and Ethereum Blockchain Integrated Secure Electronic Health Record",
    period: "May 2022",
  },
  {
    icon: Star,
    title: "Chancellor's Achiever Award",
    organization: "VIT",
    description: "First place in Technical Presentation at Aero SAE",
    period: "August 2021",
  },
  {
    icon: Trophy,
    title: "Top 20 Teams - Flipkart Grid 2.0",
    organization: "Flipkart Engineering Campus Challenge",
    description: "Team the_crack_coders secured a position among the Top 20 teams of the Engineering Campus Challenge",
    period: "June 2020",
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
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const relativeScroll = window.scrollY - sectionRef.current.offsetTop + window.innerHeight;
        setParallaxY(relativeScroll * 0.07);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="awards" className="py-20 bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
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
                <h3 className="font-sans text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
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
