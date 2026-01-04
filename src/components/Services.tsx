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
    <section id="services" className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-24"
        >
          <span className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold border border-gold/20 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-display md:text-5xl lg:text-6xl mb-8 text-primary-foreground leading-[1.1]">
            Comprehensive Creative
            <br />
            <span className="italic text-gold opacity-90 font-serif">Solutions</span>
          </h2>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl font-light">
            We offer end-to-end creative services designed to transform your brand
            from concept to market leader, ensuring every touchpoint resonates with excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-gold/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Number Watermark */}
                <div className="absolute top-2 right-6 text-[80px] font-serif opacity-[0.05] text-white font-bold select-none pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-500 leading-none">
                  {service.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                    <service.icon className="w-6 h-6 text-gold group-hover:text-primary transition-colors duration-500" />
                  </div>

                  <h3 className="text-2xl font-serif font-medium mb-4 text-primary-foreground group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-primary-foreground/60 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full bg-white/5 text-primary-foreground/40 border border-white/5 group-hover:border-gold/20 group-hover:text-gold/80 transition-all duration-500"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-gold/80 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    Explore Service
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-700 ease-out" />
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
