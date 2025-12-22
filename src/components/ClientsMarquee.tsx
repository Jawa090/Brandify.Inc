import { motion } from "framer-motion";

const clients = [
  "Forbes",
  "Vogue",
  "Bloomberg",
  "TechCrunch",
  "The Verge",
  "Fast Company",
  "Wired",
  "Entrepreneur",
  "Inc.",
  "Business Insider",
];

const ClientsMarquee = () => {
  return (
    <section className="py-16 border-y border-border/50 overflow-hidden">
      <div className="container-premium mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground"
        >
          Featured & Trusted By
        </motion.p>
      </div>
      
      <div className="relative">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee Container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex items-center gap-16"
              >
                <span className="text-2xl md:text-3xl font-serif font-medium text-foreground/20 hover:text-foreground/60 transition-colors duration-500 whitespace-nowrap cursor-default">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;