import { motion } from "framer-motion";
import { Target, Eye, Heart, Music } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const AboutPage = () => {
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
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Our Story & Values
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Discover the foundation of excellence that makes Bright Reformer Schools a beacon of quality education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Our History"
                title="A Legacy of Excellence"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bright Reformer Schools was founded with a singular vision: to create an institution where academic excellence and character development go hand in hand. For over 15 years, we have remained committed to this founding principle.
                </p>
                <p>
                  Our journey began with a small group of dedicated educators who believed that every child deserves access to quality education that nurtures not just the mind, but also the heart and spirit.
                </p>
                <p>
                  Today, we stand proud as one of the leading educational institutions in our community, with hundreds of successful alumni who have gone on to make significant contributions in various fields across Nigeria and beyond.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary-light rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "2010", label: "Year Founded" },
                    { value: "500+", label: "Students" },
                    { value: "30+", label: "Teachers" },
                    { value: "98%", label: "Success Rate" },
                  ].map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display text-3xl md:text-4xl text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-soft border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a comprehensive educational experience that develops students academically, morally, and socially, preparing them to become responsible citizens and future leaders who will positively impact their communities and the world at large.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-soft border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading educational institution recognized for producing well-rounded individuals who excel in academics, demonstrate strong moral character, and are equipped with the skills and values needed to thrive in an ever-changing global society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Pledge */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Our Commitment"
            title="School Pledge"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border text-center">
              <Heart className="w-12 h-12 text-accent mx-auto mb-6" />
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic font-medium">
                "I pledge to uphold the values of Bright Reformer Schools,
                <br />
                To pursue excellence in all my endeavors,
                <br />
                To respect my teachers, parents, and fellow students,
                <br />
                To be honest, diligent, and kind,
                <br />
                To make my school, my family, and my nation proud,
                <br />
                So help me God."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* School Anthem */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Sing With Pride"
            title="School Anthem"
            light
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/20">
              <Music className="w-12 h-12 text-primary-foreground mx-auto mb-6" />
              
              <div className="text-center space-y-8">
                {/* Verse 1 */}
                <div>
                  <h4 className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider mb-3">
                    Verse 1
                  </h4>
                  <p className="text-primary-foreground text-lg leading-relaxed">
                    Bright Reformer, our alma mater dear,
                    <br />
                    Where knowledge and virtue shine so clear,
                    <br />
                    With hearts united, we stand as one,
                    <br />
                    Our journey to excellence has just begun.
                  </p>
                </div>

                {/* Chorus */}
                <div>
                  <h4 className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider mb-3">
                    Chorus
                  </h4>
                  <p className="text-primary-foreground text-lg leading-relaxed font-semibold">
                    Moulding lives for excellence,
                    <br />
                    Building futures bright and true,
                    <br />
                    Bright Reformer, we salute you,
                    <br />
                    Forever loyal, forever true!
                  </p>
                </div>

                {/* Verse 2 */}
                <div>
                  <h4 className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider mb-3">
                    Verse 2
                  </h4>
                  <p className="text-primary-foreground text-lg leading-relaxed">
                    With discipline and honor as our guide,
                    <br />
                    In learning and in service, we take pride,
                    <br />
                    The sky is not our limit, we soar high,
                    <br />
                    Bright Reformer's spirit will never die.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="What We Stand For"
            title="Our Core Values"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Excellence", description: "Striving for the highest standards in all we do" },
              { title: "Integrity", description: "Acting with honesty and strong moral principles" },
              { title: "Discipline", description: "Cultivating self-control and orderly conduct" },
              { title: "Compassion", description: "Showing kindness and care for one another" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl text-primary">{value.title[0]}</span>
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
