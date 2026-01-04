import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Elements - Strict Brand Colors */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-20" />

      {/* Subtle Brand Blobs */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Main Content */}
      <motion.div style={{ opacity, scale }} className="container-premium relative z-10 pt-20 pb-16">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 text-[10px] font-sans font-medium tracking-[0.25em] uppercase bg-secondary/50 backdrop-blur-sm text-foreground/80 rounded-full border border-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Est. 2024
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-display-xl mb-8 relative z-20">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="block text-foreground"
              >
                Elevating Brands
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="block italic text-muted-foreground/80 font-serif"
              >
                Through Design
              </motion.span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-subhead max-w-2xl mx-auto mb-12 text-muted-foreground leading-relaxed"
          >
            We define the visual language of tomorrow. A digital sanctuary where strategy meets pure aesthetic excellence.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a href="#work" className="btn-primary group min-w-[180px]">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Our Work
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            <a href="#contact" className="group px-8 py-4 rounded-full font-sans font-medium hover:bg-secondary/50 transition-colors duration-300">
              <span className="flex items-center gap-2 text-foreground/80 group-hover:text-foreground">
                Let's Talk
              </span>
            </a>
          </motion.div>

          {/* Decorative Floating Elements - Strictly Brand Colors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="absolute top-1/3 left-10 hidden xl:block pointer-events-none opacity-20"
          >
            <Sparkles className="w-12 h-12 text-gold animate-pulse-soft" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 2 }}
            className="absolute bottom-1/3 right-10 hidden xl:block pointer-events-none opacity-20"
          >
            <div className="w-24 h-24 border border-primary/20 rounded-full animate-spin-slow dashed-border" />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
