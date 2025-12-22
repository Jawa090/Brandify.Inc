import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Dribbble, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Graphic Design", href: "/services" },
    { name: "Web Development", href: "/services" },
    { name: "Content Creation", href: "/services" },
    { name: "Product Photography", href: "/services" },
    { name: "Brand Promotion", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "Careers", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container-premium py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="Brandify.Inc"
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-sm leading-relaxed opacity-80 mb-8 max-w-xs">
              Turning ideas into reality. We craft premium brands that inspire,
              engage, and drive growth for ambitious businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="w-4 h-4" />
                <span>hello@brandify.inc</span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4" />
                <span>New York, NY 10001</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 relative">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 relative">
              Stay Updated
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <p className="text-sm opacity-80 mb-6">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-primary-foreground/10 border border-primary-foreground/20 text-sm focus:outline-none focus:border-accent transition-colors"
                />
                <button className="px-4 py-2 bg-accent text-primary rounded-r-lg hover:bg-accent/90 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity group"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} Brandify.Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm opacity-60">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;