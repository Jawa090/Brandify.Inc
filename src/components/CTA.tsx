import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding overflow-hidden" ref={ref}>
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background Card */}
          <div className="relative bg-card rounded-[2rem] p-12 md:p-20 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />

            {/* Grain Overlay */}
            <div className="absolute inset-0 grain-overlay rounded-[2rem]" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6 block"
              >
                Ready to Start?
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 leading-tight"
              >
                Let's Create Something
                <br />
                <span className="italic">Extraordinary Together</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-body text-muted-foreground mb-12 max-w-xl mx-auto"
              >
                Every great brand starts with a conversation. Tell us about your
                vision, and we'll show you how to make it unforgettable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="mailto:hello@brandify.inc"
                  className="btn-primary group flex items-center justify-center gap-2"
                >
                  Let's Build Your Brand
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:+1234567890"
                  className="btn-secondary flex items-center justify-center"
                >
                  Schedule a Call
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
