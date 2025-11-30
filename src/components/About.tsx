import { Button } from "@/components/ui/button";
import collection3 from "@/assets/collection-3.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="image-reveal aspect-[4/5] overflow-hidden">
              <img
                src={collection3}
                alt="Elegant fashion model showcasing tailored blazer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Crafted with
              <span className="italic text-primary"> Passion</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="font-body text-lg">
                Founded in 2015, Élégance emerged from a vision to redefine contemporary 
                luxury fashion. Our philosophy centers on the belief that true elegance 
                lies in simplicity and impeccable craftsmanship.
              </p>
              <p className="font-body">
                Every piece in our collection is thoughtfully designed in Paris and 
                meticulously crafted by skilled artisans using only the finest materials. 
                We believe in slow fashion—creating timeless pieces that transcend seasons 
                and trends.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="font-display text-3xl lg:text-4xl text-primary mb-2">10+</p>
                <p className="font-body text-sm text-muted-foreground tracking-wide uppercase">
                  Years
                </p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl text-primary mb-2">50k</p>
                <p className="font-body text-sm text-muted-foreground tracking-wide uppercase">
                  Clients
                </p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl text-primary mb-2">30+</p>
                <p className="font-body text-sm text-muted-foreground tracking-wide uppercase">
                  Countries
                </p>
              </div>
            </div>

            <Button variant="hero" className="mt-12">
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
