import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Users, Award, BookOpen, ArrowRight, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import BentoGrid from "@/components/BentoGrid";

import heroImage from "@/assets/hero-school.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Students Enrolled" },
  { icon: GraduationCap, value: "15+", label: "Years of Excellence" },
  { icon: Award, value: "50+", label: "Academic Awards" },
  { icon: BookOpen, value: "30+", label: "Qualified Teachers" },
];

const galleryPreview = [
  { src: gallery1, alt: "Students learning in classroom", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Science laboratory activities" },
  { src: gallery3, alt: "Sports and outdoor activities" },
  { src: gallery4, alt: "Graduation ceremony", span: "row-span-2" },
  { src: gallery5, alt: "Arts and creativity" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Bright Reformer Schools Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6"
            >
              Welcome to Bright Reformer Schools
            </motion.span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
              Moulding Lives <br />
              <span className="relative">
                for Excellence
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <motion.path
                    d="M2 6C60 2 140 2 198 6"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Nurturing young minds through quality education, character development, and a commitment to academic excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold shadow-elevated hover:shadow-floating transition-all hover:-translate-y-0.5"
              >
                Begin Enrollment
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-outline-white font-semibold"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary-foreground"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Overview Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Who We Are"
            title="Building Future Leaders"
            description="For over 15 years, Bright Reformer Schools has been dedicated to providing exceptional education that combines academic rigor with moral development."
          />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Excellence in Every Aspect"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Star,
                title: "Academic Excellence",
                description:
                  "Our rigorous curriculum prepares students for success in higher education and beyond.",
              },
              {
                icon: Users,
                title: "Dedicated Teachers",
                description:
                  "Qualified and passionate educators committed to nurturing every student's potential.",
              },
              {
                icon: Award,
                title: "Character Development",
                description:
                  "We instill values of integrity, discipline, and leadership in all our students.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card rounded-2xl p-8 shadow-soft card-hover border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="School Life"
            title="Glimpses of Our Campus"
            description="See our students thriving in a vibrant learning environment."
          />

          <BentoGrid images={galleryPreview} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5"
            >
              View Full Gallery
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              Ready to Give Your Child the Best Education?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join the Bright Reformer family and watch your child excel academically and develop into a well-rounded individual.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold shadow-elevated hover:shadow-floating transition-all hover:-translate-y-0.5"
            >
              Enroll Today
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
