import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxe Fashion",
    category: "Brand Identity",
    description: "Complete rebrand for premium fashion retailer",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    title: "TechFlow",
    category: "Web Development",
    description: "SaaS platform design and development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Artisan Coffee",
    category: "Product Photography",
    description: "E-commerce visual storytelling",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
  },
  {
    title: "Verde Wellness",
    category: "Brand Strategy",
    description: "Holistic wellness brand launch",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding" ref={ref}>
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Selected Work
            </span>
            <h2 className="text-headline">
              Projects That
              <br />
              <span className="italic">Speak Volumes</span>
            </h2>
          </div>
          <p className="text-body text-muted-foreground max-w-md">
            A curated selection of our finest work, showcasing the depth and
            breadth of our creative capabilities.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="text-primary-foreground">
                    <span className="text-sm font-sans tracking-wide opacity-80 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-serif font-medium mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-80">{project.description}</p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>

              {/* Below Card Info */}
              <div className="mt-6">
                <span className="text-sm font-sans text-muted-foreground tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-serif font-medium mt-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
