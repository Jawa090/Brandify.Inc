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
          <div className="relative bg-primary rounded-[3rem] p-12 md:p-24 overflow-hidden text-center shadow-2xl shadow-primary/20">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-1.5 mb-8 text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-gold bg-white/5 rounded-full border border-white/10 backdrop-blur-md"
              >
                Start Your Journey
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-10 leading-[1.1] text-primary-foreground"
              >
                Let's Create Something
                <br />
                <span className="italic text-gold opacity-90">Extraordinary</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-primary-foreground/70 mb-14 max-w-xl mx-auto leading-relaxed"
              >
                Every great brand starts with a conversation. Tell us about your
                vision, and we'll show you how to make it unforgettable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <a
                  href="mailto:hello@brandify.inc"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-white text-primary px-8 text-sm font-medium transition-colors hover:bg-gold hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Let's Build Your Brand
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
