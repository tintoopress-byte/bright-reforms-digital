import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import BentoGrid from "@/components/BentoGrid";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const galleryImages = [
  { src: gallery1, alt: "Students learning in classroom", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Science laboratory activities" },
  { src: gallery3, alt: "Sports and outdoor activities" },
  { src: gallery4, alt: "Graduation ceremony", span: "row-span-2" },
  { src: gallery5, alt: "Arts and creativity" },
  { src: gallery6, alt: "Library and reading", span: "col-span-2" },
  { src: gallery7, alt: "School assembly", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Laboratory experiments" },
  { src: gallery3, alt: "Football practice" },
  { src: gallery5, alt: "Creative arts class", span: "col-span-2" },
  { src: gallery1, alt: "Interactive learning" },
  { src: gallery4, alt: "Award ceremony", span: "row-span-2" },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
              Photo Gallery
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Campus Life in Pictures
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Explore moments of learning, growth, and celebration at Bright Reformer Schools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Our Memories"
            title="Life at Bright Reformer"
            description="Click on any image to view it in full size. Navigate through our collection using the arrows."
          />

          <BentoGrid images={galleryImages} showLightbox />
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Explore More"
            title="Gallery Categories"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Academic Activities", count: 45, color: "bg-primary" },
              { title: "Sports & Games", count: 32, color: "bg-accent" },
              { title: "Cultural Events", count: 28, color: "bg-primary" },
              { title: "Graduation Ceremonies", count: 15, color: "bg-accent" },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border card-hover cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                  <span className="text-lg font-bold text-primary-foreground">{category.count}</span>
                </div>
                <h4 className="font-semibold text-lg text-foreground">{category.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">View photos →</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
