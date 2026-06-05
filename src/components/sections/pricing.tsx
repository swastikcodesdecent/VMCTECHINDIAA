"use client";

import Link from "next/link";
import { Check, Info } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Pricing() {
  const plans = [
    {
      name: "Landing Page Website",
      price: "₹2,999",
      subtext: "onwards / one-time",
      description: "Perfect for single product campaigns, event launches, and local shop landing pages.",
      features: [
        "Single Page Conversion Layout",
        "Up to 5 Content Sections",
        "100% Mobile Responsive",
        "Direct WhatsApp Enquiry Button",
        "Working Lead Contact Form",
        "Google Maps & Call Integration",
        "Fast 48-Hour Delivery",
      ],
      cta: "Get Landing Page",
      popular: false,
      color: "border-slate-800",
    },
    {
      name: "Business Website",
      price: "₹4,999",
      subtext: "onwards / one-time",
      description: "Ideal for gyms, coaching institutes, startups, clinics, and professional services.",
      features: [
        "Up to 5 Fully Designed Pages",
        "Custom Layout (No Templates)",
        "Mobile, Tablet & Desktop Friendly",
        "Services Showcase & FAQ Accordion",
        "Interactive Inquiry / Lead Form",
        "Social Media & Google Map Setup",
        "SEO-Ready Structure",
        "30 Days Post-Launch Support",
      ],
      cta: "Get Business Website",
      popular: true,
      color: "border-indigo-500/50 shadow-indigo-950/20",
    },
    {
      name: "Website Redesign",
      price: "₹6,999",
      subtext: "onwards / one-time",
      description: "For existing businesses looking to modernise their slow, outdated websites.",
      features: [
        "Complete UI/UX Revamp",
        "Content Migration & Cleanup",
        "Advanced Loading Speed Optimization",
        "Mobile-First Layout Migration",
        "Google Analytics Integration",
        "Retention of Existing SEO Ranks",
        "15 Days Post-Launch Support",
      ],
      cta: "Start Redesign",
      popular: false,
      color: "border-slate-800",
    },
    {
      name: "Maintenance & Support",
      price: "₹999",
      subtext: "/ month onwards",
      description: "For busy business owners who want their website managed by professionals.",
      features: [
        "Weekly Files & Database Backups",
        "Monthly Speed & Security Checkups",
        "Content / Price updates (up to 3hrs/mo)",
        "Server Uptime Monitoring",
        "Domain & Hosting Configuration Support",
        "Direct WhatsApp / Call Dev Support",
        "Cancel Subscription Anytime",
      ],
      cta: "Subscribe Support",
      popular: false,
      color: "border-slate-800",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950/60 relative">
      <div className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-emerald-500/10 border-emerald-500/20 text-emerald-400 font-semibold px-2.5 py-0.5">
            Transparent Pricing
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Simple Plans with No Hidden Charges
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Choose the package that fits your business needs. Host your website on your own server or let us help you set it up.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, index) => {
            return (
              <motion.div
                key={plan.name}
                className="h-full flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card 
                  className={`relative flex flex-col justify-between w-full h-full bg-slate-900/35 backdrop-blur-md border transition-all duration-300 ${plan.color} ${
                    plan.popular 
                      ? "ring-1 ring-indigo-500/40 shadow-2xl scale-[1.02] md:scale-[1.03] lg:scale-[1.04] border-beam-active" 
                      : "hover:border-slate-750"
                  }`}
                >
                  {plan.popular && (
                    <>
                      {/* Ambient card back-glow */}
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-40 z-[-1] pointer-events-none" />
                      
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-emerald-500 text-white font-extrabold px-3 py-1 shadow-lg shadow-indigo-950/40 border-0 rounded-full text-[9px] uppercase tracking-wider">
                        Most Popular
                      </Badge>
                    </>
                  )}

                  <CardHeader className="pt-8 px-6 text-left">
                    <CardTitle className="font-heading font-bold text-white text-xl tracking-tight">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-xs mt-1 leading-relaxed min-h-[32px]">
                      {plan.description}
                    </CardDescription>
                    <div className="pt-4 flex items-baseline gap-1.5 border-b border-slate-800/60 pb-4">
                      <span className="font-heading font-extrabold text-3xl text-white tracking-tight">{plan.price}</span>
                      <span className="text-slate-400 text-xs font-semibold">{plan.subtext}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow pt-2 px-6">
                    <ul className="space-y-3 text-left">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-2.5 items-start text-xs text-slate-300">
                          {/* Premium Check Circle Indicator */}
                          <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-6 pb-8 px-6">
                    <Link 
                      href={`#contact?plan=${encodeURIComponent(plan.name)}`}
                      className={cn(
                        buttonVariants({ 
                          variant: plan.popular ? "default" : "outline" 
                        }),
                        `w-full py-5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center h-auto text-sm`,
                        plan.popular 
                          ? "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow shadow-indigo-950/40 border-0 hover:scale-[1.01] active:scale-[0.99] cursor-pointer" 
                          : "bg-slate-950 border border-slate-800 text-slate-200 hover:bg-slate-900 hover:text-white hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                      )}
                    >
                      {plan.cta}
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* GST Note */}
        <div className="mt-12 flex justify-center items-center gap-2 text-slate-500 text-xs max-w-xl mx-auto text-center">
          <Info className="h-4 w-4 text-slate-600 flex-shrink-0" />
          <p>
            Hosting and domain costs are not included in the one-time project fee. We assist with configuration and account setup on your behalf for free.
          </p>
        </div>
      </div>
    </section>
  );
}
