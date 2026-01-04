import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Brandify.Inc transformed our entire brand presence. Their strategic approach and creative execution exceeded every expectation. Our conversions increased by 300% within the first quarter.",
    author: "Sarah Mitchell",
    role: "CEO, Luxe Fashion",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    quote:
      "Working with Brandify was a game-changer. They understood our vision immediately and delivered a brand identity that truly represents who we are. Exceptional attention to detail.",
    author: "Michael Chen",
    role: "Founder, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    quote:
      "The product photography exceeded all expectations. Every shot tells a story. Our social engagement has tripled since launching the new visuals. Truly premium quality.",
    author: "Emma Rodriguez",
    role: "Marketing Director, Artisan Coffee",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Subtle Background Grain/Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-premium relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 mb-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold border border-gold/20 rounded-full">
              Client Stories
            </span>
            <h2 className="text-display md:text-5xl lg:text-6xl text-primary-foreground">
              Trusted by
              <br />
              <span className="italic text-gold font-serif">Industry Leaders</span>
            </h2>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-16">
              {/* Gold Quote Icon */}
              <div className="absolute top-10 left-10 opacity-20">
                <Quote className="w-16 h-16 text-gold" />
              </div>

              {/* Testimonial Content */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center"
              >
                <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed mb-10 text-primary-foreground/90">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full p-1 border border-gold/30">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].author}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-lg text-gold font-serif">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-sm opacity-60 uppercase tracking-widest font-sans mt-1">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10 max-w-xs mx-auto">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-primary transition-all duration-300 group"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`transition-all duration-500 rounded-full ${index === activeIndex
                          ? "bg-gold w-8 h-1"
                          : "bg-white/20 w-2 h-1 hover:bg-white/40"
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-primary transition-all duration-300 group"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
