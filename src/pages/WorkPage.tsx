import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Branding", "Web", "Photography", "Marketing"];

const projects = [
  {
    title: "Luxe Fashion",
    category: "Branding",
    description: "Complete rebrand for premium fashion retailer including visual identity, packaging, and digital presence.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop",
    year: "2024",
    size: "large"
  },
  {
    title: "TechFlow",
    category: "Web",
    description: "SaaS platform design and development with custom dashboard and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    year: "2024",
    size: "small"
  },
  {
    title: "Artisan Coffee",
    category: "Photography",
    description: "E-commerce visual storytelling and lifestyle photography campaign.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    year: "2024",
    size: "small"
  },
  {
    title: "Verde Wellness",
    category: "Branding",
    description: "Holistic wellness brand identity and strategic market positioning.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop",
    year: "2023",
    size: "large"
  },
  {
    title: "Stellar Finance",
    category: "Web",
    description: "Fintech web application with complex data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    year: "2023",
    size: "small"
  },
  {
    title: "Urban Eats",
    category: "Marketing",
    description: "Full-scale digital marketing campaign for restaurant chain.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    year: "2023",
    size: "small"
  },
  {
    title: "Bloom Beauty",
    category: "Photography",
    description: "Luxury cosmetics product photography and campaign visuals.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=1000&fit=crop",
    year: "2023",
    size: "large"
  },
  {
    title: "Nova Tech",
    category: "Branding",
    description: "Startup brand identity from concept to launch.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    year: "2023",
    size: "small"
  }
];

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Work | Brandify.Inc - Creative Portfolio</title>
        <meta name="description" content="Explore Brandify.Inc's portfolio of premium branding, web development, photography, and marketing projects for leading brands." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6 block">
                Selected Work
              </span>
              <h1 className="text-display mb-8">
                Projects That
                <br />
                <span className="italic">Speak Volumes</span>
              </h1>
              <p className="text-subhead max-w-2xl">
                A curated selection showcasing the depth and breadth of our 
                creative capabilities across industries.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mt-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-32">
          <div className="container-premium">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group cursor-pointer ${
                    project.size === "large" ? "md:col-span-1 lg:row-span-2" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden rounded-2xl ${
                    project.size === "large" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="text-xs font-sans tracking-wider text-primary-foreground/70 mb-2">
                        {project.category} • {project.year}
                      </span>
                      <h3 className="text-2xl font-serif font-medium text-primary-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/80 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                      <ArrowUpRight className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-secondary/50">
          <div className="container-premium">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "15+", label: "Industry Awards" },
                { number: "98%", label: "Client Retention" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-serif font-medium text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WorkPage;
