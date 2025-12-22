import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Lightbulb, TrendingUp } from "lucide-react";

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
            <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              About Us
            </span>
            <h2 className="text-headline mb-8">
              Where Strategy Meets
              <br />
              <span className="italic">Creative Vision</span>
            </h2>

            <div className="space-y-6 text-body text-muted-foreground">
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
              <p>
                Our multidisciplinary team combines creative excellence with
                data-driven strategy, ensuring every project delivers both beauty
                and results. We don't just design—we engineer brand experiences
                that drive growth.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Work With Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6 group hover:shadow-lg transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-medium text-lg mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 p-8 bg-primary rounded-3xl text-primary-foreground"
            >
              <div className="flex items-center gap-6">
                <div className="text-5xl font-serif font-medium">5+</div>
                <div>
                  <div className="text-lg font-medium mb-1">Years of Excellence</div>
                  <div className="text-sm opacity-80">
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
