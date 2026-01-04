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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-premium py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-8">
              <span className="text-2xl font-serif font-medium text-white tracking-tight">Brandify<span className="text-gold">.</span>Inc</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-60 mb-8 max-w-[260px]">
              Turning ideas into reality. We craft premium brands that inspire,
              engage, and drive growth for ambitious businesses worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-sm opacity-80 group hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/50 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>hello@brandify.inc</span>
              </div>
              <div className="flex items-center gap-4 text-sm opacity-80 group hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/50 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-primary hover:border-gold transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-8 text-gold">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-gold hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-8 text-gold">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-gold hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-8 text-gold">Stay Updated</h4>
            <p className="text-sm opacity-60 mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="space-y-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-full bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-gold/50 transition-colors placeholder:text-white/20"
                />
                <button className="px-6 py-3 bg-white text-primary rounded-r-full hover:bg-gold transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40 font-light tracking-wide">
          <p>© {new Date().getFullYear()} Brandify.Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;