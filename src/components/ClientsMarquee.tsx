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
    <section className="py-12 border-y border-primary/5 bg-secondary/20 overflow-hidden">
      <div className="container-premium mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground/70"
        >
          Featured & Trusted By
        </motion.p>
      </div>

      <div className="relative">
        {/* Soft Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee Container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-20 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex items-center"
              >
                <span className="text-3xl md:text-4xl font-serif italic text-primary/20 hover:text-primary/40 transition-colors duration-500 whitespace-nowrap cursor-default">
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