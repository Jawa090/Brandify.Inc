import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Camera, Megaphone, Video, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    subtitle: "Visual Identity & Branding",
    description: "We craft distinctive visual identities that capture the essence of your brand. From logo design to complete brand systems, every element is meticulously designed to leave lasting impressions.",
    features: [
      "Logo Design & Brand Identity",
      "Brand Guidelines & Style Guides",
      "Print & Digital Collateral",
      "Packaging Design",
      "Marketing Materials",
      "Social Media Graphics"
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
  },
  {
    icon: Code,
    title: "Web Development",
    subtitle: "Digital Experiences",
    description: "High-performance websites built with cutting-edge technology. We create seamless digital experiences that engage users and convert visitors into loyal customers.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Web Applications",
      "CMS Integration",
      "Performance Optimization",
      "SEO Implementation"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    icon: Video,
    title: "Content Creation",
    subtitle: "Strategic Storytelling",
    description: "Compelling narratives that resonate with your audience. We develop strategic content that engages, educates, and builds loyal communities around your brand.",
    features: [
      "Video Production",
      "Motion Graphics",
      "Copywriting & Messaging",
      "Social Media Content",
      "Blog & Article Writing",
      "Brand Storytelling"
    ],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop"
  },
  {
    icon: Camera,
    title: "Product Photography",
    subtitle: "Visual Commerce",
    description: "Premium visual storytelling that elevates perception and drives desire. Our product photography transforms ordinary items into objects of desire.",
    features: [
      "E-commerce Photography",
      "Lifestyle Shoots",
      "360° Product Views",
      "Food & Beverage",
      "Fashion & Apparel",
      "Post-Production & Retouching"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
  },
  {
    icon: Megaphone,
    title: "Brand Promotion",
    subtitle: "Strategic Marketing",
    description: "Data-driven campaigns that amplify your reach and deliver measurable growth. We combine creativity with analytics to maximize your marketing impact.",
    features: [
      "Digital Marketing Strategy",
      "Social Media Management",
      "Paid Advertising",
      "Influencer Partnerships",
      "Email Marketing",
      "Analytics & Reporting"
    ],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop"
  }
];

const ServicesPage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Helmet>
        <title>Our Services | Brandify.Inc - Premium Creative Solutions</title>
        <meta name="description" content="Explore Brandify.Inc's comprehensive creative services including graphic design, web development, content creation, product photography, and brand promotion." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6 block">
                What We Do
              </span>
              <h1 className="text-display mb-8">
                Comprehensive
                <br />
                <span className="italic">Creative Solutions</span>
              </h1>
              <p className="text-subhead max-w-2xl">
                End-to-end services designed to transform your brand from concept 
                to market leader. Every solution is tailored to your unique vision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-32">
          <div className="container-premium">
            <div className="space-y-32">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container-premium text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-headline mb-6">
                Ready to Transform
                <br />
                <span className="italic">Your Brand?</span>
              </h2>
              <p className="text-body opacity-80 max-w-xl mx-auto mb-10">
                Let's discuss how our services can help achieve your business goals.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <service.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <span className="text-sm font-sans text-muted-foreground tracking-wide">
              {service.subtitle}
            </span>
            <h2 className="text-3xl font-serif font-medium">{service.title}</h2>
          </div>
        </div>

        <p className="text-body text-muted-foreground mb-8">
          {service.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <a 
          href="/contact" 
          className="inline-flex items-center gap-2 text-primary font-medium group"
        >
          Discuss This Service
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Image */}
      <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
        <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
