"use client";

import { Badge } from "@/components/ui/badge";
import { PhoneCall, MonitorPlay, CheckSquare, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: PhoneCall,
      title: "Free Consultation",
      description: "Book a call or message us on WhatsApp. Tell us about your business, the pages you need, and any special features you want. We'll recommend the ideal package.",
      color: "from-indigo-500 to-violet-500 text-indigo-400",
      delay: 0,
    },
    {
      number: "02",
      icon: MonitorPlay,
      title: "Custom Design Demo",
      description: "We don't write code blindly. Within 48 hours, we build and send you a working web preview of your homepage so you can see the layout, colors, and styling.",
      color: "from-violet-500 to-pink-500 text-violet-400",
      delay: 0.1,
    },
    {
      number: "03",
      icon: CheckSquare,
      title: "Review & Approval",
      description: "Request changes, refine headings, swap pictures, or add section details. Once you are 100% satisfied with the demo design, you approve the site layout.",
      color: "from-pink-500 to-rose-500 text-pink-400",
      delay: 0.2,
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Support",
      description: "We connect your custom domain, upload files to your host, test site speed, configure local Google SEO tags, and launch! Includes 30 days free support.",
      color: "from-emerald-500 to-teal-500 text-emerald-400",
      delay: 0.3,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-950/60 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge className="bg-indigo-500/10 border-indigo-500/20 text-indigo-400 font-semibold px-2.5 py-0.5">
            The Process
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            How We Get You Online In 4 Easy Steps
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Our step-by-step workflow is transparent and risk-free. You approve the homepage demo design before making your final payment.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-slate-800/80 transition-all duration-300 hover:border-slate-700/60 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: step.delay }}
              >
                {/* Connecting Line (Desktop only) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-[calc(100%-24px)] h-0.5 z-0 line-flow-active" />
                )}

                <div className="space-y-4 z-10 relative">
                  {/* Icon & Step Number */}
                  <div className="flex justify-between items-center">
                    <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100">
                      <Icon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <span className="font-heading font-black text-3xl text-slate-800 select-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-white text-lg tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Bottom Glow Accent */}
                <div className={`h-1.5 w-1/3 bg-gradient-to-r ${step.color} rounded-full mt-6`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
