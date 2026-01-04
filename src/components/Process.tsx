import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Research & Strategy",
    description:
      "Deep dive into your market, audience, and competitors. We uncover insights that inform every creative decision.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Creation",
    description:
      "Translating strategy into stunning visuals. Iterative design process ensuring pixel-perfect execution.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Development & Execution",
    description:
      "Building robust digital experiences. Cutting-edge technology meets creative excellence.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Launch & Growth",
    description:
      "Strategic deployment and ongoing optimization. Continuous refinement for maximum impact.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-3 py-1 mb-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary/60 border border-primary/20 rounded-full">
            Our Process
          </span>
          <h2 className="text-display md:text-5xl lg:text-6xl mb-6 text-primary">
            A Proven Path to
            <br />
            <span className="italic font-serif text-muted-foreground/80">Brand Success</span>
          </h2>
          <p className="text-body text-muted-foreground">
            Our refined methodology ensures consistent results, transforming your
            vision into a powerful market presence.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-[28%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent dashed-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative bg-background/50 backdrop-blur-sm rounded-[2rem] p-8 text-center h-full border border-primary/5 hover:border-gold/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Number Badge */}
                  <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-background border border-primary/10 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:border-gold/50 transition-all duration-500">
                    <span className="font-serif text-xl font-medium text-primary group-hover:text-gold transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-gold transition-all duration-500">
                    <step.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-medium mb-4 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed opacity-80">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
