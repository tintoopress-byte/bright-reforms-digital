import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={schoolLogo} 
                alt="Bright Reformer Schools Logo" 
                className="h-16 w-auto object-contain"
              />
              <div>
                <h3 className="font-display text-lg leading-tight">Bright Reformer</h3>
                <p className="text-xs text-background/70">Schools</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Moulding Lives for Excellence. Building future leaders through quality education and character development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:08166338104"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  08166338104
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@brightreformerschools.com"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  info@brightreformerschools.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-background/70">
                  Bright Reformer Schools, Nigeria
                </span>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="font-semibold text-base mb-4">School Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-background/70">
                  <p>Monday - Friday</p>
                  <p className="text-background">8:00 AM - 3:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Bright Reformer Schools. All rights reserved.
            </p>
            <p className="text-sm text-background/60 italic">
              "Moulding Lives for Excellence"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
