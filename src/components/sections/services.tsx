"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  GraduationCap, 
  Dumbbell, 
  Store, 
  User, 
  Layers, 
  RefreshCw, 
  Wrench,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const serviceList = [
    {
      icon: Building2,
      title: "Small Business Websites",
      description: "Get a professional multi-page website showcasing your services, company history, client testimonials, and a custom enquiry form.",
      badge: "Popular",
      accent: "from-indigo-500 to-blue-500",
      gridSpan: "lg:col-span-2",
      details: ["Services Directory", "Testimonials Showcase", "Contact Inquiry forms", "About Us timeline"]
    },
    {
      icon: GraduationCap,
      title: "Coaching Institutions",
      description: "Interactive websites displaying course list, faculty profiles, batches structure, and admissions details.",
      badge: "High Value",
      accent: "from-violet-500 to-purple-500",
      gridSpan: "lg:col-span-1",
      details: ["Course Directories", "Faculty Showcase"]
    },
    {
      icon: Dumbbell,
      title: "Gyms & Fitness Centers",
      description: "Beautiful landing pages with membership plans, trainer profiles, timing schedule, and WhatsApp booking links.",
      badge: "Fast Delivery",
      accent: "from-emerald-500 to-teal-500",
      gridSpan: "lg:col-span-1",
      details: ["Membership Plans", "WhatsApp Booking"]
    },
    {
      icon: Store,
      title: "Local Shops & E-Commerce",
      description: "Digital catalog websites for grocery, garments, gift shops, and boutique stores, complete with online ordering and WhatsApp catalog setup.",
      badge: "Local SEO",
      accent: "from-amber-500 to-orange-500",
      gridSpan: "lg:col-span-2",
      details: ["WhatsApp Catalog Link", "Simple Cart Checkout", "Product Image grid", "Local SEO setup"]
    },
    {
      icon: User,
      title: "Personal Brand Portfolios",
      description: "Clean websites for doctors, lawyers, content creators, and artists to establish credibility and capture high-paying leads.",
      badge: "Handcrafted",
      accent: "from-pink-500 to-rose-500",
      gridSpan: "lg:col-span-1",
      details: ["Resume & Bio", "Lead generation"]
    },
    {
      icon: Layers,
      title: "Landing Pages & Funnels",
      description: "Single-page conversion-focused layouts built to turn ad traffic (Google/Facebook Ads) into direct phone calls.",
      badge: "Startups",
      accent: "from-sky-500 to-indigo-500",
      gridSpan: "lg:col-span-1",
      details: ["Ad Campaign Ready", "One-Click Calls"]
    },
    {
      icon: RefreshCw,
      title: "Website Redesigning",
      description: "Convert your old, slow, and outdated website into a modern, responsive, and mobile-friendly design that actually gets customers.",
      badge: "Conversion Up",
      accent: "from-cyan-500 to-blue-500",
      gridSpan: "lg:col-span-1",
      details: ["Modern Tech Stack", "Loading Speed Fix"]
    },
    {
      icon: Wrench,
      title: "Website Maintenance & Care Plans",
      description: "Weekly file backups, loading speed checkups, content updates, theme plugins adjustments, and priority technical support.",
      badge: "Peace of Mind",
      accent: "from-emerald-500 to-green-500",
      gridSpan: "lg:col-span-3",
      details: ["Weekly Database Backups", "Monthly Speed & Security Checkups", "Uptime Server monitoring", "Direct Whatsapp Dev support", "Plugin Updates", "Text / Price changes support"]
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950/60 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-indigo-500/10 hover:bg-indigo-500/25 border-indigo-500/20 text-indigo-400 font-semibold px-3 py-1">
            Our Offerings
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Websites Custom-Built For Your Business Type
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            We don't believe in generic templates. Our designs are tailored to highlight your specific business offerings and convince visitors to take action.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className={service.gridSpan}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="group relative h-full bg-slate-900/35 backdrop-blur-md border border-slate-800/60 hover:border-slate-750 transition-all duration-500 glow-card flex flex-col justify-between overflow-hidden rounded-2xl hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6),0_0_20px_rgba(99,102,241,0.06)] hover:-translate-y-1">
                  <div>
                    {/* Top Decorative Color Accent Bar */}
                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${service.accent} opacity-80 group-hover:h-[3px] transition-all duration-300`} />

                    <CardHeader className="pt-7 px-6">
                      <div className="flex items-center justify-between mb-4">
                        {/* Glowing Icon Container */}
                        <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950 border border-slate-800/80 text-white shadow-inner">
                          <div className={`absolute -inset-1.5 bg-gradient-to-br ${service.accent} rounded-xl blur opacity-25 group-hover:opacity-60 transition-opacity duration-300`} />
                          <Icon className="relative h-5 w-5 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                        </div>
                        <Badge variant="outline" className="bg-slate-950/80 backdrop-blur-sm border-slate-800/80 text-[10px] text-slate-400 font-bold px-2.5 py-0.5 rounded-lg">
                          {service.badge}
                        </Badge>
                      </div>
                      <CardTitle className="font-heading text-lg font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-350 transition-all duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 px-6 pb-6">
                      <CardDescription className="text-slate-400 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>

                      {/* Dynamic Detail Lists inside Bento Slots */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.details.map((detail) => (
                          <span key={detail} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-850 text-[11px] text-slate-300 font-medium group-hover:border-slate-800 transition-colors duration-300">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                            <span>{detail}</span>
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
