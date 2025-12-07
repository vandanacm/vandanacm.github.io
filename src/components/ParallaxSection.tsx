import { useRef, useEffect, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  id?: string;
}

const ParallaxSection = ({ children, className = '', speed = 0.15, id }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const relativeScroll = scrolled - sectionTop + window.innerHeight;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setParallaxY(relativeScroll * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background Layer */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          transform: `translateY(${parallaxY}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
