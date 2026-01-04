import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ value, suffix = "", duration = 2 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successfully launched brands"
  },
  {
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Across 12 countries"
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Of creative excellence"
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on feedback"
  },
];

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-primary/5" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-3 py-1 mb-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary bg-white/50 border border-white/20 rounded-full backdrop-blur-sm">
            Our Impact
          </span>
          <h2 className="text-display md:text-5xl lg:text-6xl mb-6 text-primary">
            Numbers That
            <br />
            <span className="italic text-muted-foreground/80 font-serif">Speak</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-primary/10 pt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group relative p-6"
            >
              {/* Number */}
              <div className="text-6xl md:text-7xl font-serif font-medium text-primary mb-4 tabular-nums relative inline-block">
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="absolute -top-2 -right-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-2xl font-serif">*</span>
              </div>

              {/* Label */}
              <h3 className="text-sm font-sans font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground/60 max-w-[150px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;