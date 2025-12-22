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
    <section id="process" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Our Process
          </span>
          <h2 className="text-headline mb-6">
            A Proven Path to
            <br />
            <span className="italic">Brand Success</span>
          </h2>
          <p className="text-body text-muted-foreground">
            Our refined methodology ensures consistent results, transforming your
            vision into a powerful market presence.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative bg-card rounded-3xl p-8 text-center h-full">
                  {/* Number Badge */}
                  <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6">
                    <span className="font-serif text-xl font-medium text-primary">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-medium mb-4">
                    {step.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
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
