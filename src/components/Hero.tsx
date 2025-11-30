import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Klvora men's luxury fashion - tailored navy suit"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
        

          {/* Main Headline */}
          <div className="overflow-hidden mb-4">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[0.95] opacity-0 animate-fade-up stagger-1">
              KLVORA
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium italic text-primary leading-[0.95] opacity-0 animate-fade-up stagger-2">
              Fashionwear
            </h1>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden mb-12">
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed opacity-0 animate-fade-up stagger-3">
              Discover our curated collection of contemporary luxury and Street fashion for 
              the modern wear. Impeccable tailoring meets timeless design.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up stagger-4">
            <Link to="/collections">
              <Button variant="hero" size="lg" className="group">
                Explore Collection
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/new-arrivals">
              <Button variant="minimal" size="lg">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in stagger-5">
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
