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

      <main className="bg-background">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 center w-full h-full bg-hero-glow opacity-60 pointer-events-none" />

          <div className="container-premium relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary/60 border border-primary/20 rounded-full">
                  Who We Are
                </span>
                <h1 className="text-display mb-8 text-primary">
                  Where Vision
                  <br />
                  <span className="italic text-gold font-serif">Meets Craft</span>
                </h1>
                <p className="text-subhead text-muted-foreground/80">
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
                {/* Decorative Blob */}
                <div className="absolute inset-0 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-primary/5">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Brandify.Inc Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>

                {/* Float Badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-gold">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-medium text-primary">5+</div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Years of Excellence</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-secondary/20 relative overflow-hidden">
          {/* Grain Texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

          <div className="container-premium relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-4 block">
                  Our Story
                </span>
                <h2 className="text-5xl md:text-6xl font-serif font-medium text-primary mb-6">
                  Built on Passion,
                  <br />
                  <span className="italic text-muted-foreground/60">Driven by Purpose</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-8 text-lg font-light leading-loose text-muted-foreground text-center"
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
                <div className="h-px w-24 bg-primary/10 mx-auto my-8" />
                <p className="font-serif text-xl italic text-primary">
                  "We believe in the power of design to transform businesses, connect
                  communities, and inspire action."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-5xl font-serif font-medium text-primary mb-6">
                Principles That
                <br />
                <span className="italic text-gold">Guide Us</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-primary/5 shadow-sm hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-gold transition-all duration-500">
                    <value.icon className="w-5 h-5 text-primary group-hover:text-gold transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground/80">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section (Kept & Redesigned) */}
        <section className="py-32 bg-primary relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <span className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold border border-gold/20 rounded-full">
                Our Team
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-medium text-primary-foreground mb-6">
                The Minds Behind
                <br />
                <span className="italic text-gold opacity-90">The Magic</span>
              </h2>
              <p className="text-lg text-primary-foreground/60 max-w-lg mx-auto">
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
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mb-6 border border-white/10 group-hover:border-gold/50 transition-colors duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Social Overlay possibility (simplified for now) */}
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-serif font-medium text-primary-foreground group-hover:text-gold transition-colors duration-300">{member.name}</h3>
                    <p className="text-sm text-primary-foreground/60 uppercase tracking-widest font-sans mt-2">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background border-t border-primary/5">
          <div className="container-premium text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-display md:text-5xl mb-8 text-primary">
                Let's Create Together
              </h2>
              <p className="text-body text-muted-foreground max-w-xl mx-auto mb-10">
                Ready to start your brand transformation journey?
              </p>
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
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
