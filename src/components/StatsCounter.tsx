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
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      
      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Our Impact
          </span>
          <h2 className="text-headline mb-6">
            Numbers That
            <br />
            <span className="italic">Speak</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stats-card text-center group"
            >
              {/* Number */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground mb-4 tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <h3 className="text-lg font-serif font-medium mb-2 group-hover:text-primary transition-colors">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-gold group-hover:w-1/2 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;