import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Lightbulb, TrendingUp, Target, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push creative boundaries with fresh perspectives and cutting-edge solutions that set new industry standards."
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "Uncompromising quality in every detail. We deliver work that exceeds expectations and stands the test of time."
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "Collaborative approach to shared success. Your goals become our mission, and your victories are our achievements."
  },
  {
    icon: TrendingUp,
    title: "Results Driven",
    description: "Strategies that deliver measurable growth. Every creative decision is backed by data and focused on ROI."
  },
  {
    icon: Target,
    title: "Strategic Focus",
    description: "Purpose-driven design with clear objectives. Every element serves the greater goal of brand success."
  },
  {
    icon: Heart,
    title: "Passion & Care",
    description: "We genuinely care about your brand. Our passion translates into work that resonates and connects."
  }
];

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
  },
  {
    name: "Marcus Williams",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
  },
  {
    name: "Sofia Rodriguez",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop"
  },
  {
    name: "James Park",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
  }
];

const AboutPage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Helmet>
        <title>About Us | Brandify.Inc - Our Story & Team</title>
        <meta name="description" content="Learn about Brandify.Inc's mission, values, and the talented team behind our premium creative agency." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6 block">
                  About Us
                </span>
                <h1 className="text-display mb-8">
                  Where Vision
                  <br />
                  <span className="italic">Meets Craft</span>
                </h1>
                <p className="text-subhead">
                  We're a team of strategists, designers, and developers united by 
                  a singular passion: creating brands that matter.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Brandify.Inc Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 rounded-2xl">
                  <div className="text-4xl font-serif font-medium">5+</div>
                  <div className="text-sm opacity-80">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                  Our Story
                </span>
                <h2 className="text-headline">
                  Built on Passion,
                  <br />
                  <span className="italic">Driven by Purpose</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-6 text-body text-muted-foreground text-center"
              >
                <p>
                  Brandify.Inc was founded with a simple belief: every brand has a 
                  unique story waiting to be told. Our mission is to uncover that 
                  narrative and bring it to life through exceptional design and 
                  strategic thinking.
                </p>
                <p>
                  What started as a small studio with big dreams has grown into a 
                  full-service creative agency trusted by leading brands worldwide. 
                  Yet our core philosophy remains unchanged—we approach each project 
                  with the same passion, curiosity, and commitment to excellence.
                </p>
                <p>
                  We believe in the power of design to transform businesses, connect 
                  communities, and inspire action. Every pixel, every word, every 
                  interaction is an opportunity to create something meaningful.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                Our Values
              </span>
              <h2 className="text-headline">
                Principles That
                <br />
                <span className="italic">Guide Us</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="premium-card group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                Our Team
              </span>
              <h2 className="text-headline">
                The Minds Behind
                <br />
                <span className="italic">The Magic</span>
              </h2>
              <p className="text-body text-muted-foreground mt-6">
                A diverse team of creative thinkers and strategic minds working 
                together to bring your vision to life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-lg font-serif font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container-premium text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-headline mb-6">
                Let's Create Together
              </h2>
              <p className="text-body opacity-80 max-w-xl mx-auto mb-10">
                Ready to start your brand transformation journey?
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
