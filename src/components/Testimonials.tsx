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
    <section className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase opacity-70 mb-4 block">
              Client Stories
            </span>
            <h2 className="text-headline">
              Trusted by
              <br />
              <span className="italic">Industry Leaders</span>
            </h2>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 opacity-30 mb-8" />

              {/* Testimonial Content */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-xl md:text-2xl font-serif leading-relaxed mb-10">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-lg">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-sm opacity-70">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-primary-foreground/20">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "bg-primary-foreground w-6"
                          : "bg-primary-foreground/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
