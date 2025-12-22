import { Helmet } from "react-helmet-async";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Rocket, BarChart3, MessageSquare, Lightbulb, Palette, Code, TestTube, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mainSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Research",
    subtitle: "Understanding Your Vision",
    description: "Every great brand starts with deep understanding. We immerse ourselves in your world—your business, your audience, your competition, and your aspirations.",
    details: [
      "Comprehensive brand audit",
      "Market & competitor analysis",
      "Target audience research",
      "Stakeholder interviews",
      "Goals & objectives alignment"
    ],
    duration: "1-2 Weeks",
    color: "from-primary/20 to-primary/5"
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Concept",
    subtitle: "Crafting the Blueprint",
    description: "Armed with insights, we develop a strategic foundation that guides every creative decision. This is where your brand's unique positioning takes shape.",
    details: [
      "Brand positioning strategy",
      "Creative direction development",
      "Concept exploration",
      "Mood boards & visual direction",
      "Strategic recommendations"
    ],
    duration: "1-2 Weeks",
    color: "from-accent/30 to-accent/10"
  },
  {
    number: "03",
    icon: Palette,
    title: "Design & Creation",
    subtitle: "Bringing Ideas to Life",
    description: "This is where magic happens. Our designers translate strategy into stunning visuals through an iterative process of creation and refinement.",
    details: [
      "Visual identity design",
      "UI/UX design",
      "Content creation",
      "Photography direction",
      "Iterative refinement"
    ],
    duration: "2-4 Weeks",
    color: "from-primary/20 to-primary/5"
  },
  {
    number: "04",
    icon: Code,
    title: "Development",
    subtitle: "Building with Precision",
    description: "Our development team brings designs to life with clean, efficient code. We build robust digital experiences that perform flawlessly across all platforms.",
    details: [
      "Frontend development",
      "Backend integration",
      "CMS implementation",
      "Performance optimization",
      "Security implementation"
    ],
    duration: "3-6 Weeks",
    color: "from-accent/30 to-accent/10"
  },
  {
    number: "05",
    icon: TestTube,
    title: "Testing & Refinement",
    subtitle: "Perfecting Every Detail",
    description: "Before launch, we rigorously test every element. User testing, QA reviews, and performance checks ensure your brand launches flawlessly.",
    details: [
      "Quality assurance testing",
      "User acceptance testing",
      "Performance testing",
      "Cross-browser compatibility",
      "Final refinements"
    ],
    duration: "1-2 Weeks",
    color: "from-primary/20 to-primary/5"
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch & Beyond",
    subtitle: "Making Your Mark",
    description: "Launch day is just the beginning. We ensure a smooth deployment and provide ongoing support to help your brand continue to grow and evolve.",
    details: [
      "Strategic launch planning",
      "Deployment & go-live",
      "Training & documentation",
      "Ongoing support",
      "Performance monitoring"
    ],
    duration: "Ongoing",
    color: "from-accent/30 to-accent/10"
  }
];

const principles = [
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and open dialogue at every step."
  },
  {
    icon: Sparkles,
    title: "Iterative Excellence",
    description: "We refine until perfect, incorporating your feedback throughout."
  },
  {
    icon: BarChart3,
    title: "Data-Informed Decisions",
    description: "Every creative choice is backed by research and strategy."
  }
];

const ProcessPage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Helmet>
        <title>How We Work | Brandify.Inc - Our Creative Process</title>
        <meta name="description" content="Discover Brandify.Inc's proven 6-step creative process that transforms ideas into successful brands. From discovery to launch and beyond." />
      </Helmet>

      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
          {/* Background Elements */}
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl" />

          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block px-5 py-2 text-xs font-sans font-semibold tracking-[0.2em] uppercase bg-primary/5 text-primary rounded-full border border-primary/10 mb-8"
              >
                Our Process
              </motion.span>

              <h1 className="text-display mb-8">
                A Proven Path to
                <br />
                <span className="italic">Brand Excellence</span>
              </h1>
              <p className="text-subhead max-w-2xl mx-auto">
                Our refined methodology ensures consistent results, transforming 
                your vision into a powerful market presence through six strategic phases.
              </p>
            </motion.div>

            {/* Process Overview Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-20"
            >
              {mainSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-2xl p-4 text-center group hover:shadow-lg transition-all duration-500"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-serif font-medium text-primary block mb-1">
                    {step.number}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {step.title.split(' ')[0]}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Detailed Process Steps */}
        <section ref={containerRef} className="py-24 relative">
          <div className="container-premium">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-primary origin-top"
              />
            </div>

            <div className="space-y-32">
              {mainSteps.map((step, index) => (
                <ProcessStep key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase opacity-70 mb-4 block">
                Our Approach
              </span>
              <h2 className="text-headline">
                Principles That
                <br />
                <span className="italic">Define Our Work</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                    <principle.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-3">
                    {principle.title}
                  </h3>
                  <p className="opacity-80">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Visual */}
        <section className="py-24 bg-secondary/30">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-headline mb-6">
                Typical Project
                <br />
                <span className="italic">Timeline</span>
              </h2>
              <p className="text-body text-muted-foreground">
                Most projects are completed within 8-12 weeks, depending on scope and complexity.
              </p>
            </motion.div>

            {/* Timeline Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="h-4 bg-card rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-primary via-primary/80 to-accent rounded-full"
                />
              </div>
              
              {/* Week Markers */}
              <div className="flex justify-between mt-4">
                {["Week 1-2", "Week 3-4", "Week 5-6", "Week 7-8", "Week 9-10", "Launch"].map((week, index) => (
                  <motion.div
                    key={week}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-3 h-3 mx-auto rounded-full bg-primary mb-2" />
                    <span className="text-xs text-muted-foreground">{week}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-card rounded-[2rem] p-12 md:p-20 overflow-hidden text-center"
            >
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
                  Ready to Start
                  <br />
                  <span className="italic">Your Journey?</span>
                </h2>
                <p className="text-body text-muted-foreground mb-10">
                  Every great brand transformation begins with a conversation. 
                  Let's discuss how our process can work for you.
                </p>
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

const ProcessStep = ({ step, index }: { step: typeof mainSteps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Content */}
      <div className={isEven ? 'lg:order-1 lg:text-right' : 'lg:order-2 lg:text-left'}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`flex items-center gap-4 mb-6 ${isEven ? 'lg:justify-end' : ''}`}>
            <span className="text-6xl font-serif font-medium text-primary/20">
              {step.number}
            </span>
          </div>

          <span className="text-sm font-sans tracking-wide text-muted-foreground block mb-2">
            {step.subtitle}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            {step.title}
          </h3>
          <p className="text-body text-muted-foreground mb-8">
            {step.description}
          </p>

          <div className={`inline-block px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8`}>
            Duration: {step.duration}
          </div>
        </motion.div>
      </div>

      {/* Card */}
      <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`relative overflow-hidden bg-gradient-to-br ${step.color} bg-card rounded-3xl p-8`}
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
            <step.icon className="w-8 h-8 text-primary" />
          </div>

          {/* Deliverables */}
          <h4 className="text-sm font-sans font-semibold tracking-wide uppercase text-muted-foreground mb-4">
            Key Activities
          </h4>
          <ul className="space-y-3">
            {step.details.map((detail, i) => (
              <motion.li
                key={detail}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground">{detail}</span>
              </motion.li>
            ))}
          </ul>

          {/* Decorative number */}
          <span className="absolute -bottom-8 -right-4 text-[120px] font-serif font-medium text-primary/5 leading-none">
            {step.number}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProcessPage;
