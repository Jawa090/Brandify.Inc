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
    <section id="work" className="section-padding bg-secondary/10" ref={ref}>
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold bg-primary/5 rounded-full">
              Selected Work
            </span>
            <h2 className="text-display md:text-6xl text-primary">
              Projects That
              <br />
              <span className="italic text-muted-foreground/80 font-serif">Speak Volumes</span>
            </h2>
          </div>
          <p className="text-body text-muted-foreground max-w-md border-l-2 border-primary/10 pl-6">
            A curated selection of our finest work, showcasing the depth and
            breadth of our creative capabilities in the digital space.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-500 backdrop-blur-[2px]" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                  <div className="text-primary-foreground transform transition-transform duration-700 delay-100">
                    <span className="text-xs font-sans tracking-[0.2em] uppercase text-gold mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-4xl font-serif mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-90 max-w-xs mx-auto leading-relaxed">{project.description}</p>

                    <div className="mt-8 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Below Card Info (Visible when not hovering) */}
              <div className="px-2 transition-opacity duration-500 group-hover:opacity-50">
                <div className="flex justify-between items-end border-b border-primary/10 pb-4">
                  <div>
                    <h3 className="text-2xl font-serif text-primary group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm font-sans text-muted-foreground tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-primary/30">0{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2 group">
            View All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
