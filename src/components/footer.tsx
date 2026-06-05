import Link from "next/link";
import { Code2, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Small Business Websites", href: "#services" },
    { name: "Coaching Center Portals", href: "#services" },
    { name: "Gym & Fitness Websites", href: "#services" },
    { name: "E-Commerce Local Shops", href: "#services" },
    { name: "Personal Portfolios", href: "#services" },
    { name: "Landing Pages & Redesigns", href: "#services" },
  ];

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Pricing Packages", href: "#pricing" },
    { name: "Meet The Team", href: "#team" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact Developer", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-lg text-white">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                VMC Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">India</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We help local shops, coaching institutes, gyms, startups, and personal brands look big online. Affordable websites with professional design, fast delivery, and launch support.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              🇮🇳 Empowering Indian Small Businesses
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-4">Contact Details</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
               <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium">Send Email</p>
                  <Link href="mailto:hello@vmctech.in" className="hover:text-indigo-400 transition-colors">
                    hello@vmctech.in
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium">Location</p>
                  <span>Kolkata, India (Serving Worldwide)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {currentYear} VMC Tech India. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1">
            Made with <span className="text-rose-500">❤️</span> for Indian Small Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
