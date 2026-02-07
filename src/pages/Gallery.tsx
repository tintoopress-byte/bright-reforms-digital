import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import BentoGrid from "@/components/BentoGrid";

// Real uploaded images only
import computerClass from "@/assets/gallery-computer-class.jpg";
import schoolCake from "@/assets/gallery-school-cake.jpg";
import cookingClass from "@/assets/gallery-cooking-class.jpg";
import cakeDecorating1 from "@/assets/gallery-cake-decorating-1.jpg";
import cakeDecorating2 from "@/assets/gallery-cake-decorating-2.jpg";
import cakeDecorating3 from "@/assets/gallery-cake-decorating-3.jpg";
import studentsCelebration from "@/assets/gallery-students-celebration.jpg";
import groupPhoto from "@/assets/gallery-group-photo.jpg";
import sewingClass from "@/assets/gallery-sewing-class.jpg";
import childrenEvent from "@/assets/gallery-children-event.jpg";
import speech from "@/assets/gallery-speech.jpg";
import studentsTeacher from "@/assets/gallery-students-teacher.jpg";
import parentsMeeting from "@/assets/gallery-parents-meeting.jpg";

const galleryImages = [
  {
    src: groupPhoto,
    alt: "Students celebrating with school cake",
    span: "col-span-2 row-span-2"
  },
  {
    src: computerClass,
    alt: "Computer class - ICT learning"
  },
  {
    src: schoolCake,
    alt: "Bright Reformer Schools celebration cake"
  },
  {
    src: cookingClass,
    alt: "Culinary arts - hands-on cooking class",
    span: "row-span-2"
  },
  {
    src: cakeDecorating1,
    alt: "Students learning cake decoration"
  },
  {
    src: studentsCelebration,
    alt: "Students group celebration photo",
    span: "col-span-2"
  },
  {
    src: studentsTeacher,
    alt: "Students with their teacher",
    span: "col-span-2 row-span-2"
  },
  {
    src: cakeDecorating2,
    alt: "Cake decorating skills training"
  },
  {
    src: cakeDecorating3,
    alt: "Student chef decorating cake"
  },
  {
    src: sewingClass,
    alt: "Sewing and tailoring skills training"
  },
  {
    src: childrenEvent,
    alt: "Children at school event in beautiful attire"
  },
  {
    src: speech,
    alt: "School event - speech presentation",
    span: "row-span-2"
  },
  {
    src: parentsMeeting,
    alt: "Parents and teachers group photo",
    span: "col-span-2"
  }
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
            description="Click on any image to view it in full size. Use arrow keys to navigate, space to autoplay, or use the thumbnails below."
          />

          <BentoGrid images={galleryImages} showLightbox />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
