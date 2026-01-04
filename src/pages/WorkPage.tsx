import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BounceCards from "@/components/BounceCards";

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

      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 center w-full h-full bg-hero-glow opacity-60 pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary/60 border border-primary/20 rounded-full">
                Selected Work
              </span>
              <h1 className="text-display mb-8 text-primary">
                Projects That
                <br />
                <span className="italic text-gold font-serif">Speak Volumes</span>
              </h1>
              <p className="text-subhead text-muted-foreground/80 max-w-2xl">
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
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                      ? "bg-primary text-gold border-primary shadow-lg shadow-primary/20"
                      : "bg-transparent text-muted-foreground border-primary/10 hover:border-gold/50 hover:text-primary"
                    }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Premium Shawls Collection */}
        <section className="py-20 overflow-hidden bg-secondary/20 border-y border-primary/5 relative">
          <div className="absolute inset-0 bg-white/40 pointer-events-none" />
          <div className="container-premium relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
              <div className="flex-1 text-center md:text-left">
                <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-4 block">
                  Featured Collection
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-primary">
                  Affifa <span className="italic text-muted-foreground/60">Hassan</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
                  Experience the epitome of luxury with our handcrafted premium shawls.
                  Each piece tells a story of tradition, elegance, and timeless beauty.
                </p>
                <a href="https://www.instagram.com/afifa_hassan__?igsh=bmZ2Zzhoa3EzejNk" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                  View Collection <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex-1 flex justify-center py-2 relative">
                {/* Decorative blob */}
                <div className="absolute inset-0 bg-gold/10 blur-[60px] rounded-full pointer-events-none transform translate-y-10" />
                <div className="relative z-10">
                  <BounceCards
                    items={[
                      { image: "/1.jpeg" },
                      { image: "/2.jpeg" },
                      { image: "/3.jpeg" },
                      { image: "/4.jpeg" },
                      { image: "/5.jpeg" },
                      { image: "/6.jpeg" },
                      { image: "/8.PNG" },
                      { image: "/9.jpeg" },
                      { image: "/10.jpeg" },
                      { image: "/11.jpeg" },
                      { image: "/12.jpeg" },
                      { image: "/A.jpeg" },
                      { image: "/B.jpeg" },
                    ]}
                    containerWidth={500}
                    containerHeight={400}
                    enableHover={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Mjees.Pk Collection */}
        <section className="py-20 overflow-hidden bg-background mb-10">
          <div className="container-premium">
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-24">
              <div className="flex-1 text-center md:text-left md:pl-20">
                <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-4 block">
                  Featured Collection
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-primary">
                  The Mjees.<span className="italic text-muted-foreground/60">Pk</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
                  Discover our exclusive range of fashion-forward designs.
                  Where style meets sophistication in every stitch.
                </p>
                <a href="https://www.instagram.com/mjees.pk?igsh=NXBycHVoejhzamJ2" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                  View Collection <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex-1 flex justify-center py-2 relative">
                {/* Decorative blob */}
                <div className="absolute inset-0 bg-primary/5 blur-[60px] rounded-full pointer-events-none transform translate-y-10" />
                <div className="relative z-10">
                  <BounceCards
                    items={[
                      { image: "/13.jpeg" },
                      { image: "/14.jpeg" },
                      { image: "/15.jpeg" },
                      { image: "/16.jpeg" },
                      { image: "/17.jpeg" },
                    ]}
                    containerWidth={500}
                    containerHeight={400}
                    enableHover={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-32">
          <div className="container-premium">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group cursor-pointer ${project.size === "large" ? "md:col-span-1 lg:row-span-2" : ""
                    }`}
                >
                  <div className={`relative overflow-hidden rounded-3xl border border-primary/5 ${project.size === "large" ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-95 transition-opacity duration-500 backdrop-blur-[2px]" />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center items-center">
                      <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-gold mb-3">
                        {project.category} — {project.year}
                      </span>
                      <h3 className="text-3xl font-serif font-medium text-primary-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed line-clamp-2 max-w-[200px]">
                        {project.description}
                      </p>

                      <div className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[60px] translate-y-1/2 pointer-events-none" />

          <div className="container-premium relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
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
                  className="px-4"
                >
                  <div className="text-4xl md:text-6xl font-serif font-medium text-gold mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm text-primary-foreground/60 uppercase tracking-widest font-sans">
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
