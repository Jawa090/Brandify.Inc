import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Camera, Megaphone, Video, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    number: "01",
    title: "Graphic Design",
    description:
      "Visual identities that captivate. From logos to complete brand systems that leave lasting impressions.",
    features: ["Brand Identity", "Logo Design", "Visual Systems"],
  },
  {
    icon: Code,
    number: "02",
    title: "Web Development",
    description:
      "High-performance websites built with cutting-edge technology. Seamless experiences that convert.",
    features: ["Custom Websites", "E-commerce", "Web Apps"],
  },
  {
    icon: Video,
    number: "03",
    title: "Content Creation",
    description:
      "Compelling narratives that resonate. Strategic content that engages and builds loyal communities.",
    features: ["Video Production", "Social Content", "Copywriting"],
  },
  {
    icon: Camera,
    number: "04",
    title: "Product Shoot",
    description:
      "Premium visual storytelling. Product photography that elevates perception and drives desire.",
    features: ["Product Photos", "Lifestyle Shoots", "360° Views"],
  },
  {
    icon: Megaphone,
    number: "05",
    title: "Brand Promotion",
    description:
      "Strategic campaigns that amplify reach. Data-driven marketing that delivers measurable growth.",
    features: ["Digital Marketing", "Social Media", "SEO Strategy"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Our Services
          </span>
          <h2 className="text-headline mb-6">
            Comprehensive Creative
            <br />
            <span className="italic">Solutions</span>
          </h2>
          <p className="text-body text-muted-foreground">
            We offer end-to-end creative services designed to transform your brand
            from concept to market leader.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="interactive-card h-full relative">
                {/* Number Background */}
                <span className="number-display absolute -top-4 -right-2 text-foreground select-none">
                  {service.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with enhanced animation */}
                  <div className="icon-container mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-body text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs font-sans px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-sm font-sans font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Learn more
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
