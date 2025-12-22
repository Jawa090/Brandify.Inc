import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grain-overlay" />
      
      {/* Animated gradient orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-10 right-[5%] w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-pulse-soft"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "60%"]) }}
        className="absolute bottom-10 left-[2%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse-soft"
        initial={{ opacity: 0.3 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gold/10 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      
      {/* Decorative geometric shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="absolute top-[20%] right-[12%] hidden lg:block"
      >
        <div className="w-40 h-40 border-2 border-primary/15 rounded-3xl rotate-12 animate-float" />
        <div className="absolute inset-4 border border-primary/10 rounded-2xl rotate-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        className="absolute bottom-[25%] left-[8%] hidden lg:block"
      >
        <div className="w-24 h-24 bg-primary/8 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute -inset-2 border border-primary/5 rounded-full animate-pulse-soft" />
      </motion.div>

      {/* Floating sparkle accents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-[30%] left-[20%] hidden md:block"
      >
        <Sparkles className="w-6 h-6 text-gold animate-pulse-soft" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-[40%] right-[18%] hidden md:block"
      >
        <Sparkles className="w-4 h-4 text-primary/40 animate-bounce-subtle" />
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity, scale }} className="container-premium relative z-10 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-sans font-semibold tracking-[0.25em] uppercase bg-primary/5 text-primary rounded-full border border-primary/15 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Premium Creative Agency
            </span>
          </motion.div>

          {/* Main Headline with staggered reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-display-xl mb-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block"
            >
              We Craft Brands
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="block italic"
            >
              That <span className="relative inline-block">
                Inspire
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 8 C50 2, 150 2, 198 8"
                    stroke="hsl(38 50% 65%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.svg>
              </span>
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-subhead max-w-2xl mx-auto mb-14"
          >
            Transforming visionary ideas into compelling brands through strategic
            design, development, and creative storytelling that drives growth.
          </motion.p>

          {/* CTA Buttons with enhanced hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <a href="#contact" className="btn-primary group flex items-center gap-3 relative overflow-hidden">
              <span className="relative z-10">Start Your Brand</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#work" className="btn-secondary group">
              <span className="relative z-10">View Our Work</span>
            </a>
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
};

export default Hero;
