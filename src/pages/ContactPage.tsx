import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@brandify.inc",
    description: "For general inquiries"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Creative Avenue",
    description: "New York, NY 10001"
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Fri",
    description: "9:00 AM - 6:00 PM EST"
  }
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" }
];

const services = [
  "Brand Identity",
  "Web Development",
  "Content Creation",
  "Product Photography",
  "Brand Promotion",
  "Other"
];

const ContactPage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Brandify.Inc - Let's Work Together</title>
        <meta name="description" content="Get in touch with Brandify.Inc. Let's discuss how we can transform your brand and create something extraordinary together." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6 block">
                Contact Us
              </span>
              <h1 className="text-display mb-8">
                Let's Create
                <br />
                <span className="italic">Together</span>
              </h1>
              <p className="text-subhead max-w-2xl mx-auto">
                Every great brand starts with a conversation. Tell us about your 
                vision, and let's explore how we can bring it to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="pb-16">
          <div className="container-premium">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-500"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-medium mb-1">{info.title}</h3>
                  <p className="text-lg font-serif text-primary">{info.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-serif font-medium mb-2">
                  Start a Project
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </motion.div>

              {/* Info Side */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Map Placeholder */}
                <div className="aspect-square lg:aspect-auto lg:h-[400px] rounded-3xl overflow-hidden bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                    alt="Office Location"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quick Info */}
                <div className="relative bg-card rounded-3xl p-8">
                  <h3 className="text-xl font-serif font-medium mb-4">
                    Prefer to Email Directly?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    For quick inquiries or to send us your project brief directly:
                  </p>
                  <a
                    href="mailto:hello@brandify.inc"
                    className="inline-flex items-center gap-2 text-primary font-medium group"
                  >
                    hello@brandify.inc
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Social Links */}
                <div className="relative bg-card rounded-3xl p-8">
                  <h3 className="text-xl font-serif font-medium mb-4">
                    Follow Our Journey
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Stay updated with our latest work and behind-the-scenes content.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-headline mb-6">
                Frequently Asked
                <br />
                <span className="italic">Questions</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What is your typical project timeline?",
                  a: "Most projects are completed within 8-12 weeks, depending on scope. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  q: "How do you handle project communication?",
                  a: "We provide regular updates via your preferred channel—email, Slack, or scheduled calls. You'll always know exactly where your project stands."
                },
                {
                  q: "Do you work with international clients?",
                  a: "Absolutely! We work with brands worldwide and have systems in place to manage time zones and remote collaboration effectively."
                },
                {
                  q: "What if I need changes after project completion?",
                  a: "We offer ongoing support packages and are always here to help your brand evolve. Post-launch revisions are a normal part of our process."
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-card rounded-3xl p-8"
                >
                  <h3 className="text-lg font-serif font-medium mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
