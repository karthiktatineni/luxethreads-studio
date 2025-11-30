import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, collections } from "@/data/products";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import { ArrowUpRight } from "lucide-react";

const collectionImages: Record<string, string> = {
  tailored: collection3,
  essentials: collection2,
  knitwear: collection1,
  outerwear: collection1,
};

const CollectionsPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 opacity-0 animate-fade-up">
            Explore
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground opacity-0 animate-fade-up stagger-1">
            Collections
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl mt-6 leading-relaxed opacity-0 animate-fade-up stagger-2">
            Discover our carefully curated collections, each telling a unique story 
            of craftsmanship and timeless style.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {collections.map((collection, index) => (
              <Link
                key={collection.id}
                to={`/collections?filter=${collection.id}`}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <img
                  src={collectionImages[collection.id] || collection1}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-2">
                    {collection.subtitle}
                  </p>
                  <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-3">
                    {collection.name}
                  </h3>
                  <p className="font-body text-muted-foreground max-w-sm mb-6">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all duration-300">
                    <span className="font-body text-sm tracking-widest uppercase">Explore</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
            <div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Shop All
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                All Products
              </h2>
            </div>
            <p className="font-body text-muted-foreground max-w-md mt-4 lg:mt-0">
              Browse our complete selection of premium menswear.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CollectionsPage;
