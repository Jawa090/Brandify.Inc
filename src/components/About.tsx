import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Lightbulb, TrendingUp, ArrowUpRight } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pushing creative boundaries with fresh perspectives",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Uncompromising quality in every detail",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Collaborative approach to shared success",
  },
  {
    icon: TrendingUp,
    title: "Results Driven",
    description: "Strategies that deliver measurable growth",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding overflow-hidden" ref={ref}>
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary/60 border border-primary/20 rounded-full">
              About Us
            </span>
            <h2 className="text-display md:text-5xl lg:text-6xl mb-8 text-primary leading-[1.1]">
              Where Strategy Meets
              <br />
              <span className="italic text-gold font-serif">Creative Vision</span>
            </h2>

            <div className="space-y-6 text-body text-muted-foreground/80 leading-relaxed">
              <p>
                At Brandify.Inc, we believe every brand has a unique story waiting
                to be told. Our mission is to uncover that narrative and bring it
                to life through exceptional design and strategic thinking.
              </p>
              <p>
                Founded on the principle that great brands are built on
                authenticity, we partner with ambitious businesses ready to make
                their mark. From startups finding their voice to established
                companies seeking reinvention, we craft identities that resonate.
              </p>
              <p className="font-medium text-primary">
                Our multidisciplinary team combines creative excellence with
                data-driven strategy, ensuring every project delivers both beauty
                and results.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 group">
                Work With Us
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative blob behind */}
            <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-2 gap-6 relative z-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm border border-primary/5 rounded-2xl p-8 hover:border-gold/20 hover:bg-card hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-gold transition-all duration-500">
                    <value.icon className="w-5 h-5 text-primary group-hover:text-gold transition-colors duration-500" />
                  </div>
                  <h4 className="font-serif font-medium text-xl mb-3 text-primary">
                    {value.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 p-8 bg-primary rounded-3xl text-primary-foreground relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award className="w-24 h-24" />
              </div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="text-6xl font-serif font-medium text-gold">5+</div>
                <div>
                  <div className="text-xl font-medium mb-1">Years of Excellence</div>
                  <div className="text-sm opacity-80 font-light">
                    Crafting memorable brand experiences
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
