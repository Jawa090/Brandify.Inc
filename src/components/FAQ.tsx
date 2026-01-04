import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What makes Brandify.Inc different from other agencies?",
    answer: "We combine strategic thinking with exceptional design execution. Our boutique approach means you work directly with senior creatives, ensuring every project receives the attention and expertise it deserves. We don't just create beautiful designs—we build brands that drive measurable business results."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A brand identity typically takes 4-6 weeks, while a full website development ranges from 6-12 weeks. We provide detailed timelines during our discovery phase and keep you informed throughout the entire process."
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely. We believe every brand deserves premium creative work regardless of size. We offer flexible packages and phased approaches that can scale with your growth. Some of our most rewarding projects have been helping emerging brands establish their market presence."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer project-based pricing tailored to your specific needs and goals. After an initial consultation, we provide a detailed proposal outlining scope, deliverables, and investment. We believe in transparency—no hidden fees, no surprises."
  },
  {
    question: "How do we get started?",
    answer: "Simply reach out through our contact form or email. We'll schedule a discovery call to understand your vision, goals, and challenges. From there, we'll prepare a customized proposal. Our process is collaborative and designed to bring your brand vision to life."
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-border/50 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg md:text-xl font-serif font-medium pr-8 group-hover:text-primary transition-colors">
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary text-primary-foreground border-primary' : 'group-hover:border-primary'}`}>
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-body text-muted-foreground pb-6 pr-16">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-secondary/10" ref={ref}>
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary/60 border border-primary/20 rounded-full">
              QA
            </span>
            <h2 className="text-display md:text-5xl lg:text-6xl mb-6 text-primary">
              Frequently
              <br />
              <span className="italic font-serif text-muted-foreground/80">Asked</span>
            </h2>
            <p className="text-body text-muted-foreground mb-10 leading-relaxed max-w-sm">
              Everything you need to know about working with us. We believe in transparency and clear communication from day one.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold tracking-wide text-primary hover:text-gold transition-colors group"
            >
              Have more questions? Let's talk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;